"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Package, ShoppingCart, LogOut, Settings, Heart, ChevronDown } from "lucide-react"

interface UserMenuProps {
  user: {
    email: string
    name: string
    phone: string
  }
  onLogout: () => void
  isScrolled: boolean
}

export function UserAccountMenu({ user, onLogout, isScrolled }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      icon: User,
      label: "My Account",
      href: "#",
      color: "text-[#ff0099]",
    },
    {
      icon: Package,
      label: "My Orders",
      href: "#",
      color: "text-[#00e5ff]",
    },
    {
      icon: Heart,
      label: "Wishlist",
      href: "#",
      color: "text-red-500",
    },
    {
      icon: ShoppingCart,
      label: "Cart",
      href: "#",
      color: "text-[#00c853]",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "#",
      color: "text-slate-600",
    },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 sm:px-3 py-2 rounded-full hover:bg-white/10 transition-colors duration-200 text-white"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#ff0099] to-[#00e5ff] flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="hidden sm:flex flex-col items-start">
          <span className={`text-xs font-semibold leading-none ${isScrolled ? "text-black" : "text-white"}`}>{user.name}</span>
          <span className={`text-xs  leading-none ${isScrolled ? "text-black" : "text-white"} truncate max-w-xs`}>{user.email}</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
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
              className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden z-50 md:z-50"
              style={{
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)",
              }}
            >
              {/* Profile Header */}
              <div className="p-4 sm:p-5 bg-gradient-to-br from-white/95 to-white/90 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#ff0099] to-[#00e5ff] flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 truncate text-sm sm:text-base">{user.name}</p>
                    <p className="text-xs text-slate-600 truncate">{user.email}</p>
                    <p className="text-xs text-slate-500">{user.phone}</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-2 bg-gradient-to-b from-white/95 to-white/90 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.label}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center gap-3 px-4 py-3 sm:py-3.5 rounded-lg hover:bg-white/20 transition-colors text-slate-900 text-sm sm:text-base font-medium group"
                    >
                      <Icon className={`w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0 ${item.color}`} />
                      <span className="flex-1 text-left">{item.label}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </motion.button>
                  )
                })}
              </div>

              {/* Logout Button */}
              <div className="p-2 bg-gradient-to-b from-white/95 to-white/90 border-t border-white/10">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    onLogout()
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 sm:py-3.5 rounded-lg hover:bg-red-50 transition-colors text-red-600 text-sm sm:text-base font-medium"
                >
                  <LogOut className="w-5 h-5 flex-shrink-0" />
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
