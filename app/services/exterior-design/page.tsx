"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Palmtree, ArrowRight, Leaf, Sun, Wind, CheckCircle2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { WavyBackground } from "@/components/ui/wavy-background"
import { Spotlight } from "@/components/ui/spotlight"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function ExteriorDesignPage() {
  const features = [
    {
      title: "Landscape Architecture",
      description: "Custom landscape designs that enhance your property's natural beauty",
      icon: <Palmtree className="h-6 w-6 text-primary" />,
    },
    {
      title: "Outdoor Living Spaces",
      description: "Create functional and beautiful outdoor areas for relaxation and entertainment",
      icon: <Sun className="h-6 w-6 text-primary" />,
    },
    {
      title: "Facade Enhancement",
      description: "Transform the exterior appearance of your home or building",
      icon: <Wind className="h-6 w-6 text-primary" />,
    },
    {
      title: "Sustainable Design",
      description: "Eco-friendly solutions that reduce environmental impact and maintenance costs",
      icon: <Leaf className="h-6 w-6 text-primary" />,
    },
  ]

  const portfolioItems = [
    {
      title: "Modern Garden Retreat",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1558521958-0a228e77e984?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Contemporary Patio Design",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop",
    },
    {
      title: "Luxury Pool Landscape",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2064&auto=format&fit=crop",
    },
    {
      title: "Urban Rooftop Garden",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?q=80&w=2073&auto=format&fit=crop",
    },
    {
      title: "Coastal Property Landscaping",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1735589661848-c231b75a0d62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sustainable Garden Design",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const testimonials = [
    {
      quote:
        "The exterior design team transformed our backyard into a stunning oasis. The attention to detail and creative vision exceeded our expectations.",
      author: "Sarah Johnson",
      role: "Residential Client",
    },
    {
      quote:
        "Our commercial property's curb appeal has dramatically improved thanks to the innovative landscape design. We've received countless compliments.",
      author: "Michael Chen",
      role: "Business Owner",
    },
    {
      quote:
        "The sustainable garden design not only looks beautiful but has reduced our water usage by 40%. A truly remarkable transformation.",
      author: "Emma Rodriguezhttps://images.unsplash.com/photo-1600573472550-8090b0e0745e?q=80&w=2070&auto=format&fit=crop",
      role: "Eco-conscious Homeowner",
    },
  ]

  const faqs = [
    {
      question: "How long does a typical exterior design project take?",
      answer:
        "Project timelines vary based on scope and complexity. Small residential projects may take 4-6 weeks, while larger commercial projects can take 3-6 months from concept to completion.",
    },
    {
      question: "Do you offer sustainable and eco-friendly design options?",
      answer:
        "We specialize in sustainable exterior design solutions including native plantings, water-efficient irrigation systems, permeable hardscaping, and eco-friendly materials.",
    },
    {
      question: "What is the process for getting started with an exterior design project?",
      answer:
        "We begin with a consultation to understand your vision and needs, followed by a site analysis. Our team then develops concept designs, refines them based on your feedback, and proceeds to implementation.",
    },
    {
      question: "Can you work with existing landscape features?",
      answer:
        "Yes, we often incorporate existing landscape elements into our designs. We evaluate what can be preserved, enhanced, or repurposed to create a cohesive and beautiful exterior space.",
    },
    {
      question: "Do you provide maintenance services after project completion?",
      answer:
        "We offer comprehensive maintenance packages to ensure your exterior spaces continue to thrive. Our team can provide regular upkeep, seasonal adjustments, and long-term care plans.",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We begin with an in-depth discussion to understand your vision, requirements, and budget for your exterior space.",
    },
    {
      number: "02",
      title: "Site Analysis",
      description:
        "Our team conducts a thorough evaluation of your property to identify opportunities, constraints, and existing features.",
    },
    {
      number: "03",
      title: "Concept Development",
      description:
        "We create detailed concept designs and 3D visualizations that bring your exterior space to life before implementation.",
    },
    {
      number: "04",
      title: "Implementation",
      description:
        "Our skilled team handles the complete execution of the design plan, ensuring quality craftsmanship and attention to detail.",
    },
  ]

  return (
    <>
      {/* Hero Section with Spotlight */}
      <div className="relative h-[80vh] overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
        <BackgroundBeams className="absolute inset-0 z-10" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/exterior.webp"
            alt="Exterior Design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <motion.h1
            className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Exterior Design
            <span className="block text-cyan">Excellence</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <TextGenerateEffect
              words="Elevate your property's curb appeal and create stunning outdoor spaces that extend your living area beyond four walls."
              className="text-lg md:text-xl text-gray-200 mb-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/services/consultation">
              <Button size="lg" className="bg-cyan hover:bg-cyan/90 text-white rounded-full px-8">
                Book a Consultation <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className=" hover:bg-white/10 rounded-full px-8"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Features Section with Wavy Background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <WavyBackground className="absolute inset-0 z-0" colors={["#0c4a6e20", "#0e7490"]} />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Our Exterior Design Expertise
            </motion.h2>
            <motion.p
              className="text-white/80 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              We create harmonious outdoor environments that complement your architecture and lifestyle.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-cyan/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Improved Grid Layout */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Our Exterior Design Portfolio
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Browse through our collection of completed exterior design projects
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-xl shadow-md"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-cyan/80 rounded-full text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white text-cyan hover:bg-white/90 rounded-full" onClick={() => {}}>
                      View Project
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Our Exterior Design Services
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Comprehensive solutions for all your outdoor design needs
            </motion.p>
          </div>

          <BentoGrid className="max-w-7xl mx-auto">
            {[
              {
                title: "Landscape Design",
                description:
                  "Custom landscape architecture that enhances the natural beauty of your property while addressing functional needs.",
                header: (
                  <Image
                    src="https://images.unsplash.com/photo-1558521958-0a228e77e984?q=80&w=2070&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Landscape Design"
                    className="object-cover w-full h-full rounded-xl"
                  />
                ),
                className: "md:col-span-2",
              },
              {
                title: "Outdoor Living Spaces",
                description: "Create functional and beautiful outdoor areas for relaxation, dining, and entertainment.",
                header: (
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1770&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Outdoor Living"
                    className="object-cover w-full h-full rounded-xl"
                  />
                ),
                className: "md:col-span-1",
              },
              {
                title: "Facade Enhancement",
                description:
                  "Transform the exterior appearance of your home or building with architectural elements and finishes.",
                header: (
                  <Image
                    src="https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?q=80&w=2073&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Facade Enhancement"
                    className="object-cover w-full h-full rounded-xl"
                  />
                ),
                className: "md:col-span-1",
              },
              {
                title: "Sustainable Design",
                description:
                  "Eco-friendly solutions that reduce environmental impact and maintenance costs while creating beautiful spaces.",
                header: (
                  <Image
                    src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2070&auto=format&fit=crop"
                    width={600}
                    height={400}
                    alt="Sustainable Design"
                    className="object-cover w-full h-full rounded-xl"
                  />
                ),
                className: "md:col-span-2",
              },
            ].map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                
                className={item.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Process Section - Fixed Implementation */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Our Design Process
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A structured approach that ensures your vision becomes reality
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan/20 transition-all duration-300"
              >
                <div className="absolute -top-6 -left-6 bg-cyan text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-cyan/10 rounded-full flex items-center justify-center text-cyan">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Fixed Implementation */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hear from homeowners and businesses who have transformed their exterior spaces
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg italic mb-6 text-gray-700">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-cyan/20 rounded-full flex items-center justify-center text-cyan mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Tracing Beam */}
      <section className="py-24 md:py-32 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Everything you need to know about our exterior design services
            </motion.p>
          </div>

          <TracingBeam className="px-4">
            <div className="max-w-3xl mx-auto space-y-12">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 md:py-32 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Benefits of Professional Exterior Design
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Discover how our exterior design services can transform your property
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Increased Property Value",
                description:
                  "Well-designed exterior spaces can increase your property value by up to 20%, providing an excellent return on investment.",
              },
              {
                title: "Enhanced Lifestyle",
                description:
                  "Extend your living space outdoors with functional areas for relaxation, entertainment, and recreation.",
              },
              {
                title: "Improved Energy Efficiency",
                description:
                  "Strategic landscaping can reduce energy costs by providing natural shade in summer and windbreaks in winter.",
              },
              {
                title: "Environmental Benefits",
                description:
                  "Sustainable design practices improve local ecosystems, reduce water usage, and support biodiversity.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center text-cyan">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-300 to-blue-500">
              <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Outdoor Space?</h2>
                  <p className="text-white/80 text-lg mb-8">
                  Schedule a consultation with our exterior design experts to begin your journey to a beautifully designed property.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-amber-500 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg"
                    
                  >
                    Book Your Consultation Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </section>
    </>
  )
}
