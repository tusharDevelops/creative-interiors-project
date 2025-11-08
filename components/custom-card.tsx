import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface Feature {
  icon: LucideIcon
  text: string
}

interface ProductCardProps {
  title: string
  description: string
  features: Feature[]
  price: string
  priceUnit: string
  badge: {
    text: string
    icon: LucideIcon
    color: "pink" | "blue" | "green" | "purple"
  }
  heroIcon: LucideIcon
  gradientFrom: string
  gradientTo: string
  buttonText: string
  href: string
  qualityBadge?: {
    text: string
    icon: LucideIcon
  }
  delay?: string
}

const colorVariants = {
  pink: {
    badge: "bg-pink-500 text-white",
    price: "text-pink-500",
    button: "bg-pink-500 hover:bg-pink-600 text-white",
    icon: "text-pink-500",
  },
  blue: {
    badge: "bg-blue-500 text-white",
    price: "text-blue-500",
    button: "bg-blue-500 hover:bg-blue-600 text-white",
    icon: "text-blue-500",
  },
  green: {
    badge: "bg-green-500 text-white",
    price: "text-green-500",
    button: "bg-green-500 hover:bg-green-600 text-white",
    icon: "text-green-500",
  },
  purple: {
    badge: "bg-purple-500 text-white",
    price: "text-purple-500",
    button: "bg-purple-500 hover:bg-purple-600 text-white",
    icon: "text-purple-500",
  },
}

export default function CustomCard({
  title,
  description,
  features,
  price,
  priceUnit,
  badge,
  heroIcon: HeroIcon,
  gradientFrom,
  gradientTo,
  buttonText,
  href,
  qualityBadge,
  delay = "0s",
}: ProductCardProps) {
  const colors = colorVariants[badge.color]
  const BadgeIcon = badge.icon
  const QualityIcon = qualityBadge?.icon

  return (
    <Card
      className="group relative overflow-hidden border border-gray-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-700 ease-out hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      {/* Badge */}
      <div className="absolute top-6 right-6 z-10">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm ${colors.badge}`}
        >
          <BadgeIcon className="w-3.5 h-3.5" />
          {badge.text}
        </span>
      </div>

      {/* Hero Section */}
      <div className={`h-72 bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
        {/* Main Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
            <HeroIcon className={`w-12 h-12 ${colors.icon}`} />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-8 left-8 w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div
            className="absolute top-16 right-12 w-2 h-2 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-12 left-12 w-4 h-4 bg-white rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <CardContent className="p-8">
        {/* Title */}
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-8 leading-relaxed text-base">{description}</p>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon
            return (
              <div key={index} className="flex items-center gap-3 group/feature">
                <div
                  className={`w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover/feature:bg-gray-100 transition-colors duration-200`}
                >
                  <FeatureIcon className={`w-4 h-4 ${colors.icon}`} />
                </div>
                <span className="text-gray-700 text-sm font-medium">{feature.text}</span>
              </div>
            )
          })}
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-sm text-gray-500 font-medium">Starting from</span>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className={`text-4xl font-bold tracking-tight ${colors.price}`}>{price}</span>
            <span className="text-gray-500 text-base font-medium">{priceUnit}</span>
          </div>

          {qualityBadge && QualityIcon && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200">
              <QualityIcon className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-gray-700 text-sm font-medium">{qualityBadge.text}</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link href={href}>
          <Button
            className={`w-full ${colors.button} font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-base tracking-wide`}
          >
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
