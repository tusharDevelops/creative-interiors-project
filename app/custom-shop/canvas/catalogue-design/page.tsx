import Link from "next/link"
import { ArrowLeft, Search, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"


const canvasDesigns = [
  {
    id: 1,
    name: "Abstract Waves",
    category: "Abstract",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["trending", "modern"],
  },
  {
    id: 2,
    name: "Mountain Landscape",
    category: "Nature",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["popular", "landscape"],
  },
  {
    id: 3,
    name: "Geometric Patterns",
    category: "Modern",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["geometric", "clean"],
  },
  {
    id: 4,
    name: "Vintage Botanical",
    category: "Classic",
    price: 27.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["vintage", "botanical"],
  },
  {
    id: 5,
    name: "City Skyline",
    category: "Urban",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["urban", "modern"],
  },
  {
    id: 6,
    name: "Ocean Sunset",
    category: "Nature",
    price: 26.99,
    image: "/placeholder.svg?height=300&width=300",
    tags: ["sunset", "calming"],
  },
]

export default function CanvasCataloguePage() {
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
            href="/custom-shop/canvas"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-brand-cyan transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Canvas Options
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent mb-6">
            Canvas Design Catalogue
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of professional canvas artwork
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search designs..."
              className="pl-10 border-2 border-muted hover:border-brand-cyan transition-colors"
            />
          </div>
          <Button variant="outline" className="border-2 border-muted hover:border-brand-cyan bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-muted hover:border-brand-cyan bg-transparent"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-muted hover:border-brand-cyan bg-transparent"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {canvasDesigns.map((design, index) => (
            <Card
              key={design.id}
              className="group overflow-hidden border-2 border-transparent hover:border-brand-cyan/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={design.image || "/placeholder.svg"}
                  alt={design.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  {design.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 bg-brand-cyan text-white text-xs rounded-full mr-1 mb-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-brand-cyan transition-colors">
                  {design.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{design.category}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="text-xl font-bold text-brand-cyan">${design.price}</div>
                    <span className="text-xs text-muted-foreground">8x10 inch</span>
                  </div>
                  <Link href={`/custom-shop/canvas/catalogue-design/${design.id}`}>
                    <Button className="bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan text-white">
                      Customize
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Button
            variant="outline"
            className="border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-white px-8 py-3 bg-transparent"
          >
            Load More Designs
          </Button>
        </div>
      </div>
    </div>
  )
}
