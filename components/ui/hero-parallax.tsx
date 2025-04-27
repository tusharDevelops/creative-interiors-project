"use client"

import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const yFirstRow = useTransform(scrollYProgress, [0, 1], [0, 150])
  const ySecondRow = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yThirdRow = useTransform(scrollYProgress, [0, 1], [0, 100])
  const yText = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden bg-white antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header yText={yText} opacityText={opacityText} />
      <motion.div style={{ y: yFirstRow }} className="flex gap-5 absolute top-[35vh] left-0 right-0">
        {firstRow.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </motion.div>
      <motion.div style={{ y: ySecondRow }} className="flex gap-5 absolute top-[70vh] left-0 right-0">
        {secondRow.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </motion.div>
      <motion.div style={{ y: yThirdRow }} className="flex gap-5 absolute top-[105vh] left-0 right-0">
        {thirdRow.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </motion.div>
    </div>
  )
}

export const Header = ({ yText, opacityText }: { yText: any; opacityText: any }) => {
  return (
    <motion.div
      style={{
        y: yText,
        opacity: opacityText,
      }}
      className="text-center relative z-10 pt-20 md:pt-32"
    >
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-magenta to-purple-600 pb-2">
        Our Portfolio
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
        Explore our collection of premium interior design projects that showcase our expertise and creativity
      </p>
    </motion.div>
  )
}

export const ProductCard = ({
  product,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
}) => {
  return (
    <Link
      href={product.link}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-xl overflow-hidden"
    >
      <Image
        src={product.thumbnail || "/placeholder.svg"}
        alt={product.title}
        fill
        className="object-cover absolute inset-0 z-0 transition-transform duration-500 group-hover/product:scale-110"
      />
      <div className="absolute inset-0 z-10 bg-black/60 group-hover/product:bg-black/40 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
        <h2 className="text-white text-xl font-semibold">{product.title}</h2>
      </div>
    </Link>
  )
}
