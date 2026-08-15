"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useTranslations } from "next-intl";

const themes = ["light", "dark", "system"] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Navbar");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTheme = () => {
    const currentIndex = themes.indexOf(theme as (typeof themes)[number]);

    const nextIndex = (currentIndex + 1) % themes.length;

    setTheme(themes[nextIndex]);
  };

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            onClick={handleTheme}
            variant="ghost"
            className="h-10 w-10 rounded-full bg-background text-dark-blue dark:bg-dark-blue dark:text-white"
          >
            {theme === "system" ? (
              <Monitor size={22} />
            ) : theme === "dark" ? (
              <Moon size={22} />
            ) : (
              <Sun size={22} />
            )}
          </Button>
        }
      />
      <TooltipContent
        className={"bg-dark-blue dark:bg-white text-white dark:text-dark-blue"}
      >
        <p>
          {theme === "system"
            ? t("tooltipTheme.system")
            : theme === "dark"
              ? t("tooltipTheme.dark")
              : t("tooltipTheme.light")}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
