"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProviders = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage when the component mounts
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className={`${theme === "light" ? "" : "dark"}`}>{children}</main>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProviders };
