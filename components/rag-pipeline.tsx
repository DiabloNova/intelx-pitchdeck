"use client"

import { FileQuestion, Diamond, Database, Brain, FileText, ListChecks, ArrowRight, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function RagPipeline() {
  const { t, isRTL } = useLanguage()

  const steps = [
    {
      icon: FileQuestion,
      labelKey: "input",
      titleKey: "legal_query",
      gradient: "from-secondary to-muted",
      iconBg: "bg-secondary",
      iconColor: "text-foreground/80",
    },
    {
      icon: Diamond,
      labelKey: "processing",
      titleKey: "context_analyzer",
      subtitleKey: "case_type_history",
      gradient: "from-primary/20 to-primary/5",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      icon: Database,
      labelKey: "retrieval",
      titleKey: "multi_source",
      subtitleKey: "laws_precedents",
      gradient: "from-accent/20 to-accent/5",
      iconBg: "bg-accent/20",
      iconColor: "text-accent",
    },
    {
      icon: Brain,
      labelKey: "synthesis",
      titleKey: "synthesis_engine",
      gradient: "from-primary/20 to-accent/10",
      iconBg: "bg-gradient-to-br from-primary/20 to-accent/20",
      iconColor: "text-primary",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10 sm:mb-16 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-full bg-primary/10 border border-primary/20">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">RAG Pipeline</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 text-balance">
          {t("rag_title")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{t("rag_subtitle")}</p>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 sm:mt-6 rounded-full" />
      </div>

      {/* Pipeline Flow */}
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-primary/5 to-accent/10 rounded-2xl sm:rounded-3xl" />

        <div className="relative p-4 sm:p-6 md:p-8">
          {/* Main Pipeline */}
          <div
            className={cn(
              "flex flex-col lg:flex-row items-center gap-3 sm:gap-4 lg:gap-2",
              isRTL ? "lg:flex-row-reverse" : "",
            )}
          >
            {steps.map((step, index) => (
              <div
                key={step.labelKey}
                className="flex flex-col lg:flex-row items-center w-full lg:w-auto animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Card */}
                <div
                  className={cn(
                    "relative overflow-hidden",
                    "flex flex-col items-center text-center",
                    "p-4 sm:p-5 md:p-6",
                    "rounded-xl sm:rounded-2xl",
                    `bg-gradient-to-br ${step.gradient}`,
                    "border border-border/50",
                    "min-w-[140px] sm:min-w-[160px] w-full lg:w-auto",
                    "shadow-lg shadow-black/5 dark:shadow-black/20",
                    "transition-all duration-300",
                    "hover:shadow-xl hover:scale-[1.02] hover:border-primary/30",
                  )}
                >
                  <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">
                    {t(step.labelKey)}
                  </span>
                  <div
                    className={cn(
                      "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
                      "rounded-xl sm:rounded-2xl",
                      step.iconBg,
                      "flex items-center justify-center mb-3 sm:mb-4",
                      "shadow-inner",
                      "transition-transform duration-300 hover:scale-110",
                    )}
                  >
                    <step.icon
                      className={cn("w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8", step.iconColor)}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-xs sm:text-sm">{t(step.titleKey)}</h3>
                  {step.subtitleKey && (
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{t(step.subtitleKey)}</p>
                  )}
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <>
                    <div
                      className={cn(
                        "hidden lg:flex items-center justify-center",
                        "w-8 sm:w-10 h-8 sm:h-10 mx-1 sm:mx-2",
                        "rounded-full",
                        "bg-gradient-to-r from-primary/10 to-accent/10",
                        "border border-primary/20",
                      )}
                    >
                      <ArrowRight className={cn("w-4 h-4 sm:w-5 sm:h-5 text-primary/60", isRTL && "rotate-180")} />
                    </div>
                    <div className="lg:hidden w-0.5 h-6 sm:h-8 bg-gradient-to-b from-primary/30 to-accent/30 my-1 sm:my-2" />
                  </>
                )}
              </div>
            ))}

            {/* Final Arrow to Outputs */}
            <div
              className={cn(
                "hidden lg:flex items-center justify-center",
                "w-8 sm:w-10 h-8 sm:h-10 mx-1 sm:mx-2",
                "rounded-full",
                "bg-gradient-to-r from-primary/20 to-accent/20",
                "border border-primary/30",
                "shadow-md shadow-primary/10",
              )}
            >
              <ArrowRight className={cn("w-4 h-4 sm:w-5 sm:h-5 text-primary", isRTL && "rotate-180")} />
            </div>
            <div className="lg:hidden w-0.5 h-6 sm:h-8 bg-gradient-to-b from-primary/30 to-accent/30 my-1 sm:my-2" />

            {/* Output Section */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-auto animate-fade-up stagger-5">
              <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">
                {t("output_traceability")}
              </span>

              {/* Output A */}
              <div
                className={cn(
                  "flex items-center gap-3 sm:gap-4 p-3 sm:p-4",
                  "rounded-xl sm:rounded-2xl",
                  "bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5",
                  "border border-primary/30",
                  "shadow-lg shadow-primary/10",
                  "transition-all duration-300",
                  "hover:shadow-xl hover:border-primary/50",
                )}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xs sm:text-sm">{t("draft_document")}</h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{t("petition_memo")}</p>
                </div>
              </div>

              {/* Output B */}
              <div
                className={cn(
                  "flex items-center gap-3 sm:gap-4 p-3 sm:p-4",
                  "rounded-xl sm:rounded-2xl",
                  "bg-gradient-to-br from-accent/15 via-accent/10 to-accent/5",
                  "border border-accent/30",
                  "shadow-lg shadow-accent/10",
                  "transition-all duration-300",
                  "hover:shadow-xl hover:border-accent/50",
                )}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <ListChecks className="w-5 h-5 sm:w-6 sm:h-6 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-xs sm:text-sm">{t("source_attribution")}</h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{t("audit_trail")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
