import Link from "next/link"
import { ArrowLeft, Palette, Camera, Upload, Layers, Ruler, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import CustomCard from "@/components/custom-card"

export default function RomanBlindsVariationPage() {
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
            href="/custom-shop/blinds"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blind Types
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Customize Roman Blinds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to customize your roman blinds
          </p>
        </div>

        {/* Options */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <CustomCard
            title="Custom Photo Roman Blinds"
            description="Upload your own image to create personalized roman blinds with elegant fabric folds."
            features={[
              { icon: Upload, text: "Upload any image" },
              { icon: Layers, text: "Premium fabric textures" },
              { icon: Ruler, text: "Made-to-measure sizes" },
              { icon: Shield, text: "Durability guaranteed" },
            ]}
            price="₹110"
            priceUnit="per sq ft"
            badge={{
              text: "Elegant",
              icon: Camera,
              color: "pink",
            }}
            heroIcon={Camera}
            gradientFrom="from-pink-100"
            gradientTo="to-blue-100"
            buttonText="Start Customizing"
            href="/custom-shop/blinds/roman-blinds/custom-photo"
            qualityBadge={{
              text: "Custom Fabric",
              icon: Shield,
            }}
            delay="0s"
          />

          <CustomCard
            title="Catalogue Roman Blinds"
            description="Choose from our curated collection of roman blind patterns and elegant designs."
            features={[
              { icon: Palette, text: "Elegant designer patterns" },
              { icon: Layers, text: "Premium material options" },
              { icon: Star, text: "Trending collections" },
              { icon: Shield, text: "Quality assured" },
            ]}
            price="₹95"
            priceUnit="per sq ft"
            badge={{
              text: "Classic",
              icon: Palette,
              color: "blue",
            }}
            heroIcon={Palette}
            gradientFrom="from-cyan-100"
            gradientTo="to-blue-100"
            buttonText="Browse Designs"
            href="/custom-shop/blinds/roman-blinds/catalogue-design"
            qualityBadge={{
              text: "500+ Patterns",
              icon: Star,
            }}
            delay="0.2s"
          />
        </div>

      </div>
    </div>
  )
}
