import { useEffect, useState } from "react";
import ToolCard from "../components/ToolCard";

const Audit = () => {
  const [auditData, setAuditData] = useState(() => {

  const savedData = localStorage.getItem("auditData");

  return savedData
    ? JSON.parse(savedData)
    : {
        teamSize: "",
        useCase: "",
        tools: [
          {
            tool: "",
            plan: "",
            monthlySpend: "",
            seats: ""
          }
        ]
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
    // console.log(auditData);
    localStorage.setItem(
      "auditData",
      JSON.stringify(auditData)
    );
    console.log(localStorage.getItem("auditData"));

  }, [auditData]);

  // Update team size/use case
  const handleChange = (e) => {
    setAuditData({
      ...auditData,
      [e.target.name]: e.target.value
    });
  };

  // Update tool fields
  const updateTool = (index, field, value) => {

    const updatedTools = auditData.tools.map((tool, i) => {

      if (i === index) {
        return {
          ...tool,
          [field]: value
        };
      }

      return tool;
    });

    setAuditData({
      ...auditData,
      tools: updatedTools
    });
  };

  // Add new tool card
  const addTool = () => {
    setAuditData({
      ...auditData,
      tools: [
        ...auditData.tools,
        {
          tool: "",
          plan: "",
          monthlySpend: "",
          seats: ""
        }
      ]
    });
  };

  // Remove tool card
  const removeTool = (index) => {
    const updatedTools = auditData.tools.filter(
      (_, i) => i !== index
    );

    setAuditData({
      ...auditData,
      tools: updatedTools
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-3xl mx-auto space-y-6">

        <div>
          <h1 className="text-4xl font-bold">
            AI Spend Audit
          </h1>

          <p className="text-gray-600 mt-2">
            Analyze your AI tool spending and uncover savings opportunities.
          </p>
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Team Size
          </label>

          <input
            type="number"
            name="teamSize"
            value={auditData.teamSize}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            placeholder="10"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Primary Use Case
          </label>

          <select
            name="useCase"
            value={auditData.useCase}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
          >
            <option value="">Select Use Case</option>
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="data">Data</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <div className="space-y-4">
          {auditData.tools.map((tool, index) => (
            <ToolCard
              key={index}
              toolData={tool}
              index={index}
              updateTool={updateTool}
              removeTool={removeTool}
            />
          ))}
        </div>

        <button
          onClick={addTool}
          className="bg-black text-white px-5 py-3 rounded-lg"
        >
          + Add Tool
        </button>

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium"
        >
          Generate Audit
        </button>

      </div>
    </div>
  );
};

export default Audit;