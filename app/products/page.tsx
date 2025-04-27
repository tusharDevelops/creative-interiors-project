"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Search, X, Filter } from "lucide-react"
import ProductCard from "@/components/product-card"
import ProductCardSkeleton from "@/components/product-card-skeleton"
import Image from "next/image"
import { BackgroundBeams } from "@/components/ui/background-beams"

// Mock product data
const products = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    description: "Elegant lounge chair with premium upholstery and solid wood legs, perfect for any living space.",
    price: 599,
    originalPrice: 699,
    rating: 4.8,
    reviews: 124,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    colors: ["#A0522D", "#D3D3D3", "#36454F"],
    category: "Furniture",
    room: "Living Room",
    isNew: true,
    discount: 15,
    inStock: true,
  },
  {
    id: 2,
    name: "Minimalist Coffee Table",
    description:
      "Clean lines and natural materials combine in this versatile coffee table suitable for any interior style.",
    price: 349,
    originalPrice: 399,
    rating: 4.5,
    reviews: 86,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    colors: ["#8B4513", "#F5F5DC", "#000000"],
    category: "Furniture",
    room: "Living Room",
    isNew: false,
    discount: 12,
    inStock: true,
  },
  {
    id: 3,
    name: "Pendant Lighting Fixture",
    description: "Modern pendant light with adjustable height, perfect for dining areas and kitchen islands.",
    price: 189,
    originalPrice: 219,
    rating: 4.7,
    reviews: 53,
    image: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg",
    colors: ["#C0C0C0", "#FFD700", "#000000"],
    category: "Lighting",
    room: "Dining Room",
    isNew: true,
    discount: 0,
    inStock: true,
  },
  {
    id: 4,
    name: "Decorative Wall Art",
    description: "Abstract wall art that adds a splash of color and personality to any room in your home.",
    price: 129,
    originalPrice: 129,
    rating: 4.6,
    reviews: 42,
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    colors: ["#4682B4", "#800020", "#000000"],
    category: "Decor",
    room: "Bedroom",
    isNew: false,
    discount: 0,
    inStock: true,
  },
  {
    id: 5,
    name: "Luxury Area Rug",
    description: "Soft, plush area rug with intricate patterns that adds warmth and texture to your floors.",
    price: 449,
    originalPrice: 499,
    rating: 4.9,
    reviews: 78,
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    colors: ["#D2B48C", "#808080", "#F5F5DC"],
    category: "Textiles",
    room: "Living Room",
    isNew: false,
    discount: 10,
    inStock: true,
  },
  {
    id: 6,
    name: "Modern Dining Table",
    description: "Sleek dining table with extendable leaf, perfect for both everyday meals and entertaining guests.",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 65,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    colors: ["#8B4513", "#F5F5DC", "#36454F"],
    category: "Furniture",
    room: "Dining Room",
    isNew: true,
    discount: 18,
    inStock: true,
  },
  {
    id: 7,
    name: "Velvet Accent Chair",
    description: "Luxurious velvet chair that adds a touch of elegance to any corner of your home.",
    price: 449,
    originalPrice: 499,
    rating: 4.5,
    reviews: 42,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
    colors: ["#800020", "#000080", "#2F4F4F"],
    category: "Furniture",
    room: "Living Room",
    isNew: false,
    discount: 10,
    inStock: true,
  },
  {
    id: 8,
    name: "Ceramic Vase Set",
    description: "Set of three handcrafted ceramic vases in complementary shapes and sizes.",
    price: 79,
    originalPrice: 99,
    rating: 4.3,
    reviews: 28,
    image: "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg",
    colors: ["#F5F5DC", "#D3D3D3", "#36454F"],
    category: "Decor",
    room: "Any Room",
    isNew: false,
    discount: 20,
    inStock: true,
  },
  {
    id: 9,
    name: "Floating Wall Shelves",
    description: "Minimalist wall shelves that appear to float, providing stylish storage for books and decor.",
    price: 129,
    originalPrice: 149,
    rating: 4.6,
    reviews: 37,
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
    colors: ["#8B4513", "#000000", "#F5F5DC"],
    category: "Furniture",
    room: "Any Room",
    isNew: false,
    discount: 13,
    inStock: true,
  },
  {
    id: 10,
    name: "Bedside Table Lamp",
    description: "Elegant table lamp with adjustable brightness, perfect for bedside reading.",
    price: 89,
    originalPrice: 99,
    rating: 4.4,
    reviews: 31,
    image: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg",
    colors: ["#C0C0C0", "#FFD700", "#000000"],
    category: "Lighting",
    room: "Bedroom",
    isNew: false,
    discount: 10,
    inStock: true,
  },
  {
    id: 11,
    name: "Luxury Throw Pillows",
    description: "Set of decorative throw pillows in premium fabrics to accent your sofa or bed.",
    price: 59,
    originalPrice: 69,
    rating: 4.7,
    reviews: 45,
    image: "https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg",
    colors: ["#800020", "#000080", "#2F4F4F"],
    category: "Textiles",
    room: "Living Room",
    isNew: false,
    discount: 14,
    inStock: true,
  },
  {
    id: 12,
    name: "Modern Bookshelf",
    description: "Contemporary bookshelf with adjustable shelves to display your books and decorative items.",
    price: 349,
    originalPrice: 399,
    rating: 4.8,
    reviews: 52,
    image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
    colors: ["#8B4513", "#000000", "#F5F5DC"],
    category: "Furniture",
    room: "Living Room",
    isNew: true,
    discount: 12,
    inStock: true,
  },
]

// Filter categories
const categories = ["All", "Furniture", "Lighting", "Decor", "Textiles"]
const rooms = ["All", "Living Room", "Bedroom", "Dining Room", "Kitchen", "Bathroom", "Any Room"]
const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $300", min: 100, max: 300 },
  { label: "$300 - $500", min: 300, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "Over $1000", min: 1000, max: 10000 },
]
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
]

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedRoom, setSelectedRoom] = useState("All")
  const [selectedPriceRange, setSelectedPriceRange] = useState<number[]>([0, 1500])
  const [sortBy, setSortBy] = useState("featured")
  const [showInStock, setShowInStock] = useState(false)
  const [showDiscount, setShowDiscount] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const productsPerPage = 8
  // Refs for scroll animations
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Apply filters and sorting
  useEffect(() => {
    setIsLoading(true)

    const filterTimeout = setTimeout(() => {
      let result = [...products]

      // Search filter
      if (searchQuery) {
        result = result.filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      }

      // Category filter
      if (selectedCategory !== "All") {
        result = result.filter((product) => product.category === selectedCategory)
      }

      // Room filter
      if (selectedRoom !== "All") {
        result = result.filter((product) => product.room === selectedRoom)
      }

      // Price range filter
      result = result.filter(
        (product) => product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1],
      )

      // In stock filter
      if (showInStock) {
        result = result.filter((product) => product.inStock)
      }

      // Discount filter
      if (showDiscount) {
        result = result.filter((product) => product.discount > 0)
      }

      // New items filter
      if (showNew) {
        result = result.filter((product) => product.isNew)
      }

      // Sorting
      switch (sortBy) {
        case "newest":
          // For demo purposes, we'll just reverse the array to simulate "newest"
          result = [...result].reverse()
          break
        case "price-low":
          result = [...result].sort((a, b) => a.price - b.price)
          break
        case "price-high":
          result = [...result].sort((a, b) => b.price - a.price)
          break
        case "rating":
          result = [...result].sort((a, b) => b.rating - a.rating)
          break
        default:
          // Featured - keep original order
          break
      }

      setFilteredProducts(result)
      setCurrentPage(1) // Reset to first page when filters change
      setIsLoading(false)
    }, 500) // Small delay for better UX

    return () => clearTimeout(filterTimeout)
  }, [searchQuery, selectedCategory, selectedRoom, selectedPriceRange, sortBy, showInStock, showDiscount, showNew])

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
    setSelectedRoom("All")
    setSelectedPriceRange([0, 1500])
    setSortBy("featured")
    setShowInStock(false)
    setShowDiscount(false)
    setShowNew(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      {/* Hero Section with Background Beams */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-1">
        <Image
          src="/products.jpeg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
          
        />
      </div>
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div ref={headerRef} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta via-cyan to-purple-600">
            Shop Our Collection
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
            Discover premium interior design products to transform your space
            </p>
            
          </motion.div>
        </div>
      </section>
     

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Search and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border-gray-300"
            />
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="hidden md:block">
              <p className="text-sm text-gray-500">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            <div className="w-full md:w-auto">
              <Select value={sortBy} onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Filter Button */}
            <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="md:hidden flex items-center gap-2"
                  onClick={() => setIsMobileFilterOpen(true)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                  <SheetDescription>Refine your product search</SheetDescription>
                </SheetHeader>

                {/* Mobile Filters */}
                <div className="py-4 space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant={selectedCategory === category ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedCategory === category
                              ? "bg-magenta hover:bg-magenta/90"
                              : "border-gray-300 text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Rooms */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Rooms</h3>
                    <div className="flex flex-wrap gap-2">
                      {rooms.map((room) => (
                        <Badge
                          key={room}
                          variant={selectedRoom === room ? "default" : "outline"}
                          className={`cursor-pointer ${
                            selectedRoom === room
                              ? "bg-cyan hover:bg-cyan/90"
                              : "border-gray-300 text-gray-700 hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedRoom(room)}
                        >
                          {room}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Price Range</h3>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 1500]}
                        max={1500}
                        step={10}
                        value={selectedPriceRange}
                        onValueChange={setSelectedPriceRange}
                        className="mb-6"
                      />
                      <div className="flex items-center justify-between">
                        <p className="text-sm">₹{selectedPriceRange[0]}</p>
                        <p className="text-sm">₹{selectedPriceRange[1]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Filters */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Additional Filters</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Checkbox
                          id="in-stock-mobile"
                          checked={showInStock}
                          onCheckedChange={(checked) => setShowInStock(!!checked)}
                        />
                        <Label htmlFor="in-stock-mobile" className="ml-2">
                          In Stock Only
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox
                          id="discount-mobile"
                          checked={showDiscount}
                          onCheckedChange={(checked) => setShowDiscount(!!checked)}
                        />
                        <Label htmlFor="discount-mobile" className="ml-2">
                          On Sale
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox
                          id="new-mobile"
                          checked={showNew}
                          onCheckedChange={(checked) => setShowNew(!!checked)}
                        />
                        <Label htmlFor="new-mobile" className="ml-2">
                          New Arrivals
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <SheetFooter>
                  <Button
                    variant="outline"
                    onClick={() => {
                      resetFilters()
                      setIsMobileFilterOpen(false)
                    }}
                    className="w-full"
                  >
                    Reset Filters
                  </Button>
                  <Button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="w-full bg-magenta hover:bg-magenta/90"
                  >
                    Apply Filters
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={resetFilters} className="text-gray-500 hover:text-gray-700">
                  <X className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3 text-gray-700">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedCategory === category
                          ? "bg-magenta hover:bg-magenta/90"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Rooms */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3 text-gray-700">Rooms</h3>
                <div className="flex flex-wrap gap-2">
                  {rooms.map((room) => (
                    <Badge
                      key={room}
                      variant={selectedRoom === room ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedRoom === room
                          ? "bg-cyan hover:bg-cyan/90"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedRoom(room)}
                    >
                      {room}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3 text-gray-700">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 1500]}
                    max={1500}
                    step={10}
                    value={selectedPriceRange}
                    onValueChange={setSelectedPriceRange}
                    className="mb-6"
                  />
                  <div className="flex items-center justify-between">
                    <p className="text-sm">₹{selectedPriceRange[0]}</p>
                    <p className="text-sm">₹{selectedPriceRange[1]}</p>
                  </div>
                </div>
              </div>

              {/* Additional Filters */}
              <div>
                <h3 className="text-sm font-medium mb-3 text-gray-700">Additional Filters</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Checkbox
                      id="in-stock"
                      checked={showInStock}
                      onCheckedChange={(checked) => setShowInStock(!!checked)}
                    />
                    <Label htmlFor="in-stock" className="ml-2 text-sm">
                      In Stock Only
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="discount"
                      checked={showDiscount}
                      onCheckedChange={(checked) => setShowDiscount(!!checked)}
                    />
                    <Label htmlFor="discount" className="ml-2 text-sm">
                      On Sale
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="new" checked={showNew} onCheckedChange={(checked) => setShowNew(!!checked)} />
                    <Label htmlFor="new" className="ml-2 text-sm">
                      New Arrivals
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {Array.from({ length: 8 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))}
                </motion.div>
              ) : filteredProducts.length > 0 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                if (currentPage > 1) setCurrentPage(currentPage - 1)
                              }}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>

                          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                            // Show first page, last page, current page, and pages around current
                            if (
                              page === 1 ||
                              page === totalPages ||
                              (page >= currentPage - 1 && page <= currentPage + 1)
                            ) {
                              return (
                                <PaginationItem key={page}>
                                  <PaginationLink
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      setCurrentPage(page)
                                    }}
                                    isActive={page === currentPage}
                                  >
                                    {page}
                                  </PaginationLink>
                                </PaginationItem>
                              )
                            }

                            // Show ellipsis for skipped pages
                            if (page === 2 || page === totalPages - 1) {
                              return (
                                <PaginationItem key={page}>
                                  <PaginationEllipsis />
                                </PaginationItem>
                              )
                            }

                            return null
                          })}

                          <PaginationItem>
                            <PaginationNext
                              href="#"
                              onClick={(e) => {
                                e.preventDefault()
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                              }}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-16 bg-white rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters or search term</p>
                  <Button onClick={resetFilters} className="bg-magenta hover:bg-magenta/90">
                    Reset Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
