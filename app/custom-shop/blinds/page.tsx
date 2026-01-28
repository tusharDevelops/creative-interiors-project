"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ImageCarousel from "@/components/image-carousel"

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCategoryBySlug, getSubCategories } from "@/services/operations/productAPI";
import { adaptBlindCategories } from "@/adapters/blindsAdapter";


// const blindTypes = [
//   {
//     id: "roller-blinds",
//     name: "Roller Blinds",
//     description: "Simple, elegant, and versatile window covering with smooth operation",
//     images: [
//       "/1-roller.jpeg",
//       "/2-roller.jpeg",
//       "/3-roller.jpeg",
//       "/4-roller.jpeg",
//     ],
//     href: "/custom-shop/blinds/roller-blinds",
//   },
//   {
//     id: "zebra-blinds",
//     name: "Zebra Blinds",
//     description: "Alternating sheer and opaque stripes for perfect light control",
//     images: [
//       "/zebra-1.jpeg",
//       "/zebra-2.jpeg",
//       "/zebra-3.jpeg",
//       "/zebra-4.jpeg",
//       "/zebra-5.jpeg",
//     ],
//     href: "/custom-shop/blinds/zebra-blinds",
//   },
//   {
//     id: "vertical-blinds",
//     name: "Vertical Blinds",
//     description: "Perfect for large windows and sliding doors with vertical slats",
//     images: [
//       "/vertical-1.jpeg",
//       "/vertical-2.jpeg",
//       "/vertical-3.jpeg",
//       "/vertical-4.jpeg",
//     ],
//     href: "/custom-shop/blinds/vertical-blinds",
//   },
//   {
//     id: "roman-blinds",
//     name: "Roman Blinds",
//     description: "Soft fabric folds for an elegant and sophisticated appearance",
//     images: [
//       "/roman-1.jpeg",
//       "/roman-2.jpeg",
//       "/roman-3.jpeg",
//       "/roman-4.jpeg",
//       "/roman-5.jpeg",
//     ],
//     href: "/custom-shop/blinds/roman-blinds",
//   },
//   {
//     id: "wooden-blinds",
//     name: "Wooden Blinds",
//     description: "Natural wood finish for a warm, classic look with premium craftsmanship",
//     images: [
//       "/wood-1.jpeg",
//       "/wood-2.jpeg",
//       "/wood-3.jpeg",
//       "/wood-4.jpeg",
//     ],
//     href: "/custom-shop/blinds/wooden-blinds",
//   },
// ]

export default function BlindsPage() {
const [blindTypes, setBlindTypes] = useState<any[]>([]);
const dispatch = useDispatch<any>();

  useEffect(() => {
    const loadBlinds = async () => {
      // 1. get blinds category
      const blindsCategory = await dispatch(
        getCategoryBySlug("blinds")
      );

      // 2. get its children
      const subCategories = await dispatch(
        getSubCategories(blindsCategory._id)
      );

      // 3. adapt for UI
      const adapted = adaptBlindCategories(subCategories);
      setBlindTypes(adapted);
      
    };

    loadBlinds();
  }, [dispatch]);

  if (blindTypes.length === 0) return null;


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
            href="/custom-shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Choose Your Blind Type</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our premium collection of custom blinds to find the perfect fit for your windows
          </p>
        </div>

        {/* Blinds Grid */}
        <div className="container mx-auto px-4 py-20">

        {/* Blinds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blindTypes.map((blind, index) => (
            <Card
              key={blind.id}
              className="group relative overflow-hidden border border-gray-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Carousel Section */}
              <ImageCarousel images={blind.images} alt={blind.name} className="relative" />

              <CardContent className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-gray-700 transition-colors duration-300">
                  {blind.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-base">{blind.description}</p>

                {/* Image Count Badge */}
                {/* <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm font-medium">
                      {blind.images.length} {blind.images.length === 1 ? "Style" : "Styles"}
                    </span>
                  </div>
                </div> */}

                {/* CTA Button */}
                <Link href={blind.href}>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-base tracking-wide">
                    Customize Now
                  </Button>
                </Link>
              </CardContent>

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Free Measurement & Installation Service
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              All our blinds come with professional measurement, installation, and a 2-year warranty for your peace of
              mind.
            </p>
          </div>
        </div>
      </div>

        
      </div>
    </div>
  )
}
