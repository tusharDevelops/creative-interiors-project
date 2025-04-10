"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    setMousePosition({ x, y })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("relative overflow-hidden bg-white w-full", className)}
    >
      {/* Lamp light effect */}
      <motion.div
        className="absolute -top-40 left-0 right-0 mx-auto w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-gradient-to-b from-magenta/30 to-transparent blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * 100 - 50,
          y: mousePosition.y * 20,
          scale: 1 + mousePosition.y * 0.2,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
