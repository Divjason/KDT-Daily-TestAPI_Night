// ============================================
// CONFIG
// ============================================

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyTeqYSyGLz2h7KiJUufj0SJ7ywBoOU2PZaVm58I6ifsyWFx6PsuR2ZlDcjsGUZgRQw/exec";

// ============================================
// CURRENT TEST
// ============================================

const params = new URLSearchParams(window.location.search);

const testId = params.get("test") || getTodayString();

// ============================================
// DOM
// ============================================

const testTitle = document.querySelector("#testTitle");

const testSubtitle = document.querySelector("#testSubtitle");

const testMeta = document.querySelector("#testMeta");

const questionContainer = document.querySelector("#questionContainer");

const quizForm = document.querySelector("#quizForm");

const submitButton = document.querySelector("#submitButton");

const statusMessage = document.querySelector("#statusMessage");

// ============================================
// LOAD QUESTION FILE
// ============================================

loadQuestionFile(testId);

function loadQuestionFile(date) {
  const script = document.createElement("script");

  script.src = `./questions/${date}.js`;

  script.onload = () => {
    if (!window.TEST_DATA) {
      showLoadError();

      return;
    }

    renderTest(window.TEST_DATA);
  };

  script.onerror = () => {
    showLoadError();
  };

  document.body.appendChild(script);
}

// ============================================
// RENDER
// ============================================

function renderTest(test) {
  document.title = `${test.title} | Daily Test`;

  testTitle.textContent = test.title;

  testSubtitle.textContent = test.subtitle;

  const multipleCount = test.questions.filter(
    (q) => q.type === "multiple",
  ).length;

  const subjectiveCount = test.questions.filter(
    (q) => q.type === "subjective",
  ).length;

  const totalScore = test.questions.reduce((sum, q) => sum + q.score, 0);

  testMeta.innerHTML = `

    <span>
      ${test.id}
    </span>

    <span>
      총 ${test.questions.length}문항
    </span>

    <span>
      객관식 ${multipleCount}
    </span>

    <span>
      주관식 ${subjectiveCount}
    </span>

    <span>
      ${totalScore}점
    </span>

  `;

  questionContainer.innerHTML = "";

  test.questions.forEach((question, index) => {
    const card = createQuestionCard(question, index);

    questionContainer.appendChild(card);
  });
}

// ============================================
// QUESTION CARD
// ============================================

function createQuestionCard(question, index) {
  const article = document.createElement("article");

  article.className = "question-card";

  const questionTypeLabel = question.type === "multiple" ? "객관식" : "주관식";

  let html = `

    <div
      class="question-header"
    >

      <span
        class="question-number"
      >
        Q${index + 1}
      </span>

      <span
        class="question-badge"
      >
        ${questionTypeLabel}
        ·
        ${question.score}점
      </span>

    </div>

    <h3>
      ${escapeHTML(question.question)}
    </h3>

  `;

  if (question.scenario) {
    html += `

      <div
        class="scenario"
      >
        ${escapeHTML(question.scenario)}
      </div>

    `;
  }

  if (question.code) {
    html += `

      <pre><code>${escapeHTML(question.code)}</code></pre>

    `;
  }

  if (question.type === "multiple") {
    html += createMultipleChoice(question);
  }

  if (question.type === "subjective") {
    html += createSubjective(question);
  }

  article.innerHTML = html;

  return article;
}

// ============================================
// MULTIPLE CHOICE
// ============================================

function createMultipleChoice(question) {
  const optionsHTML = question.options
    .map(
      (option, index) => `

        <label
          class="option"
        >

          <input
            type="radio"

            name="${question.id}"

            value="${index + 1}"
          />

          <span>
            ${index + 1}.
            ${escapeHTML(option)}
          </span>

        </label>

      `,
    )
    .join("");

  return `

    <div
      class="options"
    >

      ${optionsHTML}

    </div>

  `;
}

// ============================================
// SUBJECTIVE
// ============================================

function createSubjective(question) {
  return `

    <textarea

      name="${question.id}"

      placeholder="${escapeHTML(question.placeholder || "답안을 작성하세요.")}"

    ></textarea>

  `;
}

// ============================================
// SUBMIT
// ============================================

quizForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!window.TEST_DATA) {
    alert("문제 데이터가 없습니다.");

    return;
  }

  const studentId = document.querySelector("#studentId").value.trim();

  const studentName = document.querySelector("#studentName").value.trim();

  if (!studentId || !studentName) {
    alert("학생번호와 이름을 입력해주세요.");

    return;
  }

  const answers = {};

  for (const question of window.TEST_DATA.questions) {
    if (question.type === "multiple") {
      const selected = document.querySelector(
        `input[name="${question.id}"]:checked`,
      );

      if (!selected) {
        alert(`${question.id.toUpperCase()}에 답해주세요.`);

        return;
      }

      answers[question.id] = selected.value;
    } else {
      const textarea = document.querySelector(`[name="${question.id}"]`);

      const answer = textarea.value.trim();

      if (!answer) {
        alert(`${question.id.toUpperCase()}에 답해주세요.`);

        return;
      }

      answers[question.id] = answer;
    }
  }

  const confirmSubmit = confirm(
    `${studentName} 학생의 답안을 제출할까요?\n제출 후 수정할 수 없습니다.`,
  );

  if (!confirmSubmit) {
    return;
  }

  const payload = {
    testId: window.TEST_DATA.id,

    studentId: studentId,

    studentName: studentName,

    ...answers,
  };

  submitButton.disabled = true;

  submitButton.textContent = "제출 중...";

  statusMessage.textContent = "답안을 저장하고 있습니다.";

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",

      mode: "no-cors",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams(payload),
    });

    submitButton.textContent = "제출 완료";

    statusMessage.textContent = "답안이 제출되었습니다.";

    quizForm.querySelectorAll("input, textarea").forEach((element) => {
      element.disabled = true;
    });

    alert("제출이 완료되었습니다.");
  } catch (error) {
    console.error(error);

    submitButton.disabled = false;

    submitButton.textContent = "다시 제출하기";

    statusMessage.textContent = "제출 중 오류가 발생했습니다.";

    alert("제출에 실패했습니다.");
  }
});

// ============================================
// UTIL
// ============================================

function getTodayString() {
  const today = new Date();

  const year = today.getFullYear();

  const month = String(today.getMonth() + 1).padStart(2, "0");

  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showLoadError() {
  testTitle.textContent = "Daily Test";

  testSubtitle.textContent = "해당 날짜의 문제가 없습니다.";

  questionContainer.innerHTML = `

    <article
      class="question-card"
    >

      <h3>
        문제를 찾을 수 없습니다.
      </h3>

      <p>
        questions/${testId}.js 파일을 확인해주세요.
      </p>

    </article>

  `;

  submitButton.disabled = true;
}
