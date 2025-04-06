"use client"

import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "div",
  ...props
}: {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: any
  [key: string]: any
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<{
    x: number
    y: number
  }>({
    x: 0,
    y: 0,
  })

  const resetPosition = () => {
    if (!containerRef.current) return
    setPosition({
      x: 0,
      y: 0,
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    setPosition({ x, y })
  }

  return (
    <Component
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className={cn("relative overflow-hidden", containerClassName)}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          className,
        )}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-[inherit] bg-gradient-to-r from-magenta via-cyan to-lime",
            borderClassName,
          )}
          style={{
            transform: `translate(${position.x * 100}%, ${position.y * 100}%)`,
            transition: `transform ${duration}ms cubic-bezier(0.33, 1, 0.68, 1)`,
          }}
        />
      </div>
      {children}
    </Component>
  )
}

