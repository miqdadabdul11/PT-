"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-sand/20 border border-sand/40 flex items-center justify-center text-charcoal/40" aria-hidden="true">
        <Sun className="w-4 h-4 opacity-50" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-full bg-sand/30 dark:bg-dark-surface border border-sand/60 dark:border-dark-surfaceBorder text-charcoal dark:text-dark-text hover:bg-sand/60 dark:hover:bg-wine/30 flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
      aria-label={isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
      title={isDark ? "Beralih ke Mode Terang" : "Beralih ke Mode Gelap"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-brass" />
      ) : (
        <Moon className="w-4 h-4 text-burgundy" />
      )}
    </button>
  );
};
