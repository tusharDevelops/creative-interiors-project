"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info, Palette, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MaterialSelectionModal } from "@/components/MaterialSelectionModal"
import Image from "next/image"
import { romanBlindsMaterials } from "@/utils/Material"


// Mock design data - in real app this would come from API
const designData = {
  1: {
    name: "Elegant Damask Roman",
    category: "Classic",
    price: 164.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Sophisticated damask pattern roman blind with elegant fabric folds perfect for traditional interiors",
  },
  2: {
    name: "Linen Texture Roman",
    category: "Natural",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Natural linen texture roman blind bringing organic warmth to your space",
  },
  3: {
    name: "Floral Pattern Roman",
    category: "Traditional",
    price: 174.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Beautiful floral pattern roman blind for a timeless traditional look",
  },
}

const romanBlindSizes = [
  { value: "custom", label: "Custom Size" },
  { value: "standard-1", label: "Standard Size 1 (120x150cm)" },
  { value: "standard-2", label: "Standard Size 2 (100x180cm)" },
  { value: "standard-3", label: "Standard Size 3 (140x160cm)" },
]

const foldStyles = [
  { value: "flat", label: "Flat Roman" },
  { value: "hobbled", label: "Hobbled Roman" },
  { value: "balloon", label: "Balloon Roman" },
]

const liningOptions = [
  { value: "standard", label: "Standard Lining" },
  { value: "blackout", label: "Blackout Lining" },
  { value: "thermal", label: "Thermal Lining" },
]

const mountingOptions = [
  { value: "inside", label: "Inside Mount" },
  { value: "outside", label: "Outside Mount" },
]

const controlOptions = [
  { value: "cord", label: "Cord Control" },
  { value: "cordless", label: "Cordless" },
  { value: "motorized", label: "Motorized" },
]

export default function RomanBlindsCatalogueCustomizePage({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [materialType, setMaterialType] = useState("")
  const [foldStyle, setFoldStyle] = useState("")
  const [liningType, setLiningType] = useState("")
  const [mountingType, setMountingType] = useState("")
  const [controlType, setControlType] = useState("")
  const [showMaterialModal, setShowMaterialModal] = useState(false)

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
              href="/custom-shop/blinds/roman-blinds/catalogue-design"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Catalogue
            </Link>
            <div className="flex items-center gap-2 text-brand-pink">
              <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center">
                <span className="text-sm font-bold">R</span>
              </div>
              <span className="font-bold">Roman Blind Customizer</span>
              <span className="text-sm text-muted-foreground">Catalogue Design</span>
            </div>
          </div>
          <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white px-6">Get Help</Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Preview */}
          <div className="space-y-6">
            {/* Design Preview */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
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
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-brand-cyan">
                  <Palette className="w-5 h-5" />
                  Design Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Design ID:</span>
                  <span className="font-medium">ROM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{design.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Price:</span>
                  <span className="font-medium text-brand-cyan">${design.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Style:</span>
                  <span className="font-medium">Roman Folds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Best For:</span>
                  <span className="font-medium">Traditional Decor</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-6">
            {/* Blind Size */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-brand-pink">
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
                      {romanBlindSizes.map((size) => (
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
                      className="border-2 border-gray-200 hover:border-brand-cyan transition-colors"
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
                      className="border-2 border-gray-200 hover:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Material Type */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Material Type
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
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

            {/* Roman Blind Specific Options */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Roman Blind Options
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="fold-style">Fold Style</Label>
                  <Select value={foldStyle} onValueChange={setFoldStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose fold style" />
                    </SelectTrigger>
                    <SelectContent>
                      {foldStyles.map((style) => (
                        <SelectItem key={style.value} value={style.value}>
                          {style.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="lining-type">Lining Type</Label>
                  <Select value={liningType} onValueChange={setLiningType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose lining option" />
                    </SelectTrigger>
                    <SelectContent>
                      {liningOptions.map((lining) => (
                        <SelectItem key={lining.value} value={lining.value}>
                          {lining.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Installation Options */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
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
                    className="min-h-[80px] border-2 border-gray-200 hover:border-brand-cyan transition-colors"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card className="border border-gray-200 bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Price Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Base price (18 sq ft)</span>
                  <span>${(design.price * 1.8).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Material upgrade</span>
                  <span>$55.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Lining upgrade</span>
                  <span>$35.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Control upgrade</span>
                  <span>$30.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Installation</span>
                  <span>$65.00</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-brand-pink">${(design.price * 1.8 + 55 + 35 + 30 + 65).toFixed(2)}</span>
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
        materials={romanBlindsMaterials}
        title="Select Material"
        subtitle="Choose from our premium roman blind fabric collection"
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
