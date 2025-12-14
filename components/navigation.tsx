"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("cover")
  const { t, isRTL, language } = useLanguage()

  const sections = [
    { id: "cover", labelKey: "cover" },
    { id: "adaptability", labelKey: "adaptability" },
    { id: "architecture", labelKey: "architecture" },
    { id: "pipeline", labelKey: "pipeline" },
    { id: "roadmap", labelKey: "roadmap" },
    { id: "comparison", labelKey: "comparison" },
    ...(language === "fa" ? [{ id: "document", labelKey: "document" }] : []),
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [language])

  return (
    <nav
      className={cn(
        "fixed top-1/2 -translate-y-1/2 z-50",
        "flex flex-col gap-2 sm:gap-3",
        "p-1.5 sm:p-2",
        "bg-card/60 backdrop-blur-md",
        "border border-border/30",
        "rounded-xl sm:rounded-2xl",
        "shadow-lg shadow-black/5 dark:shadow-black/20",
        isRTL ? "left-2 sm:left-4 md:left-6" : "right-2 sm:right-4 md:right-6",
      )}
    >
      {sections.map(({ id, labelKey }) => (
        <a
          key={id}
          href={`#${id}`}
          className={cn(
            "group relative flex items-center gap-2 sm:gap-3 p-1",
            "transition-all duration-300",
            isRTL ? "flex-row-reverse" : "",
          )}
        >
          {/* Label - hidden on mobile, shown on hover for desktop */}
          <span
            className={cn(
              "absolute text-xs font-medium whitespace-nowrap",
              "opacity-0 group-hover:opacity-100",
              "scale-95 group-hover:scale-100",
              "transition-all duration-200",
              "text-primary",
              "bg-card/95 backdrop-blur-sm",
              "px-2 py-1 rounded-md",
              "border border-border/50",
              "shadow-md",
              "hidden md:block",
              isRTL ? "right-8" : "left-8",
            )}
          >
            {t(labelKey)}
          </span>

          {/* Dot indicator */}
          <span
            className={cn(
              "relative w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full",
              "border-2 transition-all duration-300",
              activeSection === id
                ? "bg-primary border-primary scale-110 shadow-md shadow-primary/30"
                : "border-muted-foreground/40 hover:border-primary/60 hover:scale-105",
            )}
          >
            {/* Active glow */}
            {activeSection === id && <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />}
          </span>
        </a>
      ))}
    </nav>
  )
}
