export const analyzeWindsurf = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);
  const spend = Number(tool.monthlySpend);

  // Rule 1
  if (tool.plan === "Teams" && seats < 5) {
    recommendation = {
      currentPlan: "Teams",
      recommendedPlan: "Pro",
      monthlySavings: seats * 12,
      reason:
        "Windsurf Teams pricing may be unnecessary for smaller development teams."
    };
  }

  // Rule 2
  else if (
    tool.plan === "Pro" &&
    spend < 15
  ) {
    recommendation = {
      currentPlan: "Pro",
      recommendedPlan: "Free",
      monthlySavings: 10,
      reason:
        "Lower Windsurf usage may not justify maintaining a Pro subscription."
    };
  }

  // Rule 3
  else if (
    tool.plan === "Free" &&
    seats > 3
  ) {
    recommendation = {
      currentPlan: "Free",
      recommendedPlan: "Pro",
      monthlySavings: 15,
      reason:
        "Growing teams may benefit from premium collaboration and productivity features."
    };
  }

  // Rule 4
  else if (
    tool.plan === "Pro" &&
    seats > 10
  ) {
    recommendation = {
      currentPlan: "Pro",
      recommendedPlan: "Teams",
      monthlySavings: 30,
      reason:
        "Larger engineering teams may benefit from centralized team workflows and management."
    };
  }

  return recommendation;
};