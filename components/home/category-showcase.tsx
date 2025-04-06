"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Living Room",
    image: "https://images.pexels.com/photos/6970025/pexels-photo-6970025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 124,
    featured: true,
  },
  {
    id: 2,
    name: "Bedroom",
    image: "https://images.pexels.com/photos/6980668/pexels-photo-6980668.jpeg?auto=compress&cs=tinysrgb&w=600",
    count: 98,
    featured: false,
  },
  {
    id: 3,
    name: "Kitchen",
    image: "https://images.pexels.com/photos/6489127/pexels-photo-6489127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 87,
    featured: false,
  },
  {
    id: 4,
    name: "Bathroom",
    image: "https://images.pexels.com/photos/8134777/pexels-photo-8134777.jpeg",
    count: 65,
    featured: false,
  },
  {
    id: 5,
    name: "Office",
    image: "https://images.pexels.com/photos/273671/pexels-photo-273671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    count: 76,
    featured: true,
  },
]


export default function CategoryShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore By Category</h2>
          <p className="text-gray-600">
            Browse our extensive collection of interior and exterior design solutions organized by room and purpose.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={itemVariants} className={category.featured ? "lg:col-span-2" : ""}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  category: {
    id: number
    name: string
    image: string
    count: number
    featured: boolean
  }
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="aspect-[4/3] w-full">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
        <p className="text-white/80 mb-4">{category.count} products</p>

        <Link href={`/categories/${category.id}`}>
          <Button
            variant="outline"
            className="border-white text-gray hover:bg-white hover:text-black transition-colors"
          >
            Explore Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

