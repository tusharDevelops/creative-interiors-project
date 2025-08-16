"use client"

import { X, Star, Shield, Droplets, Flame, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface MaterialSpec {
  key: string
  value: string
}

interface Material {
  id: number
  name: string
  code: string
  price: number
  rating: number
  category: string
  description: string
  features: string[]
  image: string
  badge: string
  specs: MaterialSpec[]
}


interface MaterialDetailsModalProps {
  material: Material
  onClose: () => void
}

export function MaterialDetailsModal({ material, onClose }: MaterialDetailsModalProps) {
  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "Water":
        return <Droplets className="w-4 h-4" />
      case "Fire":
        return <Flame className="w-4 h-4" />
      case "Eco":
        return <Leaf className="w-4 h-4" />
      default:
        return <Shield className="w-4 h-4" />
    }
  }

  const getFeatureColor = (feature: string) => {
    switch (feature) {
      case "Water":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "Fire":
        return "bg-red-100 text-red-700 border-red-200"
      case "Eco":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  console.log(material)

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60] p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b bg-gradient-to-r from-brand-pink/5 to-brand-cyan/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-foreground">{material.name}</h2>
              {material.badge && (
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                    material.badge === "premium"
                      ? "bg-purple-500"
                      : material.badge === "commercial"
                        ? "bg-blue-500"
                        : material.badge === "eco"
                          ? "bg-green-500"
                          : "bg-gray-500"
                  }`}
                >
                  {material.badge}
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-muted-foreground mt-2">{material.code}</p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Image and Basic Info */}
            <div className="space-y-6">
              {/* Material Image */}
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] bg-gray-100 relative">
                  <img
                    src={material.image || "/placeholder.svg"}
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              {/* Price and Rating */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Price per unit</p>
                      <p className="text-3xl font-bold text-brand-pink">${material.price}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{material.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Customer Rating</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium">{material.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Material Code</p>
                      <p className="font-medium">{material.code}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Details */}
            <div className="space-y-6">
              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{material.description}</p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Features & Properties</h3>
                  <div className="grid gap-3">
                    {material.features.map((feature) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-3 p-3 rounded-lg border ${getFeatureColor(feature)}`}
                      >
                        {getFeatureIcon(feature)}
                        <span className="font-medium">{feature} Resistant</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Specifications</h3>
                <div className="space-y-3">
                  {material.specs.map((spec, index) => (
                    <div
                      key={index}
                      className={`flex justify-between py-2 ${
                        index !== material.specs.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <span className="text-muted-foreground">{spec.key}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-brand-pink text-brand-pink hover:bg-brand-pink/5 bg-transparent"
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button className="flex-1 bg-brand-pink hover:bg-brand-pink/90 text-white">Select Material</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
