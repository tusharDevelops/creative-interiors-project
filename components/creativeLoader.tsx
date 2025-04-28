"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Sofa, Lamp, Home, Ruler, PenTool, Palette } from "lucide-react"

export default function PathMorphing() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  // Icons and their corresponding colors from the logo
  const icons = [
    { icon: Home, color: "#ff0099" },
    { icon: Sofa, color: "#00e5ff" },
    { icon: Lamp, color: "#00c853" },
    { icon: Ruler, color: "#40c4ff" },
    { icon: PenTool, color: "#ff6d00" },
    { icon: Palette, color: "#00e5ff" },
  ]

  // Function to cycle through icons
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === icons.length - 1) {
        setShowLogo(true)
        setTimeout(() => {
          setShowLogo(false)
          setCurrentIndex(0)
        }, 1000)
      } else {
        setCurrentIndex((prev) => prev + 1)
      }
    }, 350) // Fast transitions between icons

    return () => clearInterval(interval)
  }, [currentIndex, icons.length])

  return (
    <div className="flex flex-col items-center justify-center h-full w-full  bg-[#0b1012]">
      {/* Decorative grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-white/10"></div>
        ))}
      </div>

      <div className="relative w-96 h-96 flex items-center justify-center">
        {/* Circular background with subtle gradient */}
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#ff009910] to-[#00e5ff10] flex items-center justify-center">
          <div className="w-56 h-56 rounded-full border border-white/5"></div>
        </div>

        {/* Rotating dots around the circle 
        <div className="absolute w-72 h-72 animate-spin-slow">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: icons[currentIndex % icons.length].color,
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 30}deg) translateY(-36px) translateX(-50%)`,
                opacity: 0.5,
              }}
            ></div>
          ))}
        </div>
        */}
        

        {/* Icon animation */}
        <AnimatePresence mode="wait">
          {!showLogo ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.25 }}
              className="relative z-10"
            >
              {(() => {
                const IconComponent = icons[currentIndex].icon
                return <IconComponent size={100} color={icons[currentIndex].color} strokeWidth={1.5} />
              })()}
            </motion.div>
          ) : (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-64 h-64"
            >
              <Image src="/images/logo5.png" alt="Creative Interiors Logo" fill className="object-contain" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Company name and tagline */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 text-center"
          >
            <h2 className="text-3xl font-bold" style={{ color: "#ff0099" }}>
              CREATIVE INTERIORS
            </h2>
            <p className="text-sm text-gray-400 mt-1">ONE STEP ALL SOLUTION</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle progress indicator */}
      <div className="mt-8 flex space-x-2">
        {icons.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === currentIndex ? icons[i].color : "#ffffff20",
              transform: i === currentIndex ? "scale(1.5)" : "scale(1)",
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
