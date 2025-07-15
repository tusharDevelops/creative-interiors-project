"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
// Mock design data - in real app this would come from API
const designData = {
  1: {
    name: "Modern Geometric",
    category: "Abstract",
    price: 6.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A contemporary geometric pattern perfect for modern interiors",
  },
  2: {
    name: "Tropical Leaves",
    category: "Nature",
    price: 7.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Lush tropical foliage design bringing nature indoors",
  },
}

export default function CatalogueCustomizePage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [materialType, setMaterialType] = useState("")
  const [showMaterialModal, setShowMaterialModal] = useState(false)

  const design =  designData[1]; // Replace with params.id to fetch the correct design

  const wallpaperSizes = [
    { value: "custom", label: "Custom Size" },
    { value: "standard-1", label: "Standard Size 1" },
    { value: "standard-2", label: "Standard Size 2" },
  ]

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
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-10">
          <div className="flex items-center gap-4">
            <Link
              href="/custom-shop/wallpaper/catalogue-design"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Catalogue
            </Link>
            <div className="flex items-center gap-2 text-brand-pink">
              <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center">
                <span className="text-sm font-bold">C</span>
              </div>
              <span className="font-bold">Creative Customizer</span>
              <span className="text-sm text-muted-foreground">Catalogue Design</span>
            </div>
          </div>
          <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white px-6">Get Help</Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Preview */}
          <div className="space-y-6">
            {/* Design Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Design Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-100 rounded-lg border-2 border-gray-200 overflow-hidden">
                  <img
                    src={design.image || "/placeholder.svg"}
                    alt={design.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{design.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{design.category}</p>
                  <p className="text-muted-foreground text-sm">{design.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Design Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-cyan">
                  <Palette className="w-5 h-5" />
                  Design Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Design ID:</span>
                  <span className="font-medium">CAT-0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{design.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Price:</span>
                  <span className="font-medium text-brand-cyan">${design.price}/sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resolution:</span>
                  <span className="font-medium">High Resolution</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-6">
            {/* Wallpaper Size */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Wallpaper Size
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="size-select">Select Size</Label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose size option" />
                    </SelectTrigger>
                    <SelectContent>
                      {wallpaperSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="width">Width (inches)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="48"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="36"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Material Type */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Material Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full justify-between border-brand-pink text-brand-pink hover:bg-brand-pink/5 bg-transparent"
                  onClick={() => setShowMaterialModal(true)}
                >
                  {materialType || "Select Material Type"}
                  <Info className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <Label htmlFor="special-notes">Special Notes</Label>
                  <Textarea
                    id="special-notes"
                    placeholder="Any special requirements or notes..."
                    className="min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Price Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Base price (48 sq ft)</span>
                  <span>${(design.price * 48).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Material upgrade</span>
                  <span>$48.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Design license</span>
                  <span>$15.00</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-brand-pink">${(design.price * 48 + 48 + 15).toFixed(2)}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="border-brand-pink text-brand-pink hover:bg-brand-pink/5 bg-transparent"
                  >
                    Add to Cart
                  </Button>
                  <Button className="bg-brand-cyan hover:bg-brand-cyan/90 text-white">Order Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Material Selection Modal */}
      {showMaterialModal && (
        <MaterialSelectionModal
          onClose={() => setShowMaterialModal(false)}
          onSelect={(material) => {
            setMaterialType(material)
            setShowMaterialModal(false)
          }}
        />
      )}
    </div>
  )
}

function MaterialSelectionModal({ onClose, onSelect }: { onClose: () => void; onSelect: (material: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { name: "All", count: 50 },
    { name: "Premium", count: 14 },
    { name: "Standard", count: 12 },
    { name: "Eco", count: 12 },
    { name: "Commercial", count: 12 },
  ]

  const materials = [
    {
      id: 1,
      name: "Classic Matte",
      code: "MAT-001",
      price: 45,
      rating: 4.8,
      category: "Premium",
      description: "Smooth matte finish ideal for residential applications with excellent print quality.",
      features: ["Water", "Eco"],
      image: "/placeholder.svg?height=150&width=200",
      badge: "premium",
    },
    {
      id: 2,
      name: "Commercial Grade Vinyl",
      code: "VIN-002",
      price: 65,
      rating: 4.7,
      category: "Commercial",
      description: "Heavy-duty vinyl designed for commercial spaces with maximum durability.",
      features: ["Water", "Fire"],
      image: "/placeholder.svg?height=150&width=200",
      badge: "commercial",
    },
    {
      id: 3,
      name: "Eco-Friendly Paper",
      code: "ECO-003",
      price: 35,
      rating: 4.3,
      category: "Eco",
      description: "Sustainable paper-based wallpaper made from recycled materials.",
      features: ["Eco"],
      image: "/placeholder.svg?height=150&width=200",
      badge: "eco",
    },
    {
      id: 4,
      name: "Luxury Vinyl Premium",
      code: "LVP-004",
      price: 85,
      rating: 4.9,
      category: "Premium",
      description: "High-end vinyl with superior durability and premium finish. Perfect for high-traffic areas.",
      features: ["Water", "Fire"],
      image: "/placeholder.svg?height=150&width=200",
      badge: "premium",
    },
  ]

  const filteredMaterials = materials.filter((material) => {
    const matchesCategory = selectedCategory === "All" || material.category === selectedCategory
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden">
        <div className="p-6 border-b flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Select Material Type</h2>
            <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </Button>
          </div>
          <p className="text-muted-foreground">Choose from our extensive collection of premium materials</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Search */}
            <div className="mb-6">
              <Input
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className={`whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === category.name
                      ? "bg-brand-pink text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name} {category.count}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-muted-foreground">Sort by</span>
              <Select defaultValue="name">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Materials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMaterials.map((material) => (
                <Card key={material.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  {material.badge && (
                    <div className="absolute top-2 right-2 z-10">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium text-white ${
                          material.badge === "premium"
                            ? "bg-purple-500"
                            : material.badge === "commercial"
                              ? "bg-blue-500"
                              : material.badge === "eco"
                                ? "bg-green-500"
                                : "bg-gray-500"
                        }`}
                      >
                        {material.badge}
                      </span>
                    </div>
                  )}

                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <img
                      src={material.image || "/placeholder.svg"}
                      alt={material.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm">{material.name}</h3>
                      <span className="text-brand-pink font-bold text-lg">${material.price}</span>
                    </div>

                    <p className="text-xs text-muted-foreground mb-2">{material.code}</p>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{material.description}</p>

                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {material.features.map((feature) => (
                        <span
                          key={feature}
                          className={`text-xs px-2 py-1 rounded ${
                            feature === "Water"
                              ? "bg-blue-100 text-blue-700"
                              : feature === "Fire"
                                ? "bg-red-100 text-red-700"
                                : feature === "Eco"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
                        Details
                      </Button>
                      <Button
                        size="sm"
                        className="bg-brand-pink hover:bg-brand-pink/90 text-white text-xs"
                        onClick={() => onSelect(material.name)}
                      >
                        Select
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
