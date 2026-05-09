export const analyzeGemini = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);
  const spend = Number(tool.monthlySpend);

  // Rule 1
  if (tool.plan === "Ultra" && seats <= 2) {
    recommendation = {
      currentPlan: "Ultra",
      recommendedPlan: "Pro",
      monthlySavings: seats * 15,
      reason:
        "Gemini Ultra may be excessive for smaller teams with lighter workloads."
    };
  }

  // Rule 2
  else if (
    tool.plan === "Ultra" &&
    seats < 8
  ) {
    recommendation = {
      currentPlan: "Ultra",
      recommendedPlan: "API",
      monthlySavings: 45,
      reason:
        "API-driven usage may provide more flexibility and cost efficiency for smaller teams."
    };
  }

  // Rule 3
  else if (
    tool.plan === "API" &&
    spend < 100
  ) {
    recommendation = {
      currentPlan: "API",
      recommendedPlan: "Pro",
      monthlySavings: 20,
      reason:
        "Low API usage may be more cost-effective through standard Gemini subscriptions."
    };
  }

  // Rule 4
  else if (
    tool.plan === "Pro" &&
    spend > 300
  ) {
    recommendation = {
      currentPlan: "Pro",
      recommendedPlan: "API",
      monthlySavings: 50,
      reason:
        "Heavy Gemini usage may benefit from API-based scaling and automation."
    };
  }

  return recommendation;
};