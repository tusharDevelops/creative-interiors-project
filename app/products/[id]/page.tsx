"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, Star, Truck, ArrowLeft, Share2, Check } from "lucide-react"

// This would normally come from a database or API
const products = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    description: "Elegant lounge chair with premium upholstery and solid wood legs, perfect for any living space.",
    longDescription: `
      <p>Elevate your living space with our Modern Lounge Chair, a perfect blend of style and comfort. This elegant piece features premium upholstery and solid wood legs, creating a sophisticated yet inviting presence in any room.</p>
      
      <p>The ergonomic design provides exceptional comfort for extended periods of sitting, while the sturdy construction ensures durability for years to come. Each chair is meticulously crafted by skilled artisans who pay attention to every detail.</p>
      
      <p>Available in multiple colors to complement your existing décor, this versatile chair works beautifully in living rooms, reading nooks, or as an accent piece in bedrooms.</p>
    `,
    price: 599,
    originalPrice: 699,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    ],
    colors: [
      { name: "Walnut", value: "#A0522D" },
      { name: "Light Gray", value: "#D3D3D3" },
      { name: "Charcoal", value: "#36454F" },
    ],
    category: "Furniture",
    room: "Living Room",
    isNew: true,
    discount: 15,
    inStock: true,
    dimensions: '30" W x 32" D x 34" H',
    weight: "45 lbs",
    materials: ["Premium Fabric", "Solid Wood", "High-Density Foam"],
    features: ["Ergonomic Design", "Stain-Resistant Fabric", "Easy Assembly", "Adjustable Feet"],
    relatedProducts: [2, 5, 7],
  },
  // Other products would be defined here
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId) || products[0] // Fallback to first product if not found

  const [selectedColor, setSelectedColor] = useState(product.colors[0].value)
  const [selectedColorName, setSelectedColorName] = useState(product.colors[0].name)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [isFavorite, setIsFavorite] = useState(false)

  const handleColorSelect = (color: string, name: string) => {
    setSelectedColor(color)
    setSelectedColorName(name)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/products" className="flex items-center text-gray-600 hover:text-magenta">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <Image src={selectedImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                {product.isNew && <Badge className="absolute top-4 left-4 bg-cyan text-white">New</Badge>}
                {product.discount > 0 && (
                  <Badge className="absolute top-4 right-4 bg-orange text-white">{product.discount}% OFF</Badge>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                      selectedImage === image ? "border-magenta" : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{product.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {product.discount > 0 ? (
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                      <span className="text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                      <Badge className="bg-orange text-white">{product.discount}% OFF</Badge>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                  )}
                </div>

                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">
                    Color: <span className="font-normal">{selectedColorName}</span>
                  </h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorSelect(color.value, color.name)}
                        className={`relative w-10 h-10 rounded-full grid place-content-center transition-all ${
                          selectedColor === color.value ? "ring-2 ring-offset-2 ring-magenta" : "ring-1 ring-gray-300"
                        }`}
                        title={color.name}
                      >
                        <span
                          className="w-8 h-8 rounded-full inline-block"
                          style={{ backgroundColor: color.value }}
                        ></span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <button
                      onClick={decreaseQuantity}
                      className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                      {quantity}
                    </div>
                    <button
                      onClick={increaseQuantity}
                      className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Stock Status */}
                <div className="flex items-center mb-6">
                  {product.inStock ? (
                    <div className="flex items-center text-green-600">
                      <Check className="h-5 w-5 mr-2" />
                      <span>In Stock</span>
                    </div>
                  ) : (
                    <div className="text-red-500">Out of Stock</div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button className="flex-1 bg-magenta hover:bg-magenta/90 text-white py-6">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-magenta text-magenta hover:bg-magenta/5"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart className={`mr-2 h-5 w-5 ${isFavorite ? "fill-magenta" : ""}`} />
                    {isFavorite ? "Saved" : "Save"}
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                {/* Delivery Info */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-magenta mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Free Delivery</p>
                      <p className="text-sm text-gray-600">Estimated delivery within 3-7 business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="details">
              <TabsList className="w-full justify-start border-b">
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="py-6">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.longDescription }} />
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="specifications" className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Dimensions & Weight</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Dimensions</span>
                        <span>{product.dimensions}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Weight</span>
                        <span>{product.weight}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">Materials</h3>
                    <ul className="space-y-2">
                      {product.materials.map((material, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-600 mr-2" />
                          <span>{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="py-6">
                <div className="flex items-center mb-6">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div>
                    <span className="text-2xl font-bold">{product.rating}</span>
                    <span className="text-gray-600 ml-1">out of 5</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">Based on {product.reviews} reviews</p>

                {/* This would normally be populated with actual reviews */}
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Jane Doe</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Verified Purchase</p>
                    <p>
                      Absolutely love this chair! It's comfortable, stylish, and was easy to assemble. Highly recommend!
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">John Smith</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">Verified Purchase</p>
                    <p>Great quality for the price. The color is exactly as shown in the pictures. Would buy again.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
