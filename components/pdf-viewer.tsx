"use client"

import { useState, useEffect } from "react"
import { ZoomIn, ZoomOut, Download, Loader2, FileText, Maximize2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

interface PDFViewerProps {
  url: string
}

export function PDFViewer({ url }: PDFViewerProps) {
  const { t } = useLanguage()
  const [loading, setLoading] = useState(true)
  const [zoom, setZoom] = useState(100)
  const [iframeKey, setIframeKey] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Reset loading state when URL changes
    setLoading(true)
    setIframeKey((prev) => prev + 1)
  }, [url])

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 50))
  const handleResetZoom = () => setZoom(100)

  const handleIframeLoad = () => {
    setLoading(false)
  }

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex flex-col h-full",
          "bg-card",
          "rounded-xl sm:rounded-2xl",
          "border border-border/50",
          "overflow-hidden",
          "shadow-2xl shadow-black/10 dark:shadow-black/30",
          "min-h-[600px]",
          "animate-pulse",
        )}
      >
        <div className="h-16 bg-secondary/30 border-b border-border/50" />
        <div className="flex-1 bg-muted/20" />
      </div>
    )
  }

  const directPdfUrl = `${url}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`

  return (
    <div
      className={cn(
        "flex flex-col h-full",
        "bg-card",
        "rounded-xl sm:rounded-2xl",
        "border border-border/50",
        "overflow-hidden",
        "shadow-2xl shadow-black/10 dark:shadow-black/30",
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0",
          "px-4 sm:px-6 py-3 sm:py-4",
          "border-b border-border/50",
          "bg-gradient-to-r from-secondary/50 via-card to-secondary/50",
        )}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-foreground">{t("document_title")}</h2>
            <p className="text-xs text-muted-foreground hidden sm:block">INTELX Project Proposal</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-end flex-wrap">
          <button
            onClick={handleZoomOut}
            className={cn(
              "p-2 sm:p-2.5 rounded-lg sm:rounded-xl",
              "bg-secondary/50 hover:bg-secondary",
              "border border-border/50",
              "transition-all duration-200",
              "hover:scale-105 active:scale-95",
            )}
            aria-label={t("zoom_out")}
          >
            <ZoomOut className="w-4 h-4 text-muted-foreground" />
          </button>

          <button
            onClick={handleResetZoom}
            className={cn(
              "px-3 py-1.5 sm:py-2 rounded-lg",
              "bg-muted/50 hover:bg-muted",
              "min-w-[50px] sm:min-w-[60px] text-center",
              "transition-all duration-200",
            )}
          >
            <span className="text-xs sm:text-sm font-semibold text-foreground">{zoom}%</span>
          </button>

          <button
            onClick={handleZoomIn}
            className={cn(
              "p-2 sm:p-2.5 rounded-lg sm:rounded-xl",
              "bg-secondary/50 hover:bg-secondary",
              "border border-border/50",
              "transition-all duration-200",
              "hover:scale-105 active:scale-95",
            )}
            aria-label={t("zoom_in")}
          >
            <ZoomIn className="w-4 h-4 text-muted-foreground" />
          </button>

          <div className="w-px h-6 bg-border/50 mx-1 sm:mx-2 hidden sm:block" />

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 sm:p-2.5 rounded-lg sm:rounded-xl",
              "bg-secondary/50 hover:bg-secondary",
              "border border-border/50",
              "transition-all duration-200",
              "hover:scale-105 active:scale-95",
            )}
            aria-label="Open in new tab"
          >
            <Maximize2 className="w-4 h-4 text-muted-foreground" />
          </a>

          <a
            href={url}
            download="INTELX-Proposal.pdf"
            className={cn(
              "flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5",
              "rounded-lg sm:rounded-xl",
              "bg-gradient-to-r from-primary to-primary/90",
              "text-primary-foreground",
              "text-xs sm:text-sm font-semibold",
              "shadow-lg shadow-primary/20",
              "transition-all duration-200",
              "hover:shadow-xl hover:shadow-primary/30",
              "hover:scale-105 active:scale-95",
            )}
          >
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">{t("download")}</span>
          </a>
        </div>
      </div>

      {/* PDF Content */}
      <div
        className={cn(
          "flex-1 overflow-auto relative",
          "bg-gradient-to-b from-muted/20 to-muted/40",
          "p-3 sm:p-4 md:p-6",
        )}
      >
        {/* Loading Overlay */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-medium">{t("loading")}</p>
          </div>
        )}

        <div
          className="mx-auto transition-transform duration-300 origin-top h-full"
          style={{
            transform: `scale(${zoom / 100})`,
            width: zoom > 100 ? `${100 / (zoom / 100)}%` : "100%",
          }}
        >
          <object
            key={iframeKey}
            data={directPdfUrl}
            type="application/pdf"
            className={cn("w-full h-full", "bg-white", "rounded-xl", "shadow-2xl", "border border-border/30")}
            style={{ minHeight: "calc(100vh - 280px)" }}
            onLoad={handleIframeLoad}
          >
            {/* Fallback iframe for browsers that don't support object */}
            <iframe
              src={`${url}#toolbar=1&navpanes=1&scrollbar=1`}
              className={cn("w-full h-full", "bg-white", "rounded-xl", "shadow-2xl", "border border-border/30")}
              style={{ minHeight: "calc(100vh - 280px)" }}
              title={t("document_title")}
              onLoad={handleIframeLoad}
            />
          </object>
        </div>
      </div>
    </div>
  )
}
