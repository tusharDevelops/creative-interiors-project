"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Palette, Ruler } from "lucide-react"
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
    name: "Classic Oak Wooden",
    category: "Traditional",
    price: 189.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Premium oak wooden blinds with natural grain finish for timeless elegance",
    finish: "Non-metallic",
    bladeSize: "35mm",
    woodType: "Oak",
  },
  2: {
    name: "Metallic Walnut Wooden",
    category: "Premium",
    price: 229.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Luxurious walnut wooden blinds with metallic finish for sophisticated interiors",
    finish: "Metallic",
    bladeSize: "50mm",
    woodType: "Walnut",
  },
  3: {
    name: "Natural Pine Wooden",
    category: "Rustic",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Rustic pine wooden blinds with natural finish perfect for country-style homes",
    finish: "Non-metallic",
    bladeSize: "25mm",
    woodType: "Pine",
  },
}

const woodenBlindSizes = [
  { value: "custom", label: "Custom Size" },
  { value: "standard-1", label: "Standard Size 1 (120x150cm)" },
  { value: "standard-2", label: "Standard Size 2 (100x180cm)" },
  { value: "standard-3", label: "Standard Size 3 (140x160cm)" },
]

const bladeSizes = [
  { value: "25mm", label: "25mm Blades" },
  { value: "35mm", label: "35mm Blades" },
  { value: "50mm", label: "50mm Blades" },
]

const finishOptions = [
  { value: "natural", label: "Natural Finish" },
  { value: "stained", label: "Stained Finish" },
  { value: "painted", label: "Painted Finish" },
]

const mountingOptions = [
  { value: "inside", label: "Inside Mount" },
  { value: "outside", label: "Outside Mount" },
]

const controlOptions = [
  { value: "cord", label: "Cord Control" },
  { value: "wand", label: "Wand Control" },
  { value: "cordless", label: "Cordless" },
  { value: "motorized", label: "Motorized" },
]

export default function WoodenBlindsCatalogueCustomizePage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [bladeSize, setBladeSize] = useState("")
  const [finishType, setFinishType] = useState("")
  const [mountingType, setMountingType] = useState("")
  const [controlType, setControlType] = useState("")

  const design =  designData[1]

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
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/custom-shop/blinds/wooden-blinds/catalogue-design"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Catalogue
            </Link>
            <div className="flex items-center gap-2 text-amber-600">
              <div className="w-8 h-8 rounded-full bg-amber-600/10 flex items-center justify-center">
                <span className="text-sm font-bold">W</span>
              </div>
              <span className="font-bold">Wooden Blind Customizer</span>
              <span className="text-sm text-muted-foreground">Catalogue Design</span>
            </div>
          </div>
          <Button className="bg-amber-600 hover:bg-amber-600/90 text-white px-6">Get Help</Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Preview */}
          <div className="space-y-6">
            {/* Design Preview */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Design Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg border-2 border-gray-200 overflow-hidden mb-4">
                  <img
                    src={design.image || "/placeholder.svg"}
                    alt={design.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{design.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{design.category}</p>
                  <p className="text-muted-foreground text-sm">{design.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Design Info */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <Palette className="w-5 h-5" />
                  Design Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Design ID:</span>
                  <span className="font-medium">WOD}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wood Type:</span>
                  <span className="font-medium">{design.woodType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Price:</span>
                  <span className="font-medium text-amber-600">${design.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Finish Type:</span>
                  <span className="font-medium">{design.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blade Size:</span>
                  <span className="font-medium">{design.bladeSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Warranty:</span>
                  <span className="font-medium">5 Years</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-6">
            {/* Blind Size */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <Ruler className="w-5 h-5" />
                  Blind Size
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="size-select">Select Size</Label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose size option" />
                    </SelectTrigger>
                    <SelectContent>
                      {woodenBlindSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="width">Width (cm)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="120"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="border-2 border-gray-200 hover:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="150"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="border-2 border-gray-200 hover:border-amber-500 transition-colors"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wooden Blind Specifications */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Wooden Blind Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="blade-size">Blade Size</Label>
                  <Select value={bladeSize} onValueChange={setBladeSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose blade size" />
                    </SelectTrigger>
                    <SelectContent>
                      {bladeSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="finish-type">Finish Type</Label>
                  <Select value={finishType} onValueChange={setFinishType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose finish type" />
                    </SelectTrigger>
                    <SelectContent>
                      {finishOptions.map((finish) => (
                        <SelectItem key={finish.value} value={finish.value}>
                          {finish.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Installation Options */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Installation Options
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="mounting-type">Mounting Type</Label>
                  <Select value={mountingType} onValueChange={setMountingType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose mounting option" />
                    </SelectTrigger>
                    <SelectContent>
                      {mountingOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="control-type">Control Type</Label>
                  <Select value={controlType} onValueChange={setControlType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose control option" />
                    </SelectTrigger>
                    <SelectContent>
                      {controlOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card className="border border-gray-200 bg-white">
              <CardContent className="pt-6 space-y-4">
                <div>
                  <Label htmlFor="special-notes">Special Notes</Label>
                  <Textarea
                    id="special-notes"
                    placeholder="Any special requirements or notes..."
                    className="min-h-[80px] border-2 border-gray-200 hover:border-amber-500 transition-colors"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-amber-50">
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Price Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Base price (18 sq ft)</span>
                  <span>${(design.price * 1.8).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Premium wood upgrade</span>
                  <span>$75.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Finish upgrade</span>
                  <span>$45.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Control upgrade</span>
                  <span>$40.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Installation</span>
                  <span>$85.00</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-amber-600">${(design.price * 1.8 + 75 + 45 + 40 + 85).toFixed(2)}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-600/5 bg-transparent"
                  >
                    Add to Cart
                  </Button>
                  <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
