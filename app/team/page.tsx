"use client"

import { Header } from "@/components/header"
import { OverlayControls } from "@/components/overlay-controls"
import { useLanguage } from "@/contexts/language-context"
import { Users, Lightbulb, Award, Heart, Handshake, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function TeamPage() {
  const { t, isRTL, mounted } = useLanguage()

  const values = [
    { icon: Lightbulb, label: t("value_1"), color: "from-yellow-500 to-orange-500" },
    { icon: Award, label: t("value_2"), color: "from-blue-500 to-cyan-500" },
    { icon: Heart, label: t("value_3"), color: "from-rose-500 to-pink-500" },
    { icon: Handshake, label: t("value_4"), color: "from-emerald-500 to-teal-500" },
  ]

  const team = [
    {
      role: t("team_ceo"),
      name: t("team_ceo_name"),
      desc: t("team_ceo_desc"),
      gradient: "from-primary to-accent",
    },
    {
      role: t("team_coo"),
      name: t("team_coo_name"),
      desc: t("team_coo_desc"),
      gradient: "from-accent to-primary",
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
      <section className="relative min-h-[50vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/30 mb-6 sm:mb-8 animate-fade-up">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-up stagger-1">
            {t("team_title")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-6 sm:mb-8 animate-fade-up stagger-2">
            {t("team_subtitle")}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-3">
            {t("team_intro")}
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Decorative gradient */}
                <div
                  className={cn("absolute top-0 left-0 right-0 h-2 rounded-t-3xl bg-gradient-to-r", member.gradient)}
                />

                <div className="relative pt-4">
                  {/* Avatar placeholder */}
                  <div
                    className={cn(
                      "w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6 shadow-xl group-hover:scale-105 transition-transform duration-500",
                      member.gradient,
                    )}
                  >
                    <User className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                  </div>

                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {member.role}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{member.name}</h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-12 sm:mb-16">
            {t("team_values_title")}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="group relative p-4 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg text-center"
                >
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300",
                      value.color,
                    )}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  <h3 className="text-sm sm:text-base font-semibold text-foreground">{value.label}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
