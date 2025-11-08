"use client"

import type React from "react"
import { useState } from "react"
import { Loader2 } from "lucide-react"

interface EmailStepProps {
  onSubmit: (email: string) => Promise<void>
}

export function EmailStep({ onSubmit }: EmailStepProps) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setLoading(true)
    try {
      await onSubmit(email)
    } catch (err) {
      setError("Failed to send OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Welcome</h1>
        <p className="text-base sm:text-lg  text-transparent bg-clip-text bg-gradient-to-r from-magenta via-cyan to-lime">Sign in to Creative Interiors</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError("")
            }}
            placeholder="you@example.com"
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-[#ff0099] focus:ring-2 focus:ring-[#ff0099]/10 focus:outline-none transition-all duration-200 text-slate-900 placeholder-slate-400 text-base font-medium bg-white"
            disabled={loading}
            autoComplete="email"
          />
          {error && <p className="text-sm font-medium text-red-600">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-[#ff0099] via-[#ff0099] to-[#ff0099] hover:shadow-lg hover:shadow-[#ff0099]/30 hover:from-[#e60088] hover:to-[#e60088] text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed text-base"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending OTP...</span>
            </>
          ) : (
            <span>Send OTP</span>
          )}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500">We'll send you a one-time password to verify your email</p>
    </div>
  )
}
