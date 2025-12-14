"use client"

import { AlertTriangle, Check, Cpu, Network, Box, Layers, ArrowRight, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function AdaptabilityDiagram() {
  const { t, isRTL } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10 sm:mb-16 animate-fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
          {t("adaptability_title")}
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        {/* Left Column - Traditional Model */}
        <div className="relative animate-fade-up stagger-1">
          <div
            className={cn(
              "relative overflow-hidden",
              "bg-gradient-to-br from-card via-card to-secondary/30",
              "border border-border/50",
              "rounded-2xl sm:rounded-3xl",
              "p-5 sm:p-6 md:p-8 h-full",
              "shadow-lg shadow-black/5 dark:shadow-black/20",
              "transition-all duration-500",
              "hover:shadow-xl hover:border-border",
            )}
          >
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_var(--foreground)_1px,_transparent_1px)] bg-[length:24px_24px]" />

            {/* Header */}
            <div className="relative text-center mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-muted/50 rounded-full text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4">
                <Box className="w-3 h-3 sm:w-4 sm:h-4" />
                {t("traditional_model")}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground/70">
                {t("post_hoc_adaptation")}
              </h3>
            </div>

            {/* Visual */}
            <div className="relative flex flex-col items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* Western AI */}
              <div
                className={cn(
                  "flex items-center gap-3 sm:gap-4 p-3 sm:p-4",
                  "bg-secondary/60 backdrop-blur-sm",
                  "rounded-xl border border-border/30",
                  "w-full max-w-xs",
                  "transition-all duration-300 hover:bg-secondary/80",
                )}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                  <Box className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-foreground/70 text-sm sm:text-base">{t("generic_ai")}</p>
                  <p className="text-xs text-muted-foreground">{t("western_design")}</p>
                </div>
              </div>

              {/* Gap indicator with animation */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-border to-destructive/30" />
                <div
                  className={cn(
                    "flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5",
                    "bg-gradient-to-r from-destructive/10 via-destructive/20 to-destructive/10",
                    "rounded-xl border border-destructive/30",
                    "shadow-lg shadow-destructive/10",
                    "animate-pulse",
                  )}
                >
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                  <span className="text-xs sm:text-sm font-semibold text-destructive">{t("mismatch_gap")}</span>
                </div>
                <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-destructive/30 to-border" />
              </div>

              {/* Iranian Context */}
              <div
                className={cn(
                  "flex items-center gap-3 sm:gap-4 p-3 sm:p-4",
                  "bg-secondary/60 backdrop-blur-sm",
                  "rounded-xl border border-border/30",
                  "w-full max-w-xs",
                  "transition-all duration-300 hover:bg-secondary/80",
                )}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-muted/50 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-foreground/70 text-sm sm:text-base">{t("iranian_context")}</p>
                  <p className="text-xs text-muted-foreground">{t("unique_requirements")}</p>
                </div>
              </div>
            </div>

            {/* Callout */}
            <div
              className={cn(
                "text-center p-3 sm:p-4",
                "bg-destructive/5 backdrop-blur-sm",
                "rounded-xl border border-destructive/20",
              )}
            >
              <p className="text-xs sm:text-sm font-medium text-destructive/80">{t("superficial_integration")}</p>
            </div>
          </div>
        </div>

        {/* Arrow between columns (desktop only) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className={cn(
              "w-12 h-12 rounded-full",
              "bg-gradient-to-br from-primary/20 to-accent/20",
              "border-2 border-primary/30",
              "flex items-center justify-center",
              "shadow-lg shadow-primary/10",
            )}
          >
            <ArrowRight className={cn("w-5 h-5 text-primary", isRTL && "rotate-180")} />
          </div>
        </div>

        {/* Right Column - IntelX Model */}
        <div className="relative animate-fade-up stagger-2">
          <div
            className={cn(
              "relative overflow-hidden",
              "bg-gradient-to-br from-card via-primary/5 to-accent/5",
              "border-2 border-primary/30",
              "rounded-2xl sm:rounded-3xl",
              "p-5 sm:p-6 md:p-8 h-full",
              "shadow-xl shadow-primary/10",
              "transition-all duration-500",
              "hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50",
            )}
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

            {/* Header */}
            <div className="relative text-center mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 rounded-full text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                {t("intelx_model")}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                {t("structural_adaptability")}
              </h3>
            </div>

            {/* Visual - Integrated System */}
            <div className="relative flex flex-col items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="relative w-full max-w-xs">
                {/* Iranian Context as Foundation */}
                <div
                  className={cn(
                    "p-4 sm:p-6",
                    "bg-gradient-to-br from-secondary via-card to-secondary/50",
                    "rounded-2xl border border-primary/20",
                    "shadow-inner",
                  )}
                >
                  {/* Organic AI Network */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                      <div
                        className={cn(
                          "relative w-16 h-16 sm:w-20 sm:h-20",
                          "bg-gradient-to-br from-primary/20 to-accent/20",
                          "rounded-2xl border border-primary/30",
                          "flex items-center justify-center",
                          "shadow-lg shadow-primary/20",
                        )}
                      >
                        <Network className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={1.5} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-primary/60" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">
                      {t("integrated_legal")}
                    </p>
                    <p className="text-xs text-muted-foreground">{t("organic_growth")}</p>
                  </div>

                  {/* Core Label */}
                  <div
                    className={cn(
                      "mt-3 sm:mt-4 p-2.5 sm:p-3",
                      "bg-gradient-to-r from-primary/10 via-card to-primary/10",
                      "rounded-xl border border-primary/10",
                    )}
                  >
                    <p className="text-xs text-center text-primary font-semibold">{t("core_integration")}</p>
                  </div>
                </div>

                {/* Connection indicators */}
                <div className="absolute -left-2 sm:-left-4 top-1/2 w-2 sm:w-4 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                <div className="absolute -right-2 sm:-right-4 top-1/2 w-2 sm:w-4 h-px bg-gradient-to-l from-primary/50 to-transparent" />
              </div>
            </div>

            {/* Callout */}
            <div
              className={cn(
                "text-center p-3 sm:p-4",
                "bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10",
                "rounded-xl border border-primary/20",
                "shadow-lg shadow-primary/5",
              )}
            >
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <p className="text-xs sm:text-sm font-semibold text-primary">{t("deep_integration")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
