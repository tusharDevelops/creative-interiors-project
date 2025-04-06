"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  const [start, setStart] = useState(false)

  const getDirection = () => {
    if (direction === "left") {
      return "animate-scroll-left"
    } else {
      return "animate-scroll-right"
    }
  }

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "duration-20"
      case "normal":
        return "duration-40"
      case "slow":
        return "duration-60"
      default:
        return "duration-40"
    }
  }

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })

    setStart(true)
  }, [])

  return (
    <div ref={containerRef} className={cn("scroller relative z-20 max-w-7xl overflow-hidden", className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start && getDirection(),
          start && getSpeed(),
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-slate-700 bg-slate-800 px-8 py-6 md:w-[450px]"
            key={idx}
          >
            <blockquote>
              <p className="mt-4 text-slate-300">{item.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div>
                  <p className="font-medium text-slate-200">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.title}</p>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}

