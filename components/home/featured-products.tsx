// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// import { Star, Heart, ShoppingCart } from "lucide-react"

// // Mock data for featured products
// const featuredProducts = [
//   {
//     id: 1,
//     name: "Modern Lounge Chair",
//     price: 599,
//     rating: 4.8,
//     reviews: 124,
//     image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
//     category: "Furniture",
//     isNew: true,
//     discount: 0,
//   },
//   {
//     id: 2,
//     name: "Minimalist Coffee Table",
//     price: 349,
//     rating: 4.5,
//     reviews: 86,
//     image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
//     category: "Furniture",
//     isNew: false,
//     discount: 15,
//   },
//   {
//     id: 3,
//     name: "Pendant Lighting Fixture",
//     price: 189,
//     rating: 4.7,
//     reviews: 53,
//     image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
//     category: "Lighting",
//     isNew: true,
//     discount: 0,
//   },
//   {
//     id: 4,
//     name: "Decorative Wall Art",
//     price: 129,
//     rating: 4.6,
//     reviews: 42,
//     image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
//     category: "Decor",
//     isNew: false,
//     discount: 0,
//   },
//   {
//     id: 5,
//     name: "Luxury Area Rug",
//     price: 449,
//     rating: 4.9,
//     reviews: 78,
//     image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
//     category: "Textiles",
//     isNew: false,
//     discount: 10,
//   },
// ]


// export default function FeaturedProducts() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
//             <p className="text-gray-600 max-w-2xl">
//               Discover our handpicked selection of premium interior design products to transform your space.
//             </p>
//           </div>
//           <Link href="/products" className="mt-4 md:mt-0">
//             <Button variant="outline" className="border-magenta text-magenta hover:bg-magenta/5">
//               View All Products
//             </Button>
//           </Link>
//         </div>

//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="w-full"
//         >
//           <CarouselContent className="-ml-4">
//             {featuredProducts.map((product) => (
//               <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
//                 <ProductCard product={product} />
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <div className="flex justify-end gap-2 mt-8">
//             <CarouselPrevious className="static transform-none bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300" />
//             <CarouselNext className="static transform-none bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300" />
//           </div>
//         </Carousel>
//       </div>
//     </section>
//   )
// }

// interface ProductCardProps {
//   product: {
//     id: number
//     name: string
//     price: number
//     rating: number
//     reviews: number
//     image: string
//     category: string
//     isNew: boolean
//     discount: number
//   }
// }

// function ProductCard({ product }: ProductCardProps) {
//   const [isHovered, setIsHovered] = useState(false)
//   const [isFavorite, setIsFavorite] = useState(false)

//   const discountedPrice = product.discount ? product.price - (product.price * product.discount) / 100 : null

//   return (
//     <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
//       <Card className="overflow-hidden border-gray-200">
//         <div
//           className="relative aspect-square"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <Image
//             src={product.image || "/placeholder.svg"}
//             alt={product.name}
//             fill
//             className="object-cover transition-transform duration-700 ease-in-out"
//             style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
//           />

//           {/* Badges */}
//           <div className="absolute top-3 left-3 flex flex-col gap-2">
//             {product.isNew && <Badge className="bg-cyan text-white">New</Badge>}
//             {product.discount > 0 && <Badge className="bg-orange text-white">{product.discount}% OFF</Badge>}
//           </div>

//           {/* Quick actions */}
//           <div className="absolute top-3 right-3">
//             <Button
//               size="icon"
//               variant="secondary"
//               className="rounded-full bg-white/80 hover:bg-white"
//               onClick={() => setIsFavorite(!isFavorite)}
//             >
//               <Heart className={`h-4 w-4 ${isFavorite ? "fill-magenta text-magenta" : "text-gray-600"}`} />
//             </Button>
//           </div>

//           {/* Add to cart button that appears on hover */}
//           <div
//             className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform transition-transform duration-300"
//             style={{ transform: isHovered ? "translateY(0)" : "translateY(100%)" }}
//           >
//             <Button className="w-full bg-white text-black hover:bg-gray-100">
//               <ShoppingCart className="mr-2 h-4 w-4" />
//               Add to Cart
//             </Button>
//           </div>
//         </div>

//         <CardContent className="p-4">
//           <div className="text-sm text-gray-500 mb-1">{product.category}</div>
//           <Link href={`/products/${product.id}`}>
//             <h3 className="font-medium text-lg hover:text-magenta transition-colors">{product.name}</h3>
//           </Link>

//           <div className="flex items-center mt-2">
//             <div className="flex items-center">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
//                 />
//               ))}
//             </div>
//             <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
//           </div>
//         </CardContent>

//         <CardFooter className="p-4 pt-0 flex justify-between items-center">
//           <div>
//             {discountedPrice ? (
//               <div className="flex items-center gap-2">
//                 <span className="font-semibold text-lg">${discountedPrice.toFixed(2)}</span>
//                 <span className="text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
//               </div>
//             ) : (
//               <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
//             )}
//           </div>

//           <Link href={`/products/${product.id}`}>
//             <Button variant="ghost" size="sm" className="text-magenta hover:text-magenta hover:bg-magenta/5">
//               Details
//             </Button>
//           </Link>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   )
// }

"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function FeaturedProducts() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Trending Now: Top Products
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
    {
      category: "Wall PVC Louvers",
      title: "Sleek & Modern Wall PVC Louvers",
      src: "https://walldecorpro.in/wp-content/uploads/2024/07/9cb2553970bfaa01f49aa4311538e225.jpg",
      content: <DummyContent />,
    },
    {
      category: "Wallpaper",
      title: "Luxury Wallpapers for Elegant Spaces",
      src: "https://walldecorpro.in/wp-content/uploads/2024/07/56b5ad3bda857ef5c48cca708381dc1d.jpg",
      content: <DummyContent />,
    },
    
    {
      category: "PU Stone Panels",
      title: "Realistic & Durable PU Stone Panels",
      src: "https://walldecorpro.in/wp-content/uploads/2024/07/d904a88d61b94f3d5434a8ef0e8ef098.jpg",
      content: <DummyContent />,
    },
    {
      category: "Wooden Flooring",
      title: "Timeless Wooden Flooring",
      src: "https://walldecorpro.in/wp-content/uploads/2024/07/20a090ffed43132e21920f3316de3412.jpg",
      content: <DummyContent />,
    },
    {
      category: "3D Wall Panels",
      title: "Add Depth with 3D Wall Panels",
      src: "https://walldecorpro.in/wp-content/uploads/2024/07/9d97f56b7270056252f9e6e865bef5a8.jpg",
      content: <DummyContent />,
    },
    {
        
        category: "Exterior WPC Panels",
        title: "Durable & Stylish Exterior WPC Panels",
        src: "https://walldecorpro.in/wp-content/uploads/2024/07/0fbd343fa7d448b6b1c7ab64fb1b740e.jpg",
        content: <DummyContent />,
              
              
        },
  ];
  
  