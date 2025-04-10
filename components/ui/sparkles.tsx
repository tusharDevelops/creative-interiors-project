"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  className,
  particleDensity,
}: {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  className?: string
  particleDensity?: number
}) => {
  const [particles, setParticles] = useState<
    Array<{
      x: number
      y: number
      size: number
      delay: number
    }>
  >([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    const particleCount = Math.min(
      Math.max(Math.floor((containerWidth * containerHeight) / 10000) * (particleDensity || 1), 20),
      100,
    )

    const newParticles = []
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize || 4) + (minSize || 1),
        delay: Math.random() * 1000,
      })
    }
    setParticles(newParticles)
  }, [maxSize, minSize, particleDensity])

  return (
    <div
      ref={containerRef}
      id={id}
      className={cn("h-full w-full", className)}
      style={{
        background: background || "transparent",
      }}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particleColor || "#EC4899",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: speed || 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
