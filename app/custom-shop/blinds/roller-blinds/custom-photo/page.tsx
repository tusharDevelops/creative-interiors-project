"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, Palette, Ruler, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { MaterialSelectionModal } from "@/components/MaterialSelectionModal"
// import {rollerBlindsMaterials} from "@/utils/Material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import type { Material } from "@/types/material"
import { getCategoryBySlug, getSelectableMaterials } from "@/services/operations/productAPI"
import { adaptMaterials } from "@/adapters/materialAdapter"
import { addToCart } from "@/services/operations/cartAPI"


  
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

  const dispatch = useDispatch<any>()

const [materials, setMaterials] = useState<Material[]>([])
const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null)
const [showMaterialModal, setShowMaterialModal] = useState(false)
const [imageUrl, setImageUrl] = useState("")

const handleAddToCart = async () => {
  if (!imageUrl || !selectedMaterial || !width || !height) {
    alert("Please complete all required fields")
    return
  }

  const configurationJson = JSON.stringify({
    imageType: "EXTERNAL_URL",   // 🔥 IMPORTANT
    imageUrl,

    width,
    height,
    unit: "cm",

    materialId: selectedMaterial.id,
    materialName: selectedMaterial.name,

    category: "ROLLER_BLINDS_CUSTOM",
  })

  await dispatch(
    addToCart({
      productType: "BLINDS",
      productRefId: "CUSTOM-ROLLER-BLINDS",
      configurationJson,
      quantity: 1,
      unitPrice: 129, // temp
    })
  )
}



useEffect(() => {
  const loadRollerMaterials = async () => {
    try {
      // 1️⃣ get roller-blinds category
      const category = await dispatch(getCategoryBySlug("roller-blinds"))
      if (!category?._id) return

      // 2️⃣ get selectable materials
      const res = await dispatch(
        getSelectableMaterials(category._id)
      )

      // 3️⃣ adapt for UI
      setMaterials(adaptMaterials(res))
     
    } catch (err) {
      console.error("Failed to load roller blind materials", err)
    }
  }

  loadRollerMaterials()
}, [dispatch])




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
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-pink">
                <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                Live Preview
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="Wallpaper Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <Upload className="w-10 h-10 mb-2" />
                    <p>Paste image URL to preview</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>


            {/* Upload Section */}
            <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-brand-pink">
                <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                Image Source
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <Label>Paste Image URL</Label>

              <Input
                placeholder="https://images.unsplash.com/..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />

              <p className="text-xs text-gray-500">
                Shutterstock / Unsplash / Adobe Stock / Pexels
              </p>
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
                    {selectedMaterial ? selectedMaterial.name : "Select Material Type"}

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
                    <Button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-brand-pink to-brand-orange hover:from-brand-orange hover:to-brand-pink text-white font-semibold py-3 px-6 rounded-lg"
                    >
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
    materials={materials}   // 🔥 API DATA
    title="Select Material for Custom Photo Roller Blinds"
    subtitle="Choose the best material for your personalised roller blinds"
    onClose={() => setShowMaterialModal(false)}
    onSelect={(material) => {
      setSelectedMaterial(material)
      setShowMaterialModal(false)
    }}
  />
)}
    </div>
  )
}

