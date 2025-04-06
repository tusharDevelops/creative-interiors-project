"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BackgroundGradientAnimationProps {
  children: ReactNode
  className?: string
}

export function BackgroundGradientAnimation({ children, className }: BackgroundGradientAnimationProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl", className)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-300/20 via-pink-300/20 to-cyan-300/20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
      />
      {children}
    </div>
  )
}

