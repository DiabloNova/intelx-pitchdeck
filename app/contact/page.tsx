"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { OverlayControls } from "@/components/overlay-controls"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail, Send, CheckCircle, Building, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const { t, isRTL, mounted } = useLanguage()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact_address_title"),
      content: t("contact_address"),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: t("contact_phone_title"),
      content: (
        <div className="space-y-1">
          <a href="tel:09122183653" className="block hover:text-primary transition-colors">
            {t("contact_phone_1")}
          </a>
          <a href="tel:02188552623" className="block hover:text-primary transition-colors">
            {t("contact_phone_2")}
          </a>
          <a href="tel:02188552624" className="block hover:text-primary transition-colors">
            {t("contact_phone_3")}
          </a>
        </div>
      ),
      gradient: "from-primary to-accent",
    },
    {
      icon: Mail,
      title: t("contact_email_title"),
      content: (
        <a href="mailto:info@pazirik.org" className="hover:text-primary transition-colors">
          {t("contact_email")}
        </a>
      ),
      gradient: "from-emerald-500 to-teal-500",
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
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-2xl shadow-accent/30 mb-6 sm:mb-8 animate-fade-up">
            <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-up stagger-1">
            {t("contact_title")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-accent font-medium animate-fade-up stagger-2">
            {t("contact_subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                          info.gradient,
                        )}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                        <div className="text-muted-foreground leading-relaxed">{info.content}</div>
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Business Hours */}
              <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{isRTL ? "ساعات کاری" : "Business Hours"}</h3>
                </div>
                <p className="text-muted-foreground">
                  {isRTL ? "شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر" : "Saturday to Wednesday: 9 AM - 6 PM"}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-card border border-border/50 shadow-xl">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-primary via-accent to-primary" />

              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">{t("contact_form_title")}</h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <p className="text-lg font-medium text-foreground">{t("contact_success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_email_input")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none text-foreground"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t("contact_message")}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none text-foreground resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-3 px-6 rounded-xl font-medium text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2",
                      isSubmitting
                        ? "bg-primary/50 cursor-not-allowed"
                        : "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
                    )}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t("contact_submit")}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-64 sm:h-80 rounded-2xl bg-secondary/50 border border-border/50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Building className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground">{isRTL ? "تهران، یوسف‌آباد" : "Tehran, Yousefabad"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
