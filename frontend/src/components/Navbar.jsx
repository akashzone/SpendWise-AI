import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-black text-white px-8 py-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <h1 className="text-2xl font-bold text-blue-400">
                    SpendWise AI
                </h1>

                <div className="flex gap-6 text-lg">

                    <Link
                        to="/"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/audit"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        Audit
                    </Link>

                    <Link
                        to="/report/1234"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        Report
                    </Link>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;