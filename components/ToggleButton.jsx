"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { THEMES } from "../constants/theme";

const ToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(newTheme);
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:text-primary dark:hover:text-primary transition"
      aria-label="Toggle theme"
    >
      {theme === THEMES.DARK ? <Sun /> : <Moon />}
    </button>
  );
};

export default ToggleButton;
