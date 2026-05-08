import { toolsData } from "../data/tools";

const ToolCard = ({
  toolData,
  index,
  updateTool,
  removeTool
}) => {
  return (
    <div className="border rounded-xl p-4 space-y-4 bg-white shadow-sm">

      <div>
        <label className="block mb-1 font-medium">
          Tool
        </label>

        <select
          value={toolData.tool}
          onChange={(e) =>
            updateTool(index, "tool", e.target.value)
          }
          className="w-full border p-2 rounded-lg"
        >
          <option value="">Select Tool</option>

          {Object.keys(toolsData).map((tool) => (
            <option key={tool} value={tool}>
              {tool}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">
          Plan
        </label>

        <select
          value={toolData.plan}
          onChange={(e) =>
            updateTool(index, "plan", e.target.value)
          }
          className="w-full border p-2 rounded-lg"
        >
          <option value="">Select Plan</option>

          {toolData.tool &&
            toolsData[toolData.tool].map((plan) => (
              <option key={plan} value={plan}>
                {plan}
              </option>
            ))}
        </select>
      </div>

      {/* Monthly Spend */}
      <div>
        <label className="block mb-1 font-medium">
          Monthly Spend ($)
        </label>

        <input
          type="number"
          value={toolData.monthlySpend}
          onChange={(e) =>
            updateTool(index, "monthlySpend", e.target.value)
          }
          className="w-full border p-2 rounded-lg"
          placeholder="200"
        />
      </div>

      {/* Seats */}
      <div>
        <label className="block mb-1 font-medium">
          Seats
        </label>

        <input
          type="number"
          value={toolData.seats}
          onChange={(e) =>
            updateTool(index, "seats", e.target.value)
          }
          className="w-full border p-2 rounded-lg"
          placeholder="5"
        />
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeTool(index)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Remove
      </button>
    </div>
  );
};

export default ToolCard;