import Link from "next/link"
import { ArrowLeft, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"


export default function WoodenBlindsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Wooden Blinds Collection</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium wooden blinds with natural wood finish for a warm, classic look
          </p>
        </div>

        {/* Single Option - Catalogue Only */}
        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden border border-gray-200 hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-xl animate-fade-in bg-white">
            <div className="h-80 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <Palette className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-2">
                <div className="w-8 h-8 bg-amber-600 rounded"></div>
                <div className="w-8 h-8 bg-orange-700 rounded"></div>
                <div className="w-8 h-8 bg-yellow-800 rounded"></div>
                <div className="w-8 h-8 bg-amber-800 rounded"></div>
                <div className="w-8 h-8 bg-orange-900 rounded"></div>
                <div className="w-8 h-8 bg-yellow-900 rounded"></div>
              </div>
            </div>

            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-foreground mb-6 text-center">Premium Wooden Designs</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg text-center">
                Choose from our curated collection of premium wooden blinds featuring natural wood finishes, metallic
                and non-metallic options, and various blade sizes (25mm, 35mm, 50mm).
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Metallic & Non-metallic finishes</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">25mm, 35mm, 50mm blade sizes</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Premium natural wood materials</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-sm">Professional installation included</span>
                </div>
              </div>

              <Link href="/custom-shop/blinds/wooden-blinds/catalogue-design">
                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg">
                  Browse Wooden Designs →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-4">
            Sustainably Sourced Wood
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            All our wooden blinds are made from sustainably sourced wood with eco-friendly finishes and come with a
            5-year warranty.
          </p>
        </div>
      </div>
    </div>
  )
}
