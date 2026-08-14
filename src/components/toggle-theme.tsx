"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 p-1 dark:border-gray-800 dark:bg-gray-900">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
          theme === "light"
            ? "bg-white text-black shadow-sm dark:bg-gray-800 dark:text-white"
            : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
        }`}
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
          theme === "dark"
            ? "bg-white text-black shadow-sm dark:bg-gray-800 dark:text-white"
            : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
        }`}
      >
        <Moon className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("system")}
        className={`flex h-9 w-9 items-center justify-center rounded-lg transition ${
          theme === "system"
            ? "bg-white text-black shadow-sm dark:bg-gray-800 dark:text-white"
            : "text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
        }`}
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}
