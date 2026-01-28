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



import { useEffect } from "react"
import type { Material } from "@/types/material"
import { adaptMaterials } from "@/adapters/materialAdapter"
import { getCategoryBySlug, getSelectableMaterials } from "@/services/operations/productAPI"
import { useDispatch } from "react-redux"
import { addToCart } from "@/services/operations/cartAPI"


export default function CustomWallpaperPage() {
const [imageUrl, setImageUrl] = useState("")
const [width, setWidth] = useState("")
const [height, setHeight] = useState("")
const [selectedSize, setSelectedSize] = useState("")
const [showMaterialModal, setShowMaterialModal] = useState(false)

const [materials, setMaterials] = useState<Material[]>([])
const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null)


const dispatch = useDispatch<any>()

  



  const wallpaperSizes = [
    { value: "custom", label: "Custom Size" },
    { value: "standard-1", label: "Standard Size 1" },
    { value: "standard-2", label: "Standard Size 2" },
  ]


useEffect(() => {
  const loadWallpaperMaterials = async () => {
    try {
      const category = await dispatch(getCategoryBySlug("wallpaper"));
      if (!category?._id) return;

      const apiMaterials = await dispatch(
        getSelectableMaterials(category._id)
      );

      setMaterials(adaptMaterials(apiMaterials));
      console.log("Loaded wallpaper materials:", apiMaterials);
    } catch (err) {
      console.error("Failed to load wallpaper materials", err);
    }
  };

  loadWallpaperMaterials();
}, [dispatch]);



const handleAddToCart =  async() => {
  if (!imageUrl || !selectedMaterial || !width || !height) {
    alert("Please complete all required fields")
    return
  }

  const configurationJson = JSON.stringify({
    imageType: "EXTERNAL_URL",
    imageUrl,
    width,
    height,
    unit: "in",
    materialId: selectedMaterial.id,
    materialName: selectedMaterial.name,
    category: "WALLPAPER_CUSTOM",
  })

  await dispatch(
    addToCart({
      productType: "WALLPAPER",
      productRefId: "CUSTOM-WALLPAPER",
      configurationJson,
      quantity: 1,
      unitPrice: selectedMaterial.price, // or pricePerSqFt if exists
    })
  )


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
                  {selectedMaterial ? selectedMaterial.name : "Select Material Type"}
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
                  onClick={handleAddToCart}
                  className="border-brand-pink text-brand-pink"
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
        materials={materials}
        title="Select Material for Custom Photo Wallpaper"
        subtitle="Choose the best material for your personalised wallpaper"
        onClose={() => setShowMaterialModal(false)}
        onSelect={(material) => {
        setSelectedMaterial(material);
        setShowMaterialModal(false);
      }}

      />
    )}

    </div>
  )
}