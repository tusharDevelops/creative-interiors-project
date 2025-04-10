"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function HoverEffect({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
  }[]
  className?: string
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.title}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-magenta to-cyan opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
            animate={{
              opacity: hoveredIndex === idx ? 0.2 : 0,
            }}
          />
          <motion.div
            className="relative h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300"
            animate={{
              y: hoveredIndex === idx ? -5 : 0,
              boxShadow: hoveredIndex === idx ? "0 10px 20px rgba(0, 0, 0, 0.1)" : "0 4px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="mb-2 text-2xl font-medium text-gray-900">{item.title}</div>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}
