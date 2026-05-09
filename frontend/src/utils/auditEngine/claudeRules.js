export const analyzeClaude = (tool) => {
  let recommendation = null;

  const seats = Number(tool.seats);
  const spend = Number(tool.monthlySpend);

  // Rule 1 → Team unnecessary for tiny teams
  if (tool.plan === "Team" && seats <= 2) {
    recommendation = {
      currentPlan: "Team",
      recommendedPlan: "Pro",
      monthlySavings: seats * 5,
      reason:
        "Claude Team pricing is often unnecessary for very small teams with limited collaboration needs."
    };
  }

  // Rule 2 → Enterprise excessive for small organizations
  else if (
    tool.plan === "Enterprise" &&
    seats < 10
  ) {
    recommendation = {
      currentPlan: "Enterprise",
      recommendedPlan: "Team",
      monthlySavings: seats * 20,
      reason:
        "Enterprise-level Claude deployments may not provide enough ROI for smaller teams."
    };
  }

  // Rule 3 → Max unnecessary for low seat count
  else if (
    tool.plan === "Max" &&
    seats <= 2
  ) {
    recommendation = {
      currentPlan: "Max",
      recommendedPlan: "Pro",
      monthlySavings: seats * 10,
      reason:
        "Claude Max may be excessive for smaller teams with moderate AI usage."
    };
  }

  // Rule 4 → Heavy Pro usage better suited for API
  else if (
    tool.plan === "Pro" &&
    spend > 250
  ) {
    recommendation = {
      currentPlan: "Pro",
      recommendedPlan: "API",
      monthlySavings: 35,
      reason:
        "Heavy Claude usage may become more efficient with API-driven integrations."
    };
  }

  // Rule 5 → Low API usage better on subscription
  else if (
    tool.plan === "API" &&
    spend < 80
  ) {
    recommendation = {
      currentPlan: "API",
      recommendedPlan: "Pro",
      monthlySavings: 15,
      reason:
        "Low API usage may be more cost-effective through standard Claude subscriptions."
    };
  }

  return recommendation;
};