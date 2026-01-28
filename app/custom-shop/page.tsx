"use client"
import { Palette, Blinds, ImageIcon, Sparkles, Users, Award, Zap, Shield, Plus, DoorOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductCategories } from "@/services/operations/productAPI";
import { adaptCategories } from "@/adapters/productCategoryAdapter";



// const productCategories = [
//   {
//     id: "wallpaper",
//     name: "Custom Wallpaper",
//     tagline: "Transform your walls.",
//     description:
//       "Premium custom wallpapers with endless design possibilities. Upload your own image or choose from our designer collection.",
//     icon: Palette,
//     href: "/custom-shop/wallpaper",
//     image: "/show/product-wallpaper.jpeg",
//     popular: true,
//     projects: "2,847",
//     rating: 4.9,
//     price: "From ₹60",
//     bgColor: "bg-gradient-to-br from-orange-50 to-pink-50",
//     textColor: "text-gray-900",
//     size: "large", // Takes 2 columns
//   },
//   {
//     id: "blinds",
//     name: "Window Blinds",
//     tagline: "Privacy meets style.",
//     description: "Elegant window treatments for the perfect balance of privacy and natural light.",
//     icon: Blinds,
//     href: "/custom-shop/blinds",
//     image: "/show/product-blinds.jpeg",
//     popular: false,
//     projects: "1,923",
//     rating: 4.8,
//     price: "From ₹70",
//     bgColor: "bg-gradient-to-br from-slate-900 to-slate-800",
//     textColor: "text-white",
//     size: "medium",
//   },
//   {
//     id: "canvas",
//     name: "Canvas Prints",
//     tagline: "Your memories, elevated.",
//     description: "Transform your favorite photos into stunning wall art with museum-quality canvas prints.",
//     icon: ImageIcon,
//     href: "/custom-shop/canvas",
//     image: "/show/product-canvas.jpeg",
//     popular: true,
//     projects: "3,156",
//     rating: 4.9,
//     price: "From ₹200",
//     bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
//     textColor: "text-gray-900",
//     size: "medium",
//   },
//   {
//     id: "glass-film",
//     name: "Glass Films",
//     tagline: "Modern privacy solutions.",
//     description: "Decorative and privacy films that add style while maintaining natural light flow.",
//     icon: Sparkles,
//     href: "/custom-shop/glass-film",
//     image: "/show/product-glass-film.jpeg",
//     popular: false,
//     projects: "987",
//     rating: 4.7,
//     price: "From ₹60",
//     bgColor: "bg-gradient-to-br from-sky-100 to-blue-100",
//     textColor: "text-gray-900",
//     size: "large", // Takes 2 columns
//   },
//   {
//     id: "Designer-curtains",
//     name: "Designer Curtains",
//     tagline: "Elevate your space.",
//     description: "Luxurious curtains that combine style and functionality.",
//     icon: Sparkles,
//     href: "/custom-shop/designer-curtains",
//     image: "/show/product-curtain.jpeg",
//     popular: false,
//     projects: "1,234",
//     rating: 4.8,
//     price: "From ₹150",
//     bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
//     textColor: "text-gray-900",
//     size: "large", // Takes 2 columns
//   }
// ]

const features = [
  {
    icon: Award,
    title: "Premium Materials",
    description: "Industry-leading quality standards",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Express printing and shipping",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Professional design consultation",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction promise",
  },
]




export default function CustomShopPage() {

    const [productCategories, setProductCategories] = useState<any[]>([]);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    const loadCategories = async () => {
      const apiData = await dispatch(getProductCategories());
      const adapted = adaptCategories(apiData);
      setProductCategories(adapted);
      console.log(" api-data:", apiData);
    };

    loadCategories();
  }, [dispatch]);

  if (productCategories.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading products…</p>
      </div>
    );
  }
  
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
      
      {/* Hero Section - Apple Style */}
      <section className="pt-12 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Create your
            <br />
            <span className="font-semibold bg-gradient-to-r from-pink-500 via-cyan-400 via-lime-400 to-orange-500 bg-clip-text text-transparent">
              custom designs.
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Transform any space with fully customized wallpapers, blinds, canvas prints, and glass films. Upload your
            designs or work with our experts to create something uniquely yours.
          </p>

          {/* Custom Products Highlight */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-brand-pink text-sm font-medium">
              <Palette className="w-4 h-4" />
              Custom Wallpapers
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full  text-brand-cyan text-sm font-medium">
              <Blinds className="w-4 h-4" />
              Personalized Blinds
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-brand-green text-sm font-medium">
              <ImageIcon className="w-4 h-4" />
              Photo Canvas
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-brand-orange text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Designer Glass Films
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-brand-blue text-sm font-medium">
              <DoorOpen className="w-4 h-4" />
              Designer Curtains
            </div>
          </div>

          {/* Apple-style floating elements */}
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      
       {/* Apple-style Product Cards Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* First Row - Large Cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Wallpaper - Large Card with Image Focus */}
            <Link href={productCategories[0].href} className="group block">
              <div className="rounded-3xl overflow-hidden h-[600px] relative transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                {/* Large Product Image */}
                <div className="absolute inset-0">
                  <Image
                    src={productCategories[0].image || "/placeholder.svg"}
                    alt={productCategories[0].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content positioned over image */}
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
                  {/* Popular Badge */}
                  {productCategories[0].popular && (
                    <div className="self-end">
                      <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-pink-600 text-sm font-medium">
                        <Palette className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Bottom content */}
                  <div>
                    <div className="text-sm font-medium text-white/80 mb-2">Custom Wallpaper</div>
                    <h2 className="text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
                      Transform your walls.
                    </h2>
                    <p className="text-lg text-white/90 max-w-md mb-6">
                      Premium custom wallpapers with endless design possibilities.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-medium text-white">From $8.99 per sq ft</div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Blinds - Large Card with Image Focus */}
            <Link href={productCategories[1].href} className="group block">
              <div className="rounded-3xl overflow-hidden h-[600px] relative transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                {/* Large Product Image */}
                <div className="absolute inset-0">
                  <Image
                    src={productCategories[1].image || "/placeholder.svg"}
                    alt={productCategories[1].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Darker overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
                </div>

                {/* Content positioned over image */}
                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-between">
                  <div className="self-end">
                    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-cyan-600 text-sm font-medium">
                      <Blinds className="w-3 h-3" />
                      Custom Fit
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-white/80 mb-2">Window Treatments</div>
                    <h2 className="text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
                      Privacy meets style.
                    </h2>
                    <p className="text-lg text-white/90 max-w-md mb-6">
                      Elegant solutions for the perfect balance of privacy and light.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-medium text-white">From $12.99 per sq ft</div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Row - Medium Cards with Image Focus */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Canvas Prints */}
            <Link href={productCategories[2].href} className="group block">
              <div className="rounded-3xl overflow-hidden h-[500px] relative transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                {/* Large Product Image */}
                <div className="absolute inset-0">
                  <Image
                    src={productCategories[2].image || "/placeholder.svg"}
                    alt={productCategories[2].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content positioned over image */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {productCategories[2].popular && (
                    <div className="self-end">
                      <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-lime-600 text-sm font-medium">
                        <ImageIcon className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="text-sm font-medium text-white/80 mb-2">Canvas Prints</div>
                    <h2 className="text-3xl lg:text-4xl font-light text-white mb-3 leading-tight">
                      Your memories,
                      <br />
                      elevated.
                    </h2>
                    <p className="text-base text-white/90 max-w-sm mb-6">
                      Museum-quality canvas prints that bring your photos to life.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-medium text-white">From $15.99</div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Glass Films */}
            <Link href={productCategories[3].href} className="group block">
              <div className="rounded-3xl overflow-hidden h-[500px] relative transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                {/* Large Product Image */}
                <div className="absolute inset-0">
                  <Image
                    src={productCategories[3].image || "/placeholder.svg"}
                    alt={productCategories[3].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/* Content positioned over image */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="self-end">
                    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-orange-600 text-sm font-medium">
                      <Sparkles className="w-3 h-3" />
                      Designer
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-white/80 mb-2">Glass Films</div>
                    <h2 className="text-3xl lg:text-4xl font-light text-white mb-3 leading-tight">
                      Modern privacy
                      <br />
                      solutions.
                    </h2>
                    <p className="text-base text-white/90 max-w-sm mb-6">
                      Decorative films that add style while maintaining natural light.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-medium text-white">From $9.99</div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Third Row - Medium Cards with Image Focus */}
          <div className="grid lg:grid-cols-1 gap-6 mt-6">
              <Link href={productCategories[4].href} className="group block">
              <div className="rounded-3xl overflow-hidden h-[600px] relative transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                {/* Large Product Image */}
                <div className="absolute inset-0">
                  <Image
                    src={productCategories[4].image || "/placeholder.svg"}
                    alt={productCategories[4].name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>

                {/*  content over image */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div>
                    <div className="text-sm font-medium text-white/80 mb-2">Designer Curtains</div>
                    <h2 className="text-3xl lg:text-4xl font-light text-white mb-3 leading-tight">
                      Style that
                      <br />
                      transforms spaces.
                    </h2>
                    <p className="text-base text-white/90 max-w-md mb-6">
                      Premium fabrics and elegant designs to elevate your home interiors.
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="text-lg font-medium text-white">From $39.99</div>
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>    
          </div>
        </div>
      </section>

      {/* Apple-style Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Why choose us.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Experience the difference of working with industry professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Apple-style CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-12 font-light max-w-2xl mx-auto">
            Transform your space with our premium custom solutions. Professional consultation included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium">
              Start your project
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-medium bg-transparent"
            >
              Learn more
            </Button>
          </div>
        </div>
      </section>

     
    </div>
  )
}
