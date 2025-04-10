"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useState } from "react"

export const GithubGradientButton = ({
  children,
  className,
  containerClassName,
  ...props
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className={cn("relative inline-flex", containerClassName)}>
      <div
        className={cn(
          "absolute -inset-[2px] rounded-lg bg-gradient-to-r from-magenta via-cyan to-lime opacity-70 blur-md transition-all duration-300",
          hovered && "opacity-100",
        )}
      />
      <button
        className={cn(
          "relative inline-flex h-12 items-center justify-center rounded-lg bg-black px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
          hovered && "bg-black/80",
          className,
        )}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}
