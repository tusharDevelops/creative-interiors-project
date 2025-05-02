"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { cn } from "@/lib/utils"
import { ArrowRight, Hammer, Home, Ruler, Sparkles } from "lucide-react"

// Renovation services
const renovationServices = [
  {
    title: "Kitchen Renovation",
    description: "Transform your kitchen with modern designs, efficient layouts, and premium materials.",
    icon: <Hammer className="h-10 w-10 text-white" />,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Create a luxurious bathroom retreat with stylish fixtures, elegant finishes, and smart storage solutions.",
    icon: <Sparkles className="h-10 w-10 text-white" />,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Full Home Renovation",
    description:
      "Comprehensive renovation services to transform your entire home with cohesive design and quality craftsmanship.",
    icon: <Home className="h-10 w-10 text-white" />,
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Space Optimization",
    description: "Maximize your living space with thoughtful redesigns and innovative storage solutions.",
    icon: <Ruler className="h-10 w-10 text-white" />,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
]

// Renovation process
const renovationProcess = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a thorough consultation to understand your vision, needs, and budget for the renovation project.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Design & Planning",
    description:
      "Our designers create detailed plans, 3D visualizations, and material selections tailored to your specific requirements.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Proposal & Agreement",
    description:
      "We provide a comprehensive proposal including timeline, materials, and pricing for your approval before proceeding.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Construction & Implementation",
    description:
      "Our skilled team executes the renovation with attention to detail, quality craftsmanship, and regular progress updates.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Final Walkthrough & Handover",
    description:
      "We conduct a thorough inspection with you to ensure everything meets our high standards before project completion.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop",
  },
]

// Before & After projects
const beforeAfterProjects = [
  {
    title: "Modern Kitchen Transformation",
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068&auto=format&fit=crop",
    description: "Complete kitchen redesign with custom cabinetry, quartz countertops, and high-end appliances.",
  },
  {
    title: "Bathroom Renovation",
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop",
    description: "Luxury bathroom remodel featuring a walk-in shower, freestanding tub, and custom vanity.",
  },
  {
    title: "Living Room Makeover",
    before: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop",
    description: "Complete living room transformation with new flooring, built-ins, and architectural details.",
  },
]

export default function RenovationPage() {
  const [activeTab, setActiveTab] = useState("services")
  const [activeBeforeAfter, setActiveBeforeAfter] = useState(0)

  return (
    <main className="min-h-screen pb-16 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-10" />
            <Image
            src="/hero.jpg"
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
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Renovation Services
            </motion.h1>
            <div className="mb-8">
              <TextGenerateEffect
                words="Transform your space with our comprehensive renovation services. From concept to completion, we handle every aspect of your renovation project with expertise and care."
                className="text-lg md:text-xl text-gray-200"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8"
                onClick={() => {
                  document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })
                  setActiveTab("projects")
                }}
              >
                View Our Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className=" hover:bg-white/10 rounded-full px-8"
                onClick={() => {
                  document.getElementById("process-section")?.scrollIntoView({ behavior: "smooth" })
                  setActiveTab("process")
                }}
              >
                Learn About Our Process
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="services" value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 mb-20 md:grid-cols-3">
              <TabsTrigger value="services">Our Services</TabsTrigger>
              <TabsTrigger value="process" id="process-tab">
                Renovation Process
              </TabsTrigger>
              <TabsTrigger value="projects" id="projects-tab">
                Before & After
              </TabsTrigger>
            </TabsList>

            {/* Services Tab */}
            <TabsContent value="services">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Renovation Services</h2>
                <p className="text-gray-600 text-lg">
                  We offer a comprehensive range of renovation services to transform your space into something
                  extraordinary.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {renovationServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden h-full border-none shadow-lg">
                      <div className="relative h-64 w-full">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                          <div className="flex items-center gap-4">
                            <div className={`rounded-full p-3 ${index % 2 === 0 ? "bg-amber-500" : "bg-cyan"}`}>
                              {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-gray-600">{service.description}</p>
                        <Button variant="link" className="mt-4 p-0 text-amber-500 hover:text-amber-600">
                          Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Process Tab */}
            <TabsContent value="process" id="process-section">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Renovation Process</h2>
                <p className="text-gray-600 text-lg">
                  We follow a structured approach to ensure your renovation project is completed to the highest
                  standards.
                </p>
              </div>

              <div className="space-y-16">
                {renovationProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                  >
                    <div className="md:w-1/2">
                      <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden">
                        <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`rounded-full w-12 h-12 flex items-center justify-center text-white font-bold ${index % 3 === 0 ? "bg-amber-500" : index % 3 === 1 ? "bg-cyan" : "bg-magenta"}`}
                        >
                          {index + 1}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects" id="projects-section">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Transformations</h2>
                <p className="text-gray-600 text-lg">
                  See the dramatic transformations we've achieved for our clients through our renovation services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {beforeAfterProjects.map((project, index) => (
                  <button
                    key={index}
                    className={cn(
                      "p-4 rounded-lg text-left transition-all",
                      activeBeforeAfter === index
                        ? "bg-amber-500 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200",
                    )}
                    onClick={() => setActiveBeforeAfter(index)}
                  >
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className={activeBeforeAfter === index ? "text-white/80" : "text-gray-600"}>
                      {project.description}
                    </p>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden border-none shadow-lg">
                  <div className="relative h-80 w-full">
                    <Image
                      src={beforeAfterProjects[activeBeforeAfter].before || "/placeholder.svg"}
                      alt="Before"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Before</h3>
                    </div>
                  </div>
                </Card>
                <Card className="overflow-hidden border-none shadow-lg">
                  <div className="relative h-80 w-full">
                    <Image
                      src={beforeAfterProjects[activeBeforeAfter].after || "/placeholder.svg"}
                      alt="After"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">After</h3>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-400 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Renovation Project?</h2>
            <p className="text-white/80 text-lg mb-8">
              Contact us today to schedule a consultation and take the first step towards transforming your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-amber-500 hover:bg-white/90 rounded-full px-8">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className=" hover:bg-white/10 rounded-full px-8"
              >
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
