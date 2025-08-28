import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const tabs = [
  { to: "/", label: "Analyze" },
  { to: "/info", label: "Details" },
  { to: "/history", label: "History" },
  { to: "/settings", label: "Settings" },
  { to: "/admin", label: "Admin" },
];

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 py-2 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
        DR Screener
      </Link>
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <ThemeToggle />
    </nav>
  );
}
