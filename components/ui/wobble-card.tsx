"use client"

import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

interface WobbleCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  intensity?: number
  children: React.ReactNode
}

export function WobbleCard({ className, intensity = 15, children, ...props }: WobbleCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Calculate rotation based on mouse position
    const rotateX = (-y / (rect.height / 2)) * intensity
    const rotateY = (x / (rect.width / 2)) * intensity

    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <Card
      ref={cardRef}
      className={cn("transition-transform duration-200 ease-out", isHovered && "shadow-xl", className)}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered ? "none" : "all 0.5s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Card>
  )
}

