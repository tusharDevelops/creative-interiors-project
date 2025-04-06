"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
  revealClassName,
  ...props
}: {
  text: string
  revealText: string
  children?: React.ReactNode
  className?: string
  revealClassName?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative w-full overflow-hidden rounded-lg border bg-card p-8", className)}
      {...props}
    >
      <div className="relative z-10">
        <div className="text-base font-bold">{text}</div>
        <div className={cn("mt-4 text-sm", revealClassName)}>
          {isMobile ? revealText : isHovered ? revealText : text}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">{children}</div>
    </div>
  )
}

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <h3 className={cn("text-2xl font-bold text-foreground", className)}>{children}</h3>
}

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
}

