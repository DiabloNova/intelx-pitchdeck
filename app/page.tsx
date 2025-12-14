"use client"

import { CoverPage } from "@/components/cover-page"
import { AdaptabilityDiagram } from "@/components/adaptability-diagram"
import { ArchitectureDiagram } from "@/components/architecture-diagram"
import { RagPipeline } from "@/components/rag-pipeline"
import { ImplementationRoadmap } from "@/components/implementation-roadmap"
import { ComparativeAdvantage } from "@/components/comparative-advantage"
import { Navigation } from "@/components/navigation"
import { OverlayControls } from "@/components/overlay-controls"
import { PDFViewer } from "@/components/pdf-viewer"
import { Header } from "@/components/header"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { language } = useLanguage()

  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <Navigation />
      <OverlayControls />

      {/* Each section represents a page/graphic */}
      <section id="cover" className="min-h-screen pt-16 sm:pt-20">
        <CoverPage />
      </section>

      <section id="adaptability" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <AdaptabilityDiagram />
      </section>

      <section id="architecture" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <ArchitectureDiagram />
      </section>

      <section id="pipeline" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <RagPipeline />
      </section>

      <section id="roadmap" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <ImplementationRoadmap />
      </section>

      <section id="comparison" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <ComparativeAdvantage />
      </section>

      {language === "fa" && (
        <section id="document" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto h-[calc(100vh-120px)] sm:h-[calc(100vh-160px)]">
            <PDFViewer url="/documents/intelx-proposal.pdf" />
          </div>
        </section>
      )}
    </main>
  )
}
