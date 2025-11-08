import Link from "next/link"
import { ArrowLeft, Upload, Palette, Camera, Star, Shield, Layers, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import CustomCard from "@/components/custom-card"


export default function GlassFilmPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-pink to-brand-orange bg-clip-text text-transparent mb-6">
            Choose Your Glass Film Style
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create custom glass films for privacy, decoration, or branding with your own designs or our catalogue
          </p>
        </div>

        {/* Main Options */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
  <CustomCard
    title="Custom Design Film"
    description="Upload your own design and transform it into premium glass film. Perfect for logos, patterns, or artistic designs."
    features={[
      { icon: Upload, text: "Upload any design" },
      { icon: Eye, text: "Multiple transparency levels" },
      { icon: Layers, text: "Various film styles" },
      { icon: Shield, text: "UV protection included" },
    ]}
    price="$12.99"
    priceUnit="per sq ft"
    badge={{
      text: "Popular",
      icon: Star,
      color: "pink",
    }}
    heroIcon={Camera}
    gradientFrom="from-pink-200"
    gradientTo="to-blue-200"
    buttonText="Start Customizing"
    href="/custom-shop/glass-film/custom-photo"
    qualityBadge={{
      text: "Professional Grade",
      icon: Shield,
    }}
    delay="0s"
  />

  <CustomCard
    title="Catalogue Design Film"
    description="Choose from our curated collection of professional glass film designs, patterns, and decorative elements."
    features={[
      { icon: Palette, text: "Professional patterns" },
      { icon: Star, text: "Privacy & decorative" },
      { icon: Layers, text: "Designer collections" },
      { icon: Shield, text: "Ready to install" },
    ]}
    price="$9.99"
    priceUnit="per sq ft"
    badge={{
      text: "Designer",
      icon: Palette,
      color: "blue",
    }}
    heroIcon={Palette}
    gradientFrom="from-cyan-200"
    gradientTo="to-blue-200"
    buttonText="Browse Catalogue"
    href="/custom-shop/glass-film/catalogue-design"
    qualityBadge={{
      text: "200+ Patterns",
      icon: Star,
    }}
    delay="0.2s"
  />
</div>


        {/* Bottom Info */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Premium Materials & Professional Installation
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            All glass films are made with premium vinyl and include UV protection. Professional installation service
            available.
          </p>
        </div>
      </div>
    </div>
  )
}
