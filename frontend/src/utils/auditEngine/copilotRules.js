export const analyzeCopilot = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);

  // Rule 1
  if (tool.plan === "Enterprise" && seats < 10) {
    recommendation = {
      currentPlan: "Enterprise",
      recommendedPlan: "Business",
      monthlySavings: seats * 20,
      reason:
        "GitHub Copilot Enterprise features may not justify the cost for smaller teams."
    };
  }

  // Rule 2
  else if (
    tool.plan === "Business" &&
    seats <= 2
  ) {
    recommendation = {
      currentPlan: "Business",
      recommendedPlan: "Individual",
      monthlySavings: seats * 9,
      reason:
        "Smaller teams may achieve similar productivity gains using individual plans."
    };
  }

  // Rule 3
  else if (
    tool.plan === "Enterprise" &&
    seats < 5
  ) {
    recommendation = {
      currentPlan: "Enterprise",
      recommendedPlan: "Individual",
      monthlySavings: seats * 30,
      reason:
        "Enterprise governance tooling may be unnecessary for very small engineering teams."
    };
  }

  // Rule 4
  else if (
    tool.plan === "Individual" &&
    seats > 10
  ) {
    recommendation = {
      currentPlan: "Individual",
      recommendedPlan: "Business",
      monthlySavings: 25,
      reason:
        "Larger development teams often benefit from centralized business management features."
    };
  }

  return recommendation;
};