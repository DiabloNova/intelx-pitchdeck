"use client"

import { ScrollText, BookOpen, Building, Settings, User, Lightbulb, ArrowUp, ArrowDown, Layers } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface LayerConfig {
  id: number
  labelKey: string
  titleKey: string
  descKey: string
  MainIcon: LucideIcon
  SubIcon: LucideIcon
  gradient: string
  borderColor: string
  iconBg: string
  iconColor: string
}

export function ArchitectureDiagram() {
  const { t } = useLanguage()

  const layers: LayerConfig[] = [
    {
      id: 3,
      labelKey: "layer3",
      titleKey: "socio_professional",
      descKey: "professional_augmentation",
      MainIcon: User,
      SubIcon: Lightbulb,
      gradient: "from-primary/20 via-primary/10 to-accent/10",
      borderColor: "border-primary/40",
      iconBg: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      id: 2,
      labelKey: "layer2",
      titleKey: "procedural_institutional",
      descKey: "procedural_compliance",
      MainIcon: Building,
      SubIcon: Settings,
      gradient: "from-secondary via-card to-secondary",
      borderColor: "border-border",
      iconBg: "bg-secondary",
      iconColor: "text-foreground/70",
    },
    {
      id: 1,
      labelKey: "layer1",
      titleKey: "normative_legal",
      descKey: "integrated_corpus",
      MainIcon: ScrollText,
      SubIcon: BookOpen,
      gradient: "from-accent/10 via-primary/5 to-accent/10",
      borderColor: "border-primary/50",
      iconBg: "bg-primary/15",
      iconColor: "text-primary",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10 sm:mb-16 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4 rounded-full bg-primary/10 border border-primary/20">
          <Layers className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">Multi-Layer Framework</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4 text-balance">
          {t("architecture_title")}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("architecture_subtitle")}
        </p>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 sm:mt-6 rounded-full" />
      </div>

      {/* Architecture Layers */}
      <div className="relative space-y-4 sm:space-y-6">
        {layers.map((layer, index) => (
          <div key={layer.id} className={cn("relative animate-fade-up", `stagger-${index + 1}`)}>
            {/* Layer Card */}
            <div
              className={cn(
                "relative overflow-hidden",
                `bg-gradient-to-r ${layer.gradient}`,
                `border-2 ${layer.borderColor}`,
                "rounded-xl sm:rounded-2xl",
                "p-4 sm:p-6 md:p-8",
                "shadow-lg shadow-black/5 dark:shadow-black/20",
                "transition-all duration-500",
                "hover:shadow-xl hover:scale-[1.01]",
                layer.id === 1 && "shadow-xl shadow-primary/10",
              )}
            >
              {/* Background glow for bottom layer */}
              {layer.id === 1 && <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />}

              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Icon container */}
                <div
                  className={cn(
                    "flex-shrink-0",
                    "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20",
                    "rounded-xl sm:rounded-2xl",
                    layer.iconBg,
                    "flex items-center justify-center",
                    "shadow-inner",
                    "transition-transform duration-300",
                    "group-hover:scale-105",
                  )}
                >
                  <div className="relative">
                    <layer.MainIcon
                      className={cn("w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10", layer.iconColor)}
                      strokeWidth={1.5}
                    />
                    <layer.SubIcon
                      className={cn(
                        "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5",
                        layer.iconColor,
                        "absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2",
                      )}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <span
                    className={cn(
                      "inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1",
                      layer.id === 1 || layer.id === 3 ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {t(layer.labelKey)}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground">{t(layer.titleKey)}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2 leading-relaxed">
                    {t(layer.descKey)}
                  </p>
                </div>
              </div>
            </div>

            {/* Data Flow Arrows between layers */}
            {index < layers.length - 1 && (
              <div className="flex justify-center gap-8 sm:gap-16 md:gap-24 -my-1 sm:-my-2 relative z-10">
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 rounded-full",
                      "bg-gradient-to-br from-primary/20 to-accent/10",
                      "border border-primary/30",
                      "flex items-center justify-center",
                      "shadow-md shadow-primary/10",
                    )}
                  >
                    <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 whitespace-nowrap">
                    {t("compliant_output")}
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 rounded-full",
                      "bg-gradient-to-br from-accent/20 to-primary/10",
                      "border border-accent/30",
                      "flex items-center justify-center",
                      "shadow-md shadow-accent/10",
                    )}
                  >
                    <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 whitespace-nowrap">
                    {t("data_flow")} & {t("transparency")}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/30 animate-fade-up stagger-5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">{t("data_flow")}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {t("compliant_output")} & {t("transparency")}
          </span>
        </div>
      </div>
    </div>
  )
}
