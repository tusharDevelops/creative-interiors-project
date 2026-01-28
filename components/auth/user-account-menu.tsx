"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Package,
  ShoppingCart,
  LogOut,
  Settings,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"

interface UserMenuProps {
  user: {
    email: string
    name?: string
    phone?: string
    onBoard?: boolean
  }
  onLogout: () => void
  isScrolled: boolean
}

export function UserAccountMenu({ user, onLogout, isScrolled }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  console.log("UserAccountMenu user:", user)  
  // 🔐 Safe fallbacks
  const displayName = user.name || "User"
  const avatarLetter = (user.name || user.email).charAt(0).toUpperCase()

  const menuItems = [
    { icon: User, label: "My Account", href: "/", color: "text-[#ff0099]" },
    { icon: Package, label: "My Orders", href: "/orders", color: "text-[#00e5ff]" },
    //{ icon: Heart, label: "Wishlist", href: "#", color: "text-red-500" },
    { icon: ShoppingCart, label: "Cart", href: "/cart", color: "text-[#00c853]" },
    { icon: Settings, label: "Settings", href: "/", color: "text-slate-600" },
  ]

  return (
    <div className="relative">
      {/* ===== Trigger Button ===== */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 sm:px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-200"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#ff0099] to-[#00e5ff] flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
          {avatarLetter}
        </div>

        <div className="hidden sm:flex flex-col items-start">
          <span
            className={`text-xs font-semibold leading-none ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {displayName}
          </span>
          <span
            className={`text-xs leading-none truncate max-w-xs ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {user.email}
          </span>
        </div>

        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* ===== Dropdown ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 md:hidden bg-black/20"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden z-50"
            >
              {/* ===== Profile Header ===== */}
              <div className="p-4 sm:p-5 bg-white border-b">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#ff0099] to-[#00e5ff] flex items-center justify-center text-white font-bold text-lg">
                    {avatarLetter}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 truncate">
                      {displayName}
                    </p>
                    <p className="text-xs text-slate-600 truncate">
                      {user.email}
                    </p>
                    {user.phone && (
                      <p className="text-xs text-slate-500">{user.phone}</p>
                    )}
                    {user.onBoard === false && (
                      <p className="text-xs text-yellow-600 mt-1">
                        Profile incomplete
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* ===== Menu Items ===== */}
              <div className="p-2 bg-white space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link href={item.href} key={item.label}> 
        <motion.button
          // 2. You can remove the key from here
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(false)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-slate-900 text-sm font-medium"
        >
          <Icon className={`w-5 h-5 ${item.color}`} />
          <span className="flex-1 text-left">{item.label}</span>
        </motion.button>
      </Link>
                  )
                })}
              </div>

              {/* ===== Logout ===== */}
              <div className="p-2 bg-white border-t">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    onLogout()
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-600 text-sm font-medium"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
