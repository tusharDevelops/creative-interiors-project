import Link from "next/link"
import { ArrowLeft, Upload, Palette, Camera, Star, Shield, Zap, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import CustomCard from "@/components/custom-card"


export default function CanvasPage() {
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
            Choose Your Canvas Style
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create stunning custom canvas prints with your own images or choose from our designer collection
          </p>
        </div>

        {/* Main Options */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* <CustomCard
          title="Custom Photo Canvas"
          description="Upload your own image and transform it into a premium canvas print. Perfect for personal photos, artwork, or branded designs."
          features={[
            { icon: Upload, text: "Upload any image" },
            { icon: Zap, text: "AI-powered enhancement" },
            { icon: Layers, text: "Multiple finish options" },
            { icon: Shield, text: "Quality guarantee" },
          ]}
          price="$24.99"
          priceUnit="8x10 inch"
          badge={{
            text: "Popular",
            icon: Star,
            color: "pink",
          }}
          heroIcon={Camera}
          gradientFrom="from-pink-200"
          gradientTo="to-blue-200"
          buttonText="Start Customizing"
          href="/custom-shop/canvas/custom-photo"
          qualityBadge={{
            text: "Premium Quality",
            icon: Shield,
          }}
          delay="0s"
        /> */}

        <CustomCard
          title="Catalogue Canvas Designs"
          description="Choose from our curated collection of professional designs, patterns, and artwork created by expert designers."
          features={[
            { icon: Palette, text: "Professional artwork" },
            { icon: Star, text: "Trending designs" },
            { icon: Layers, text: "Designer collections" },
            { icon: Shield, text: "Ready to print" },
          ]}
          price="$19.99"
          priceUnit="8x10 inch"
          badge={{
            text: "Designer",
            icon: Palette,
            color: "blue",
          }}
          heroIcon={Palette}
          gradientFrom="from-cyan-200"
          gradientTo="to-blue-200"
          buttonText="Browse Catalogue"
          href="/custom-shop/canvas/catalogue-design"
          qualityBadge={{
            text: "300+ Designs",
            icon: Star,
          }}
          delay="0.2s"
        />
       </div>


        {/* Bottom Info */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Premium Canvas Materials & Free Shipping
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            All canvas prints are made with premium materials and archival inks. Professional framing options available.
          </p>
        </div>
      </div>
    </div>
  )
}
