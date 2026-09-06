window.TEST_DATA = {
  id: "2026-09-07",

  title: "9/7 Daily Test",

  subtitle: "Sakila Growth Marketing Simulation",

  description:
    "Problem Definition → Funnel → Goal → OKR → KPI → SQL Validation",

  questions: [
    {
      id: "q1",

      type: "multiple",

      score: 8,

      question: "Problem Definition 단계에서 가장 적절한 행동은 무엇인가?",

      options: [
        "매출이 감소했으므로 바로 광고 예산을 늘린다.",

        "CEO의 의견을 그대로 Fact로 받아들인다.",

        "현재 상황과 원하는 상태의 차이를 정의하고 확인이 필요한 가설을 구분한다.",

        "모든 문제를 고객 이탈 문제로 정의한다.",
      ],
    },

    {
      id: "q2",

      type: "multiple",

      score: 8,

      question: "다음 중 Fact / Assumption / Unknown의 구분이 올바른 것은?",

      options: [
        "고객 재이용률이 낮을 것이다 → Fact",

        "rental Table이 존재한다 → Assumption",

        "실제 Repeat Rental Rate가 얼마인지 모른다 → Unknown",

        "최근 Revenue가 반드시 감소했다 → Fact",
      ],
    },

    {
      id: "q3",

      type: "multiple",

      score: 8,

      question:
        "Symptom → Problem → Cause → Solution 흐름으로 가장 적절한 것은?",

      options: [
        "Revenue 감소 → 광고 집행 → 고객 감소 → 분석",

        "Revenue 성장 둔화 → Repeat Rental 부족 가능성 → 원인 검증 → 개선 전략 수립",

        "고객 감소 → Solution → Problem → KPI",

        "KPI 감소 → SQL → 광고 → Problem Definition",
      ],
    },

    {
      id: "q4",

      type: "multiple",

      score: 8,

      question: "Marketing Funnel에 대한 설명으로 가장 적절한 것은?",

      options: [
        "기업의 조직도를 나타내는 모델",

        "고객이 서비스와 관계를 형성하고 다음 행동 단계로 이동하는 과정을 구조화한 모델",

        "SQL Table의 관계를 나타내는 구조",

        "Revenue만 분석하는 재무 모델",
      ],
    },

    {
      id: "q5",

      type: "multiple",

      score: 8,

      question: "Sakila Funnel에서 Retention 단계에 가장 가까운 행동은?",

      options: [
        "광고를 처음 본다.",

        "서비스에 회원가입한다.",

        "처음 Film을 Rental한다.",

        "Film을 반복해서 Rental한다.",
      ],
    },

    {
      id: "q6",

      type: "multiple",

      score: 8,

      question: "다음 SQL이 마케팅 관점에서 주로 확인하려는 것은?",

      code: `SELECT
    customer_id,
    COUNT(*) AS rental_count
FROM rental
GROUP BY customer_id;`,

      options: [
        "Customer별 전체 Revenue",

        "Customer별 Rental 횟수",

        "Category별 Revenue",

        "Film별 가격",
      ],
    },

    {
      id: "q7",

      type: "subjective",

      score: 12,

      question: "다음 상황을 읽고 Problem Hypothesis를 한 문장으로 작성하세요.",

      scenario:
        "Sakila 경영진은 Revenue 성장세가 기대에 미치지 못하고 있다고 판단하고 있다. 아직 정확한 원인은 분석하지 않았으며, 기존 고객의 반복적인 콘텐츠 이용이 충분하지 않을 가능성을 검토하고 있다.",

      placeholder: "Problem Hypothesis를 작성하세요.",
    },

    {
      id: "q8",

      type: "subjective",

      score: 12,

      question:
        "Sakila Funnel에서 주요 Problem Point를 하나 선택하고 그 이유를 작성하세요.",

      scenario:
        "Acquisition → Registration → Activation → Revenue → Retention → Loyalty",

      placeholder: "Problem Point와 그 이유를 작성하세요.",
    },

    {
      id: "q9",

      type: "subjective",

      score: 14,

      question:
        "Business Goal이 Revenue Growth라고 가정할 때, 적절한 Marketing Goal 1개와 KPI 2개를 작성하세요.",

      placeholder: "Marketing Goal과 KPI 2개를 작성하세요.",
    },

    {
      id: "q10",

      type: "subjective",

      score: 14,

      question:
        "다음 Marketing Question을 SQL로 검증하려고 합니다. 필요한 Table과 사용할 수 있는 SQL 개념을 작성하세요.",

      scenario: "Revenue에 가장 많이 기여한 Customer는 누구인가?",

      placeholder: "필요한 Table / SQL 개념을 작성하세요.",
    },
  ],
};
