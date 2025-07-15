"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, Palette, Ruler, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MaterialSelectionModal } from "@/components/MaterialSelectionModal"
import Image from "next/image"


const slatWidths = [
  { value: "89mm", label: "89mm Slats" },
  { value: "127mm", label: "127mm Slats" },
]

const mountingOptions = [
  { value: "ceiling", label: "Ceiling Mount" },
  { value: "wall", label: "Wall Mount" },
]

const controlOptions = [
  { value: "wand", label: "Wand Control" },
  { value: "chain", label: "Chain Control" },
  { value: "cordless", label: "Cordless" },
  { value: "motorized", label: "Motorized" },
]

const colors = [
  { value: "white", label: "Pure White", color: "#ffffff" },
  { value: "cream", label: "Cream", color: "#f5f5dc" },
  { value: "gray", label: "Modern Gray", color: "#808080" },
  { value: "navy", label: "Navy Blue", color: "#000080" },
  { value: "beige", label: "Warm Beige", color: "#f5f5dc" },
  { value: "black", label: "Classic Black", color: "#000000" },
]

export default function VerticalBlindsCustomPage() {
  const [selectedColor, setSelectedColor] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [materialType, setMaterialType] = useState("")
  const [slatWidth, setSlatWidth] = useState("")
  const [mountingType, setMountingType] = useState("")
  const [controlType, setControlType] = useState("")
  const [showMaterialModal, setShowMaterialModal] = useState(false)

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
            href="/custom-shop/blinds/vertical-blinds"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Options
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Custom Photo Vertical Blinds</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your image and customize your perfect vertical blinds for large windows
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
                    <p className="text-sm text-gray-500">Vertical slat pattern will be applied</p>
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
                  <Label htmlFor="material-type" className="text-base font-semibold">
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

                {/* Slat Width */}
                <div className="space-y-3">
                  <Label htmlFor="slat-width" className="text-base font-semibold">
                    Slat Width
                  </Label>
                  <Select value={slatWidth} onValueChange={setSlatWidth}>
                    <SelectTrigger className="border-2 border-gray-200 hover:border-brand-cyan transition-colors">
                      <SelectValue placeholder="Choose slat width" />
                    </SelectTrigger>
                    <SelectContent>
                      {slatWidths.map((width) => (
                        <SelectItem key={width.value} value={width.value}>
                          {width.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
                      placeholder="200"
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
                      placeholder="180"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="border-2 border-gray-200 hover:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Mounting Type */}
                <div className="space-y-3">
                  <Label htmlFor="mounting-type" className="text-base font-semibold">
                    Mounting Type
                  </Label>
                  <Select value={mountingType} onValueChange={setMountingType}>
                    <SelectTrigger className="border-2 border-gray-200 hover:border-brand-cyan transition-colors">
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

                {/* Control Type */}
                <div className="space-y-3">
                  <Label htmlFor="control-type" className="text-base font-semibold">
                    Control Type
                  </Label>
                  <Select value={controlType} onValueChange={setControlType}>
                    <SelectTrigger className="border-2 border-gray-200 hover:border-brand-cyan transition-colors">
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

                {/* Special Notes */}
                <div className="space-y-3">
                  <Label htmlFor="special-notes" className="text-base font-semibold">
                    Special Notes
                  </Label>
                  <Textarea
                    id="special-notes"
                    placeholder="Any special requirements or notes..."
                    className="min-h-[80px] border-2 border-gray-200 hover:border-brand-cyan transition-colors"
                  />
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Estimated Price</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base price</span>
                      <span>$149.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material upgrade</span>
                      <span>$45.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Custom printing</span>
                      <span>$35.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Control upgrade</span>
                      <span>$25.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-brand-pink">$254.00</span>
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
