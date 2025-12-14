"use client"

import { NetworkPattern } from "./network-pattern"
import { useLanguage } from "@/contexts/language-context"
import { ChevronDown } from "lucide-react"

export function CoverPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-2s" }}
      />

      {/* Network pattern overlay */}
      <NetworkPattern />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-up">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-primary">INTELX Platform</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 text-balance animate-fade-up stagger-1">
          {t("title")}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground/80 mb-3 sm:mb-4 leading-relaxed text-balance animate-fade-up stagger-2">
          {t("subtitle")}
        </p>

        {/* Decorative line with glow */}
        <div className="relative w-24 sm:w-32 h-1 mx-auto my-6 sm:my-8 animate-fade-up stagger-3">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full blur-sm" />
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary font-medium tracking-wide text-balance animate-fade-up stagger-4">
          {t("proposal_subtitle")}
        </p>
      </div>

      {/* Logo section */}
      <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 px-4 sm:px-8 animate-fade-up stagger-5">
        <div
          className={cn(
            "max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8",
            "pt-6 sm:pt-8 border-t border-border/20",
            isRTL ? "sm:flex-row-reverse" : "",
          )}
        >
          <div className={cn("text-center", isRTL ? "sm:text-right" : "sm:text-left")}>
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mb-0.5 sm:mb-1">
              {t("client")}
            </p>
            <p className="text-xs sm:text-sm font-medium text-foreground/70">{t("client_name")}</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-border/50 to-transparent" />

          <div className={cn("text-center", isRTL ? "sm:text-left" : "sm:text-right")}>
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mb-0.5 sm:mb-1">
              {t("proponent")}
            </p>
            <p className="text-xs sm:text-sm font-medium text-foreground/70">{t("company_name")}</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  )
}

// Helper function
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
