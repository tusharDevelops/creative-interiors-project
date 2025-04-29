"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { HoverEffect } from "@/components/ui/hover-effect"
import { ArrowRight, Check, Palette, Lightbulb, Home, Users } from "lucide-react"


// Sample data for the page
const interiorServices = [
  {
    title: "Living Room Design",
    description: "Create a welcoming living space that balances comfort and style with our expert design services.",
    link: "#living-room",
  },
  {
    title: "Bedroom Transformation",
    description:
      "Transform your bedroom into a peaceful sanctuary with custom design solutions tailored to your needs.",
    link: "#bedroom",
  },
  {
    title: "Kitchen Redesign",
    description:
      "Reimagine your kitchen with functional layouts and beautiful finishes that inspire culinary creativity.",
    link: "#kitchen",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Elevate your bathroom with luxurious fixtures and thoughtful design that maximizes space and comfort.",
    link: "#bathroom",
  },
]

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We begin with a thorough consultation to understand your vision, needs, and budget for the project.",
    icon: <Users className="h-10 w-10 text-white" />,
    className: "md:col-span-1",
  },
  {
    title: "Concept Development",
    description: "Our designers create detailed concept boards and space plans tailored to your specific requirements.",
    icon: <Lightbulb className="h-10 w-10 text-white" />,
    className: "md:col-span-1",
  },
  {
    title: "Design Presentation",
    description: "We present comprehensive design solutions including materials, furnishings, and color schemes.",
    icon: <Palette className="h-10 w-10 text-white" />,
    className: "md:col-span-1",
  },
  {
    title: "Implementation",
    description: "Our team manages the entire implementation process, from procurement to installation and styling.",
    icon: <Home className="h-10 w-10 text-white" />,
    className: "md:col-span-1",
  },
]

const portfolioItems = [
  {
    title: "Modern Minimalist Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    category: "Living Room",
  },
  {
    title: "Luxury Master Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    category: "Bedroom",
  },
  {
    title: "Contemporary Kitchen Design",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
    category: "Kitchen",
  },
  {
    title: "Spa-Inspired Bathroom",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop",
    category: "Bathroom",
  },
]

export default function InteriorDesignPage() {
  const [activeTab, setActiveTab] = useState("residential")

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-10" />
         <Image
                  src="/interior-design.jpg"
                  alt="Background"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                  
                />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Interior Design Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8"
            >
              Transform your space into an extraordinary environment that reflects your unique style and meets your
              functional needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-8"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Our Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className=" hover:bg-white/10 rounded-full px-8"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Our Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Interior Design Services</h2>
            <p className="text-gray-600 text-lg">
              We offer comprehensive interior design solutions tailored to your unique style, needs, and budget.
            </p>
          </div>

          <HoverEffect items={interiorServices} className="max-w-5xl mx-auto" />

          <div className="text-center mt-12">
            <Link href="/services/consultation">
              <Button className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-8">
                Book a Design Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-gray-600 text-lg">
              Explore our collection of thoughtfully designed interiors that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] w-full relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80 mb-4">{item.category}</p>
                  <Button variant="outline" className=" hover:bg-white/20 w-fit">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-8">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-magenta to-cyan text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-white/80 text-lg">
              We follow a comprehensive approach to ensure your vision becomes reality.
            </p>
          </div>

          <BentoGrid className="max-w-5xl mx-auto">
            {processSteps.map((step, i) => (
              <BentoGridItem
                key={i}
                title={step.title}
                description={step.description}
                icon={step.icon}
                className={step.className}
              />
            ))}
          </BentoGrid>

          <div className="text-center mt-12">
            <Link href="/services/consultation">
              <Button size="lg" className="bg-white text-magenta hover:bg-white/90 rounded-full px-8">
                Start Your Design Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
            </Link>
            
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Design Solutions</h2>
            <p className="text-gray-600 text-lg">
              We offer specialized interior design services for various property types and needs.
            </p>
          </div>

          <Tabs defaultValue="residential" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="residential">Residential Design</TabsTrigger>
              <TabsTrigger value="specialty">Specialty Services</TabsTrigger>
            </TabsList>
            <TabsContent value="residential">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                    alt="Residential Interior Design"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-[4/3] w-full"
                  />
                </div>
                <div className="flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4">Residential Interior Design</h3>
                  <p className="text-gray-600 mb-6">
                    Our residential design services transform houses into personalized homes that reflect your unique
                    style and meet your functional needs. From single rooms to entire homes, we create spaces that
                    inspire and delight.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Complete home design and renovation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Room-specific design solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Furniture selection and custom pieces</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Color consultation and material selection</span>
                    </li>
                  </ul>
                  <Link href="/services/consultation">
                    <Button className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-6">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="specialty">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Specialty Design Services</h3>
                  <p className="text-gray-600 mb-6">
                    Our specialty design services address unique needs and spaces, from vacation homes to aging-in-place
                    modifications. We provide tailored solutions for specific requirements and challenges.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan mr-2 mt-0.5" />
                      <span>Vacation home and rental property design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan mr-2 mt-0.5" />
                      <span>Aging-in-place and accessibility solutions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan mr-2 mt-0.5" />
                      <span>Smart home integration and technology planning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan mr-2 mt-0.5" />
                      <span>Sustainable and eco-friendly design options</span>
                    </li>
                  </ul>
                  <Link href="/services/consultation">
                    <Button className="bg-cyan hover:bg-cyan/90 text-white rounded-full px-6">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                    alt="Specialty Interior Design"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-[4/3] w-full"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-magenta to-cyan">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let's collaborate to create a design that perfectly reflects your style and meets your functional needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/consultation">
                <Button
                  size="lg"
                  className="bg-white text-magenta hover:bg-white/90 rounded-full px-8 w-full sm:w-auto"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className=" hover:bg-white/10 rounded-full px-8 w-full sm:w-auto"
                onClick={scrollToPortfolio}
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
