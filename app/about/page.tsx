"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { SparklesCore } from "@/components/ui/sparkles"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { MacbookScroll } from "@/components/ui/macbook-scroll"
import { HoverEffect } from "@/components/ui/hover-effect"
import { WavyBackground } from "@/components/ui/wavy-background"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { JourneyScroll } from "@/components/ui/journey-scroll"
import { TeamAccordion } from "@/components/ui/team-accordion"
import { VideoMasking } from "@/components/video-masking"
import {
  Globe,
  Lightbulb,
  Rocket,
  Users,
  MoveRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Award,
  Heart,
  Clock,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Earth from "@/components/globe"

// Journey content for sticky scroll
const journeyContent = [
  {
    title: "Our Beginning",
    description:
      "Creative Interiors was founded in 2008 with a vision to transform ordinary spaces into extraordinary environments. What began as a small design studio has grown into a full-service interior design firm with a reputation for excellence and innovation.",
    image: "https://images.pexels.com/photos/4860068/pexels-photo-4860068.jpeg", // Art studio with tables
  },
  {
    title: "Growth & Expansion",
    description:
      "By 2012, we had expanded our team and services to include commercial projects alongside our residential work. This period marked significant growth as we established partnerships with architects, contractors, and artisans who shared our commitment to quality and design excellence.",
    image: "https://images.pexels.com/photos/4692281/pexels-photo-4692281.jpeg", // Building under construction
  },
  {
    title: "International Recognition",
    description:
      "In 2016, our work gained international recognition when our Luxury Penthouse project was featured in several prestigious design publications. This exposure led to opportunities to work on projects across Europe and Asia, expanding our global footprint.",
    image: "https://images.pexels.com/photos/13201477/pexels-photo-13201477.jpeg", // Modern luxury apartment
  },
  {
    title: "Today & Beyond",
    description:
      "Today, Creative Interiors stands as a leader in the design industry with a diverse portfolio of award-winning projects. We continue to push boundaries, embrace sustainable practices, and create spaces that inspire and delight our clients around the world.",
    image: "https://images.pexels.com/photos/29586720/pexels-photo-29586720.jpeg", // Modern art-inspired living room
  },
];

// Values data for bento grid
const values = [
  {
    title: "Design Excellence",
    description: "We pursue perfection in every detail, creating spaces that are both beautiful and functional.",
    icon: <Award className="h-6 w-6 text-magenta" />,
    className: "md:col-span-1",
  },
  {
    title: "Client-Centered Approach",
    description: "Your vision and needs are at the heart of everything we design and create.",
    icon: <Heart className="h-6 w-6 text-cyan" />,
    className: "md:col-span-1",
  },
  {
    title: "Innovation",
    description: "We constantly explore new ideas, materials, and techniques to push the boundaries of design.",
    icon: <Lightbulb className="h-6 w-6 text-lime" />,
    className: "md:col-span-1",
  },
  {
    title: "Sustainability",
    description: "We're committed to environmentally responsible design practices and materials.",
    icon: <Globe className="h-6 w-6 text-cyan" />,
    className: "md:col-span-1",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, bringing together diverse talents to achieve exceptional results.",
    icon: <Users className="h-6 w-6 text-magenta" />,
    className: "md:col-span-2",
  },
  {
    title: "Attention to Detail",
    description: "We obsess over the small things because we know they make a big difference in the final design.",
    icon: <Zap className="h-6 w-6 text-orange" />,
    className: "md:col-span-1",
  },
  {
    title: "Timeless Design",
    description: "We create spaces that endure beyond trends, remaining relevant and beautiful for years to come.",
    icon: <Clock className="h-6 w-6 text-lime" />,
    className: "md:col-span-1",
  },
  {
    title: "Exceptional Service",
    description: "From concept to completion, we provide a seamless, professional experience for every client.",
    icon: <Rocket className="h-6 w-6 text-orange" />,
    className: "md:col-span-1",
  },
]

// Team members data
const teamMembers = [
  {
    id: "1",
    url: "/pradeep.jpg",
    title: "Mr. Pradeep Dass",
    description: "Founder",
  },
  {
    id: "2",
    url: "/ramesh.jpg",
    title: "Mr. Ramesh Kumar",
    description: "Co-Founder",
  },
  // {
  //   id: "3",
  //   url: "/vinay.jpg",
  //   title: "Naymur Rahman",
  //   description: "CTO & Co-Founder",
  // },
]

// Services for hover effect cards
const services = [
  {
    title: "Residential Design",
    description: "Transform your home with our expert residential interior design services.",
    link: "/services/residential",
  },
  {
    title: "Commercial Design",
    description: "Elevate your business environment with our commercial design solutions.",
    link: "/services/commercial",
  },
  {
    title: "Design Consultation",
    description: "Get expert advice from our professional designers.",
    link: "/services/consultation",
  },
  {
    title: "Renovation Services",
    description: "Revitalize your space with our comprehensive renovation services.",
    link: "/services/renovation",
  },
]

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
<main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section with Wavy Background */}
      <section className="relative py-20 overflow-hidden">
      
          <Image
        src="/about-dark.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

        <WavyBackground className="absolute inset-0" colors={["#f9a8d4", "#67e8f9", "#d9f99d"]} />
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-cyan to-purple-600"
            >
              About Creative Interiors
            </motion.h1>
            <div className="h-20 w-full">
              <SparklesCore
                id="tsparticles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#EC4899"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 mb-8"
            >
              <TextGenerateEffect
                words="We transform spaces into extraordinary environments that inspire, function beautifully, and reflect our clients unique vision."
                className=" text-xl text-gray-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button className="bg-magenta hover:bg-magenta/90 text-white">
                <Link href="#our-story">Discover Our Story</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Macbook Scroll Section */}
      <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Our Design Philosophy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            At Creative Interiors, we believe that exceptional design goes beyond aesthetics. It's about creating spaces
            that enhance the way people live, work, and interact.
          </p>
        </div>
        <MacbookScroll
          title={
            <span className="text-magenta">
              Transforming <br /> spaces into <br /> extraordinary <br /> environments
            </span>
          }
          src="/placeholder.svg?height=400&width=600"
          showGradient={true}
        />
      </section>

      {/* Video Section with Tracing Beam */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <TracingBeam className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Approach</h2>
                <p className="text-gray-600 mb-6">
                  Our approach combines artistic vision with practical functionality, resulting in environments that are
                  both beautiful and purposeful. We take the time to understand each client's unique needs, preferences,
                  and lifestyle, ensuring that every design we create is a true reflection of their personality and
                  aspirations.
                </p>
                <p className="text-gray-600 mb-8">
                  This client-centered approach, combined with our technical expertise and attention to detail, allows
                  us to deliver spaces that exceed expectations and transform the way people experience their
                  environments.
                </p>
                <Button asChild className="bg-magenta hover:bg-magenta/90 text-white">
                  <Link href="/portfolio">
                    Explore Our Work
                    <MoveRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative w-full">
                <VideoMasking />
              </div>
            </div>
          </TracingBeam>
        </div>
      </section>

      {/* Earth Container Section */}
      
      <div className='min-h-screen overflow-hidden'>
        <article className=' mx-auto mt-12 p-5 text-center  relative'>
        <div className='absolute top-0 left-0 z-[1] h-full w-full bg-[radial-gradient(#ec4899_1px,#ffffff_1px)] bg-[size:20px_20px]'></div>
        <div className='relative z-10'>
          <h1 className='text-7xl font-extrabold bg-gradient-to-r from-magenta via-cyan to-orange bg-clip-text text-transparent tracking-tight leading-[100%]'>
          OUR VISION: DESIGN A MASTERPIECE
          </h1>

            <Earth />
          </div>
        </article>
      </div>
      

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Sets Us Apart</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our commitment to excellence in every aspect of our work</p>
          </div>

          <BentoGrid className="max-w-6xl mx-auto">
            {values.map((value, i) => (
              <BentoGridItem
                key={i}
                title={value.title}
                description={value.description}
                icon={value.icon}
                className={value.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Services Hover Effect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive design solutions for every space</p>
          </div>
          <HoverEffect items={services} />
        </div>
      </section>

      {/* Journey Scroll Section */}
      <section className="py-0">
        <div className="text-center py-20 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">The path that led us to where we are today</p>
        </div>
        <JourneyScroll items={journeyContent} />
      </section>

      {/* Team Section with Accordion */}
      <section ref={ref} className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Core</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        The minds behind the mission. Driven by passion and purpose, they are the backbone of everything we create.
      </p>
    </div>

    {/* Team Accordion Component */}
    <TeamAccordion items={teamMembers} />
  </div>
</section>

      {/* Connect Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Connect With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Follow our work and get in touch</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </Button>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
            </Link>
          </div>
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
            <Link href="/contact">
              Contact Us
              <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
