export const analyzeCursor = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);
  const spend = Number(tool.monthlySpend);

  // Rule 1
  if (tool.plan === "Business" && seats < 5) {
    recommendation = {
      currentPlan: "Business",
      recommendedPlan: "Pro",
      monthlySavings: seats * 20,
      reason:
        "Cursor Business pricing is harder to justify for smaller engineering teams."
    };
  }

  // Rule 2
  else if (
    tool.plan === "Enterprise" &&
    seats < 15
  ) {
    recommendation = {
      currentPlan: "Enterprise",
      recommendedPlan: "Business",
      monthlySavings: seats * 25,
      reason:
        "Enterprise plans are typically better suited for larger organizations with governance requirements."
    };
  }

  // Rule 3
  else if (
    tool.plan === "Pro" &&
    seats > 15
  ) {
    recommendation = {
      currentPlan: "Pro",
      recommendedPlan: "Business",
      monthlySavings: 40,
      reason:
        "Larger engineering teams may benefit from centralized business-tier workflows."
    };
  }

  // Rule 4
  else if (
    tool.plan === "Pro" &&
    spend < 20
  ) {
    recommendation = {
      currentPlan: "Pro",
      recommendedPlan: "Hobby",
      monthlySavings: 10,
      reason:
        "Lower Cursor usage may not justify maintaining a Pro subscription."
    };
  }

  return recommendation;
};