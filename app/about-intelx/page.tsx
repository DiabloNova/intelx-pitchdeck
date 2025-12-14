"use client"

import { Header } from "@/components/header"
import { OverlayControls } from "@/components/overlay-controls"
import { useLanguage } from "@/contexts/language-context"
import { Sparkles, Shield, Eye, Brain, Scale, FileCheck, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AboutIntelXPage() {
  const { t, isRTL, mounted } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: t("feature_1_title"),
      desc: t("feature_1_desc"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Scale,
      title: t("feature_2_title"),
      desc: t("feature_2_desc"),
      gradient: "from-primary to-accent",
    },
    {
      icon: Eye,
      title: t("feature_3_title"),
      desc: t("feature_3_desc"),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      title: t("feature_4_title"),
      desc: t("feature_4_desc"),
      gradient: "from-violet-500 to-purple-500",
    },
  ]

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <OverlayControls />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30 mb-6 sm:mb-8 animate-fade-up">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-up stagger-1">
            {t("about_intelx_title")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-6 sm:mb-8 animate-fade-up stagger-2">
            {t("about_intelx_subtitle")}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-3">
            {t("about_intelx_intro")}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Vision Card */}
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 mb-4 sm:mb-6">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  {t("about_intelx_vision_title")}
                </h2>

                <p className="text-muted-foreground leading-relaxed">{t("about_intelx_vision")}</p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/10">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 mb-4 sm:mb-6">
                  <FileCheck className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  {t("about_intelx_mission_title")}
                </h2>

                <p className="text-muted-foreground leading-relaxed">{t("about_intelx_mission")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-12 sm:mb-16">
            {t("about_intelx_features_title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br mb-4",
                      feature.gradient,
                    )}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border/50">
            <Cpu className="w-16 h-16 mx-auto text-primary mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {isRTL ? "آماده تحول در حقوق هستید؟" : "Ready to Transform Legal Work?"}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              {isRTL
                ? "با اینتل‌ایکس، آینده فناوری حقوقی را تجربه کنید"
                : "Experience the future of legal technology with IntelX"}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
