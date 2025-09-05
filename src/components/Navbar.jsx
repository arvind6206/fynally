import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav
      className="bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center shadow-md sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex items-center space-x-6">
        <Link
          className="font-bold text-xl hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          to="/"
        >
          Fynally.io
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/resources"
            className="hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            Resources
          </Link>
          <Link
            to="/learning"
            className="hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            Learning
          </Link>
          <Link
            to="/internships"
            className="hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            Internships
          </Link>
          <Link
            to="/employment"
            className="hover:text-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            Employment
          </Link>
        </div>
      </div>

      {/* Theme Switcher */}
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
