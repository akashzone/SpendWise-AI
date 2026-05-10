import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Audit",
      path: "/audit",
    },
    {
      name: "Report",
      path: "/report/local",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-blue-500"
        >
          SpendWise AI
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg transition ${
                location.pathname === link.path
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="/audit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
          >
            Start Audit
          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;