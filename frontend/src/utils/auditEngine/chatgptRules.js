export const analyzeChatGPT = (tool) => {
  let recommendation = null;

  const spend = Number(tool.monthlySpend);
  const seats = Number(tool.seats);

  // Team plan unnecessary for tiny teams
  if (tool.plan === "Team" && seats <= 2) {
    recommendation = {
      currentPlan: "Team",
      recommendedPlan: "Plus",
      monthlySavings: seats * 10,
      reason:
        "ChatGPT Team becomes less cost-effective for very small teams."
    };
  }

  return recommendation;
};