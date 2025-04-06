"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface VortexProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: number
  speed?: number
  color?: string
}

export function Vortex({
  className,
  intensity = 5,
  speed = 0.02,
  color = "rgba(255, 255, 255, 0.5)",
  ...props
}: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles: { x: number; y: number; radius: number; color: string; velocity: number }[] = []

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particles.length = 0
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000) * intensity

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: color,
          velocity: Math.random() * speed + 0.01,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      particles.forEach((particle) => {
        // Calculate direction to center
        const dx = centerX - particle.x
        const dy = centerY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Move particle in spiral pattern
        const angle = Math.atan2(dy, dx)
        const spiralFactor = 0.1

        particle.x += Math.cos(angle + spiralFactor) * particle.velocity * (distance * 0.01)
        particle.y += Math.sin(angle + spiralFactor) * particle.velocity * (distance * 0.01)

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Reset particle if it gets too close to center
        if (distance < 5) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
        }
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [intensity, speed, color])

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />
    </div>
  )
}

