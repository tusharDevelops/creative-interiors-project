"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface LiquidGlassCardProps {
  category: {
    id: string
    name: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    href: string
    image: string
    popular: boolean
    projects: string
    rating: number
    gradient: string
    glowColor: string
  }
  index: number
  isVisible: boolean
}

export default function LiquidGlassCard({ category, index, isVisible }: LiquidGlassCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const IconComponent = category.icon

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
      className={`group relative transition-all duration-700 delay-${index * 150} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Liquid Glass Card */}
      <Card className="relative overflow-hidden border-0 shadow-2xl transition-all duration-500 rounded-3xl hover:scale-[1.02] bg-transparent">
        {/* Glass Background Layers */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-xl shadow-lg" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Dynamic Light Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.4) 0%, transparent 50%)`,
          }}
        />

        {/* Liquid Border */}
        <div className="absolute inset-0 rounded-3xl border border-slate-200/60 group-hover:border-slate-300/80 transition-colors duration-500" />
        <div
          className={`absolute inset-0 rounded-3xl border opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
          style={{
            borderImage: `linear-gradient(45deg, ${category.gradient.replace("from-", "").replace("to-", "").replace(" via-", ", ").replace("[", "").replace("]", "")}) 1`,
          }}
        />

        {/* Popular Badge */}
        {category.popular && (
          <div className="absolute top-6 right-6 z-20">
            <Badge className="relative overflow-hidden bg-transparent border-0 px-4 py-2 rounded-full shadow-lg">
              {/* Glass Background */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-10`} />

              <div className="relative z-10 flex items-center text-slate-700 font-medium">
                <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                Most Popular
              </div>
            </Badge>
          </div>
        )}

        {/* Image Section */}
        <div className="relative h-80 overflow-hidden rounded-t-3xl">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Liquid Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          />

          {/* Floating Glass Info */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center space-x-4 mb-4">
              {/* Glass Icon Container */}
              <div className="relative p-4 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xl" />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80`} />
                <IconComponent className="w-7 h-7 text-white relative z-10" />

                {/* Liquid Animation */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-pulse" />
                )}
              </div>

              <div>
                <h3 className="font-bold text-2xl mb-1 relative">
                  {category.name}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent blur-sm -z-10" />
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(category.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{category.rating}</span>
                  <span className="text-white/80 text-sm">({category.projects} projects)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-8 relative">
          {/* Glass Background */}
          <div className="absolute inset-0 bg-white/50 backdrop-blur-xl" />

          <div className="relative z-10">
            <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">{category.description}</p>

            <Link href={category.href}>
              <div className="relative group/button">
                {/* Button Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-20 group-hover/button:opacity-40 transition-opacity duration-300`}
                />

                <Button className="relative w-full bg-white/70 backdrop-blur-xl border border-slate-200/50 hover:bg-white/80 text-slate-800 hover:text-slate-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-lg overflow-hidden shadow-lg">
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Collection
                    <ArrowRight className="ml-3 h-5 w-5 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </span>

                  {/* Liquid Flow Animation */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/button:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000" />
                </Button>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
