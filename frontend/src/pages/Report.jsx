import {
  DollarSign,
  TrendingDown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import SavingsChart from "../components/SavingsChart";

import { useNavigate } from "react-router-dom";

import { generateSummary } from "../utils/generateSummary";

const Report = () => {
  const navigate = useNavigate();

  const auditResults = JSON.parse(
    localStorage.getItem("auditResults")
  );

  if (!auditResults) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm text-center max-w-md w-full">
          <h1 className="text-3xl font-bold">
            No Audit Results Found
          </h1>

          <p className="text-gray-600 mt-3 leading-7">
            Generate an audit first to view optimization insights.
          </p>

          <button
            onClick={() => navigate("/audit")}
            className="mt-6 bg-black text-white px-5 py-3 rounded-2xl hover:bg-gray-800 transition w-full sm:w-auto"
          >
            Go To Audit
          </button>
        </div>
      </div>
    );
  }

  const summary = generateSummary(auditResults);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6 overflow-hidden">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                AI Spend Optimization Report
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mt-5 leading-tight">
                AI Spend
                <br />
                Audit Report
              </h1>

              <p className="text-gray-600 mt-4 text-base sm:text-lg leading-8 max-w-2xl">
                Analyze and optimize your organization's AI tooling costs with
                intelligent plan recommendations and savings insights.
              </p>
            </div>

            <div>
              <button
                onClick={() => navigate("/audit")}
                className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition font-semibold w-full sm:w-auto"
              >
                Run Another Audit
              </button>
            </div>

          </div>

        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          {/* Monthly Savings */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between">

              <h2 className="text-gray-500 text-sm sm:text-base">
                Monthly Savings
              </h2>

              <div className="bg-green-100 p-3 rounded-2xl">
                <DollarSign size={22} className="text-green-600" />
              </div>

            </div>

            <p className="text-3xl font-bold mt-5">
              ${auditResults.totalMonthlySavings}
            </p>

            <p className="text-gray-500 mt-2 text-sm">
              Estimated monthly reduction
            </p>
          </div>

          {/* Annual Savings */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between">

              <h2 className="text-gray-500 text-sm sm:text-base">
                Annual Savings
              </h2>

              <div className="bg-blue-100 p-3 rounded-2xl">
                <TrendingDown size={22} className="text-blue-600" />
              </div>

            </div>

            <p className="text-3xl font-bold mt-5">
              ${auditResults.totalAnnualSavings}
            </p>

            <p className="text-gray-500 mt-2 text-sm">
              Estimated yearly reduction
            </p>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between">

              <h2 className="text-gray-500 text-sm sm:text-base">
                Tools Analyzed
              </h2>

              <div className="bg-purple-100 p-3 rounded-2xl">
                <Sparkles size={22} className="text-purple-600" />
              </div>

            </div>

            <p className="text-3xl font-bold mt-5">
              {auditResults.toolsAnalyzed}
            </p>

            <p className="text-gray-500 mt-2 text-sm">
              AI tools audited
            </p>
          </div>

          {/* Optimization */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <div className="flex items-center justify-between">

              <h2 className="text-gray-500 text-sm sm:text-base">
                Optimization Score
              </h2>

              <div className="bg-orange-100 p-3 rounded-2xl">
                <ShieldCheck size={22} className="text-orange-600" />
              </div>

            </div>

            <p className="text-3xl font-bold mt-5">
              {auditResults.optimizationScore}%
            </p>

            <p className="text-gray-500 mt-2 text-sm">
              Stack efficiency rating
            </p>
          </div>

        </div>

        {/* Key Insight */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 sm:p-8 rounded-3xl shadow-sm">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Key Insight
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-8 text-blue-100">
            {auditResults.topInsight}
          </p>

        </div>

        {/* AI Summary */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold">
            AI Audit Summary
          </h2>

          <p className="mt-6 text-gray-700 leading-8 whitespace-pre-line">
            {summary}
          </p>

        </div>

        {/* Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm overflow-hidden">

          <h2 className="text-3xl font-bold mb-6">
            Savings Visualization
          </h2>

          <div className="w-full h-[300px] sm:h-[400px]">
            <SavingsChart
              recommendations={auditResults.recommendations}
            />
          </div>

        </div>

        {/* Recommendations */}
        <div className="space-y-4">

          <h2 className="text-3xl font-bold">
            Recommendations
          </h2>

          {auditResults.recommendations.length === 0 ? (
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <p className="text-gray-600 leading-7">
                No major optimization opportunities were detected.
              </p>
            </div>
          ) : (
            auditResults.recommendations.map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm"
                >

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.tool}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        {item.currentPlan}
                        {" → "}
                        {item.recommendedPlan}
                      </p>

                      <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                        Optimization Opportunity
                      </div>

                    </div>

                    <div className="lg:text-right">

                      <p className="text-green-600 text-3xl font-bold">
                        ${item.monthlySavings}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        monthly savings
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        ${item.monthlySavings * 12} yearly savings
                      </p>

                    </div>

                  </div>

                  <p className="mt-6 text-gray-700 leading-8">
                    {item.reason}
                  </p>

                </div>
              )
            )
          )}

        </div>

        {/* Savings Breakdown */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm">

          <h2 className="text-3xl font-bold mb-8">
            Savings Breakdown
          </h2>

          <div className="space-y-5">

            {auditResults.recommendations.length === 0 ? (
              <p className="text-gray-600">
                No savings opportunities identified.
              </p>
            ) : (
              auditResults.recommendations.map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-4"
                  >

                    <div>
                      <p className="font-semibold text-lg">
                        {item.tool}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        {item.currentPlan}
                        {" → "}
                        {item.recommendedPlan}
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="text-green-600 font-bold text-lg">
                        ${item.monthlySavings}/month
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        ${item.monthlySavings * 12}/year
                      </p>

                    </div>

                  </div>
                )
              )
            )}

          </div>

        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 py-8 text-sm sm:text-base">
          SpendWise AI • AI Spend Optimization Dashboard
        </div>

      </div>
    </div>
  );
};

export default Report;