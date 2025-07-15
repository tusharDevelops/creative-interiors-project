import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const blindTypes = [
  {
    id: "roller-blinds",
    name: "Roller Blinds",
    description: "Simple, elegant, and versatile window covering with smooth operation",
    image: "/placeholder.svg?height=250&width=350",
    href: "/custom-shop/blinds/roller-blinds",
  },
  {
    id: "zebra-blinds",
    name: "Zebra Blinds",
    description: "Alternating sheer and opaque stripes for perfect light control",
    image: "/placeholder.svg?height=250&width=350",
    href: "/custom-shop/blinds/zebra-blinds",
  },
  {
    id: "vertical-blinds",
    name: "Vertical Blinds",
    description: "Perfect for large windows and sliding doors with vertical slats",
    image: "/placeholder.svg?height=250&width=350",
    href: "/custom-shop/blinds/vertical-blinds",
  },
  {
    id: "roman-blinds",
    name: "Roman Blinds",
    description: "Soft fabric folds for an elegant and sophisticated appearance",
    image: "/placeholder.svg?height=250&width=350",
    href: "/custom-shop/blinds/roman-blinds",
  },
  {
    id: "wooden-blinds",
    name: "Wooden Blinds",
    description: "Natural wood finish for a warm, classic look with premium craftsmanship",
    image: "/placeholder.svg?height=250&width=350",
    href: "/custom-shop/blinds/wooden-blinds",
  },
]

export default function BlindsPage() {
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
            href="/custom-shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Choose Your Blind Type</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select from our premium collection of custom blinds to find the perfect fit for your windows
          </p>
        </div>

        {/* Blinds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blindTypes.map((blind, index) => (
            <Card
              key={blind.id}
              className="group relative overflow-hidden border border-gray-200 hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-xl animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader className="relative z-10 p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={blind.image || "/placeholder.svg"}
                    alt={blind.name}
                    width={350}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>

              <CardContent className="relative z-10 p-8">
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-brand-pink transition-colors duration-300 mb-4">
                  {blind.name}
                </CardTitle>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{blind.description}</p>

                <Link href={blind.href}>
                  <Button className="w-full bg-gradient-to-r from-brand-pink to-brand-orange hover:from-brand-orange hover:to-brand-pink text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg">
                    Customize Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">
            Free Measurement & Installation Service
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            All our blinds come with professional measurement, installation, and a 2-year warranty for your peace of
            mind.
          </p>
        </div>
      </div>
    </div>
  )
}
