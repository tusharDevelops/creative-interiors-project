"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureBlockAnimatedCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
}

export function FeatureBlockAnimatedCard({ title, description, icon, className }: FeatureBlockAnimatedCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">{icon}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-violet-100 to-pink-100 opacity-0"
        animate={{ opacity: hovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-r from-violet-200 to-pink-200 opacity-0"
        animate={{
          opacity: hovered ? 0.2 : 0,
          scale: hovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  )
}

