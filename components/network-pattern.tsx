"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/contexts/theme-context"

export function NetworkPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1

    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }

    let nodes: Node[] = []
    const nodeCount = 50
    let width = 0
    let height = 0

    const initNodes = () => {
      nodes = []
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
        })
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      initNodes()
    }

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, width, height)

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1
      })

      const goldColor = theme === "dark" ? "180, 140, 50" : "160, 120, 40"
      const blueColor = theme === "dark" ? "100, 130, 180" : "70, 100, 160"
      const connectionOpacity = theme === "dark" ? 0.12 : 0.18
      const nodeOpacity = theme === "dark" ? 0.3 : 0.4

      // Draw connections with gradient
      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach((nodeB) => {
          const dx = nodeA.x - nodeB.x
          const dy = nodeA.y - nodeB.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 180

          if (distance < maxDist) {
            const opacity = (1 - distance / maxDist) * connectionOpacity

            const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y)
            gradient.addColorStop(0, `rgba(${goldColor}, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(${blueColor}, ${opacity * 0.5})`)
            gradient.addColorStop(1, `rgba(${goldColor}, ${opacity})`)

            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(nodeB.x, nodeB.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      // Draw nodes with glow
      nodes.forEach((node) => {
        // Glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${goldColor}, ${nodeOpacity * 0.2})`
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${goldColor}, ${nodeOpacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme, mounted])

  if (!mounted) {
    return <div className="absolute inset-0 w-full h-full" />
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
