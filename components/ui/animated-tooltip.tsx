"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-row items-center justify-center gap-0">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">{item.name}</div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="relative">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="object-cover !m-0 !p-0 h-20 w-20 rounded-full border-2 group-hover:border-white border-transparent transition-all"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

