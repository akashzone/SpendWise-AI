export const analyzeGemini = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);

  if (tool.plan === "Ultra" && seats <= 2) {
    recommendation = {
      currentPlan: "Ultra",
      recommendedPlan: "Pro",
      monthlySavings: seats * 15,
      reason:
        "Gemini Ultra may be excessive for smaller teams with lighter AI workloads."
    };
  }

  return recommendation;
};