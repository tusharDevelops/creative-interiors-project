"use client"

import { useState } from "react"
import { ArrowLeft, Download, Ruler, Palette, Eye, ShoppingCart, Heart, Share2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

const designData = {
  1: {
    title: "Geometric Patterns",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop",
    rating: 4.8,
    reviews: 124,
    basePrice: 45,
    description:
      "Contemporary geometric patterns that add modern sophistication to any glass surface. Perfect for office spaces and modern homes.",
    features: ["UV Protection", "Easy Installation", "Bubble-Free Application", "Removable"],
  },
}

const transparencyLevels = [
  { value: "low", label: "Low (10-30%)", description: "Maximum privacy, minimal light" },
  { value: "medium", label: "Medium (40-60%)", description: "Balanced privacy and light" },
  { value: "high", label: "High (70-90%)", description: "Subtle effect, maximum light" },
]

const filmStyles = [
  {
    value: "frosted",
    label: "Frosted",
    price: 0,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop",
  },
  {
    value: "printed",
    label: "Printed",
    price: 15,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop",
  },
  {
    value: "one-way",
    label: "One-Way",
    price: 25,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop",
  },
  {
    value: "etched",
    label: "Etched",
    price: 20,
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=100&h=100&fit=crop",
  },
]

const colorTints = [
  { name: "Clear", value: "#ffffff", price: 0 },
  { name: "Bronze", value: "#cd7f32", price: 8 },
  { name: "Gray", value: "#808080", price: 8 },
  { name: "Blue", value: "#4169e1", price: 10 },
  { name: "Green", value: "#228b22", price: 10 },
  { name: "Gold", value: "#ffd700", price: 12 },
]

export default function GlassFilmCatalogueCustomization({ params }: { params: { id: string } }) {
  const [width, setWidth] = useState("100")
  const [height, setHeight] = useState("150")
  const [transparency, setTransparency] = useState("medium")
  const [filmStyle, setFilmStyle] = useState("frosted")
  const [colorTint, setColorTint] = useState("#ffffff")
  const [specialInstructions, setSpecialInstructions] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)

  const design = designData[params.id as keyof typeof designData] || designData[1]

  const calculatePrice = () => {
    const area = (Number.parseFloat(width) * Number.parseFloat(height)) / 144 // Convert to sq ft
    const stylePrice = filmStyles.find((s) => s.value === filmStyle)?.price || 0
    const tintPrice = colorTints.find((c) => c.value === colorTint)?.price || 0
    const baseTotal = (design.basePrice + stylePrice + tintPrice) * area * quantity
    const installation = baseTotal * 0.3
    return {
      subtotal: baseTotal,
      installation,
      total: baseTotal + installation,
    }
  }

  const pricing = calculatePrice()

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
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/custom-shop/glass-film/catalogue-design">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Catalogue
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{design.title}</h1>
                <p className="text-sm text-gray-500">{design.category} Glass Film</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "text-red-500" : "text-gray-400"}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Preview */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image src={design.image || "/placeholder.svg"} alt={design.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Eye className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-sm">Preview with your settings</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{design.title}</CardTitle>
                    <p className="text-gray-600 mt-1">{design.description}</p>
                  </div>
                  <Badge variant="secondary">{design.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {design.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Sparkles className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>⭐ {design.rating}</span>
                  <span>•</span>
                  <span>{design.reviews} reviews</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Customization Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Ruler className="h-5 w-5" />
                  <span>Dimensions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="width">Width (inches)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      min="1"
                      max="120"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      min="1"
                      max="120"
                    />
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  Total area: {((Number.parseFloat(width) * Number.parseFloat(height)) / 144).toFixed(2)} sq ft
                </div>
              </CardContent>
            </Card>

            {/* Transparency Level */}
            <Card>
              <CardHeader>
                <CardTitle>Transparency Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transparencyLevels.map((level) => (
                    <div
                      key={level.value}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        transparency === level.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setTransparency(level.value)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{level.label}</p>
                          <p className="text-sm text-gray-500">{level.description}</p>
                        </div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 ${
                            transparency === level.value ? "border-blue-500 bg-blue-500" : "border-gray-300"
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Film Style */}
            <Card>
              <CardHeader>
                <CardTitle>Film Style</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {filmStyles.map((style) => (
                    <div
                      key={style.value}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        filmStyle === style.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setFilmStyle(style.value)}
                    >
                      <div className="aspect-square relative mb-2 rounded overflow-hidden">
                        <Image
                          src={style.image || "/placeholder.svg"}
                          alt={style.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="font-medium text-sm">{style.label}</p>
                      {style.price > 0 && <p className="text-xs text-gray-500">+${style.price}/sq ft</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Color Tint */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Color Tint</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {colorTints.map((tint) => (
                    <div
                      key={tint.value}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        colorTint === tint.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setColorTint(tint.value)}
                    >
                      <div className="w-full h-8 rounded mb-2 border" style={{ backgroundColor: tint.value }} />
                      <p className="font-medium text-sm">{tint.name}</p>
                      {tint.price > 0 && <p className="text-xs text-gray-500">+${tint.price}/sq ft</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Special Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Any special requirements or installation notes..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  rows={3}
                />
              </CardContent>
            </Card>

            {/* Quantity */}
            <Card>
              <CardHeader>
                <CardTitle>Quantity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </Button>
                  <span className="font-medium">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>
                    Glass Film ({((Number.parseFloat(width) * Number.parseFloat(height)) / 144).toFixed(2)} sq ft ×{" "}
                    {quantity})
                  </span>
                  <span>${pricing.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Professional Installation</span>
                  <span>${pricing.installation.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">${pricing.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart - ${pricing.total.toFixed(2)}
              </Button>
              <Button variant="outline" className="w-full py-3 bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
