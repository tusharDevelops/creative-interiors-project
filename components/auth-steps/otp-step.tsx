"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

interface OtpStepProps {
  email: string
  onSubmit: (otp: string) => Promise<void>
}

export function OtpStep({ email, onSubmit }: OtpStepProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    if (timeLeft === 0) return
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    setError("")

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const otpValue = otp.join("")

    if (otpValue.length !== 6) {
      setError("Please enter a valid 6-digit OTP")
      return
    }

    setLoading(true)
    try {
      await onSubmit(otpValue)
    } catch (err) {
      setError("Invalid OTP. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Verify OTP</h1>
        <p className="text-base text-white sm:text-lg ">
          We've sent a code to <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-magenta via-cyan to-lime break-all">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
        <div className="flex gap-3 sm:gap-2.5 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              placeholder="0"
              disabled={loading}
              className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl font-bold border-2 border-slate-200 rounded-xl focus:border-[#ff0099] focus:ring-2 focus:ring-[#ff0099]/10 focus:outline-none transition-all duration-200 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
            />
          ))}
        </div>

        {error && <p className="text-center text-sm font-medium text-red-600">{error}</p>}

        <div className="text-center text-sm">
          {timeLeft > 0 ? (
            <p className="text-slate-600">
              Resend code in <span className="font-bold text-[#ff0099]">{timeLeft}s</span>
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setTimeLeft(60)}
              className="font-bold text-[#ff0099] hover:text-[#e60088] transition-colors"
            >
              Resend OTP
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={loading || otp.some((d) => !d)}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-[#ff0099] via-[#ff0099] to-[#ff0099] hover:shadow-lg hover:shadow-[#ff0099]/30 hover:from-[#e60088] hover:to-[#e60088] text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed text-base"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Verifying...</span>
            </>
          ) : (
            <span>Verify OTP</span>
          )}
        </button>
      </form>
    </div>
  )
}
