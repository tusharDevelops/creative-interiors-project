"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  title: string
  content: string
  icon?: ReactNode
  className?: string
}

export function ContentCard({ title, content, icon, className }: ContentCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md",
        className,
      )}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 group-hover:bg-gray-100">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{content}</p>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-magenta to-cyan transition-all duration-300 group-hover:w-full" />
    </motion.div>
  )
}

