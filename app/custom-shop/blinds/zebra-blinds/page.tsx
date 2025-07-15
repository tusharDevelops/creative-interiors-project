import Link from "next/link"
import { ArrowLeft, Palette, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"


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
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Custom Photo Option */}
          <Card className="relative overflow-hidden border border-gray-200 hover:border-brand-pink/50 transition-all duration-300 hover:shadow-xl animate-fade-in bg-white">
            <div className="h-64 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Camera className="w-10 h-10 text-brand-pink" />
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Custom Photo</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Upload your own image to create personalized zebra blinds with alternating sheer and opaque stripes.
              </p>

              <Link href="/custom-shop/blinds/zebra-blinds/custom-photo">
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
            </div>

            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Catalogue Designs</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Choose from our curated collection of zebra blind patterns and designs.
              </p>

              <Link href="/custom-shop/blinds/zebra-blinds/catalogue-design">
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
