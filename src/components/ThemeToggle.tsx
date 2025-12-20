"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="ml-2 rounded p-2 bg-secondary text-secondary-foreground hover:opacity-90 transition"
    >
      {current === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
