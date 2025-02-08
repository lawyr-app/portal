import React from "react";
import { Moon, Sun } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useTheme } from "@/context/themeContext";

const ThemeMenu = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <DropdownMenuItem onClick={toggleTheme}>
      <DropdownMenuItem className="flex flex-row items-center justify-between w-full p-0">
        <span>Theme</span>
        {isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </DropdownMenuItem>
    </DropdownMenuItem>
  );
};

export default ThemeMenu;
