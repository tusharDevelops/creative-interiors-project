import Link from "next/link"
import { ArrowLeft, Layers, Palette, Ruler, TreePine, Wrench } from "lucide-react"
import Image from "next/image"
import CustomCard from "@/components/custom-card"


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
        <CustomCard
          title="Premium Wooden Designs"
          description="Choose from our curated collection of premium wooden blinds featuring natural wood finishes, metallic and non-metallic options, and various blade sizes (25mm, 35mm, 50mm)."
          features={[
            { icon: Layers, text: "Metallic & Non-metallic finishes" },
            { icon: Ruler, text: "25mm, 35mm, 50mm blade sizes" },
            { icon: TreePine, text: "Natural wood materials" },
            { icon: Wrench, text: "Professional installation included" },
          ]}
          price="₹150"
          priceUnit="per sq ft"
          badge={{
            text: "Luxury",
            icon: TreePine,
            color: "purple",
          }}
          heroIcon={Palette}
          gradientFrom="from-amber-100"
          gradientTo="to-yellow-100"
          buttonText="Browse Wooden Designs"
          href="/custom-shop/blinds/wooden-blinds/catalogue-design"
          qualityBadge={{
            text: "Natural Wood",
            icon: TreePine,
          }}
          delay="0s"
        />
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
