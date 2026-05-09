export const analyzeCopilot = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);

  if (tool.plan === "Enterprise" && seats < 10) {
    recommendation = {
      currentPlan: "Enterprise",
      recommendedPlan: "Business",
      monthlySavings: seats * 20,
      reason:
        "GitHub Copilot Enterprise features may not justify the additional cost for smaller engineering teams."
    };
  }

  return recommendation;
};