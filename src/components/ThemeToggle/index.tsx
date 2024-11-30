"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type ThemeToggleProps = React.FC<{
  className?: string;
}>;

const ThemeToggle: ThemeToggleProps = ({ className = "" }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      aria-label="Toggle dark mode"
      className={className}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ThemeToggle;
