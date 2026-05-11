import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateAudit } from "../utils/auditEngine";
import { toolsData } from "../data/tools";

const Audit = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [auditData, setAuditData] = useState(() => {

    const savedData = localStorage.getItem("auditData");

    return savedData
      ? JSON.parse(savedData)
      : {
          teamSize: "",
          useCase: "coding",
          tools: [
            {
              tool: "",
              plan: "",
              monthlySpend: "",
              seats: "",
            },
          ],
        };
  });

  // Load localStorage
  useEffect(() => {

    const savedData = localStorage.getItem("auditData");

    if (savedData) {
      setAuditData(JSON.parse(savedData));
    }

  }, []);

  // Save localStorage
  useEffect(() => {

    localStorage.setItem(
      "auditData",
      JSON.stringify(auditData)
    );

  }, [auditData]);

  // Update tool fields
  const updateTool = (index, field, value) => {

    const updatedTools = auditData.tools.map((tool, i) => {

      if (i === index) {
        return {
          ...tool,
          [field]: value,
        };
      }

      return tool;
    });

    setAuditData({
      ...auditData,
      tools: updatedTools,
    });
  };

  // Add tool
  const addTool = () => {

    setAuditData({
      ...auditData,
      tools: [
        ...auditData.tools,
        {
          tool: "",
          plan: "",
          monthlySpend: "",
          seats: "",
        },
      ],
    });
  };

  // Remove tool
  const removeTool = (index) => {

    const updatedTools = auditData.tools.filter(
      (_, i) => i !== index
    );

    setAuditData({
      ...auditData,
      tools: updatedTools,
    });
  };

  // Generate report
  const handleGenerateAudit = () => {

    setLoading(true);

    setTimeout(() => {

      const results = generateAudit(auditData);

      localStorage.setItem(
        "auditResults",
        JSON.stringify(results)
      );

      setLoading(false);

      navigate("/report/local");

    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 md:py-14 px-4 md:px-6">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">

          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            AI Cost Optimization Audit
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
            Analyze Your
            <br />
            AI Spending
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl leading-8 md:leading-9">
            Identify overspending across AI tools, optimize subscription plans,
            and uncover monthly savings opportunities for your organization.
          </p>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* Organization */}
            <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">

              <h2 className="text-2xl md:text-3xl font-bold">
                Organization Details
              </h2>

              <p className="text-gray-500 mt-2">
                Configure your organization profile and AI usage context.
              </p>

              <div className="mt-8 space-y-6">

                {/* Team Size */}
                <div>

                  <label className="block font-semibold mb-2">
                    Team Size
                  </label>

                  <input
                    type="number"
                    value={auditData.teamSize}
                    onChange={(e) =>
                      setAuditData({
                        ...auditData,
                        teamSize: e.target.value,
                      })
                    }
                    placeholder="Enter team size"
                    className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <p className="text-sm text-gray-500 mt-2">
                    Number of employees actively using AI tools.
                  </p>

                </div>

                {/* Use Case */}
                <div>

                  <label className="block font-semibold mb-2">
                    Primary Use Case
                  </label>

                  <select
                    value={auditData.useCase}
                    onChange={(e) =>
                      setAuditData({
                        ...auditData,
                        useCase: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="coding">
                      Coding
                    </option>

                    <option value="content">
                      Content Creation
                    </option>

                    <option value="research">
                      Research
                    </option>

                    <option value="marketing">
                      Marketing
                    </option>

                    <option value="design">
                      Design
                    </option>

                  </select>

                </div>

              </div>

            </div>

            {/* Tool Cards */}
            <div className="space-y-6">

              {auditData.tools.map((tool, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-sm p-6 md:p-8"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div>
                      <h2 className="text-2xl font-bold">
                        Tool Configuration
                      </h2>

                      <p className="text-gray-500 mt-1">
                        Configure subscription details and usage metrics.
                      </p>
                    </div>

                    {auditData.tools.length > 1 && (

                      <button
                        onClick={() => removeTool(index)}
                        className="text-red-500 hover:text-red-600 font-medium"
                      >
                        Remove
                      </button>

                    )}

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    {/* Tool */}
                    <div>

                      <label className="block font-semibold mb-2">
                        Tool
                      </label>

                      <select
                        value={tool.tool}
                        onChange={(e) =>
                          updateTool(
                            index,
                            "tool",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded-2xl p-4"
                      >

                        <option value="">
                          Select Tool
                        </option>

                        {Object.keys(toolsData).map((toolName) => (

                          <option
                            key={toolName}
                            value={toolName}
                          >
                            {toolName}
                          </option>

                        ))}

                      </select>

                    </div>

                    {/* Plan */}
                    <div>

                      <label className="block font-semibold mb-2">
                        Plan
                      </label>

                      <select
                        value={tool.plan}
                        onChange={(e) =>
                          updateTool(
                            index,
                            "plan",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded-2xl p-4"
                      >

                        <option value="">
                          Select Plan
                        </option>

                        {tool.tool &&
                          toolsData[tool.tool]?.map((plan) => (

                            <option
                              key={plan}
                              value={plan}
                            >
                              {plan}
                            </option>

                          ))}

                      </select>

                    </div>

                    {/* Monthly Spend */}
                    <div>

                      <label className="block font-semibold mb-2">
                        Monthly Spend ($)
                      </label>

                      <input
                        type="number"
                        value={tool.monthlySpend}
                        onChange={(e) =>
                          updateTool(
                            index,
                            "monthlySpend",
                            e.target.value
                          )
                        }
                        placeholder="Enter monthly cost"
                        className="w-full border border-gray-300 rounded-2xl p-4"
                      />

                    </div>

                    {/* Seats */}
                    <div>

                      <label className="block font-semibold mb-2">
                        Seats
                      </label>

                      <input
                        type="number"
                        value={tool.seats}
                        onChange={(e) =>
                          updateTool(
                            index,
                            "seats",
                            e.target.value
                          )
                        }
                        placeholder="Number of seats"
                        className="w-full border border-gray-300 rounded-2xl p-4"
                      />

                    </div>

                  </div>

                </div>

              ))}

              {/* Add Tool */}
              <button
                onClick={addTool}
                className="w-full bg-white border-2 border-dashed border-gray-300 rounded-3xl p-5 md:p-6 text-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition"
              >
                + Add Another Tool
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* Tips */}
            <div className="bg-black text-white rounded-3xl p-6 md:p-8">

              <h2 className="text-2xl font-bold">
                Audit Tips
              </h2>

              <ul className="mt-6 space-y-4 text-gray-300 leading-7">

                <li>
                  • Add all actively used AI tools for accurate optimization.
                </li>

                <li>
                  • Include actual monthly subscription costs.
                </li>

                <li>
                  • Enterprise plans often have hidden overspending opportunities.
                </li>

                <li>
                  • Smaller teams usually benefit from lower-tier plans.
                </li>

              </ul>

            </div>

            {/* Summary */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-6 md:p-8">

              <h2 className="text-2xl font-bold">
                Potential Savings
              </h2>

              <p className="mt-4 text-blue-100 leading-8">
                SpendWise AI analyzes subscription inefficiencies and recommends
                cost-effective plan optimizations across your AI stack.
              </p>

            </div>

            {/* Button */}
            <button
              onClick={handleGenerateAudit}
              disabled={loading}
              className="w-full bg-black hover:bg-gray-800 text-white py-5 rounded-3xl text-lg md:text-xl font-semibold transition shadow-sm disabled:opacity-70"
            >

              {loading
                ? "Generating Report..."
                : "Generate AI Audit Report"}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Audit;