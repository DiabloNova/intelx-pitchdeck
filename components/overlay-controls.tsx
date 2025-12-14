"use client"

import { Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function OverlayControls() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, isRTL } = useLanguage()

  return (
    <div
      className={cn(
        "fixed bottom-4 sm:bottom-6 z-50 flex flex-col gap-2 sm:gap-3",
        isRTL ? "right-3 sm:right-6" : "left-3 sm:left-6",
      )}
    >
      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className={cn(
          "group relative flex items-center justify-center",
          "w-11 h-11 sm:w-12 sm:h-12",
          "rounded-xl sm:rounded-2xl",
          "bg-gradient-to-br from-card via-card to-secondary",
          "border border-border/50",
          "shadow-lg shadow-black/5 dark:shadow-black/20",
          "hover:shadow-xl hover:shadow-primary/10",
          "hover:border-primary/40",
          "transition-all duration-300 ease-out",
          "hover:scale-105 active:scale-95",
          "backdrop-blur-sm",
        )}
        aria-label={language === "fa" ? "Switch to English" : "تغییر به فارسی"}
      >
        <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />

        {/* Tooltip */}
        <span
          className={cn(
            "absolute text-xs font-medium",
            "bg-card/95 backdrop-blur-sm",
            "border border-border/50",
            "px-2.5 py-1.5 rounded-lg",
            "shadow-lg shadow-black/10",
            "opacity-0 group-hover:opacity-100",
            "scale-95 group-hover:scale-100",
            "transition-all duration-200",
            "whitespace-nowrap pointer-events-none",
            "hidden sm:block",
            isRTL ? "right-14" : "left-14",
          )}
        >
          {language === "fa" ? "English" : "فارسی"}
        </span>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={cn(
          "group relative flex items-center justify-center",
          "w-11 h-11 sm:w-12 sm:h-12",
          "rounded-xl sm:rounded-2xl",
          "bg-gradient-to-br from-card via-card to-secondary",
          "border border-border/50",
          "shadow-lg shadow-black/5 dark:shadow-black/20",
          "hover:shadow-xl hover:shadow-primary/10",
          "hover:border-primary/40",
          "transition-all duration-300 ease-out",
          "hover:scale-105 active:scale-95",
          "backdrop-blur-sm",
        )}
        aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
        ) : (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
        )}

        {/* Tooltip */}
        <span
          className={cn(
            "absolute text-xs font-medium",
            "bg-card/95 backdrop-blur-sm",
            "border border-border/50",
            "px-2.5 py-1.5 rounded-lg",
            "shadow-lg shadow-black/10",
            "opacity-0 group-hover:opacity-100",
            "scale-95 group-hover:scale-100",
            "transition-all duration-200",
            "whitespace-nowrap pointer-events-none",
            "hidden sm:block",
            isRTL ? "right-14" : "left-14",
          )}
        >
          {theme === "light" ? "Dark" : "Light"}
        </span>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
      </button>
    </div>
  )
}
