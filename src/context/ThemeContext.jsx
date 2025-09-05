import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage if available
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Apply theme class and save to localStorage whenever it changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easier access
export const useTheme = () => useContext(ThemeContext);
