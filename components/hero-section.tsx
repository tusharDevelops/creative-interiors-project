"use client"

import { CardHeader } from "@/components/ui/card"

import { CardFooter } from "@/components/ui/card"

import { CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Vortex } from "@/components/ui/vortex"
import { WavyBackground } from "@/components/ui/wavy-background"
import { WobbleCard } from "@/components/ui/wobble-card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Vortex Background Effect */}
      <Vortex className="absolute inset-0 z-0" intensity={8} color="rgba(147, 51, 234, 0.2)" />

      {/* Wavy Background */}
      <WavyBackground
        className="absolute inset-0 z-10"
        colors={["rgba(79, 70, 229, 0.2)", "rgba(109, 40, 217, 0.2)", "rgba(147, 51, 234, 0.1)"]}
        amplitude={30}
      />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 text-sm rounded-full">
              Premium Interior Design
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
              Elevate Your Space With Luxury Design
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Transform your living spaces into extraordinary environments with our bespoke interior design services
              tailored to your unique style and preferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8">
                Explore Designs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-950/30 rounded-full px-8"
              >
                Book Consultation
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-purple-900 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={`Client ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <span className="font-bold text-white">500+</span> satisfied clients
              </div>
            </div>
          </motion.div>

          {/* Right Column - Cards */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Main Interior Image */}
              <WobbleCard className="col-span-2 bg-gradient-to-br from-purple-900/80 to-indigo-900/80 backdrop-blur-sm border-purple-700/50">
                <CardContent className="p-4">
                  <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Luxury Interior"
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                </CardContent>
                <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
                  <h3 className="font-semibold">Modern Elegance</h3>
                  <Badge variant="outline" className="border-purple-500 text-purple-300">
                    Featured
                  </Badge>
                </CardFooter>
              </WobbleCard>

              {/* Smaller Cards */}
              <WobbleCard className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-sm border-indigo-700/50">
                <CardHeader className="p-4 pb-2">
                  <h3 className="font-medium">Minimalist Design</h3>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Minimalist Design"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </WobbleCard>

              <WobbleCard className="bg-gradient-to-br from-purple-800/80 to-indigo-800/80 backdrop-blur-sm border-purple-600/50">
                <CardHeader className="p-4 pb-2">
                  <h3 className="font-medium">Luxury Materials</h3>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Luxury Materials"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </WobbleCard>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

