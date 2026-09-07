window.TEST_DATA = {
  id: "2026-09-08",

  title: "9/8 Daily Test",

  subtitle: "ERD · Data Modeling · SQL · 3C · STP",

  description:
    "ERD → Data Modeling → SQL → 3C → Segmentation → Targeting → Positioning",

  questions: [
    {
      id: "q1",

      type: "multiple",

      score: 8,

      question:
        "다음 중 ERD(Entity Relationship Diagram)에 대한 설명으로 가장 적절한 것은?",

      options: [
        "SQL 실행 결과를 그래프로 표현한 것이다.",

        "Database의 Entity와 Entity 사이의 Relationship을 시각적으로 표현한 것이다.",

        "고객을 구매금액에 따라 분류하는 마케팅 분석 방법이다.",

        "Database Server의 성능을 측정하는 Diagram이다.",
      ],
    },

    {
      id: "q2",

      type: "multiple",

      score: 8,

      question:
        "Sakila의 Customer와 Rental을 설명한 내용 중 올바르지 않은 것은?",

      scenario:
        "Customer 1명이 여러 번 Rental할 수 있으며, customer_id를 통해 두 Entity가 연결된다고 가정합니다.",

      options: [
        "Customer는 Entity로 볼 수 있다.",

        "customer_id는 Customer의 Attribute가 될 수 있다.",

        "Customer와 Rental은 1:N Relationship으로 볼 수 있다.",

        "Rental은 물리적인 사물이 아니므로 Entity가 될 수 없다.",
      ],
    },

    {
      id: "q3",

      type: "multiple",

      score: 8,

      question:
        "한 명의 Customer가 여러 개의 Rental Record를 가질 수 있을 때 Customer와 Rental 사이의 Cardinality로 가장 적절한 것은?",

      options: [
        "1:1",

        "1:N",

        "M:N만 가능",

        "Relationship을 만들 수 없다.",
      ],
    },

    {
      id: "q4",

      type: "multiple",

      score: 8,

      question: "3C Analysis의 구성으로 올바른 것은?",

      options: [
        "Company / Conversion / Customer",

        "Customer / Content / Conversion",

        "Company / Customer / Competitor",

        "Customer / Campaign / Competitor",
      ],
    },

    {
      id: "q5",

      type: "multiple",

      score: 8,

      question:
        "다음 중 Sakila 내부 Database와 SQL만으로 확인하기 가장 어려운 정보는?",

      options: [
        "Customer별 Rental 횟수",

        "Customer별 총 Payment 금액",

        "Netflix의 현재 가격 정책",

        "Category별 Film 수",
      ],
    },

    {
      id: "q6",

      type: "multiple",

      score: 8,

      question:
        "Customer를 Rental 횟수에 따라 Heavy / Medium / Light로 나누려고 할 때 가장 적절한 설명은?",

      options: [
        "마케터가 Business Rule을 정의하고 SQL의 CASE WHEN 등을 사용해 실제 Customer를 분류할 수 있다.",

        "MySQL이 Heavy / Medium / Light 기준을 자동으로 결정한다.",

        "ERD가 Customer의 Segment를 자동으로 결정한다.",

        "DROP TABLE을 사용하면 Customer Segment가 자동 생성된다.",
      ],
    },

    {
      id: "q7",

      type: "subjective",

      score: 12,

      question:
        "마케터 또는 데이터 분석가가 SQL 작성 전에 ERD를 확인하면 좋은 이유를 2~3문장으로 설명하세요.",

      scenario:
        "답안에는 Entity, Relationship, SQL이라는 단어를 모두 포함해주세요.",

      placeholder:
        "Entity와 Relationship을 확인하는 것이 SQL 분석에 어떤 도움을 주는지 작성하세요.",
    },

    {
      id: "q8",

      type: "subjective",

      score: 12,

      question:
        "현재 Problem Hypothesis를 기준으로 가장 먼저 Targeting하고 싶은 Segment를 선택하고 그 이유를 설명하세요.",

      scenario:
        "Problem Hypothesis: First Rental 이후 Repeat Rental로 충분히 연결되지 않는 것이 성장 저해 요인일 가능성이 있다. Candidate: Heavy User / High-value Customer / First Rental 이후 재이용이 낮은 Customer / Genre Loyalist. Problem Fit과 Actionability 관점을 포함하세요.",

      placeholder:
        "선택한 Segment / Problem Fit / Actionability 관점의 이유를 작성하세요.",
    },

    {
      id: "q9",

      type: "subjective",

      score: 14,

      question:
        "아래 SQL Query의 의미를 마케팅 관점에서 해석하고 활용 방법을 작성하세요.",

      code: `SELECT
    customer_id,
    COUNT(*) AS rental_count
FROM rental
GROUP BY customer_id
HAVING COUNT(*) <= 2;`,

      scenario:
        "① 어떤 Customer를 찾는 Query인지 ② STP의 어떤 단계에 활용할 수 있는지 ③ 추출된 Customer에게 고려할 Marketing Action 1개를 작성하세요.",

      placeholder:
        "① Customer 의미 ② STP 단계 ③ 구체적인 Marketing Action을 작성하세요.",
    },

    {
      id: "q10",

      type: "subjective",

      score: 14,

      question:
        "Sakila Marketing Team의 신입 마케터라고 가정하고 Target Customer가 적절한지 확인하기 위한 Data Validation Plan을 작성하세요.",

      scenario:
        "반드시 ① Marketing Hypothesis ② Required Data/Table ③ SQL로 확인할 값 ④ 결과를 바탕으로 가능한 Marketing Decision을 포함하세요.",

      placeholder:
        "Hypothesis / Required Data / SQL Analysis / Marketing Decision 순서로 작성하세요.",
    },
  ],
};
