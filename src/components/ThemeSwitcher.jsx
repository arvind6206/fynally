import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  // Load theme from localStorage if available, else default to light
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply theme to html/body
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeSwitcher;
