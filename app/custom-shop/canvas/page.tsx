import Link from "next/link"
import { ArrowLeft, Upload, Palette, Camera, Star, Shield, Zap, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"


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
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Custom Photo Canvas */}
          <Card className="relative overflow-hidden border-0 shadow-2xl animate-fade-in">
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-pink text-white text-sm font-medium">
                <Star className="w-3 h-3" />
                Popular
              </span>
            </div>

            <div className="h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Camera className="w-10 h-10 text-brand-pink" />
                </div>
              </div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-lg p-4 shadow-lg flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                    <Upload className="w-6 h-6 text-gray-400" />
                  </div>
                  <span className="text-gray-600 font-medium">Your Custom Image</span>
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Custom Photo Canvas</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Upload your own image and transform it into a premium canvas print. Perfect for personal photos,
                artwork, or branded designs.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-brand-pink" />
                  <span className="text-sm">Upload any image</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-brand-pink" />
                  <span className="text-sm">AI-powered enhancement</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-brand-pink" />
                  <span className="text-sm">Multiple finish options</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-brand-pink" />
                  <span className="text-sm">Quality guarantee</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-brand-pink">$24.99</span>
                  <span className="text-sm text-muted-foreground">8x10 inch</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                  <Shield className="w-3 h-3" />
                  Premium Quality
                </div>
              </div>

              <Link href="/custom-shop/canvas/custom-photo">
                <Button className="w-full bg-gradient-to-r from-brand-pink to-pink-500 hover:from-pink-500 hover:to-brand-pink text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Start Customizing →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Catalogue Designs */}
          <Card
            className="relative overflow-hidden border-0 shadow-2xl animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-cyan text-white text-sm font-medium">
                <Palette className="w-3 h-3" />
                Designer
              </span>
            </div>

            <div className="h-64 bg-gradient-to-br from-cyan-200 via-green-200 to-blue-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Palette className="w-10 h-10 text-brand-cyan" />
                </div>
              </div>
              <div className="absolute bottom-6 right-6 grid grid-cols-2 gap-2">
                <div className="w-8 h-8 bg-purple-400 rounded"></div>
                <div className="w-8 h-8 bg-blue-400 rounded"></div>
                <div className="w-8 h-8 bg-green-400 rounded"></div>
                <div className="w-8 h-8 bg-cyan-300 rounded"></div>
              </div>
            </div>

            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Catalogue Designs</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Choose from our curated collection of professional designs, patterns, and artwork created by expert
                designers.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-brand-cyan" />
                  <span className="text-sm">Professional artwork</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-brand-cyan" />
                  <span className="text-sm">Trending designs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-brand-cyan" />
                  <span className="text-sm">Designer collections</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-brand-cyan" />
                  <span className="text-sm">Ready to print</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-brand-cyan">$19.99</span>
                  <span className="text-sm text-muted-foreground">8x10 inch</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                  <Star className="w-3 h-3" />
                  300+ Designs
                </div>
              </div>

              <Link href="/custom-shop/canvas/catalogue-design">
                <Button className="w-full bg-gradient-to-r from-brand-cyan to-cyan-500 hover:from-cyan-500 hover:to-brand-cyan text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Browse Catalogue →
                </Button>
              </Link>
            </CardContent>
          </Card>
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
