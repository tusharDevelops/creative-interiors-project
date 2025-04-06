"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { createContext, useState, useContext, useRef, useEffect } from "react"

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined)

export const CardContainer = ({
  children,
  className,
  containerClassName,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const x = (e.clientX - left - width / 2) / 15 // Increased sensitivity for more dramatic effect
    const y = (e.clientY - top - height / 2) / 15 // Increased sensitivity for more dramatic effect

    // Apply rotation with easing
    containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseEnter = () => {
    setIsMouseEntered(true)
    if (!containerRef.current) return
    // Smoother transition on enter
    containerRef.current.style.transition = "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
  }

  const handleMouseLeave = () => {
    setIsMouseEntered(false)
    if (!containerRef.current) return
    // Smoother transition on leave
    containerRef.current.style.transition = "transform 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67)"
    containerRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{
          perspective: "1500px", // Increased perspective for more dramatic effect
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-transform will-change-transform",
            className,
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
          {...props}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export const CardBody = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn("h-full w-full [transform-style:preserve-3d] relative", className)}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardItem = ({
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  as: Component = "div",
  ...props
}: {
  children: React.ReactNode
  className?: string
  translateX?: number
  translateY?: number
  translateZ?: number
  rotateX?: number
  rotateY?: number
  rotateZ?: number
  as?: React.ElementType
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    if (!ref.current) return
    if (isMouseEntered) {
      // Enhanced transform with more dramatic effect
      ref.current.style.transform = `
        translateX(${translateX}px) 
        translateY(${translateY}px) 
        translateZ(${translateZ}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        rotateZ(${rotateZ}deg)
      `
      // Add shadow for depth
      if (translateZ > 50) {
        ref.current.style.filter = `drop-shadow(0 ${translateZ / 20}px ${translateZ / 10}px rgba(0, 0, 0, 0.3))`
      }
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
      ref.current.style.filter = "none"
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ])

  return (
    <Component
      ref={ref}
      className={cn("transition-all duration-300 ease-out", className)}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </Component>
  )
}

// Custom hook to consume the MouseEnterContext
const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a CardContainer")
  }
  return context
}

