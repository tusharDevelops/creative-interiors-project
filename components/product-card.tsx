"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: {
    id: number
    name: string
    description: string
    price: number
    originalPrice: number
    rating: number
    reviews: number
    image: string
    colors: string[]
    category: string
    room: string
    isNew: boolean
    discount: number
    inStock: boolean
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prevState) => !prevState)
  }

  return (
    <div className="w-full mx-auto">
      <div className="rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        <Link href={`/products/${product.id}`}>
          <div className="relative">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={1000}
              height={1000}
              className="h-52 w-full rounded-md object-cover transition-all duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-cyan text-white">New</Badge>}
              {product.discount > 0 && <Badge className="bg-orange text-white">{product.discount}% OFF</Badge>}
            </div>
          </div>
        </Link>
        <div className="text-black pt-2">
          <div className="flex justify-between">
            <Link href={`/products/${product.id}`}>
              <h1 className="font-semibold text-xl hover:text-magenta transition-colors">{product.name}</h1>
            </Link>
            <motion.button
              className="text-2xl text-red-400 pr-2"
              onClick={handleClick}
              animate={{ scale: isActive ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 1000, damping: 10 }}
            >
              {isActive ? (
                <>
                  <Heart className="fill-red-400" />
                </>
              ) : (
                <>
                  <Heart />
                </>
              )}
            </motion.button>
          </div>
          <p className="text-xs text-gray-600 line-clamp-2 mb-2">{product.description}</p>
          <div className="flex justify-between py-1">
            <div>
              {product.discount > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-xl">₹{product.price.toFixed(2)}</span>
                  <span className="text-gray-500 line-through text-sm">₹{product.originalPrice.toFixed(2)}</span>
                </div>
              ) : (
                <span className="font-semibold text-xl">₹{product.price.toFixed(2)}</span>
              )}
            </div>
            <div className="flex gap-2 items-center">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`relative w-6 h-6 border rounded-full grid place-content-center transition-all ${
                    selectedColor === color ? "border-black" : "border-gray-200"
                  }`}
                >
                  <span
                    className="w-4 h-4 rounded-full inline-block"
                    style={{
                      backgroundColor: color,
                    }}
                  ></span>
                </button>
              ))}
            </div>
          </div>
          <Button className="text-white w-full bg-black py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800">
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}
