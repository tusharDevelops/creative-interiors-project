"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Play } from "lucide-react"
import Image from "next/image"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export default function LiquidGlassHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    setIsVisible(true)
    initParticles()
    animate()

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const initParticles = () => {
    const particles: Particle[] = []
    const colors = ["#ff0099", "#00e5ff", "#00c853", "#ff6d00", "#40c4ff"]

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    particlesRef.current = particles
  }

  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

      // Mouse interaction
      const dx = mousePosition.x - particle.x
      const dy = mousePosition.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        const force = (100 - distance) / 100
        particle.vx += (dx / distance) * force * 0.01
        particle.vy += (dy / distance) * force * 0.01
      }

      // Draw particle with glow
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.shadowBlur = 20
      ctx.shadowColor = particle.color
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // Connect nearby particles
      particlesRef.current.slice(index + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x
        const dy = particle.y - otherParticle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          ctx.save()
          ctx.globalAlpha = ((150 - distance) / 150) * 0.3
          ctx.strokeStyle = particle.color
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.stroke()
          ctx.restore()
        }
      })
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} />

      {/* Interior Design Background Image */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&auto=format"
          alt="Modern interior design space"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Dark gradient tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
      </div>

      {/* Dynamic Glass Orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(255,0,153,0.4) 0%, rgba(0,229,255,0.3) 50%, rgba(0,200,83,0.2) 100%)`,
          transform: `translate(${mousePosition.x * 0.05 - 400}px, ${mousePosition.y * 0.05 - 400}px)`,
          left: "20%",
          top: "20%",
          zIndex: 3,
        }}
      />

      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-25 blur-3xl transition-all duration-1500 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(0,229,255,0.4) 0%, rgba(255,109,0,0.3) 50%, rgba(255,0,153,0.2) 100%)`,
          transform: `translate(${mousePosition.x * -0.03 - 300}px, ${mousePosition.y * -0.03 - 300}px)`,
          right: "10%",
          bottom: "10%",
          zIndex: 3,
        }}
      />

      {/* Liquid Glass Surface */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          zIndex: 4,
        }}
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-6 py-24 lg:py-32" style={{ zIndex: 10 }}>
        <div
          className={`text-center text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Liquid Glass Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full mb-8 relative group overflow-hidden">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0099]/20 via-[#00e5ff]/20 to-[#00c853]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

            {/* Animated Dot */}
            <div className="relative w-3 h-3 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0099] via-[#00e5ff] to-[#00c853] animate-pulse" />
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#00c853] via-[#ff6d00] to-[#ff0099] animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>

            <Sparkles className="w-5 h-5 relative z-10 text-white" />
            <span className="relative z-10 font-medium text-white">AI-Powered Design Studio</span>
          </div>

          {/* Liquid Typography */}
          <div className="relative mb-8">
            <h1 className="text-6xl lg:text-8xl font-light tracking-tight leading-none text-white">
              <span className="block relative">
                 Our Customized
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent blur-xl" />
              </span>
              <span className="block font-bold relative mt-4">
                <span className="bg-gradient-to-r from-[#ff0099] via-[#00e5ff] via-[#00c853] to-[#ff6d00] bg-clip-text text-transparent animate-pulse">
                  Studio
                </span>
                {/* Liquid Reflection */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0099]/30 via-[#00e5ff]/30 to-[#00c853]/30 blur-2xl -z-10 scale-110" />
              </span>
            </h1>
          </div>

          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light relative">
            <span className="relative z-10">
              Unleash your creativity. Design personalized wallpapers, blinds, canvas art, and glass films — all custom-made to fit your vision, your space, and your style.
            </span>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" /> */}
          </p>

          {/* Liquid Glass Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Button */}
            <div className="relative group">
              {/* Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0099] via-[#00e5ff] to-[#00c853] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0099] to-[#00e5ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Button
                size="lg"
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 px-10 py-6 text-lg font-medium rounded-full transition-all duration-500 hover:scale-105 overflow-hidden shadow-2xl"
              >
                {/* Button Content */}
                <span className="relative z-10 flex items-center">
                  Begin Your Journey
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>

                {/* Liquid Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </div>

            {/* Secondary Button */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-xl" />

              <Button
                size="lg"
                variant="ghost"
                className="relative text-white hover:bg-white/10 px-10 py-6 text-lg font-medium rounded-full backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </span>

                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff0099]/20 via-[#00e5ff]/20 to-[#00c853]/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Liquid Glass Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03) 0%, transparent 30%)`,
          zIndex: 9,
        }}
      />

      {/* Floating Glass Elements */}
      <div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-[#ff0099]/20 to-[#00e5ff]/20 rounded-full blur-xl animate-pulse"
        style={{ zIndex: 5 }}
      />
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-[#00c853]/20 to-[#ff6d00]/20 rounded-full blur-xl animate-pulse delay-1000"
        style={{ zIndex: 5 }}
      />
      <div
        className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-[#40c4ff]/20 to-[#ff0099]/20 rounded-full blur-xl animate-pulse delay-500"
        style={{ zIndex: 5 }}
      />
    </section>
  )
}
