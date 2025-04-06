import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="relative h-12 w-48">
                <Image
                  src="/images/logo3.png"
                  alt="Creative Interiors"
                  width={192}
                  height={48}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 max-w-xs">
                Creative Interiors provides premium interior and exterior design solutions for homes, offices, and
                commercial spaces.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-magenta transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-magenta transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-magenta transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-magenta transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-magenta transition-colors">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-magenta transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-magenta transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-magenta transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-400 hover:text-magenta transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-magenta transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-magenta transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-magenta transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
              <li className="flex items-start">
              <MapPin className="h-5 w-5 text-magenta mr-3 mt-0.5 flex-shrink-0" />
              <a
                href="https://maps.app.goo.gl/7EkepoNs76ZrtkUj7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline"
              >
                Khermai Road G.D Tower Shop No. 1, Satna: 485001, Madhya Pradesh
              </a>
            </li>

                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-magenta mr-3 flex-shrink-0" />
                  <span className="text-gray-400">07672-356032, +91-9977193974, +91-9425841663, +91-8349630453 </span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-magenta mr-3 flex-shrink-0" />
                  <span className="text-gray-400">creativeinteriorssatna@gmail.com</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-3">Business Hours</h4>
                <p className="text-gray-400 text-sm">
                  Monday - Saturday: 9:00 AM - 9:00 PM
                  <br />
                  Sunday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
              <form className="space-y-3">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                  />
                  <Button type="submit" className="rounded-l-none bg-magenta hover:bg-magenta/90">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Creative Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-magenta text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-magenta text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-magenta text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

