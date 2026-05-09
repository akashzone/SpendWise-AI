export const analyzeClaude = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);

  // Team unnecessary for very small teams
  if (tool.plan === "Team" && seats <= 2) {
    recommendation = {
      currentPlan: "Team",
      recommendedPlan: "Pro",
      monthlySavings: seats * 5,
      reason:
        "Claude Team pricing is often unnecessary for very small teams with limited collaboration needs."
    };
  }

  return recommendation;
};