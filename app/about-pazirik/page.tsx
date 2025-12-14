"use client"

import { Header } from "@/components/header"
import { OverlayControls } from "@/components/overlay-controls"
import { useLanguage } from "@/contexts/language-context"
import { Building2, Truck, Landmark, GraduationCap, Network, Globe, Handshake, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AboutPazirikPage() {
  const { t, isRTL, mounted } = useLanguage()

  const services = [
    {
      icon: Truck,
      title: t("service_1_title"),
      desc: t("service_1_desc"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Landmark,
      title: t("service_2_title"),
      desc: t("service_2_desc"),
      gradient: "from-primary to-accent",
    },
    {
      icon: GraduationCap,
      title: t("service_3_title"),
      desc: t("service_3_desc"),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Network,
      title: t("service_4_title"),
      desc: t("service_4_desc"),
      gradient: "from-violet-500 to-purple-500",
    },
  ]

  const stats = [
    { value: "۱۳۹۸", label: isRTL ? "سال تأسیس" : "Year Founded" },
    { value: "۲B", label: isRTL ? "ریال سرمایه" : "Rials Capital" },
    { value: "۵۵۲۱۵۳", label: isRTL ? "شماره ثبت" : "Registration No." },
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
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-2xl shadow-accent/30 mb-6 sm:mb-8 animate-fade-up">
            <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-up stagger-1">
            {t("about_pazirik_title")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-accent font-medium mb-6 sm:mb-8 animate-fade-up stagger-2">
            {t("about_pazirik_subtitle")}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up stagger-3">
            {t("about_pazirik_intro")}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Establishment Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-10 rounded-3xl bg-card border border-border/50 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {t("about_pazirik_establishment_title")}
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {t("about_pazirik_establishment")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-12 sm:mb-16">
            {t("about_pazirik_services_title")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  <div
                    className={cn(
                      "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br mb-4",
                      service.gradient,
                    )}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Iran-Russia Trade Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-accent/10 via-card to-primary/10 border border-border/50">
            <Globe className="w-16 h-16 mx-auto text-accent mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {isRTL ? "تخصص در تجارت با روسیه" : "Expertise in Russia Trade"}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              {isRTL
                ? "شرکت راشا گستر پازیریک می‌تواند با سال‌ها تجربه در این راستا بهترین مشاور و رابط شما برای تجارت در این کشور پهناور باشد."
                : "Rasha Gostar Pazirik can be your best consultant and liaison for trade in this vast country with years of experience."}
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">
                {isRTL ? "همراه مطمئن شما در تجارت بین‌الملل" : "Your Trusted Partner in International Trade"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
