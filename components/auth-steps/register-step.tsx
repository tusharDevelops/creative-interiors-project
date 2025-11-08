"use client"

import type React from "react"
import { useState } from "react"
import { Loader2 } from "lucide-react"

interface RegisterStepProps {
  onSubmit: (data: { name: string; phone: string }) => Promise<void>
}

export function RegisterStep({ onSubmit }: RegisterStepProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: typeof errors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    try {
      await onSubmit(formData)
    } catch (err) {
      setErrors({ name: "Registration failed. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Create Account</h1>
        <p className="text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-magenta via-cyan to-lime">Tell us about yourself</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold  text-gray-300">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            disabled={loading}
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#00e5ff] focus:ring-2 focus:ring-[#00e5ff]/10 focus:outline-none transition-all duration-200 text-slate-900 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed text-base font-medium bg-white"
            autoComplete="name"
          />
          {errors.name && <p className="text-sm font-medium text-red-600">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-300">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            disabled={loading}
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#00e5ff] focus:ring-2 focus:ring-[#00e5ff]/10 focus:outline-none transition-all duration-200 text-slate-900 placeholder-slate-400 disabled:opacity-50 disabled:cursor-not-allowed text-base font-medium bg-white"
            autoComplete="tel"
          />
          {errors.phone && <p className="text-sm font-medium text-red-600">{errors.phone}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-[#00e5ff] via-[#00d4f0] to-[#00c853] hover:shadow-lg hover:shadow-[#00e5ff]/30 hover:from-[#00d4f0] hover:to-[#00b84a] text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed text-base"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Creating Account...</span>
            </>
          ) : (
            <span>Create Account</span>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500">
        Your information is secure and will be used only for your account
      </p>
    </div>
  )
}
