"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sparkles } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { t, isRTL, mounted: languageMounted } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  const navItems = [
    { href: "/", label: t("nav_home") },
    { href: "/about-intelx", label: t("nav_about_intelx") },
    { href: "/about-pazirik", label: t("nav_about_pazirik") },
    { href: "/team", label: t("nav_team") },
    { href: "/contact", label: t("nav_contact") },
  ]

  if (!mounted || !languageMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20">
        <div className="h-full" />
      </header>
    )
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-4",
        )}
      >
        {/* Glassmorphic background */}
        <div
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isScrolled
              ? "bg-background/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-b border-border/50"
              : "bg-transparent",
          )}
        />

        {/* Gradient accent line */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-500",
            isScrolled ? "opacity-100" : "opacity-0",
          )}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group relative flex items-center gap-2 sm:gap-3">
              {/* Logo glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary via-primary to-accent shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>

              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {t("brand_name")}
                </span>
                <span className="hidden sm:block text-[10px] text-muted-foreground font-medium tracking-wider uppercase">
                  {t("brand_tagline")}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {/* Active indicator */}
                    {isActive && <span className="absolute inset-0 bg-primary/10 rounded-lg" />}

                    {/* Hover effect */}
                    <span className="absolute inset-0 bg-foreground/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />

                    <span className="relative">{item.label}</span>

                    {/* Active dot */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={cn(
                    "absolute inset-0 w-5 h-5 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100",
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 w-5 h-5 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50",
                  )}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "absolute top-20 left-4 right-4 bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl shadow-black/20 overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

          <nav className="p-4 space-y-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                  )}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {isActive && <span className="w-1.5 h-1.5 bg-primary rounded-full" />}
                  <span className={cn(!isActive && "mr-3.5")}>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
