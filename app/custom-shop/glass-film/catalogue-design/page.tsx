"use client"

import { useState } from "react"
import { ArrowLeft, Search, Grid, List, Star, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

const catalogueDesigns = [
  {
    id: 1,
    title: "Geometric Patterns",
    category: "Modern",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    price: 45,
    tags: ["Frosted", "Privacy"],
  },
  {
    id: 2,
    title: "Floral Etching",
    category: "Classic",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    price: 52,
    tags: ["Etched", "Decorative"],
  },
  {
    id: 3,
    title: "Abstract Waves",
    category: "Contemporary",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 156,
    price: 48,
    tags: ["Printed", "Artistic"],
  },
  {
    id: 4,
    title: "Bamboo Forest",
    category: "Nature",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 98,
    price: 55,
    tags: ["One-Way", "Natural"],
  },
  {
    id: 5,
    title: "City Skyline",
    category: "Urban",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 67,
    price: 58,
    tags: ["Printed", "Modern"],
  },
  {
    id: 6,
    title: "Mandala Design",
    category: "Traditional",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 143,
    price: 50,
    tags: ["Etched", "Spiritual"],
  },
]

const categories = ["All", "Modern", "Classic", "Contemporary", "Nature", "Urban", "Traditional"]
const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
]

export default function GlassFilmCatalogue() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredDesigns = catalogueDesigns.filter((design) => {
    const matchesSearch =
      design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      design.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || design.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
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
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/custom-shop/glass-film">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Glass Film
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Glass Film Catalogue</h1>
                <p className="text-sm text-gray-500">Choose from our pre-designed collection</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-purple-50 text-purple-700">
              {filteredDesigns.length} Designs
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search designs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDesigns.map((design) => (
              <Card key={design.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={design.image || "/placeholder.svg"}
                      alt={design.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <Link href={`/custom-shop/glass-film/catalogue-design/${design.id}`}>
                        <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Eye className="h-4 w-4 mr-2" />
                          Customize
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{design.title}</h3>
                        <p className="text-sm text-gray-500">{design.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-medium">{design.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">({design.reviews})</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {design.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">From ${design.price}</span>
                      <Link href={`/custom-shop/glass-film/catalogue-design/${design.id}`}>
                        <Button size="sm">Customize</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredDesigns.map((design) => (
              <Card key={design.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 relative overflow-hidden rounded-lg flex-shrink-0">
                      <Image
                        src={design.image || "/placeholder.svg"}
                        alt={design.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{design.title}</h3>
                          <p className="text-gray-500 mb-2">{design.category}</p>
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{design.rating}</span>
                              <span className="text-sm text-gray-500">({design.reviews} reviews)</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {design.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-blue-600 mb-2">From ${design.price}</div>
                          <Link href={`/custom-shop/glass-film/catalogue-design/${design.id}`}>
                            <Button>Customize</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredDesigns.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No designs found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
