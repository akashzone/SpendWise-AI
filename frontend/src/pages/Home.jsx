import { Link } from "react-router-dom";

import {
  DollarSign,
  ShieldCheck,
  Sparkles,
  TrendingDown,
} from "lucide-react";

const Home = () => {

  const features = [
    {
      title: "AI Spend Optimization",
      description:
        "Identify overspending across AI tools and uncover savings opportunities.",
      icon: <DollarSign size={30} />,
    },
    {
      title: "Smart Recommendations",
      description:
        "Get intelligent plan recommendations based on usage patterns and team size.",
      icon: <Sparkles size={30} />,
    },
    {
      title: "Audit Analytics",
      description:
        "View detailed savings reports, optimization scores, and actionable insights.",
      icon: <TrendingDown size={30} />,
    },
    {
      title: "Enterprise Ready",
      description:
        "Built with scalable architecture and modular recommendation systems.",
      icon: <ShieldCheck size={30} />,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-4xl">

          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            AI Cost Optimization Platform
          </div>

          <h1 className="text-6xl font-bold leading-tight mt-6">
            Stop Overspending
            <br />
            On AI Tools
          </h1>

          <p className="text-xl text-gray-600 mt-6 leading-9 max-w-2xl">
            SpendWise AI helps organizations analyze AI tooling costs,
            identify optimization opportunities, and reduce recurring expenses.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mt-10">

            <Link
              to="/audit"
              className="bg-black text-white px-7 py-4 rounded-2xl hover:bg-gray-800 transition text-lg"
            >
              Start Free Audit
            </Link>

            <Link
              to="/report/local"
              className="bg-white border border-gray-300 px-7 py-4 rounded-2xl hover:bg-gray-50 transition text-lg"
            >
              View Demo Report
            </Link>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-5xl font-bold">
              35%
            </h2>

            <p className="text-gray-600 mt-3">
              Average AI cost reduction
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-5xl font-bold">
              20+
            </h2>

            <p className="text-gray-600 mt-3">
              Pricing optimization rules
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-5xl font-bold">
              6
            </h2>

            <p className="text-gray-600 mt-3">
              Supported AI platforms
            </p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-16">

          <h2 className="text-5xl font-bold">
            Everything You Need
          </h2>

          <p className="text-xl text-gray-600 mt-5 max-w-2xl">
            Powerful analytics and optimization workflows for modern AI stacks.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >

              <div className="bg-black text-white w-fit p-4 rounded-2xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Home;