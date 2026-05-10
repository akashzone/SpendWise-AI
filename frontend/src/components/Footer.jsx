import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              SpendWise AI
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              AI spend optimization platform designed to help
              organizations reduce unnecessary tooling costs
              and improve AI stack efficiency.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Navigation
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/audit"
                className="hover:text-white transition"
              >
                Audit
              </Link>

              <Link
                to="/report/local"
                className="hover:text-white transition"
              >
                Report
              </Link>

            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Platform
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                AI Cost Optimization
              </p>

              <p>
                Intelligent Recommendations
              </p>

              <p>
                SaaS Spend Analytics
              </p>

              <p>
                Internship Assignment Project
              </p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 SpendWise AI. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built using React, Tailwind CSS, Express & MongoDB
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;