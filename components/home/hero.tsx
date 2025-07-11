"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, ArrowRight } from "lucide-react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { MovingBorder } from "@/components/ui/moving-border"
import { Spotlight } from "@/components/ui/spotlight"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  
// High-quality dummy images for testing
const heroBackgroundImage = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
const interiorDesignImage =
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
const exteriorDesignImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"

  return (
    <div ref={containerRef} className="relative w-full h-[100vh] overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        {/* <video
    src="/intro+.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  /> */}

  <Image
        src="/portfolio-white.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
      />
      </motion.div>

      {/* Spotlight effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255,255,255,0.05)" />

      {/* Content */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-block mb-6">
            <MovingBorder
              duration={2500}
              className="group"
              containerClassName="rounded-full"
              borderClassName="border-2"
            >
              <div className="relative flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white">
                <span className="inline-block w-2 h-2 rounded-full bg-magenta animate-pulse"></span>
                <span className="text-sm font-medium">Transform your space with Creative Interiors</span>
              </div>
            </MovingBorder>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="block">Elevate Your Space</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-magenta via-cyan to-lime">
              With Creative Design
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Discover premium interior and exterior solutions for homes, offices, and commercial spaces. Transform your
            environment with our expert design services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-8">
              Explore Products
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30  hover:bg-white/10 rounded-full px-8"
            >
              Our Services
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-4">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </div>

      {/* 3D Floating cards - Fixed implementation with proper text containment */}
      <div className="absolute bottom-[15%] right-[10%] z-30 hidden lg:block">
        <CardContainer className="w-[300px]">
          <CardBody className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md rounded-xl border border-white/20 shadow-xl h-[400px] w-[300px] group">
            {/* Glow effects */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-magenta/30 to-cyan/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
            <div className="absolute inset-0 bg-black/50 rounded-xl z-10"></div>

            {/* Card image - taking up 60% of card height */}
            <CardItem translateZ={50} className="w-full h-[60%] rounded-t-xl overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={interiorDesignImage || "/placeholder.svg"}
                  alt="Interior Design"
                  fill
                  className="object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
            </CardItem>

            {/* Card content - properly contained */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] flex flex-col justify-between p-6 z-20">
              <CardItem translateZ={80} className="text-white font-bold text-xl">
                Interior Design
              </CardItem>

              <CardItem translateZ={60} className="text-white/80 text-sm mt-1">
                Premium solutions for homes & offices
              </CardItem>

              <CardItem translateZ={100} className="flex justify-between items-center mt-4">
                <Link href="#" className="flex items-center text-cyan text-sm font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>

                <span className="bg-magenta/20 text-white text-xs px-2 py-1 rounded-full border border-magenta/40">
                  Featured
                </span>
              </CardItem>
            </div>

            {/* Decorative elements */}
            <CardItem
              translateZ={40}
              rotateX={10}
              rotateZ={-10}
              className="absolute top-5 right-5 w-20 h-20 bg-magenta/30 rounded-full blur-xl z-10"
           ><span></span></CardItem>

            <CardItem
              translateZ={20}
              rotateX={-10}
              rotateZ={10}
              className="absolute bottom-5 left-5 w-24 h-24 bg-cyan/20 rounded-full blur-xl z-10"
            ><span></span></CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <div className="absolute top-[20%] right-[20%] z-30 hidden lg:block">
        <CardContainer className="w-[300px]">
          <CardBody className="relative bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md rounded-xl border border-white/20 shadow-xl h-[400px] w-[300px] group">
            {/* Glow effects */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan/30 to-lime/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
            <div className="absolute inset-0 bg-black/50 rounded-xl z-10"></div>

            {/* Card image - taking up 60% of card height */}
            <CardItem translateZ={50} className="w-full h-[60%] rounded-t-xl overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={exteriorDesignImage || "/placeholder.svg"}
                  alt="Exterior Solutions"
                  fill
                  className="object-cover rounded-t-xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
            </CardItem>

            {/* Card content - properly contained */}
            <div className="absolute bottom-0 left-0 right-0 h-[40%] flex flex-col justify-between p-6 z-20">
              <CardItem translateZ={80} className="text-white font-bold text-xl">
                Exterior Solutions
              </CardItem>

              <CardItem translateZ={60} className="text-white/80 text-sm mt-1">
                Transform your outdoor spaces
              </CardItem>

              <CardItem translateZ={100} className="flex justify-between items-center mt-4">
                <Link href="#" className="flex items-center text-cyan text-sm font-medium hover:underline">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>

                <span className="bg-cyan/20 text-white text-xs px-2 py-1 rounded-full border border-cyan/40">New</span>
              </CardItem>
            </div>

            {/* Decorative elements */}
            <CardItem
              translateZ={40}
              rotateX={-10}
              rotateZ={10}
              className="absolute top-5 left-5 w-20 h-20 bg-cyan/30 rounded-full blur-xl z-10"
            ><span></span></CardItem>

            <CardItem
              translateZ={20}
              rotateX={10}
              rotateZ={-10}
              className="absolute bottom-5 right-5 w-24 h-24 bg-lime/20 rounded-full blur-xl z-10"
            ><span></span></CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}

