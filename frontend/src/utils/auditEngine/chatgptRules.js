export const analyzeChatGPT = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);
  const spend = Number(tool.monthlySpend);

  // Rule 1
  if (tool.plan === "Team" && seats <= 2) {
    recommendation = {
      currentPlan: "Team",
      recommendedPlan: "Plus",
      monthlySavings: seats * 10,
      reason:
        "ChatGPT Team becomes less cost-effective for very small teams."
    };
  }

  // Rule 2
  else if (
    tool.plan === "Enterprise" &&
    seats < 10
  ) {
    recommendation = {
      currentPlan: "Enterprise",
      recommendedPlan: "Team",
      monthlySavings: seats * 25,
      reason:
        "Enterprise pricing may be excessive for smaller organizations without advanced compliance requirements."
    };
  }

  // Rule 3
  else if (
    tool.plan === "Plus" &&
    spend > 200
  ) {
    recommendation = {
      currentPlan: "Plus",
      recommendedPlan: "API",
      monthlySavings: 50,
      reason:
        "High monthly ChatGPT usage may become more cost-efficient through API-based workflows."
    };
  }

  // Rule 4
  else if (
    tool.plan === "API" &&
    spend < 50
  ) {
    recommendation = {
      currentPlan: "API",
      recommendedPlan: "Plus",
      monthlySavings: 20,
      reason:
        "Low API usage may be more affordable through a standard ChatGPT subscription."
    };
  }

  return recommendation;
};