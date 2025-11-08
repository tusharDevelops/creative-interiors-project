"use client"

import { useState } from "react"
import { ArrowLeft, Palette, Ruler, Frame, ShoppingCart, MessageSquare, Star, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

const canvasSizes = [
  { value: "8x10", label: '8" × 10"', price: 25 },
  { value: "11x14", label: '11" × 14"', price: 35 },
  { value: "16x20", label: '16" × 20"', price: 55 },
  { value: "18x24", label: '18" × 24"', price: 75 },
  { value: "24x36", label: '24" × 36"', price: 120 },
  { value: "custom", label: "Custom Size", price: 0 },
]

const finishTypes = [
  { value: "matte", label: "Matte", description: "Smooth, non-reflective finish", price: 0 },
  { value: "glossy", label: "Glossy", description: "Vibrant, reflective finish", price: 5 },
  { value: "textured", label: "Textured", description: "Canvas-like texture", price: 8 },
  { value: "metallic", label: "Metallic", description: "Shimmer effect finish", price: 15 },
]

const frameTypes = [
  { value: "none", label: "No Frame", price: 0 },
  { value: "wooden", label: "Wooden Frame", price: 25 },
  { value: "floating", label: "Floating Frame", price: 35 },
  { value: "gallery", label: "Gallery Wrap", price: 15 },
]

export default function CanvasCatalogueCustomization() {
  const [selectedSize, setSelectedSize] = useState("16x20")
  const [customWidth, setCustomWidth] = useState("")
  const [customHeight, setCustomHeight] = useState("")
  const [selectedFinish, setSelectedFinish] = useState("matte")
  const [selectedFrame, setSelectedFrame] = useState("none")
  const [quantity, setQuantity] = useState(1)

  const catalogueDesign = {
    id: 1,
    title: "Abstract Geometric Art",
    image: "/placeholder.svg?height=400&width=400",
    category: "Modern Art",
    rating: 4.8,
    reviews: 124,
  }

  const calculatePrice = () => {
    const basePrice =
      selectedSize === "custom"
        ? Math.ceil(((Number.parseInt(customWidth) || 0) * (Number.parseInt(customHeight) || 0)) / 100) * 2
        : canvasSizes.find((size) => size.value === selectedSize)?.price || 0

    const finishPrice = finishTypes.find((finish) => finish.value === selectedFinish)?.price || 0
    const framePrice = frameTypes.find((frame) => frame.value === selectedFrame)?.price || 0

    return (basePrice + finishPrice + framePrice) * quantity
  }

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
              <Link href="/custom-shop/canvas/catalogue-design">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Catalogue
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Customize Canvas</h1>
                <p className="text-sm text-gray-500">{catalogueDesign.title}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-blue-50 text-blue-700">
              Catalogue Design
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Preview */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square bg-gray-100 relative">
                  <Image
                    src={catalogueDesign.image || "/placeholder.svg"}
                    alt={catalogueDesign.title}
                    fill
                    className="object-cover"
                  />
                  {selectedFrame !== "none" && (
                    <div className="absolute inset-0 border-8 border-amber-800 opacity-30"></div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Design Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{catalogueDesign.title}</h3>
                    <p className="text-sm text-gray-500">{catalogueDesign.category}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{catalogueDesign.rating}</span>
                    <span className="text-sm text-gray-500">({catalogueDesign.reviews})</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  This modern abstract geometric design features bold shapes and vibrant colors, perfect for
                  contemporary spaces. High-resolution artwork optimized for canvas printing.
                </p>
              </CardContent>
            </Card>

            {/* Preview Details */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium text-gray-900 mb-4">Preview Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Size:</span>
                    <span className="font-medium">
                      {selectedSize === "custom"
                        ? `${customWidth}" × ${customHeight}"`
                        : canvasSizes.find((size) => size.value === selectedSize)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Finish:</span>
                    <span className="font-medium">
                      {finishTypes.find((finish) => finish.value === selectedFinish)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Frame:</span>
                    <span className="font-medium">
                      {frameTypes.find((frame) => frame.value === selectedFrame)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Quantity:</span>
                    <span className="font-medium">{quantity}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Customization Form */}
          <div className="space-y-6">
            {/* Canvas Size */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Ruler className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Canvas Size</h3>
                </div>

                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="space-y-3">
                  {canvasSizes.map((size) => (
                    <div key={size.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={size.value} id={size.value} />
                      <Label htmlFor={size.value} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <span>{size.label}</span>
                          <span className="text-sm text-gray-500">
                            {size.value === "custom" ? "Variable" : `+$${size.price}`}
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {selectedSize === "custom" && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="width">Width (inches)</Label>
                      <Input
                        id="width"
                        type="number"
                        placeholder="Width"
                        value={customWidth}
                        onChange={(e) => setCustomWidth(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="height">Height (inches)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="Height"
                        value={customHeight}
                        onChange={(e) => setCustomHeight(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Finish Type */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Palette className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Finish Type</h3>
                </div>

                <RadioGroup value={selectedFinish} onValueChange={setSelectedFinish} className="space-y-3">
                  {finishTypes.map((finish) => (
                    <div key={finish.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={finish.value} id={finish.value} />
                      <Label htmlFor={finish.value} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{finish.label}</div>
                            <div className="text-sm text-gray-500">{finish.description}</div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {finish.price === 0 ? "Free" : `+$${finish.price}`}
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Frame Options */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Frame className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Frame Options</h3>
                </div>

                <RadioGroup value={selectedFrame} onValueChange={setSelectedFrame} className="space-y-3">
                  {frameTypes.map((frame) => (
                    <div key={frame.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={frame.value} id={frame.value} />
                      <Label htmlFor={frame.value} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <span>{frame.label}</span>
                          <span className="text-sm text-gray-500">
                            {frame.price === 0 ? "Free" : `+$${frame.price}`}
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Quantity */}
            <Card>
              <CardContent className="p-6">
                <Label htmlFor="quantity" className="text-lg font-semibold text-gray-900">
                  Quantity
                </Label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 10, 15, 20].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Pricing & Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total Price</span>
                    <span className="text-2xl font-bold text-blue-600">${calculatePrice()}</span>
                  </div>

                  <div className="text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Base price:</span>
                      <span>
                        $
                        {selectedSize === "custom"
                          ? Math.ceil(
                              ((Number.parseInt(customWidth) || 0) * (Number.parseInt(customHeight) || 0)) / 100,
                            ) * 2
                          : canvasSizes.find((size) => size.value === selectedSize)?.price || 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Finish:</span>
                      <span>+${finishTypes.find((finish) => finish.value === selectedFinish)?.price || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Frame:</span>
                      <span>+${frameTypes.find((frame) => frame.value === selectedFrame)?.price || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quantity:</span>
                      <span>×{quantity}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full bg-transparent">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Info className="h-4 w-4" />
                    <span>Free shipping on orders over $100</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
