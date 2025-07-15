"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface LiquidGlassFeatureProps {
  feature: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
    gradient: string
    bgGradient: string
  }
  index: number
  isVisible: boolean
}

export default function LiquidGlassFeature({ feature, index, isVisible }: LiquidGlassFeatureProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const IconComponent = feature.icon

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener("mousemove", handleMouseMove)
      return () => card.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group transition-all duration-700 delay-${index * 100} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="relative p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl group-hover:scale-105 overflow-hidden bg-transparent">
        {/* Multi-layer Glass Background */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl shadow-lg" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Dynamic Light Reflection */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.4) 0%, transparent 50%)`,
          }}
        />

        {/* Liquid Border */}
        <div className="absolute inset-0 rounded-3xl border border-slate-200/60 group-hover:border-slate-300/80 transition-colors duration-500" />

        <div className="relative z-10 text-center">
          {/* Liquid Glass Icon Container */}
          <div className="relative mx-auto w-20 h-20 rounded-2xl mb-6 overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80`} />

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <IconComponent className="w-10 h-10 text-white relative z-10" />
            </div>

            {/* Liquid Animation */}
            {isHovered && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl animate-pulse" />
              </>
            )}
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4 relative">
            {feature.title}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200/20 to-transparent blur-sm -z-10" />
          </h3>

          <p className="text-slate-600 leading-relaxed font-light relative">
            {feature.description}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
          </p>
        </div>

        {/* Floating Particles Effect */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-slate-400/40 rounded-full animate-ping"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
