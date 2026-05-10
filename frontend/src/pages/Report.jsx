import {
  DollarSign,
  TrendingDown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { generateSummary } from "../utils/generateSummary";

const Report = () => {
  const navigate = useNavigate();

  const auditResults = JSON.parse(
    localStorage.getItem("auditResults"),
  );

  if (!auditResults) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
          <h1 className="text-3xl font-bold">
            No Audit Results Found
          </h1>

          <p className="text-gray-600 mt-3">
            Generate an audit first to view optimization insights.
          </p>

          <button
            onClick={() => navigate("/audit")}
            className="mt-6 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Go To Audit
          </button>
        </div>
      </div>
    );
  }

  const summary = generateSummary(auditResults);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold">
            AI Spend Audit Report
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Analyze and optimize your organization's AI tooling costs.
          </p>

          <button
            onClick={() => navigate("/audit")}
            className="mt-5 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Run Another Audit
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Monthly Savings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-500">
                Monthly Savings
              </h2>

              <DollarSign size={22} />
            </div>

            <p className="text-3xl font-bold mt-4">
              ${auditResults.totalMonthlySavings}
            </p>
          </div>

          {/* Annual Savings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-500">
                Annual Savings
              </h2>

              <TrendingDown size={22} />
            </div>

            <p className="text-3xl font-bold mt-4">
              ${auditResults.totalAnnualSavings}
            </p>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-500">
                Tools Analyzed
              </h2>

              <Sparkles size={22} />
            </div>

            <p className="text-3xl font-bold mt-4">
              {auditResults.toolsAnalyzed}
            </p>
          </div>

          {/* Optimization */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-gray-500">
                Optimization Score
              </h2>

              <ShieldCheck size={22} />
            </div>

            <p className="text-3xl font-bold mt-4">
              {auditResults.optimizationScore}%
            </p>
          </div>
        </div>

        {/* Top Insight */}
        <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold">
            Key Insight
          </h2>

          <p className="mt-3 text-lg">
            {auditResults.topInsight}
          </p>
        </div>

        {/* AI Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold">
            AI Audit Summary
          </h2>

          <p className="mt-5 text-gray-700 leading-8 whitespace-pre-line">
            {summary}
          </p>
        </div>

        {/* Recommendations */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            Recommendations
          </h2>

          {auditResults.recommendations.length === 0 ? (
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-gray-600">
                No major optimization opportunities were detected.
              </p>
            </div>
          ) : (
            auditResults.recommendations.map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.tool}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        {item.currentPlan}
                        {" → "}
                        {item.recommendedPlan}
                      </p>

                      <div className="mt-3 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Optimization Opportunity
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-green-600 text-2xl font-bold">
                        ${item.monthlySavings}
                      </p>

                      <p className="text-gray-500 text-sm">
                        monthly savings
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        $
                        {item.monthlySavings * 12} yearly
                        savings
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-gray-700 leading-7">
                    {item.reason}
                  </p>
                </div>
              ),
            )
          )}
        </div>

        {/* Savings Breakdown */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            Savings Breakdown
          </h2>

          <div className="space-y-4">
            {auditResults.recommendations.length ===
            0 ? (
              <p className="text-gray-600">
                No savings opportunities identified.
              </p>
            ) : (
              auditResults.recommendations.map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-3"
                  >
                    <span className="font-medium">
                      {item.tool}
                    </span>

                    <div className="text-right">
                      <p className="text-green-600 font-semibold">
                        ${item.monthlySavings}/month
                      </p>

                      <p className="text-gray-500 text-sm">
                        $
                        {item.monthlySavings * 12}
                        /year
                      </p>
                    </div>
                  </div>
                ),
              )
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 py-10">
          SpendWise AI • AI Spend Optimization
          Dashboard
        </div>
      </div>
    </div>
  );
};

export default Report;