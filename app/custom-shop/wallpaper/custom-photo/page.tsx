"use client"

import { useState } from "react"
import { Upload, Info, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MaterialSelectionModal } from "@/components/MaterialSelectionModal"
import Link from "next/link"
import Image from "next/image"
import { wallpaperMaterials } from "@/utils/Material"

export default function CustomWallpaperPage() {
  const [selectedSize, setSelectedSize] = useState("")
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [materialType, setMaterialType] = useState("")
  const [showMaterialModal, setShowMaterialModal] = useState(false)

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
        <div className="flex items-center justify-between mt-10 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-brand-pink">
                {/* Navigation */}
        
        <div className=" animate-slide-in">
          <Link
            href="/custom-shop/wallpaper"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
            </div>
          </div>
          <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white px-6">Get Help</Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Preview */}
          <div className="space-y-6">
            {/* Live Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-[4/3] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Upload className="w-12 h-12 mx-auto mb-2" />
                    <p>Preview will appear here</p>
                    <p className="text-sm">Upload an image to see preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-pink">
                  <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                  Upload Your Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-brand-pink/30 rounded-lg p-8 text-center hover:border-brand-pink/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-brand-pink" />
                  <p className="text-lg font-medium mb-2">Drop your image here</p>
                  <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
                  <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white">Browse</Button>
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
                  <span>₹432.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Material upgrade</span>
                  <span>₹48.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Standard image processing</span>
                  <span>₹25.00</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-brand-pink">₹274.00</span>
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
        materials={wallpaperMaterials}
        title="Select Material for Custom Photo Wallpaper"
        subtitle="Choose the best material for your personalised wallpaper"
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