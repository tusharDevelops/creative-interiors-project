"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Filter, ChevronDown, X } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"

// Portfolio projects data
const allProjects = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    description: "A clean, minimalist living room design with premium materials and subtle luxury touches",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    category: "Residential",
    subcategory: "Living Room",
    tags: ["Living Room", "Minimalist", "Modern"],
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Penthouse Suite",
    description: "Complete interior design for a high-end penthouse with panoramic city views",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    category: "Residential",
    subcategory: "Penthouse",
    tags: ["Penthouse", "Luxury", "Urban"],
    featured: true,
  },
  {
    id: 3,
    title: "Boutique Hotel Lobby",
    description: "Elegant and welcoming hotel lobby design with custom furniture and lighting",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop",
    category: "Commercial",
    subcategory: "Hospitality",
    tags: ["Hotel", "Lobby", "Hospitality"],
    featured: true,
  },
  {
    id: 4,
    title: "Executive Office Suite",
    description: "Sophisticated office design balancing functionality with premium aesthetics",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    category: "Commercial",
    subcategory: "Office",
    tags: ["Office", "Executive", "Corporate"],
    featured: true,
  },
  {
    id: 5,
    title: "Contemporary Kitchen Renovation",
    description: "Modern kitchen redesign with high-end appliances and custom cabinetry",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    subcategory: "Kitchen",
    tags: ["Kitchen", "Contemporary", "Renovation"],
    featured: true,
  },
  {
    id: 6,
    title: "Spa & Wellness Center",
    description: "Tranquil spa design focusing on relaxation and natural elements",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2070&auto=format&fit=crop",
    category: "Commercial",
    subcategory: "Wellness",
    tags: ["Spa", "Wellness", "Relaxation"],
    featured: true,
  },
  {
    id: 7,
    title: "Urban Loft Conversion",
    description: "Industrial loft transformed into a modern living space with original architectural elements",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    subcategory: "Living Room",
    tags: ["Loft", "Industrial", "Urban"],
    featured: false,
  },
  {
    id: 8,
    title: "Beachfront Villa",
    description: "Coastal-inspired luxury villa design with panoramic ocean views",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    subcategory: "Villa",
    tags: ["Villa", "Coastal", "Luxury"],
    featured: false,
  },
  {
    id: 9,
    title: "Fine Dining Restaurant",
    description: "Upscale restaurant interior with custom lighting and bespoke furniture",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    category: "Commercial",
    subcategory: "Restaurant",
    tags: ["Restaurant", "Fine Dining", "Hospitality"],
    featured: false,
  },
  {
    id: 10,
    title: "Luxury Retail Boutique",
    description: "High-end retail space designed to showcase premium fashion and accessories",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    category: "Commercial",
    subcategory: "Retail",
    tags: ["Retail", "Boutique", "Fashion"],
    featured: false,
  },
  {
    id: 11,
    title: "Mountain Retreat Chalet",
    description: "Cozy yet luxurious mountain home with natural materials and panoramic views",
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=2073&auto=format&fit=crop",
    category: "Residential",
    subcategory: "Chalet",
    tags: ["Chalet", "Mountain", "Retreat"],
    featured: false,
  },
  {
    id: 12,
    title: "Art Gallery Exhibition Space",
    description: "Minimalist gallery design focused on optimal art display and visitor experience",
    image: "https://images.unsplash.com/photo-1577720643272-265f09367456?q=80&w=2070&auto=format&fit=crop",
    category: "Commercial",
    subcategory: "Gallery",
    tags: ["Gallery", "Exhibition", "Art"],
    featured: false,
  },
  {
    id: 13,
    title: "Modern Bathroom Renovation",
    description: "Luxurious bathroom with spa-like features and premium fixtures",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    subcategory: "Bathroom",
    tags: ["Bathroom", "Modern", "Renovation"],
    featured: false,
  },
  {
    id: 14,
    title: "Corporate Headquarters",
    description: "Innovative office design for a tech company's headquarters",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    category: "Commercial",
    subcategory: "Office",
    tags: ["Office", "Corporate", "Modern"],
    featured: false,
  },
  {
    id: 15,
    title: "Scandinavian-Inspired Bedroom",
    description: "Minimalist bedroom design with natural materials and soft textures",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    category: "Residential",
    subcategory: "Bedroom",
    tags: ["Bedroom", "Scandinavian", "Minimalist"],
    featured: false,
  },
]

// Extract unique categories and subcategories
const categories = ["All", ...new Set(allProjects.map((project) => project.category))]
const subcategories = ["All", ...new Set(allProjects.map((project) => project.subcategory))]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubcategory, setSelectedSubcategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(allProjects)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Refs for scroll animations
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  // Filter projects based on category and subcategory
  useEffect(() => {
    let filtered = allProjects

    if (selectedCategory !== "All") {
      filtered = filtered.filter((project) => project.category === selectedCategory)
    }

    if (selectedSubcategory !== "All") {
      filtered = filtered.filter((project) => project.subcategory === selectedSubcategory)
    }

    setFilteredProjects(filtered)
  }, [selectedCategory, selectedSubcategory])

  // Set loaded state after initial render
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Reset subcategory when category changes
  useEffect(() => {
    setSelectedSubcategory("All")
  }, [selectedCategory])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background Beams */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-1">
        <Image
          src="/portfolio-white.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div ref={headerRef} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-cyan to-purple-600">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              Explore our collection of premium interior design projects that showcase our expertise and creativity in
              transforming spaces.
            </p>
            <Button
              size="lg"
              className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-8"
              onClick={() => {
                document.getElementById("portfolio-grid")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 md:hidden w-full"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            <div className={cn("w-full md:flex md:items-center md:gap-6", isFilterOpen ? "block" : "hidden md:flex")}>
              {/* Category Filter */}
              <div className="mb-4 md:mb-0">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer",
                        selectedCategory === category
                          ? "bg-magenta hover:bg-magenta/90"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100",
                      )}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Subcategory Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Room Type</h3>
                <div className="flex flex-wrap gap-2">
                  {subcategories.map((subcategory) => (
                    <Badge
                      key={subcategory}
                      variant={selectedSubcategory === subcategory ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer",
                        selectedSubcategory === subcategory
                          ? "bg-cyan hover:bg-cyan/90"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100",
                      )}
                      onClick={() => setSelectedSubcategory(subcategory)}
                    >
                      {subcategory}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== "All" || selectedSubcategory !== "All") && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700 ml-auto"
                  onClick={() => {
                    setSelectedCategory("All")
                    setSelectedSubcategory("All")
                  }}
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="portfolio-grid" className="py-16">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={cn(
                      "group cursor-pointer",
                      project.featured && isLoaded && "md:col-span-2 md:row-span-2",
                    )}
                    onMouseEnter={() => setActiveProject(project.id)}
                    onMouseLeave={() => setActiveProject(null)}
                  >
                    <ProjectCard project={project} isActive={activeProject === project.id} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">No projects found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your filter criteria</p>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedSubcategory("All")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-magenta to-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's collaborate to create a design that perfectly reflects your style and meets your functional needs.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-white text-magenta hover:bg-white/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    category: string
    subcategory: string
    tags: string[]
    featured: boolean
  }
  isActive: boolean
}

function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full border-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={cn("object-cover transition-transform duration-700", isActive ? "scale-110" : "scale-100")}
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300",
            isActive ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Hover Content */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300",
            isActive ? "opacity-100" : "opacity-0",
          )}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Badge className="bg-magenta text-white mb-2">{project.category}</Badge>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
            <Button asChild variant="outline" className="text-black hover:bg-white/20">
              <Link href={`/projects/${project.id}`}>
                View Details
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Info visible by default */}
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-magenta transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm">{project.subcategory}</p>
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-gray-400 transition-transform duration-300",
              isActive ? "rotate-180" : "rotate-0",
            )}
          />
        </div>
      </CardContent>
    </Card>
  )
}
