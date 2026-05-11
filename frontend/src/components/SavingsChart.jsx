import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SavingsChart = ({ recommendations }) => {

  const data = recommendations.map((item) => ({
    tool: item.tool,
    savings: item.monthlySavings,
  }));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">

      <h2 className="text-3xl font-bold mb-6">
        Savings Analytics
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="tool" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="savings" radius={[8, 8, 0, 0]} />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default SavingsChart;