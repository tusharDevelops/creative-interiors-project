import Hero from "@/components/home/hero"
import { FeaturedProducts } from "@/components/home/featured-products"
import CategoryShowcase from "@/components/home/category-showcase"
import ServicesSection from "@/components/home/services-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import BlogPreview from "@/components/home/blog-preview"
import NewsletterSection from "@/components/home/newsletter-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
      <ServicesSection />
      <TestimonialsSection />
      {/* <BlogPreview /> */}
      <NewsletterSection />
    </main>
  )
}

