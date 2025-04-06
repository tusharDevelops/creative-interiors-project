"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BackgroundOverlayCardProps {
  children: ReactNode
  className?: string
}

export function BackgroundOverlayCard({ children, className }: BackgroundOverlayCardProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-pink-50 opacity-70" />
      <div className="relative z-10">{children}</div>
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-magenta to-cyan" />
    </motion.div>
  )
}

