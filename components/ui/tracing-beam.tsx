"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    setMousePosition({ x, y })
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative w-full max-w-6xl mx-auto", className)}>
      <motion.div
        className="absolute -left-20 top-0 h-full w-40 bg-gradient-to-r from-transparent via-magenta/20 to-transparent opacity-50 blur-xl"
        animate={{
          top: mousePosition.y - 200,
          transition: { type: "spring", stiffness: 150, damping: 20 },
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}
