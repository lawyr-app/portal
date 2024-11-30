"use client";

import React from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./Provider";

type ThemeToggleProps = React.FC<{
  className?: string;
}>;

const ThemeToggle: ThemeToggleProps = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={className}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
