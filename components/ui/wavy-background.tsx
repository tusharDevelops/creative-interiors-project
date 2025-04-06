"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[]
  speed?: number
  amplitude?: number
  frequency?: number
}

export function WavyBackground({
  className,
  colors = ["#9333ea", "#6366f1", "#2563eb"],
  speed = 0.1,
  amplitude = 20,
  frequency = 0.01,
  ...props
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const drawWave = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, offset: number) => {
      ctx.beginPath()
      ctx.moveTo(0, height)

      for (let x = 0; x < width; x++) {
        const y =
          Math.sin(x * frequency + time + offset) * amplitude +
          Math.sin(x * frequency * 2 + time + offset) * amplitude * 0.5
        ctx.lineTo(x, height / 2 + y)
      }

      ctx.lineTo(width, height)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
    }

    const render = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves from bottom to top
      for (let i = colors.length - 1; i >= 0; i--) {
        drawWave(ctx, canvas.width, canvas.height, colors[i], i * 0.5)
      }

      time += speed
      animationFrameId = requestAnimationFrame(render)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    render()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [colors, speed, amplitude, frequency])

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.8 }} />
    </div>
  )
}

