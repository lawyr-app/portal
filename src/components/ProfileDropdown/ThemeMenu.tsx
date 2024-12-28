import React from "react";
import { Moon, Sun } from "lucide-react";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useTheme } from "../ThemeToggle/Provider";

const ThemeMenu = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <DropdownMenuItem onClick={toggleTheme}>
      <DropdownMenuItem className="flex flex-row items-center justify-between w-full p-0">
        <span>Theme</span>
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </DropdownMenuItem>
    </DropdownMenuItem>
  );
};

export default ThemeMenu;
