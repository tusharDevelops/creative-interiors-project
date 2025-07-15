"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Upload, Droplets, Palette, Ruler, ShoppingCart, MessageSquare, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

const transparencyLevels = [
  { value: "low", label: "Low (10-30%)", description: "Maximum privacy, minimal light", price: 0 },
  { value: "medium", label: "Medium (40-60%)", description: "Balanced privacy and light", price: 2 },
  { value: "high", label: "High (70-90%)", description: "Subtle effect, maximum light", price: 5 },
]

const filmStyles = [
  { value: "frosted", label: "Frosted", description: "Classic frosted glass effect", price: 0 },
  { value: "printed", label: "Printed", description: "Full-color printed design", price: 8 },
  { value: "one-way", label: "One-Way", description: "Mirror effect from outside", price: 12 },
  { value: "etched", label: "Etched", description: "Elegant etched glass look", price: 6 },
]

const colorTints = [
  { value: "clear", label: "Clear", color: "transparent", price: 0 },
  { value: "bronze", label: "Bronze", color: "#cd7f32", price: 3 },
  { value: "gray", label: "Gray", color: "#808080", price: 3 },
  { value: "blue", label: "Blue", color: "#4169e1", price: 4 },
  { value: "green", label: "Green", color: "#228b22", price: 4 },
  { value: "amber", label: "Amber", color: "#ffbf00", price: 3 },
]

export default function CustomGlassFilm() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [width, setWidth] = useState("")
  const [height, setHeight] = useState("")
  const [selectedTransparency, setSelectedTransparency] = useState("medium")
  const [selectedStyle, setSelectedStyle] = useState("frosted")
  const [selectedTint, setSelectedTint] = useState("clear")
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState("")

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
  }

  const calculatePrice = () => {
    const area = (Number.parseFloat(width) || 0) * (Number.parseFloat(height) || 0)
    const basePrice = area * 3.5 // $3.5 per square inch

    const transparencyPrice = transparencyLevels.find((t) => t.value === selectedTransparency)?.price || 0
    const stylePrice = filmStyles.find((s) => s.value === selectedStyle)?.price || 0
    const tintPrice = colorTints.find((t) => t.value === selectedTint)?.price || 0

    return Math.ceil((basePrice + transparencyPrice + stylePrice + tintPrice) * quantity)
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
              <Link href="/custom-shop/glass-film">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Glass Film
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Custom Glass Film</h1>
                <p className="text-sm text-gray-500">Design your own glass film</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-50 text-green-700">
              Custom Design
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
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                  {uploadedFile ? (
                    <Image
                      src={URL.createObjectURL(uploadedFile) || "/placeholder.svg"}
                      alt="Uploaded design"
                      fill
                      className="object-cover"
                      style={{
                        opacity: selectedTransparency === "low" ? 0.3 : selectedTransparency === "medium" ? 0.6 : 0.9,
                        filter:
                          selectedTint !== "clear"
                            ? `sepia(1) hue-rotate(${
                                selectedTint === "bronze"
                                  ? "30deg"
                                  : selectedTint === "gray"
                                    ? "0deg"
                                    : selectedTint === "blue"
                                      ? "200deg"
                                      : selectedTint === "green"
                                        ? "120deg"
                                        : selectedTint === "amber"
                                          ? "45deg"
                                          : "0deg"
                              })`
                            : "none",
                      }}
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-500" />
                      </div>
                      <p className="text-gray-500">Upload your design to see preview</p>
                    </div>
                  )}

                  {/* Glass effect overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        selectedStyle === "frosted"
                          ? "rgba(255,255,255,0.3)"
                          : selectedStyle === "one-way"
                            ? "rgba(169,169,169,0.5)"
                            : selectedStyle === "etched"
                              ? "rgba(255,255,255,0.2)"
                              : "none",
                      backdropFilter: selectedStyle === "frosted" ? "blur(2px)" : "none",
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Preview Details */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-medium text-gray-900 mb-4">Preview Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Dimensions:</span>
                    <span className="font-medium">{width && height ? `${width}" × ${height}"` : "Not specified"}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Area:</span>
                    <span className="font-medium">
                      {width && height
                        ? `${(Number.parseFloat(width) * Number.parseFloat(height)).toFixed(1)} sq in`
                        : "0 sq in"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Transparency:</span>
                    <span className="font-medium">
                      {transparencyLevels.find((t) => t.value === selectedTransparency)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Style:</span>
                    <span className="font-medium">{filmStyles.find((s) => s.value === selectedStyle)?.label}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tint:</span>
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-4 h-4 rounded border"
                        style={{ backgroundColor: colorTints.find((t) => t.value === selectedTint)?.color }}
                      />
                      <span className="font-medium">{colorTints.find((t) => t.value === selectedTint)?.label}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Customization Form */}
          <div className="space-y-6">
            {/* Design Upload */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Upload className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Upload Design</h3>
                </div>

                {!uploadedFile ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Drop your design file here or click to browse</p>
                    <p className="text-sm text-gray-500 mb-4">Supports JPG, PNG, PDF up to 10MB</p>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <Label htmlFor="file-upload">
                      <Button variant="outline" className="cursor-pointer bg-transparent">
                        Choose File
                      </Button>
                    </Label>
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                          <Upload className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                          <p className="text-sm text-gray-500">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={removeFile}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Dimensions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Ruler className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Dimensions</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="width">Width (inches)</Label>
                    <Input
                      id="width"
                      type="number"
                      placeholder="Width"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Height (inches)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="Height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transparency Level */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Droplets className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Transparency Level</h3>
                </div>

                <RadioGroup value={selectedTransparency} onValueChange={setSelectedTransparency} className="space-y-3">
                  {transparencyLevels.map((level) => (
                    <div key={level.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={level.value} id={level.value} />
                      <Label htmlFor={level.value} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{level.label}</div>
                            <div className="text-sm text-gray-500">{level.description}</div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {level.price === 0 ? "Free" : `+$${level.price}`}
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Film Style */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Palette className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Film Style</h3>
                </div>

                <RadioGroup value={selectedStyle} onValueChange={setSelectedStyle} className="space-y-3">
                  {filmStyles.map((style) => (
                    <div key={style.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={style.value} id={style.value} />
                      <Label htmlFor={style.value} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{style.label}</div>
                            <div className="text-sm text-gray-500">{style.description}</div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {style.price === 0 ? "Free" : `+$${style.price}`}
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Color Tint */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Color Tint</h3>

                <RadioGroup value={selectedTint} onValueChange={setSelectedTint} className="space-y-3">
                  {colorTints.map((tint) => (
                    <div key={tint.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={tint.value} id={tint.value} />
                      <Label htmlFor={tint.value} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 rounded border" style={{ backgroundColor: tint.color }} />
                            <span>{tint.label}</span>
                          </div>
                          <span className="text-sm text-gray-500">{tint.price === 0 ? "Free" : `+$${tint.price}`}</span>
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
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                  className="mt-2"
                />
              </CardContent>
            </Card>

            {/* Special Instructions */}
            <Card>
              <CardContent className="p-6">
                <Label htmlFor="notes" className="text-lg font-semibold text-gray-900">
                  Special Instructions
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requirements or notes for your glass film..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2"
                  rows={3}
                />
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
                      <span>
                        Base price (
                        {width && height ? `${(Number.parseFloat(width) * Number.parseFloat(height)).toFixed(1)}` : "0"}{" "}
                        sq in):
                      </span>
                      <span>
                        ${width && height ? Math.ceil(Number.parseFloat(width) * Number.parseFloat(height) * 3.5) : 0}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transparency:</span>
                      <span>+${transparencyLevels.find((t) => t.value === selectedTransparency)?.price || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Style:</span>
                      <span>+${filmStyles.find((s) => s.value === selectedStyle)?.price || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tint:</span>
                      <span>+${colorTints.find((t) => t.value === selectedTint)?.price || 0}</span>
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
                    <span>Professional installation available</span>
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
