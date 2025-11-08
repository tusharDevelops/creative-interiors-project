import Link from "next/link"
import { ArrowLeft, Palette, Camera, Upload, Ruler, Layers, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import CustomCard from "@/components/custom-card"


export default function VerticalBlindsVariationPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Customize Vertical Blinds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to customize your vertical blinds
          </p>
        </div>

        {/* Options */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <CustomCard
          title="Custom Photo Vertical Blinds"
          description="Upload your own image and create personalized vertical blinds perfect for large windows and offices."
          features={[
            { icon: Upload, text: "Upload any image" },
            { icon: Ruler, text: "Made-to-measure fitting" },
            { icon: Layers, text: "Various fabric options" },
            { icon: Shield, text: "Fade-resistant print" },
          ]}
          price="₹100"
          priceUnit="per sq ft"
          badge={{
            text: "Office Favorite",
            icon: Camera,
            color: "pink",
          }}
          heroIcon={Camera}
          gradientFrom="from-pink-100"
          gradientTo="to-blue-100"
          buttonText="Start Customizing"
          href="/custom-shop/blinds/vertical-blinds/custom-photo"
          qualityBadge={{
            text: "Custom Fit",
            icon: Ruler,
          }}
          delay="0s"
        />

        <CustomCard
          title="Catalogue Vertical Blinds"
          description="Explore our collection of vertical blind designs suited for homes, offices, and commercial spaces."
          features={[
            { icon: Palette, text: "Elegant curated designs" },
            { icon: Layers, text: "Light-filtering materials" },
            { icon: Star, text: "Best for tall windows" },
            { icon: Shield, text: "UV and dust protection" },
          ]}
          price="₹85"
          priceUnit="per sq ft"
          badge={{
            text: "Recommended",
            icon: Star,
            color: "blue",
          }}
          heroIcon={Palette}
          gradientFrom="from-cyan-100"
          gradientTo="to-blue-100"
          buttonText="Browse Designs"
          href="/custom-shop/blinds/vertical-blinds/catalogue-design"
          qualityBadge={{
            text: "Top Seller",
            icon: Star,
          }}
          delay="0.2s"
        />
      </div>

      </div>
    </div>
  )
}
