"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}>{children}</div>
}

interface BentoGridItemProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export const BentoGridItem = ({ title, description, icon, className }: BentoGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-6 bg-zinc-900 border border-zinc-800",
        className,
      )}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          {icon && <div className="p-3 w-fit rounded-full bg-zinc-800 mb-5">{icon}</div>}
          <div className="font-bold text-xl mb-2 text-white">{title}</div>
          <p className="text-sm text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
