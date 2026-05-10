export const generateSummary = (results) => {

  if (results.totalAnnualSavings > 5000) {
    return `
Your organization is significantly overspending on AI tooling.
Several plans appear oversized relative to current team usage patterns.
Optimizing subscriptions and consolidating workflows could generate substantial annual savings.
    `;
  }

  if (results.totalAnnualSavings > 1000) {
    return `
Your AI stack shows moderate optimization opportunities.
A few subscription tiers appear misaligned with team size and usage patterns.
Small plan adjustments could reduce recurring operational costs.
    `;
  }

  return `
Your current AI tooling setup appears relatively efficient.
Only minor optimization opportunities were identified during the audit.
  `;
};