import { analyzeChatGPT } from "./chatgptRules";
import { analyzeCursor } from "./cursorRules";
import { analyzeClaude } from "./claudeRules";
import { analyzeCopilot } from "./copilotRules";
import { analyzeGemini } from "./geminiRules";

export const generateAudit = (auditData) => {
  const recommendations = [];

  auditData.tools.forEach((tool) => {
    let result = null;

    if (tool.tool === "ChatGPT") {
      result = analyzeChatGPT(tool);
    }

    if (tool.tool === "Cursor") {
      result = analyzeCursor(tool);
    }
    if (tool.tool === "Claude") {
      result = analyzeClaude(tool);
    }

    if (tool.tool === "GitHubCopilot") {
      result = analyzeCopilot(tool);
    }

    if (tool.tool === "Gemini") {
      result = analyzeGemini(tool);
    }
    if (result) {
      recommendations.push({
        tool: tool.tool,
        ...result,
      });
    }
  });

  const totalMonthlySavings = recommendations.reduce(
    (acc, item) => acc + item.monthlySavings,
    0,
  );

  const totalAnnualSavings = totalMonthlySavings * 12;
  const optimizationScore = Math.max(100 - recommendations.length * 10, 50);

  const toolsAnalyzed = auditData.tools.length;

  let topInsight = "Your AI stack has moderate optimization opportunities.";

  if (totalAnnualSavings > 5000) {
    topInsight =
      "Significant annual savings opportunities detected across your AI stack.";
  }
  return {
    recommendations,
    totalMonthlySavings,
    totalAnnualSavings,
    optimizationScore,
    toolsAnalyzed,
    topInsight,
  };
};
