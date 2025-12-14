"use client"

import { FlaskConical, RefreshCw, GitBranch, Globe, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function ImplementationRoadmap() {
  const { t, isRTL } = useLanguage()

  const phases = [
    {
      id: 1,
      icon: FlaskConical,
      titleKey: "pilot_phase",
      periodKey: "months_1_4",
      descriptionKey: "pilot_desc",
      color: "from-chart-2 to-chart-2/70",
      dotColor: "bg-chart-2",
      iconColor: "text-chart-2",
    },
    {
      id: 2,
      icon: RefreshCw,
      titleKey: "feedback_phase",
      periodKey: "months_3_6",
      descriptionKey: "feedback_desc",
      color: "from-chart-3 to-chart-3/70",
      dotColor: "bg-chart-3",
      iconColor: "text-chart-3",
    },
    {
      id: 3,
      icon: GitBranch,
      titleKey: "scaling_phase",
      periodKey: "months_6_12",
      descriptionKey: "scaling_desc",
      color: "from-chart-4 to-chart-4/70",
      dotColor: "bg-chart-4",
      iconColor: "text-chart-4",
    },
    {
      id: 4,
      icon: Globe,
      titleKey: "knowledge_phase",
      periodKey: "year_2_plus",
      descriptionKey: "knowledge_desc",
      color: "from-primary to-primary/70",
      dotColor: "bg-primary",
      iconColor: "text-primary",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10 sm:mb-16 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-full bg-primary/10 border border-primary/20">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">Implementation Timeline</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">
          {t("roadmap_title")}
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line - vertical on mobile, horizontal on desktop */}
        <div className="hidden md:block absolute left-0 right-0 top-24 h-1 bg-gradient-to-r from-chart-2 via-chart-3 via-chart-4 to-primary rounded-full" />
        <div className="md:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-chart-2 via-chart-3 via-chart-4 to-primary rounded-full" />

        {/* Phases - stacked on mobile, horizontal on desktop */}
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8 md:gap-4">
          {phases.map((phase, index) => (
            <div
              key={phase.id}
              className={cn("relative animate-fade-up", "md:pt-12")}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Milestone dot */}
              <div
                className={cn(
                  "absolute",
                  // Mobile: left side of the card
                  "left-0 top-1/2 -translate-y-1/2 md:translate-y-0",
                  // Desktop: top center
                  "md:left-1/2 md:-translate-x-1/2 md:top-0",
                  "w-10 h-10 sm:w-12 sm:h-12",
                  "rounded-full",
                  `bg-gradient-to-br ${phase.color}`,
                  "flex items-center justify-center",
                  "border-4 border-background",
                  "shadow-lg",
                  "z-10",
                )}
              >
                <phase.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
              </div>

              {/* Phase Card */}
              <div
                className={cn(
                  "relative",
                  // Mobile: offset for the dot
                  "ml-14 sm:ml-16 md:ml-0",
                  "bg-gradient-to-br from-card via-card to-secondary/30",
                  "border border-border/50",
                  "rounded-xl sm:rounded-2xl",
                  "p-4 sm:p-5 md:p-6",
                  "shadow-lg shadow-black/5 dark:shadow-black/20",
                  "transition-all duration-300",
                  "hover:shadow-xl hover:border-primary/30 hover:scale-[1.02]",
                )}
              >
                {/* Period badge */}
                <div
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 mb-2 sm:mb-3",
                    "rounded-full",
                    "bg-gradient-to-r",
                    phase.color.replace("to-", "to-").replace("/70", "/20"),
                    "border border-current/20",
                  )}
                >
                  <span className={cn("text-[10px] sm:text-xs font-bold", phase.iconColor)}>{t(phase.periodKey)}</span>
                </div>

                <h3 className="font-bold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{t(phase.titleKey)}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{t(phase.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/30 animate-fade-up stagger-5">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full",
                "bg-card border border-border/50",
                "shadow-sm",
              )}
            >
              <div className={cn("w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full", phase.dotColor)} />
              <phase.icon className={cn("w-3 h-3 sm:w-4 sm:h-4", phase.iconColor)} strokeWidth={1.5} />
              <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">{t(phase.titleKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
