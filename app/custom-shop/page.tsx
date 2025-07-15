"use client"
import {
  Palette,
  Blinds,
  ImageIcon,
  Sparkles,
  Users,
  Award,
  Zap,
  Shield,
 
} from "lucide-react"

import { useState, useEffect } from "react"
import LiquidGlassHero from "@/components/liquid-glass-hero"
import LiquidGlassFeature from "@/components/liquid-glass-feature"
import LiquidGlassCard from "@/components/liquid-glass-card"

const productCategories = [
  {
    id: "wallpaper",
    name: "Wallpaper",
    description: "Premium custom wallpapers with endless design possibilities",
    icon: Palette,
    href: "/custom-shop/wallpaper",
    image: "https://images.pexels.com/photos/6198657/pexels-photo-6198657.jpeg",
    popular: true,
    projects: "2,847",
    rating: 4.9,
    gradient: "from-[#ff0099] via-[#ff0099]/80 to-[#ff6d00]",
    glowColor: "shadow-[#ff0099]/20",
  },
  {
    id: "blinds",
    name: "Window Blinds",
    description: "Elegant window treatments for privacy and style control",
    icon: Blinds,
    href: "/custom-shop/blinds",
    image: "https://images.pexels.com/photos/279640/pexels-photo-279640.jpeg",
    popular: false,
    projects: "1,923",
    rating: 4.8,
    gradient: "from-[#40c4ff] via-[#00e5ff] to-[#40c4ff]",
    glowColor: "shadow-[#00e5ff]/20",
  },
  {
    id: "canvas",
    name: "Canvas Prints",
    description: "Transform your memories into stunning wall art",
    icon: ImageIcon,
    href: "/custom-shop/canvas",
    image: "https://images.pexels.com/photos/8101544/pexels-photo-8101544.jpeg",
    popular: true,
    projects: "3,156",
    rating: 4.9,
    gradient: "from-[#00c853] via-[#00c853]/80 to-[#00e5ff]",
    glowColor: "shadow-[#00c853]/20",
  },
  {
    id: "glass-film",
    name: "Glass Films",
    description: "Decorative and privacy solutions for modern spaces",
    icon: Sparkles,
    href: "/custom-shop/glass-film",
    image: "https://images.pexels.com/photos/7676300/pexels-photo-7676300.jpeg",
    popular: false,
    projects: "987",
    rating: 4.7,
    gradient: "from-[#ff6d00] via-[#ff6d00]/80 to-[#ff0099]",
    glowColor: "shadow-[#ff6d00]/20",
  },
]

const features = [
  {
    icon: Award,
    title: "Premium Materials",
    description: "Only the finest quality materials and professional-grade finishes",
    gradient: "from-[#ff0099] to-[#ff6d00]",
    bgGradient: "from-[#ff0099]/10 to-[#ff6d00]/10",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Professional design consultation and installation support",
    gradient: "from-[#40c4ff] to-[#00e5ff]",
    bgGradient: "from-[#40c4ff]/10 to-[#00e5ff]/10",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality",
    gradient: "from-[#00c853] to-[#00e5ff]",
    bgGradient: "from-[#00c853]/10 to-[#00e5ff]/10",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee with comprehensive warranty",
    gradient: "from-[#ff6d00] to-[#ff0099]",
    bgGradient: "from-[#ff6d00]/10 to-[#ff0099]/10",
  },
]



export default function CustomShopPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Liquid Glass Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Liquid Orbs */}
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-10 blur-3xl transition-all duration-2000 ease-out"
          style={{
            background: `conic-gradient(from 0deg, #ff0099, #00e5ff, #00c853, #ff6d00, #ff0099)`,
            transform: `translate(${mousePosition.x * 0.02 - 500}px, ${mousePosition.y * 0.02 - 500}px) rotate(${Date.now() * 0.001}deg)`,
            left: "10%",
            top: "10%",
          }}
        />

        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-8 blur-3xl transition-all duration-3000 ease-out"
          style={{
            background: `conic-gradient(from 180deg, #00e5ff, #ff6d00, #ff0099, #00c853, #00e5ff)`,
            transform: `translate(${mousePosition.x * -0.01 - 400}px, ${mousePosition.y * -0.01 - 400}px) rotate(${-Date.now() * 0.0005}deg)`,
            right: "10%",
            bottom: "10%",
          }}
        />
      </div>

      {/* Hero Section */}
      <LiquidGlassHero />

      <div className="container mx-auto px-6 relative z-10">
        {/* Features Section */}
        <section className="py-24">
          <div
            className={`text-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Liquid Glass Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0099]/10 to-[#00e5ff]/10 rounded-full" />
              <span className="relative z-10 text-slate-700 font-medium">Why Choose Us</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-6">
              Experience the
              <span className="font-bold bg-gradient-to-r from-[#ff0099] via-[#00e5ff] to-[#00c853] bg-clip-text text-transparent animate-pulse">
                {" "}
                Difference
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Industry-leading professionals delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <LiquidGlassFeature key={index} feature={feature} index={index} isVisible={isVisible} />
            ))}
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-24">
          <div
            className={`text-center mb-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Liquid Glass Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00c853]/10 to-[#ff6d00]/10 rounded-full" />
              <span className="relative z-10 text-slate-700 font-medium">Our Collections</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-6">
              Premium
              <span className="font-bold bg-gradient-to-r from-[#00c853] via-[#ff6d00] to-[#ff0099] bg-clip-text text-transparent animate-pulse">
                {" "}
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light">
              Discover our curated selection of premium interior solutions, each crafted with meticulous attention to
              detail
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {productCategories.map((category, index) => (
              <LiquidGlassCard key={category.id} category={category} index={index} isVisible={isVisible} />
            ))}
          </div>
        </section>

        
      </div>
    </div>
  )
}
