"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User, Heart, Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Spotlight } from "@/components/ui/spotlight"

const mainNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
    children: [
      {
        title: "All Products",
        href: "/products",
        description: "Browse our complete collection of interior design products.",
      },
      {
        title: "Furniture",
        href: "/products/category/furniture",
        description: "Explore our range of premium furniture for every room.",
      },
      {
        title: "Lighting",
        href: "/products/category/lighting",
        description: "Discover lighting solutions to enhance your space.",
      },
      {
        title: "Decor",
        href: "/products/category/decor",
        description: "Find the perfect decorative accents for your home.",
      },
      {
        title: "Textiles",
        href: "/products/category/textiles",
        description: "Shop our collection of quality fabrics and textiles.",
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Interior Design",
        href: "/services/interior-design",
        description: "Professional interior design services for residential spaces.",
      },
      {
        title: "Exterior Design",
        href: "/services/exterior-design",
        description: "Specialized design solutions for outdoor environments.",
      },
      {
        title: "Commercial Design",
        href: "/services/commercial-design",
        description: "Specialized design solutions for commercial environments.",
      },
      {
        title: "Consultation",
        href: "/services/consultation",
        description: "Expert advice and guidance for your design projects.",
      },
      {
        title: "Renovation",
        href: "/services/renovation",
        description: "Complete renovation services for transforming your space.",
      },
    ],
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const [isSheetOpen, setIsSheetOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo edited  and fixedgir*/}
          <Link href="/" className="flex items-center">
            <div className="relative">
            <Image
               priority
              src={isScrolled ? "/images/logo4-min.png" : "/images/logo3-min.png"}
              alt="Creative Interiors"
              width={200}
              height={150}
              className="object-contain"
            />
          </div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "text-sm  font-medium",
                            pathname === item.href ? "text-magenta" : isScrolled ? "text-gray-800" : "text-blue",
                            isScrolled ? "hover:text-magenta" : "hover:text-magenta/90",
                          )}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.children.map((child) => (
                              <li key={child.title} className="row-span-1">
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{child.title}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {child.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center px-4 py-2 text-sm font-medium",
                          pathname === item.href ? "text-magenta" : isScrolled ? "text-gray-800" : "text-white",
                          isScrolled ? "hover:text-magenta" : "hover:text-white/90",
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={cn(
                "rounded-full",
                isScrolled
                  ? "text-gray-800 hover:text-magenta hover:bg-gray-100"
                  : "text-white hover:text-white hover:bg-white/10",
              )}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full",
                isScrolled
                  ? "text-gray-800 hover:text-magenta hover:bg-gray-100"
                  : "text-white hover:text-white hover:bg-white/10",
              )}
            >
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full relative",
                isScrolled
                  ? "text-gray-800 hover:text-magenta hover:bg-gray-100"
                  : "text-white hover:text-white hover:bg-white/10",
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-magenta text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Button>

            {/* Account */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full",
                isScrolled
                  ? "text-gray-800 hover:text-magenta hover:bg-gray-100"
                  : "text-white hover:text-white hover:bg-white/10",
              )}
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "rounded-full lg:hidden",
                    isScrolled
                      ? "text-gray-800 hover:text-magenta hover:bg-gray-100"
                      : "text-white hover:text-white hover:bg-white/10",
                  )}
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="py-4">
                    <div className="relative h-10 w-40 mb-6">
                      <Image
                        src="/images/logo4-min.png"
                        alt="Creative Interiors"
                        width={160}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <nav className="space-y-4">
                      {mainNavItems.map((item) => (
                        <div key={item.title}>
                          {item.children ? (
                             <MobileSubmenu item={item} onLinkClick={() => setIsSheetOpen(false)} />
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setIsSheetOpen(false)}
                              className={cn(
                                "block py-2 text-lg font-medium",
                                pathname === item.href ? "text-magenta" : "text-gray-800",
                              )}
                            >
                              {item.title}
                            </Link>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <div className="space-y-4">
                      <Button className="w-full bg-magenta hover:bg-magenta/90">Sign In</Button>
                      <Button variant="outline" className="w-full border-magenta text-magenta hover:bg-magenta/5">
                        Create Account
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg p-4"
          >
            <div className="container mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-4">
                <div className="flex-grow">
                  <Input
                    type="search"
                    placeholder="Search for products, categories, or inspiration..."
                    className="w-full"
                    autoFocus
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {["Modern Furniture", "Lighting", "Kitchen Design", "Office Decor", "Minimalist"].map((term) => (
                    <Button key={term} variant="outline" size="sm" className="rounded-full text-xs">
                      {term}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spotlight effect for non-scrolled state */}
      {!isScrolled && <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255,255,255,0.05)" />}
    </header>
  )
}

interface MobileSubmenuProps {
  item: {
    title: string
    href: string
    children?: {
      title: string
      href: string
      description?: string
    }[]
  }
  onLinkClick: () => void
}


function MobileSubmenu({ item, onLinkClick }: MobileSubmenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-800"
      >
        {item.title}
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "transform rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-2 space-y-2">
              {item.children?.map((child) => (
                <Link
                key={child.title}
                href={child.href}
                onClick={onLinkClick}
                className="block py-2 text-gray-600 hover:text-magenta"
              >
                {child.title}
              </Link>
              
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

