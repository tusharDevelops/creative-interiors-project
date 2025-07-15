import Link from "next/link"
import { ArrowLeft, Upload, Palette, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function RollerBlindsVariationPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Customize Roller Blinds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to customize your roller blinds
          </p>
        </div>

        {/* Options */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Custom Photo Option */}
          <Card className="relative overflow-hidden border border-gray-200 hover:border-brand-pink/50 transition-all duration-300 hover:shadow-xl animate-fade-in bg-white">
            <div className="h-64 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative">
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Custom Photo</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Upload your own image to create personalized roller blinds. Perfect for family photos, artwork, or
                branded designs.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-brand-pink" />
                  <span className="text-sm">Upload any image</span>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-brand-pink" />
                  <span className="text-sm">Multiple material options</span>
                </div>
              </div>

              <Link href="/custom-shop/blinds/roller-blinds/custom-photo">
                <Button className="w-full bg-gradient-to-r from-brand-pink to-pink-500 hover:from-pink-500 hover:to-brand-pink text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Start Customizing →
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Catalogue Design Option */}
          <Card
            className="relative overflow-hidden border border-gray-200 hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-xl animate-fade-in bg-white"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-64 bg-gradient-to-br from-cyan-100 via-green-100 to-blue-100 relative">
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
                Choose from our curated collection of professional patterns and designs created by expert designers.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-brand-cyan" />
                  <span className="text-sm">Professional designs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Upload className="w-5 h-5 text-brand-cyan" />
                  <span className="text-sm">Ready to print</span>
                </div>
              </div>

              <Link href="/custom-shop/blinds/roller-blinds/catalogue-design">
                <Button className="w-full bg-gradient-to-r from-brand-cyan to-cyan-500 hover:from-cyan-500 hover:to-brand-cyan text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Browse Designs →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
