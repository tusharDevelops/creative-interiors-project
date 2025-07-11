"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

// Mock data for testimonials
const testimonials = [
  {
    quote:
      "Creative Interiors completely transformed our living room into a beautiful space that reflects our family's taste. The detailing and craftsmanship were beyond what we imagined.",
    name: "Priya Sharma",
    title: "Homeowner - Living Room Makeover",
  },
  {
    quote:
      "We revamped our office interiors with Creative Interiors, and the difference is remarkable. The new design has boosted employee energy and made our workplace more vibrant.",
    name: "Rohit Mehra",
    title: "Operations Head - Office Renovation",
  },
  {
    quote:
      "Partnering with Creative Interiors for our café redesign was a great decision. They brought our ideas to life and created a cozy yet trendy ambiance that our customers truly enjoy.",
    name: "Meera Nair",
    title: "Café Owner - Café Renovation",
  },
  {
    quote:
      "Our kitchen went from outdated to ultra-modern, all thanks to Creative Interiors. Their team was punctual, polite, and very responsive to all our suggestions.",
    name: "Amit Verma",
    title: "Homeowner - Modular Kitchen Upgrade",
  },
  {
    quote:
      "Creative Interiors gave our 20-year-old home a fresh new life. Their design ideas were practical yet stylish, and every corner now feels thoughtfully curated.",
    name: "Sunita Iyer",
    title: "Homeowner - Full Home Renovation",
  },
];


// Mock data for team members
const teamMembers = [
  {
    id: 1,
    name: "Mr. Pradeep Dass",
    designation: "Founder",
    image: "/pradeep.jpg",
  },
  {
    id: 2,
    name: "Mr. Ramesh Chaurasiya",
    designation: "Co-Founder",
    image: "/ramesh.jpg",
  },
  {
    id: 3,
    name: "Mr. Vinay Agrawal",
    designation: "",
    image: "/vinay.jpg",
  },

  {
    id: 4,
    name: "Mr. Tushar Chaurasiya",
    designation: "",
    image: "/tushar.jpg",
  },
  {
    id: 5,
    name: "Mr. Rohit Chaurasiya",
    designation: "Staff",
    image: "/rohit.jpg",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with
            Creative Interiors.
          </p>
        </motion.div>

        <div className="mb-20">
          <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Meet Our Expert Team</h3>
          <div className="flex justify-center">
            <AnimatedTooltip items={teamMembers} />
          </div>
        </div>
      </div>
    </section>
  )
}

