export const analyzeCursor = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);

  if (tool.plan === "Business" && seats < 5) {
    recommendation = {
      currentPlan: "Business",
      recommendedPlan: "Pro",
      monthlySavings: seats * 20,
      reason:
        "Cursor Business pricing is harder to justify for smaller engineering teams."
    };
  }

  return recommendation;
};