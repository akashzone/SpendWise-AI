import {
  DollarSign,
  TrendingDown,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { generateSummary } from "../utils/generateSummary";

const Report = () => {

  const auditResults = JSON.parse(
    localStorage.getItem("auditResults")
  );

  if (!auditResults) {
    return (
      <div className="p-6">
        No audit results found.
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

          <p className="mt-5 text-gray-700 leading-8">
            {summary}
          </p>

        </div>

        {/* Recommendations */}
        <div className="space-y-4">

          <h2 className="text-3xl font-bold">
            Recommendations
          </h2>

          {auditResults.recommendations.map(
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
                  </div>

                  <div className="text-right">
                    <p className="text-green-600 text-2xl font-bold">
                      ${item.monthlySavings}
                    </p>

                    <p className="text-gray-500 text-sm">
                      monthly savings
                    </p>
                  </div>

                </div>

                <p className="mt-5 text-gray-700 leading-7">
                  {item.reason}
                </p>

              </div>
            )
          )}

        </div>

        {/* Savings Breakdown */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">

          <h2 className="text-3xl font-bold mb-6">
            Savings Breakdown
          </h2>

          <div className="space-y-4">

            {auditResults.recommendations.map(
              (item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b pb-3"
                >
                  <span className="font-medium">
                    {item.tool}
                  </span>

                  <span className="text-green-600 font-semibold">
                    ${item.monthlySavings}/month
                  </span>
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Report;