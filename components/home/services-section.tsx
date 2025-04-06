"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Building2, PenTool, Palette, Truck, CheckCircle } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { FeatureBlockAnimatedCard } from "@/components/ui/feature-block-animated-card"
import { BackgroundOverlayCard } from "@/components/ui/background-overlay-card"
import { ContentCard } from "@/components/ui/content-card"
import ThreeDCard from "@/components/ui/3d-card2"

// Mock data for services
const services = [
  {
    id: "residential",
    name: "Residential Design",
    icon: Home,
    description:
      "Transform your home with our expert residential interior design services. We create personalized spaces that reflect your style and meet your functional needs.",
    features: [
      "Custom furniture selection and arrangement",
      "Color scheme and material consultation",
      "Space planning and optimization",
      "Lighting design and fixture selection",
      "Accessory and decor curation",
    ],
    image: "/placeholder.svg?height=600&width=800",
    color: "magenta",
  },
  {
    id: "commercial",
    name: "Commercial Design",
    icon: Building2,
    description:
      "Elevate your business environment with our commercial design solutions. We create functional, impressive spaces that enhance productivity and reflect your brand identity.",
    features: [
      "Office space planning and layout design",
      "Brand integration into physical spaces",
      "Ergonomic furniture selection",
      "Commercial lighting solutions",
      "Reception and common area design",
    ],
    image: "/placeholder.svg?height=600&width=800",
    color: "cyan",
  },
  {
    id: "consultation",
    name: "Design Consultation",
    icon: PenTool,
    description:
      "Get expert advice from our professional designers. Our consultation services provide guidance on color schemes, furniture selection, layout optimization, and more.",
    features: [
      "In-home or virtual consultations",
      "Personalized design recommendations",
      "Budget-friendly solutions",
      "Material and finish suggestions",
      "Space planning advice",
    ],
    image: "/placeholder.svg?height=600&width=800",
    color: "magenta",
  },
  {
    id: "renovation",
    name: "Renovation Services",
    icon: Palette,
    description:
      "Revitalize your space with our comprehensive renovation services. From minor updates to complete transformations, we handle every aspect of your renovation project.",
    features: [
      "Full-service renovation management",
      "Kitchen and bathroom remodeling",
      "Flooring and wall treatments",
      "Custom cabinetry and built-ins",
      "Fixture and appliance upgrades",
    ],
    image: "/placeholder.svg?height=600&width=800",
    color: "cyan",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(147, 51, 234, 0.05)" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            From concept to completion, we offer comprehensive design services to transform your spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <FeatureBlockAnimatedCard
              key={service.id}
              title={service.name}
              description={service.description}
              icon={<service.icon className={`h-6 w-6 text-${service.color}`} />}
              className="h-full"
            />
          ))}
        </div>

        <BackgroundGradientAnimation>
          <div className="absolute inset-0 bg-white/90" />
          <div className="relative z-10 px-4 py-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Featured Service</h3>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <BackgroundOverlayCard className="h-full">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{services[0].name}</h3>
                  <p className="text-gray-600 mb-6">{services[0].description}</p>

                  <div className="space-y-3 mb-8">
                    {services[0].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-magenta mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-magenta hover:bg-magenta/90">Book a Consultation</Button>
                    <Button variant="outline" className="border-magenta text-magenta hover:bg-magenta/5">
                      Learn More
                    </Button>
                  </div>
                </div>
              </BackgroundOverlayCard>

              <div className="flex justify-center items-center">
                <ThreeDCard />
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContentCard
            title="Expert Design"
            content="Our team of professional designers brings years of experience and creativity to every project."
            icon={<PenTool className="h-6 w-6 text-cyan" />}
            className="h-full"
          />

          <ContentCard
            title="Quality Materials"
            content="We source the finest materials and products to ensure durability and aesthetic excellence."
            icon={<Palette className="h-6 w-6 text-magenta" />}
            className="h-full"
          />

          <ContentCard
            title="Professional Installation"
            content="Our skilled installation team ensures every element is perfectly placed and functional."
            icon={<Truck className="h-6 w-6 text-orange-500" />}
            className="h-full"
          />
        </div>
      </div>
    </section>
  )
}

