"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export const MacbookScroll = ({
  src,
  title,
  showGradient = false,
}: {
  src: string
  title?: React.ReactNode | string
  showGradient?: boolean
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 0])

  return (
    <div ref={containerRef} className="relative h-[40rem] flex items-center justify-center">
      <motion.div style={{ opacity }} className="absolute inset-0 z-10 flex items-center justify-center text-white">
        <div className="max-w-3xl text-center px-4">
          {title && <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>}
        </div>
      </motion.div>

      <div className="relative w-full h-full flex items-center justify-center">
        {showGradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-magenta/20 via-transparent to-transparent z-0" />
        )}
        <motion.div
          style={{
            scale: imageScale,
          }}
          className="relative w-full h-full max-w-5xl max-h-[30rem] mx-auto"
        >
          <div className="macbook-container w-full h-full">
            <div className="macbook-screen bg-gray-800 rounded-t-xl overflow-hidden relative">
              <Image src={src || "/placeholder.svg"} alt="Macbook Screen Content" fill className="object-cover" />
            </div>
            <div className="macbook-base bg-gray-200 h-[2rem] rounded-b-xl"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
