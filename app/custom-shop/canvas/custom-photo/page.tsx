"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, Palette, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"


const canvasSizes = [
  { value: "8x10", label: "8x10 inches", price: 24.99 },
  { value: "11x14", label: "11x14 inches", price: 34.99 },
  { value: "16x20", label: "16x20 inches", price: 49.99 },
  { value: "18x24", label: "18x24 inches", price: 64.99 },
  { value: "24x36", label: "24x36 inches", price: 89.99 },
  { value: "custom", label: "Custom Size", price: 0 },
]

const finishTypes = [
  { value: "glossy", label: "Glossy Finish", description: "Vibrant colors with reflective surface", price: 0 },
  { value: "matte", label: "Matte Finish", description: "Smooth, non-reflective surface", price: 5 },
  { value: "textured", label: "Textured Finish", description: "Artistic texture for enhanced depth", price: 15 },
]

const frameTypes = [
  { value: "none", label: "No Frame", price: 0 },
  { value: "wooden", label: "Wooden Frame", description: "Classic wooden frame", price: 25 },
  { value: "floating", label: "Floating Frame", description: "Modern floating mount", price: 35 },
  { value: "metal", label: "Metal Frame", description: "Sleek metal frame", price: 30 },
]

export default function CustomCanvasPage() {
  const [selectedSize, setSelectedSize] = useState("")
  const [customWidth, setCustomWidth] = useState("")
  const [customHeight, setCustomHeight] = useState("")
  const [finishType, setFinishType] = useState("")
  const [frameType, setFrameType] = useState("")

  const calculatePrice = () => {
    let basePrice = 0
    let finishPrice = 0
    let framePrice = 0

    // Base price calculation
    if (selectedSize === "custom") {
      const width = Number.parseInt(customWidth) || 0
      const height = Number.parseInt(customHeight) || 0
      basePrice = width * height * 0.15 + 15 // $0.15 per sq inch + base cost
    } else {
      const sizeData = canvasSizes.find((size) => size.value === selectedSize)
      basePrice = sizeData?.price || 0
    }

    // Finish price
    const finish = finishTypes.find((f) => f.value === finishType)
    finishPrice = finish?.price || 0

    // Frame price
    const frame = frameTypes.find((f) => f.value === frameType)
    framePrice = frame?.price || 0

    return basePrice + finishPrice + framePrice
  }

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
            href="/custom-shop/canvas"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Canvas Options
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Custom Photo Canvas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your image and customize your perfect canvas print
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
                  Canvas Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 mb-2">Upload your image to see preview</p>
                    <p className="text-sm text-gray-500">Canvas will be stretched and ready to hang</p>
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
                <div className="mt-4 text-xs text-muted-foreground">
                  <p>• Recommended: High resolution images (300 DPI)</p>
                  <p>• Supported formats: JPG, PNG, PDF</p>
                  <p>• Maximum file size: 50MB</p>
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
                {/* Canvas Size */}
                <div className="space-y-3">
                  <Label htmlFor="canvas-size" className="text-base font-semibold">
                    Canvas Size
                  </Label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="border-2 border-gray-200 hover:border-brand-cyan transition-colors">
                      <SelectValue placeholder="Choose canvas size" />
                    </SelectTrigger>
                    <SelectContent>
                      {canvasSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value}>
                          <div className="flex justify-between items-center w-full">
                            <span>{size.label}</span>
                            {size.price > 0 && <span className="text-brand-pink font-medium">${size.price}</span>}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Custom Dimensions */}
                {selectedSize === "custom" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label htmlFor="width" className="text-base font-semibold">
                        Width (inches)
                      </Label>
                      <Input
                        id="width"
                        type="number"
                        placeholder="24"
                        value={customWidth}
                        onChange={(e) => setCustomWidth(e.target.value)}
                        className="border-2 border-gray-200 hover:border-brand-cyan transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="height" className="text-base font-semibold">
                        Height (inches)
                      </Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="18"
                        value={customHeight}
                        onChange={(e) => setCustomHeight(e.target.value)}
                        className="border-2 border-gray-200 hover:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Finish Type */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Finish Type</Label>
                  <div className="grid gap-3">
                    {finishTypes.map((finish) => (
                      <div
                        key={finish.value}
                        className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          finishType === finish.value
                            ? "border-brand-cyan shadow-lg bg-brand-cyan/5"
                            : "border-gray-200 hover:border-brand-cyan/50"
                        }`}
                        onClick={() => setFinishType(finish.value)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{finish.label}</h4>
                            <p className="text-sm text-muted-foreground">{finish.description}</p>
                          </div>
                          {finish.price > 0 && <span className="text-brand-pink font-medium">+${finish.price}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frame Type */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">Frame Type (Optional)</Label>
                  <div className="grid gap-3">
                    {frameTypes.map((frame) => (
                      <div
                        key={frame.value}
                        className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          frameType === frame.value
                            ? "border-brand-orange shadow-lg bg-brand-orange/5"
                            : "border-gray-200 hover:border-brand-orange/50"
                        }`}
                        onClick={() => setFrameType(frame.value)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{frame.label}</h4>
                            {frame.description && <p className="text-sm text-muted-foreground">{frame.description}</p>}
                          </div>
                          {frame.price > 0 && <span className="text-brand-orange font-medium">+${frame.price}</span>}
                        </div>
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
                      <span>Canvas print</span>
                      <span>
                        $
                        {selectedSize === "custom"
                          ? (
                              (Number.parseInt(customWidth) || 0) * (Number.parseInt(customHeight) || 0) * 0.15 +
                              15
                            ).toFixed(2)
                          : (canvasSizes.find((s) => s.value === selectedSize)?.price || 0).toFixed(2)}
                      </span>
                    </div>
                    {finishType && finishTypes.find((f) => f.value === finishType)?.price! > 0 && (
                      <div className="flex justify-between">
                        <span>Finish upgrade</span>
                        <span>${finishTypes.find((f) => f.value === finishType)?.price}</span>
                      </div>
                    )}
                    {frameType && frameTypes.find((f) => f.value === frameType)?.price! > 0 && (
                      <div className="flex justify-between">
                        <span>Frame</span>
                        <span>${frameTypes.find((f) => f.value === frameType)?.price}</span>
                      </div>
                    )}
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-brand-pink">${calculatePrice().toFixed(2)}</span>
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
    </div>
  )
}
