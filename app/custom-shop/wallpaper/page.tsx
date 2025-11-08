import Link from "next/link"
import { ArrowLeft, Upload, Zap, Layers, Shield, Star, Palette, Camera } from "lucide-react"
import Image from "next/image"
import CustomCard from "@/components/custom-card"

export default function WallpaperPage() {
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
        
        <div className=" animate-slide-in">
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
            Choose Your Wallpaper Style
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create stunning custom wallpapers with your own images or choose from our designer collection
          </p>
        </div>
      
    

        {/* Main Options */}
             {/* Product Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <CustomCard
            title="Custom Photo Wallpaper"
            description="Upload your own image and transform it into a premium wallpaper. Perfect for personal photos, artwork, or branded designs."
            features={[
              { icon: Upload, text: "Upload any image" },
              { icon: Zap, text: "AI-powered enhancement" },
              { icon: Layers, text: "Multiple material options" },
              { icon: Shield, text: "Quality guarantee" },
            ]}
            price="₹70"
            priceUnit="per sq ft"
            badge={{
              text: "Popular",
              icon: Star,
              color: "pink",
            }}
            heroIcon={Camera}
            gradientFrom="from-pink-100"
            gradientTo="to-purple-100"
            buttonText="Start Customizing"
            href="/custom-shop/wallpaper/custom-photo"
            qualityBadge={{
              text: "Quality Assured",
              icon: Shield,
            }}
            delay="0s"
          />

          <CustomCard
            title="Catalogue Designs"
            description="Choose from our curated collection of professional designs, patterns, and textures created by expert designers."
            features={[
              { icon: Palette, text: "Professional designs" },
              { icon: Star, text: "Trending patterns" },
              { icon: Layers, text: "Designer collections" },
              { icon: Shield, text: "Ready to print" },
            ]}
            price="₹60"
            priceUnit="per sq ft"
            badge={{
              text: "Designer",
              icon: Palette,
              color: "blue",
            }}
            heroIcon={Palette}
            gradientFrom="from-blue-100"
            gradientTo="to-cyan-100"
            buttonText="Browse Catalogue"
            href="/custom-shop/wallpaper/catalogue-design"
            qualityBadge={{
              text: "500+ Designs",
              icon: Star,
            }}
            delay="0.2s"
          />
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Premium Quality Materials & Free Shipping
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            All wallpapers are printed on premium materials with eco-friendly inks. Professional installation available.
          </p>
        </div>
      </div>
    </div>
  )
}
