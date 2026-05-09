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

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-4xl mx-auto space-y-6">

        <div className="bg-white rounded-xl shadow-sm p-6">

          <h1 className="text-4xl font-bold">
            Your AI Spend Audit
          </h1>

          <div className="mt-6">

            <h2 className="text-2xl font-semibold">
              Monthly Savings:
              ${auditResults.totalMonthlySavings}
            </h2>

            <h3 className="text-xl text-gray-600 mt-2">
              Annual Savings:
              ${auditResults.totalAnnualSavings}
            </h3>

          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-4">

          {auditResults.recommendations.map(
            (item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h2 className="text-2xl font-bold">
                  {item.tool}
                </h2>

                <p className="mt-2">
                  Current Plan:
                  {" "}
                  {item.currentPlan}
                </p>

                <p>
                  Recommended:
                  {" "}
                  {item.recommendedPlan}
                </p>

                <p>
                  Monthly Savings:
                  {" "}
                  ${item.monthlySavings}
                </p>

                <p className="text-gray-600 mt-3">
                  {item.reason}
                </p>
              </div>
            )
          )}

        </div>

      </div>
    </div>
  );
};

export default Report;