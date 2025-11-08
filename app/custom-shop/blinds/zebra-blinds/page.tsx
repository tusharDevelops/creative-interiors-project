import Link from "next/link"
import { ArrowLeft, Palette, Camera, Upload, Ruler, Layers, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import CustomCard from "@/components/custom-card"


export default function ZebraBlindsVariationPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Customize Zebra Blinds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to customize your zebra blinds
          </p>
        </div>

        {/* Options */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          <CustomCard
            title="Custom Photo Zebra Blinds"
            description="Upload your image and design your own zebra blinds that blend sheer and solid fabrics for modern light control."
            features={[
              { icon: Upload, text: "Upload any image" },
              { icon: Ruler, text: "Tailor-made dimensions" },
              { icon: Layers, text: "Sheer & solid fabric mix" },
              { icon: Shield, text: "UV & privacy protection" },
            ]}
            price="₹120"
            priceUnit="per sq ft"
            badge={{
              text: "Modern Look",
              icon: Camera,
              color: "pink",
            }}
            heroIcon={Camera}
            gradientFrom="from-pink-100"
            gradientTo="to-blue-100"
            buttonText="Start Customizing"
            href="/custom-shop/blinds/zebra-blinds/custom-photo"
            qualityBadge={{
              text: "Layered Design",
              icon: Layers,
            }}
            delay="0s"
          />

          <CustomCard
            title="Catalogue Zebra Blinds"
            description="Choose from our designer range of zebra blinds that combine functionality and aesthetics for homes and offices."
            features={[
              { icon: Palette, text: "Dual-layered patterns" },
              { icon: Layers, text: "Sheer + blackout styles" },
              { icon: Star, text: "Contemporary designs" },
              { icon: Shield, text: "Glare & heat reduction" },
            ]}
            price="₹100"
            priceUnit="per sq ft"
            badge={{
              text: "Trending",
              icon: Star,
              color: "blue",
            }}
            heroIcon={Palette}
            gradientFrom="from-cyan-100"
            gradientTo="to-blue-100"
            buttonText="Browse Designs"
            href="/custom-shop/blinds/zebra-blinds/catalogue-design"
            qualityBadge={{
                text: "Premium Collection",
                icon: Star,
              }}
              delay="0.2s"
            />
          </div>

        </div>
    </div>
  )
}
