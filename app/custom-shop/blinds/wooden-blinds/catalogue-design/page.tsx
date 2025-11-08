"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"


const woodenBlindDesigns = [
  {
    id: 1,
    name: "Classic Oak Wooden",
    category: "Traditional",
    price: 189.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["oak", "classic"],
    finish: "Non-metallic",
    bladeSize: "35mm",
  },
  {
    id: 2,
    name: "Metallic Walnut Wooden",
    category: "Premium",
    price: 229.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["walnut", "metallic"],
    finish: "Metallic",
    bladeSize: "50mm",
  },
  {
    id: 3,
    name: "Natural Pine Wooden",
    category: "Rustic",
    price: 159.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["pine", "natural"],
    finish: "Non-metallic",
    bladeSize: "25mm",
  },
  {
    id: 4,
    name: "Mahogany Metallic Wooden",
    category: "Luxury",
    price: 269.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["mahogany", "luxury"],
    finish: "Metallic",
    bladeSize: "50mm",
  },
  {
    id: 5,
    name: "Bamboo Natural Wooden",
    category: "Eco",
    price: 179.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["bamboo", "eco"],
    finish: "Non-metallic",
    bladeSize: "35mm",
  },
  {
    id: 6,
    name: "Cherry Metallic Wooden",
    category: "Premium",
    price: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["cherry", "premium"],
    finish: "Metallic",
    bladeSize: "25mm",
  },
  {
    id: 7,
    name: "Teak Traditional Wooden",
    category: "Classic",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["teak", "traditional"],
    finish: "Non-metallic",
    bladeSize: "50mm",
  },
  {
    id: 8,
    name: "Ash Metallic Wooden",
    category: "Modern",
    price: 219.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["ash", "modern"],
    finish: "Metallic",
    bladeSize: "35mm",
  },
]

export default function WoodenBlindsCataloguePage() {
  const [selectedFinish, setSelectedFinish] = useState("All")
  const [selectedBladeSize, setSelectedBladeSize] = useState("All")

  const finishOptions = ["All", "Metallic", "Non-metallic"]
  const bladeSizeOptions = ["All", "25mm", "35mm", "50mm"]

  const filteredDesigns = woodenBlindDesigns.filter((design) => {
    const matchesFinish = selectedFinish === "All" || design.finish === selectedFinish
    const matchesBladeSize = selectedBladeSize === "All" || design.bladeSize === selectedBladeSize
    return matchesFinish && matchesBladeSize
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-52 relative">
                <Image
                  src="/products.jpg"
                  alt="Background"
                  fill
                  quality={100}
                  priority
                  className="object-cover" // or object-contain if needed
                />
      
      </div>
      <div className="container mx-auto px-4 py-16">
        {/* Navigation */}
        <div className="mb-8 animate-slide-in">
          <Link
            href="/custom-shop/blinds/wooden-blinds"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Wooden Blinds
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Wooden Blinds Catalogue</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium wooden blind collection with natural finishes and various blade sizes
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search wooden designs..."
              className="pl-10 border-2 border-gray-200 hover:border-brand-cyan transition-colors"
            />
          </div>

          {/* Finish Filter */}
          <div className="flex gap-2">
            <span className="text-sm text-muted-foreground self-center">Finish:</span>
            {finishOptions.map((finish) => (
              <Button
                key={finish}
                variant={selectedFinish === finish ? "default" : "outline"}
                size="sm"
                className={`${
                  selectedFinish === finish
                    ? "bg-amber-600 text-white hover:bg-amber-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedFinish(finish)}
              >
                {finish}
              </Button>
            ))}
          </div>

          {/* Blade Size Filter */}
          <div className="flex gap-2">
            <span className="text-sm text-muted-foreground self-center">Blade Size:</span>
            {bladeSizeOptions.map((size) => (
              <Button
                key={size}
                variant={selectedBladeSize === size ? "default" : "outline"}
                size="sm"
                className={`${
                  selectedBladeSize === size
                    ? "bg-orange-600 text-white hover:bg-orange-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedBladeSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-gray-200 hover:border-brand-cyan bg-transparent"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-gray-200 hover:border-brand-cyan bg-transparent"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredDesigns.length} of {woodenBlindDesigns.length} designs
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design, index) => (
            <Card
              key={design.id}
              className="group overflow-hidden border border-gray-200 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={design.image || "/placeholder.svg"}
                  alt={design.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  {design.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 bg-amber-600 text-white text-xs rounded-full mr-1 mb-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  <span
                    className={`inline-block px-2 py-1 text-white text-xs rounded-full ${
                      design.finish === "Metallic" ? "bg-orange-600" : "bg-green-600"
                    }`}
                  >
                    {design.finish}
                  </span>
                  <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                    {design.bladeSize}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-amber-600 transition-colors">
                  {design.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{design.category}</p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="text-xl font-bold text-amber-600">${design.price}</div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{design.finish}</div>
                    <div>{design.bladeSize} blade</div>
                  </div>
                </div>

                <Link href={`/custom-shop/blinds/wooden-blinds/catalogue-design/${design.id}`}>
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white">
                    Customize
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button
            variant="outline"
            className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 bg-transparent"
          >
            Load More Designs
          </Button>
        </div>
      </div>
    </div>
  )
}
