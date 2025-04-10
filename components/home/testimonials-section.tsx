"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

// Mock data for testimonials
const testimonials = [
  {
    quote:
      "Creative Interiors transformed our living room into a stunning space that perfectly reflects our style. The attention to detail and quality of work exceeded our expectations.",
    name: "Sarah Johnson",
    title: "Homeowner - Living Room Redesign",
  },
  {
    quote:
      "The commercial design services provided by Creative Interiors completely transformed our office space. Our employees love the new environment, and it has significantly improved productivity and morale.",
    name: "Michael Chen",
    title: "Office Manager - Corporate Office Redesign",
  },
  {
    quote:
      "Working with Creative Interiors on our restaurant renovation was a fantastic experience. They understood our vision and created a space that our customers absolutely love. The project was completed on time and within budget.",
    name: "Emily Rodriguez",
    title: "Restaurant Owner - Restaurant Renovation",
  },
  {
    quote:
      "We hired Creative Interiors for our kitchen remodel and couldn't be happier with the results. Their team was professional, creative, and attentive to our needs throughout the entire process.",
    name: "David Thompson",
    title: "Homeowner - Kitchen Remodel",
  },
  {
    quote:
      "The team at Creative Interiors has an incredible eye for detail. They transformed our outdated space into a modern, functional environment that we love coming home to every day.",
    name: "Jennifer Lee",
    title: "Homeowner - Full Home Renovation",
  },
]

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

