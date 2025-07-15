"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, Palette, Ruler, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MaterialDetailsModal } from "@/components/MaterialDetailsModal"
import Image from "next/image"

const fabricTypes = [
  { value: "blackout", label: "Blackout Fabric" },
  { value: "sunscreen", label: "Sunscreen Fabric" },
  { value: "light-filter", label: "Light Filter" },
  { value: "thermal", label: "Thermal Insulated" },
]

const colors = [
  { value: "white", label: "Pure White", color: "#ffffff" },
  { value: "cream", label: "Cream", color: "#f5f5dc" },
  { value: "gray", label: "Modern Gray", color: "#808080" },
  { value: "navy", label: "Navy Blue", color: "#000080" },
  { value: "beige", label: "Warm Beige", color: "#f5f5dc" },
  { value: "black", label: "Classic Black", color: "#000000" },
]

export default function RollerBlindsCustomPage() {
 // const [selectedFabric, setSelectedFabric] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [showMaterialModal, setShowMaterialModal] = useState(false)
  const [materialType, setMaterialType] = useState("")

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
            href="/custom-shop/blinds/roller-blinds"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Options
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Custom Photo Roller Blinds</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your image and customize your perfect roller blinds
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Side - Preview */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="border border-gray-200 overflow-hidden bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Palette className="w-5 h-5" />
                  Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 mb-2">Upload your image to see preview</p>
                    <p className="text-sm text-gray-500">Drag & drop or click to browse</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card className="mt-6 border border-gray-200 bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Upload className="w-5 h-5" />
                  Upload Your Image
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="border-2 border-dashed border-brand-pink/30 rounded-lg p-8 text-center hover:border-brand-pink/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-brand-pink" />
                  <p className="text-lg font-medium mb-2">Drop your image here</p>
                  <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
                  <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white">Browse Files</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Customization Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Ruler className="w-5 h-5" />
                  Customization Options
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {/* Material/Fabric Type */}
                <div className="space-y-3">
                  <Label htmlFor="fabric-type" className="text-base font-semibold">
                    Material/Fabric Type
                  </Label>
                  <Button
                    variant="outline"
                    className="w-full justify-between border-brand-pink text-brand-pink hover:bg-brand-pink/5 bg-transparent"
                    onClick={() => setShowMaterialModal(true)}
                  >
                    {materialType || "Select Material Type"}
                    <Info className="w-4 h-4" />
                  </Button>
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Label htmlFor="width" className="text-base font-semibold">
                      Width (cm)
                    </Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="120"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="border-2 border-gray-200 hover:border-brand-cyan transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="height" className="text-base font-semibold">
                      Height (cm)
                    </Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="150"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="border-2 border-gray-200 hover:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Color Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Color Options</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {colors.map((color) => (
                      <div
                        key={color.value}
                        className={`relative p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedColor === color.value
                            ? "border-brand-cyan shadow-lg"
                            : "border-gray-200 hover:border-brand-cyan/50"
                        }`}
                        onClick={() => setSelectedColor(color.value)}
                      >
                        <div className="w-full h-8 rounded mb-2" style={{ backgroundColor: color.color }} />
                        <p className="text-xs text-center font-medium">{color.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Estimated Price</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base price</span>
                      <span>$89.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material upgrade</span>
                      <span>$25.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Custom printing</span>
                      <span>$15.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-brand-pink">$129.00</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button className="flex-1 bg-gradient-to-r from-brand-pink to-brand-orange hover:from-brand-orange hover:to-brand-pink text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 bg-transparent"
                  >
                    Get Quote
                  </Button>
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
  const [selectedMaterialDetails, setSelectedMaterialDetails] = useState<any>(null)

  const categories = [
    { name: "All", count: 20 },
    { name: "Blackout", count: 8 },
    { name: "Sunscreen", count: 6 },
    { name: "Light Filter", count: 6 },
  ]

  const materials = [
    {
      id: 1,
      name: "Premium Blackout",
      code: "BLK-001",
      price: 45,
      rating: 4.8,
      category: "Blackout",
      description: "Complete light blocking fabric perfect for bedrooms and media rooms.",
      features: ["Light Block", "Thermal"],
      image: "/placeholder.svg?height=150&width=200",
      badge: "premium",
    },
    {
      id: 2,
      name: "Sunscreen Mesh",
      code: "SUN-002",
      price: 35,
      rating: 4.6,
      category: "Sunscreen",
      description: "UV protection while maintaining outside view and natural light.",
      features: ["UV Protection", "View Through"],
      image: "/placeholder.svg?height=150&width=200",
      badge: "popular",
    },
    {
      id: 3,
      name: "Light Filter Fabric",
      code: "LF-003",
      price: 30,
      rating: 4.4,
      category: "Light Filter",
      description: "Soft light diffusion for comfortable ambient lighting.",
      features: ["Light Filter", "Privacy"],
      image: "/placeholder.svg?height=150&width=200",
      badge: "eco",
    },
  ]

  const filteredMaterials = materials.filter((material) => {
    const matchesCategory = selectedCategory === "All" || material.category === selectedCategory
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
        <div className="p-6 border-b flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Select Material Type</h2>
            <Button variant="ghost" onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </Button>
          </div>
          <p className="text-muted-foreground">Choose the perfect material for your roller blinds</p>
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

            {/* Materials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMaterials.map((material) => (
                <Card key={material.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                  {material.badge && (
                    <div className="absolute top-2 right-2 z-10">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium text-white ${
                          material.badge === "premium"
                            ? "bg-purple-500"
                            : material.badge === "popular"
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
                        <span key={feature} className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-muted-foreground hover:text-foreground"
                        onClick={() => setSelectedMaterialDetails(material)}
                      >
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

        {selectedMaterialDetails && (
          <MaterialDetailsModal material={selectedMaterialDetails} onClose={() => setSelectedMaterialDetails(null)} />
        )}
      </div>
    </div>
  )
}
