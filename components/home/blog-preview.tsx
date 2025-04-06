"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Interior Design Trends to Watch in 2025",
    excerpt: "Discover the latest interior design trends that are shaping homes and offices this year.",
    image: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dp",
    date: "June 15, 2023",
    category: "Design Trends",
    author: {
      name: "Jessica Williams",
      image: "https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dp",
    },
  },
  {
    id: 2,
    title: "How to Choose the Perfect Color Palette for Your Home",
    excerpt: "Learn expert tips for selecting a harmonious color scheme that reflects your personality and style.",
    image: "https://images.pexels.com/photos/5292199/pexels-photo-5292199.jpeg",
    date: "May 28, 2023",
    category: "Color Theory",
    author: {
      name: "Marcus Chen",
      image: "https://images.pexels.com/photos/5292199/pexels-photo-5292199.jpeg",
    },
  },
  {
    id: 3,
    title: "Small Space Solutions: Maximizing Your Living Area",
    excerpt: "Creative ideas and smart furniture choices to make the most of compact living spaces.",
    image: "https://images.pexels.com/photos/8978608/pexels-photo-8978608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "April 12, 2023",
    category: "Space Planning",
    author: {
      name: "Olivia Johnson",
      image: "https://images.pexels.com/photos/8978608/pexels-photo-8978608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  },
]

export default function BlogPreview() {
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Inspiration</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our blog for the latest interior design trends, tips, and inspiration for your next project.
            </p>
          </div>
          <Link href="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="border-magenta text-magenta hover:bg-magenta/5">
              View All Articles
            </Button>
          </Link>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: {
    id: number
    title: string
    excerpt: string
    image: string
    date: string
    category: string
    author: {
      name: string
      image: string
    }
  }
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 h-full flex flex-col">
      <div className="relative aspect-[16/9]">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute top-4 left-4">
          <span className="bg-cyan text-white text-xs font-medium px-3 py-1 rounded-full">{post.category}</span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="text-sm text-gray-500 mb-2">{post.date}</div>
        <Link href={`/blog/${post.id}`}>
          <h3 className="font-bold text-xl mb-3 hover:text-magenta transition-colors">{post.title}</h3>
        </Link>

        <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm">{post.author.name}</span>
          </div>

          <Link href={`/blog/${post.id}`} className="text-magenta hover:underline flex items-center text-sm">
            Read More <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

