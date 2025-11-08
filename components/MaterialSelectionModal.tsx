"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MaterialDetailsModal } from "@/components/MaterialDetailsModal"

interface Material {
  id: number
  name: string
  code: string
  price: number
  rating: number
  category: string
  description: string
  features: string[]
  image: string
  badge: string
}

interface MaterialSelectionModalProps {
  materials?: Material[]
  onClose: () => void
  onSelect: (material: string) => void
  title?: string
  subtitle?: string
}

export function MaterialSelectionModal({ 
  materials = [], 
  onClose, 
  onSelect, 
  title = "Select Material Type",
  subtitle = "Choose from our extensive collection of premium materials"
}: MaterialSelectionModalProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMaterialDetails, setSelectedMaterialDetails] = useState<Material | null>(null)

  // Default materials if none provided
  const defaultMaterials: Material[] = [
    {
      id: 1,
      name: "Classic Matte",
      code: "MAT-001",
      price: 45,
      rating: 4.8,
      category: "Premium",
      description: "Smooth matte finish ideal for residential applications with excellent print quality.",
      features: ["Water", "Eco"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
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
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
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
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      badge: "premium",
    },
  ]

  // Use provided materials or fallback to default
  const activeMaterials = materials.length > 0 ? materials : defaultMaterials

  // Generate categories dynamically from materials
  const generateCategories = () => {
    if (!activeMaterials || activeMaterials.length === 0) {
      return [{ name: "All", count: 0 }]
    }

    const categoryCount: { [key: string]: number } = {}
    activeMaterials.forEach(material => {
      if (material && material.category) {
        categoryCount[material.category] = (categoryCount[material.category] || 0) + 1
      }
    })
    
    const categories = [
      { name: "All", count: activeMaterials.length },
      ...Object.entries(categoryCount).map(([name, count]) => ({ name, count }))
    ]
    
    return categories
  }

  const categories = generateCategories()

  const filteredMaterials = activeMaterials.filter((material) => {
    if (!material) return false
    
    const matchesCategory = selectedCategory === "All" || material.category === selectedCategory
    const matchesSearch = material.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.code?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getBadgeColor = (badge: string) => {
    if (!badge) return "bg-gray-500"
    
    switch (badge.toLowerCase()) {
      case "premium":
        return "bg-purple-500"
      case "commercial":
        return "bg-blue-500"
      case "eco":
        return "bg-green-500"
      case "standard":
        return "bg-gray-500"
      case "luxury":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  const getFeatureColor = (feature: string) => {
    if (!feature) return "bg-gray-100 text-gray-700"
    
    switch (feature.toLowerCase()) {
      case "water":
        return "bg-blue-100 text-blue-700"
      case "fire":
        return "bg-red-100 text-red-700"
      case "eco":
        return "bg-green-100 text-green-700"
      case "uv":
        return "bg-yellow-100 text-yellow-700"
      case "scratch":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden shadow-2xl">
          <div className="p-6 border-b flex-shrink-0 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
              <Button 
                variant="ghost" 
                onClick={onClose} 
                className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full w-10 h-10 p-0"
              >
                ✕
              </Button>
            </div>
            <p className="text-slate-600">{subtitle}</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Search */}
              <div className="mb-6">
                <Input
                  placeholder="Search materials by name, code, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-12 text-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Categories */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    className={`whitespace-nowrap flex-shrink-0 transition-all duration-200 ${
                      selectedCategory === category.name
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                        : "border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-slate-600 font-medium">Sort by:</span>
                <Select defaultValue="name">
                  <SelectTrigger className="w-40 border-slate-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name A-Z</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                  </SelectContent>
                </Select>
                <div className="text-sm text-slate-500">
                  Showing {filteredMaterials.length} of {activeMaterials.length} materials
                </div>
              </div>

              {/* Materials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredMaterials.map((material) => (
                  <Card 
                    key={material.id} 
                    className="relative overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200 group"
                  >
                    {material.badge && (
                      <div className="absolute top-3 right-3 z-10">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getBadgeColor(material.badge)} shadow-lg`}
                        >
                          {material.badge.toUpperCase()}
                        </span>
                      </div>
                    )}

                    <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                      <img
                        src={material.image || "/placeholder.svg?height=200&width=300"}
                        alt={material.name || "Material"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 text-lg leading-tight mb-1">
                            {material.name || "Unknown Material"}
                          </h3>
                          <p className="text-xs text-slate-500 font-mono">{material.code || "N/A"}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-blue-600 font-bold text-xl">₹{material.price || 0}</span>
                          <div className="text-xs text-slate-500">per sq ft</div>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                        {material.description || "No description available"}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < Math.floor(material.rating || 0) ? "text-yellow-400" : "text-slate-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm font-medium text-slate-700">{material.rating || 0}</span>
                      </div>

                      {/* Features */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        {(material.features || []).map((feature) => (
                          <span
                            key={feature}
                            className={`text-xs px-2 py-1 rounded-full font-medium ${getFeatureColor(feature)}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                          onClick={() => setSelectedMaterialDetails(material)}
                        >
                          Details
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                          onClick={() => onSelect(material.name || "Unknown Material")}
                        >
                          Select
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {filteredMaterials.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-slate-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No materials found</h3>
                  <p className="text-slate-600">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Material Details Modal */}
      {selectedMaterialDetails && (
        <MaterialDetailsModal 
          material={selectedMaterialDetails} 
          onClose={() => setSelectedMaterialDetails(null)} 
        />
      )}
    </>
  )
}

