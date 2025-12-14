"use client"

import { Box, Cpu, FileSearch, Eye, EyeOff, Cog, Sparkles, Check, X, Trophy } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function ComparativeAdvantage() {
  const { t } = useLanguage()

  const comparisons = [
    {
      aspectKey: "approach",
      conventional: { icon: Box, labelKey: "generic_ai_label" },
      intelx: { icon: Cpu, labelKey: "custom_built" },
    },
    {
      aspectKey: "legal_understanding",
      conventional: { icon: FileSearch, labelKey: "surface_analysis" },
      intelx: { icon: Sparkles, labelKey: "deep_interpretive" },
    },
    {
      aspectKey: "transparency_label",
      conventional: { icon: EyeOff, labelKey: "black_box" },
      intelx: { icon: Eye, labelKey: "audit_visibility" },
    },
    {
      aspectKey: "goal",
      conventional: { icon: Cog, labelKey: "task_automation" },
      intelx: { icon: Sparkles, labelKey: "professional_aug" },
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10 sm:mb-16 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-full bg-primary/10 border border-primary/20">
          <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">Paradigm Shift</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">
          {t("comparison_title")}
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
      </div>

      {/* Comparison Table - Card based for mobile */}
      <div
        className={cn(
          "bg-card",
          "border border-border/50",
          "rounded-2xl sm:rounded-3xl",
          "overflow-hidden",
          "shadow-xl shadow-black/5 dark:shadow-black/20",
        )}
      >
        {/* Header - Hidden on mobile, shown as columns on desktop */}
        <div className="hidden md:grid md:grid-cols-3 border-b border-border">
          <div className="p-4 sm:p-6 bg-secondary/30">
            <span className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {t("aspect")}
            </span>
          </div>
          <div className="p-4 sm:p-6 bg-muted/30 border-l border-border">
            <span className="text-xs sm:text-sm font-medium text-muted-foreground/70">{t("conventional_tools")}</span>
          </div>
          <div className="p-4 sm:p-6 bg-gradient-to-r from-primary/10 to-accent/5 border-l border-primary/20">
            <span className="text-xs sm:text-sm font-bold text-primary">{t("intelx_platform")}</span>
          </div>
        </div>

        {/* Rows */}
        {comparisons.map((row, index) => (
          <div
            key={row.aspectKey}
            className={cn("animate-fade-up", index < comparisons.length - 1 && "border-b border-border/50")}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Mobile: Stacked layout */}
            <div className="md:hidden p-4">
              <h4 className="font-semibold text-foreground mb-3">{t(row.aspectKey)}</h4>
              <div className="grid grid-cols-2 gap-3">
                {/* Conventional */}
                <div className={cn("p-3 rounded-xl", "bg-muted/30 border border-border/50")}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                      <row.conventional.icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                    </div>
                    <X className="w-4 h-4 text-muted-foreground/40 ml-auto" />
                  </div>
                  <p className="text-xs text-foreground/60">{t(row.conventional.labelKey)}</p>
                </div>

                {/* IntelX */}
                <div
                  className={cn(
                    "p-3 rounded-xl",
                    "bg-gradient-to-br from-primary/10 to-accent/5",
                    "border border-primary/20",
                  )}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <row.intelx.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <Check className="w-4 h-4 text-primary ml-auto" />
                  </div>
                  <p className="text-xs text-foreground font-medium">{t(row.intelx.labelKey)}</p>
                </div>
              </div>
            </div>

            {/* Desktop: Table row */}
            <div className="hidden md:grid md:grid-cols-3">
              {/* Aspect */}
              <div className="p-4 sm:p-6 bg-secondary/10 flex items-center">
                <span className="font-semibold text-foreground text-sm">{t(row.aspectKey)}</span>
              </div>

              {/* Conventional */}
              <div
                className={cn(
                  "p-4 sm:p-6 border-l border-border",
                  "bg-muted/10",
                  "flex items-center gap-3 sm:gap-4",
                  "transition-colors duration-300 hover:bg-muted/20",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl",
                    "bg-secondary",
                    "flex items-center justify-center flex-shrink-0",
                    "shadow-inner",
                  )}
                >
                  <row.conventional.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-xs sm:text-sm text-foreground/60 flex-1">{t(row.conventional.labelKey)}</p>
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/30 flex-shrink-0" />
              </div>

              {/* IntelX */}
              <div
                className={cn(
                  "p-4 sm:p-6 border-l border-primary/20",
                  "bg-gradient-to-r from-primary/5 to-accent/5",
                  "flex items-center gap-3 sm:gap-4",
                  "transition-all duration-300 hover:from-primary/10 hover:to-accent/10",
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-xl",
                    "bg-gradient-to-br from-primary/20 to-accent/10",
                    "flex items-center justify-center flex-shrink-0",
                    "shadow-lg shadow-primary/10",
                  )}
                >
                  <row.intelx.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-xs sm:text-sm text-foreground font-medium flex-1">{t(row.intelx.labelKey)}</p>
                <div
                  className={cn(
                    "w-5 h-5 sm:w-6 sm:h-6 rounded-full",
                    "bg-primary/20",
                    "flex items-center justify-center flex-shrink-0",
                  )}
                >
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 sm:mt-12 text-center animate-fade-up stagger-5">
        <div
          className={cn(
            "inline-flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4",
            "bg-gradient-to-r from-primary/10 via-card to-accent/10",
            "rounded-xl sm:rounded-2xl",
            "border border-primary/20",
            "shadow-lg shadow-primary/10",
            "transition-all duration-300",
            "hover:shadow-xl hover:scale-[1.02]",
          )}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground">{t("summary")}</span>
        </div>
      </div>
    </div>
  )
}
