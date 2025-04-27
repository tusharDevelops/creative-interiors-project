"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LampContainer } from "@/components/ui/lamp"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { ArrowRight, Check, Building2, Store, Utensils, Hotel, Briefcase, Palette } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"

// Sample data for the page
const commercialServices = [
  {
    title: "Office Design",
    description:
      "Create productive and inspiring workspaces that reflect your company culture and enhance employee wellbeing.",
    icon: <Building2 className="h-10 w-10 text-white" />,
    className: "md:col-span-1",
  },
  {
    title: "Retail Spaces",
    description: "Design engaging retail environments that enhance customer experience and drive sales.",
    icon: <Store className="h-10 w-10 text-white" />,
    className: "md:col-span-1",
  },
  {
    title: "Hospitality Design",
    description: "Create memorable experiences for guests with thoughtful hospitality interior design.",
    icon: <Hotel className="h-10 w-10 text-white" />,
    className: "md:col-span-1",
  },
  {
    title: "Restaurant Design",
    description: "Design functional and atmospheric restaurant spaces that delight diners and optimize operations.",
    icon: <Utensils className="h-10 w-10 text-white" />,
    className: "md:col-span-1",
  },
]

const caseStudies = [
  {
    title: "Modern Tech Office",
    description:
      "A collaborative workspace designed for a growing tech company, featuring flexible work areas and brand-aligned aesthetics.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    category: "Office",
  },
  {
    title: "Boutique Retail Store",
    description:
      "A distinctive retail environment designed to showcase premium products and create a memorable shopping experience.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    category: "Retail",
  },
  {
    title: "Upscale Restaurant",
    description:
      "An elegant dining space that balances atmosphere with functionality to create an exceptional culinary experience.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    category: "Restaurant",
  },
]

const clientLogos = [
  { name: "Company 1", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Company 2", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Company 3", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Company 4", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Company 5", logo: "/placeholder.svg?height=80&width=160" },
  { name: "Company 6", logo: "/placeholder.svg?height=80&width=160" },
]

export default function CommercialDesignPage() {
  const [activeTab, setActiveTab] = useState("office")

  return (
    <main className="min-h-screen">
     
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-10" />
         <Image
                  src="/commercial-design.jpg"
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
              Commercial Design Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8"
            >
              We create functional, inspiring commercial spaces that enhance your brand, improve productivity, and deliver exceptional experiences.
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
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Commercial Design Services</h2>
            <p className="text-gray-600">
              We offer comprehensive design solutions for various commercial environments, tailored to your business
              needs.
            </p>
          </div>

          <BentoGrid className="max-w-5xl mx-auto">
            {commercialServices.map((service, i) => (
              <BentoGridItem
                key={i}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className={service.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-gray-600">
              Explore our commercial design projects and see how we've helped businesses transform their spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-none shadow-md h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Button variant="outline" className=" hover:bg-white/20">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <div className="mb-2">
                      <Badge variant="outline" className="bg-magenta/10 text-magenta border-magenta/30">
                        {study.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-magenta transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Button className="bg-magenta hover:bg-magenta/90 text-white">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20 bg-white">
        <TracingBeam className="px-4 md:px-6">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Commercial Design Process</h2>
              <p className="text-gray-600">
                We follow a comprehensive approach to ensure your commercial space meets your business objectives.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12 md:space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-4">
                    <div className="bg-magenta/10 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4">
                      <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-magenta" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">1. Discovery & Strategy</h3>
                    <p className="text-gray-600">
                      We begin by understanding your business goals, brand identity, and operational requirements to
                      develop a strategic design brief.
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <Image
                      src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Discovery & Strategy"
                      width={800}
                      height={500}
                      className="rounded-lg object-cover aspect-[16/9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-8 md:order-1 order-2">
                    <Image
                      src="https://images.unsplash.com/photo-1651629679477-82cab6ec3443?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Design Development"
                      width={800}
                      height={500}
                      className="rounded-lg object-cover aspect-[16/9]"
                    />
                  </div>
                  <div className="md:col-span-4 md:order-2 order-1">
                    <div className="bg-cyan/10 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4">
                      <Palette className="h-6 w-6 md:h-8 md:w-8 text-cyan" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">2. Design Development</h3>
                    <p className="text-gray-600">
                      Our designers create detailed space plans, 3D visualizations, and material selections that align
                      with your brand and functional needs.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-4">
                    <div className="bg-magenta/10 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4">
                      <Building2 className="h-6 w-6 md:h-8 md:w-8 text-magenta" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">3. Implementation</h3>
                    <p className="text-gray-600">
                      We manage the entire implementation process, working with contractors and vendors to bring the
                      design to life on time and within budget.
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <Image
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                      alt="Implementation"
                      width={800}
                      height={500}
                      className="rounded-lg object-cover aspect-[16/9]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-gray-600">
              We understand the unique requirements of different industries and create tailored design solutions.
            </p>
          </div>

          <Tabs defaultValue="office" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 md:mb-12">
              <TabsTrigger value="office">Office Spaces</TabsTrigger>
              <TabsTrigger value="retail">Retail & Hospitality</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare & Education</TabsTrigger>
            </TabsList>
            <TabsContent value="office">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="order-2 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                    alt="Office Design"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-[4/3] w-full"
                  />
                </div>
                <div className="flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Office Design Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    We create productive, inspiring workspaces that support your company culture, enhance employee
                    wellbeing, and optimize operational efficiency. Our office designs balance aesthetics with
                    functionality to create environments where people thrive.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Collaborative workspaces and meeting areas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Private offices and focus zones</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Reception and client-facing areas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Employee amenities and break rooms</span>
                    </li>
                  </ul>
                  <Button className="bg-magenta hover:bg-magenta/90 text-white w-fit">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="retail">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Retail & Hospitality Design</h3>
                  <p className="text-gray-600 mb-6">
                    Our retail and hospitality designs create memorable customer experiences that drive engagement and
                    sales. We balance brand storytelling with operational efficiency to create spaces that delight
                    customers and support business goals.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan mr-2 mt-0.5" />
                      <span>Retail stores and showrooms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan mr-2 mt-0.5" />
                      <span>Restaurants and cafes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan mr-2 mt-0.5" />
                      <span>Hotels and hospitality spaces</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-cyan mr-2 mt-0.5" />
                      <span>Pop-up shops and experiential spaces</span>
                    </li>
                  </ul>
                  <Button className="bg-cyan hover:bg-cyan/90 text-white w-fit">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                    alt="Retail Design"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-[4/3] w-full"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="healthcare">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="order-2 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                    alt="Healthcare Design"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover aspect-[4/3] w-full"
                  />
                </div>
                <div className="flex flex-col justify-center order-1 md:order-2">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Healthcare & Education Design</h3>
                  <p className="text-gray-600 mb-6">
                    We create healing and learning environments that prioritize wellbeing, safety, and functionality.
                    Our healthcare and education designs balance technical requirements with human-centered design
                    principles.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Medical offices and clinics</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Educational facilities and classrooms</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Wellness centers and therapy spaces</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-magenta mr-2 mt-0.5" />
                      <span>Student and patient-centered environments</span>
                    </li>
                  </ul>
                  <Button className="bg-magenta hover:bg-magenta/90 text-white w-fit">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-10 md:py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Trusted By Leading Companies</h2>
            <p className="text-gray-600">
              We've partnered with numerous industry leaders to create exceptional commercial spaces.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Call to Action */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
            Ready to Transform Your Commercial Space?
          </h2>
          <p className="text-gray-300 mb-8 md:mb-12">
            Contact us today to schedule a consultation and discover how our commercial design services can benefit your
            business.
          </p>
          <Link href="/services/consultation">
            <Button size="lg" className="bg-magenta hover:bg-magenta/90 text-white rounded-full px-6 md:px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
