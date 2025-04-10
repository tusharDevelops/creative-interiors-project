"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation variables
    let animationFrameId: number
    const beams: {
      x: number
      y: number
      length: number
      angle: number
      width: number
      speed: number
      color: string
      alpha: number
    }[] = []

    // Create initial beams
    const createBeams = () => {
      beams.length = 0
      const numBeams = 10
      for (let i = 0; i < numBeams; i++) {
        beams.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 300 + 200,
          angle: Math.random() * Math.PI * 2,
          width: Math.random() * 8 + 2,
          speed: Math.random() * 0.02 + 0.01,
          color: getRandomColor(),
          alpha: Math.random() * 0.3 + 0.1,
        })
      }
    }

    // Replace the getRandomColor function with this implementation that uses actual color values
    const getRandomColor = () => {
      // Use actual color values instead of CSS variables
      const colors = [
        "rgba(236, 72, 153, 0.7)", // magenta
        "rgba(6, 182, 212, 0.7)", // cyan
        "rgba(132, 204, 22, 0.7)", // lime
        "rgba(249, 115, 22, 0.7)", // orange
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    createBeams()

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw beams
      beams.forEach((beam) => {
        // Update beam position based on mouse
        const dx = mousePosition.x - beam.x
        const dy = mousePosition.y - beam.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = Math.max(canvas.width, canvas.height) / 2

        // Adjust beam angle slightly towards mouse
        if (distance < maxDistance) {
          const targetAngle = Math.atan2(dy, dx)
          const angleDiff = targetAngle - beam.angle
          beam.angle += angleDiff * 0.01
        }

        // Update beam angle
        beam.angle += beam.speed

        // Draw beam
        const endX = beam.x + Math.cos(beam.angle) * beam.length
        const endY = beam.y + Math.sin(beam.angle) * beam.length

        const gradient = ctx.createLinearGradient(beam.x, beam.y, endX, endY)
        gradient.addColorStop(0, `${beam.color}`)
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.moveTo(beam.x, beam.y)
        ctx.lineTo(endX, endY)
        ctx.strokeStyle = gradient
        ctx.globalAlpha = beam.alpha
        ctx.lineWidth = beam.width
        ctx.stroke()
        ctx.globalAlpha = 1
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("pointer-events-none absolute inset-0 z-0", className)} />
}
