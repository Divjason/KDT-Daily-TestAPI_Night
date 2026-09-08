window.TEST_DATA = {
  id: "2026-09-09",

  title: "9/9 Daily Test",

  subtitle: "Sakila Data-driven Marketing Lab — Day 3",

  description:
    "SELECT / FROM / Alias → WHERE / ORDER BY / LIMIT → CASE WHEN → Value Proposition → 4P / 4C → Message Strategy → IMC / POE Media Mix",

  questions: [
    {
      id: "q1",
      type: "multiple",
      score: 8,
      question: "다음 SQL에 대한 설명으로 가장 적절한 것은 무엇입니까?",
      code: `SELECT first_name, email
FROM customer;`,
      options: [
        "customer Table에서 새로운 Customer를 생성한다.",
        "customer Table에서 first_name과 email Column을 조회한다.",
        "first_name Table에서 customer와 email을 조회한다.",
        "customer Table에서 이름이 같은 Customer만 조회한다.",
      ],
    },

    {
      id: "q2",
      type: "multiple",
      score: 8,
      question: "다음 SQL의 Alias(별칭)에 대한 설명으로 가장 적절한 것은 무엇입니까?",
      code: `SELECT
    first_name AS customer_name
FROM customer;`,
      options: [
        "Database의 first_name Column 이름 자체가 customer_name으로 변경된다.",
        "customer Table의 이름이 customer_name으로 변경된다.",
        "Query 결과에서 first_name을 customer_name이라는 별칭으로 표시한다.",
        "customer_name이라는 새로운 Column이 Database에 생성된다.",
      ],
    },

    {
      id: "q3",
      type: "multiple",
      score: 8,
      question:
        "customer_id = 10인 고객의 최근 Rental History 3건을 확인하려고 할 때 가장 적절한 SQL은 무엇입니까?",
      options: [
        `SELECT * FROM rental
WHERE customer_id = 10
ORDER BY rental_date DESC
LIMIT 3;`,
        `SELECT * FROM rental
WHERE customer_id = 3
ORDER BY rental_date ASC
LIMIT 10;`,
        `SELECT * FROM rental
ORDER BY customer_id = 10
WHERE rental_date DESC;`,
        `SELECT * FROM rental
LIMIT customer_id = 10;`,
      ],
    },

    {
      id: "q4",
      type: "multiple",
      score: 8,
      question:
        "Customer를 Heavy / Medium / Light와 같이 이용 행동에 따라 분류하기 위해 CASE WHEN을 사용할 때 가장 적절한 설명은 무엇입니까?",
      options: [
        "SQL이 자동으로 가장 좋은 Marketing Segment 기준을 결정한다.",
        "마케터가 Business Rule을 정의하고 CASE WHEN을 이용해 그 기준에 따라 데이터를 분류할 수 있다.",
        "CASE WHEN은 서로 다른 Table을 연결하기 위한 명령어다.",
        "CASE WHEN은 Database의 실제 Column 이름을 변경한다.",
      ],
    },

    {
      id: "q5",
      type: "multiple",
      score: 8,
      question: "다음 4P와 4C의 연결 중 올바르지 않은 것은 무엇입니까?",
      options: [
        "Product → Customer Solution",
        "Price → Customer Cost",
        "Place → Convenience",
        "Promotion → Customer Segmentation",
      ],
    },

    {
      id: "q6",
      type: "multiple",
      score: 8,
      question: "다음 중 Owned Media에 가장 가까운 것은 무엇입니까?",
      options: [
        "Sakila가 비용을 지불해 집행한 Google Search Ads",
        "고객이 자발적으로 SNS에 작성한 Sakila Review",
        "Sakila가 직접 운영하는 Website와 Customer Email",
        "언론사가 자발적으로 작성한 Sakila 관련 기사",
      ],
    },

    {
      id: "q7",
      type: "subjective",
      score: 12,
      question:
        "다음 SQL이 어떤 데이터를 조회하는지 설명하고, Sakila 마케터가 이 결과를 활용할 수 있는 Marketing Question을 한 가지 작성하세요.",
      code: `SELECT
    customer_id,
    rental_date
FROM rental
WHERE customer_id = 5
ORDER BY rental_date DESC
LIMIT 5;`,
      placeholder:
        "① SQL이 조회하는 데이터 ② 이 결과로 확인할 수 있는 Marketing Question을 작성하세요.",
    },

    {
      id: "q8",
      type: "subjective",
      score: 12,
      question:
        "다음 Target Customer를 대상으로 Customer Pain, Customer Gain, Value Proposition을 각각 작성하세요.",
      scenario:
        "Target: 과거 Rental 경험은 있지만 최근 이용 빈도가 상대적으로 낮은 기존 Customer\n※ 현재 Sakila Data만으로 검증되지 않은 내용은 Hypothesis임을 고려하세요.",
      placeholder:
        "① Customer Pain ② Customer Gain ③ Value Proposition을 작성하세요.",
    },

    {
      id: "q9",
      type: "subjective",
      score: 14,
      question:
        "다음 Marketing Idea를 Data-driven Marketing 관점에서 구체화하세요. ① Marketing Hypothesis ② Required Data ③ SQL로 확인해야 할 내용 ④ Marketing Decision을 작성하세요.",
      scenario:
        "“Rental Frequency가 낮은 기존 Customer에게 Re-engagement Campaign을 진행하자.”",
      placeholder:
        "① Hypothesis ② Required Data ③ SQL Analysis ④ Marketing Decision을 작성하세요.",
    },

    {
      id: "q10",
      type: "subjective",
      score: 14,
      question:
        "여러분은 Sakila Junior Data-driven Marketer입니다. 아래 전략을 실제 Customer Communication Plan으로 구체화하세요.",
      scenario:
        "전략: “최근 이용이 감소한 기존 Customer에게 취향에 맞는 콘텐츠를 추천하여 Repeat Rental을 유도한다.”\n\n반드시 포함: ① Target ② Value Proposition ③ Core Message ④ CTA ⑤ 사용할 Media와 POE 유형 ⑥ 추가로 SQL을 통해 검증하고 싶은 Data",
      placeholder:
        "Target → Value Proposition → Core Message → CTA → Media/POE → SQL Validation 순서로 작성하세요.",
    },
  ],
};
