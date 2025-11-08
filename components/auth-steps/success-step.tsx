"use client"

import { CheckCircle2 } from "lucide-react"

interface SuccessStepProps {
  userName: string
  userExists: boolean
  onReset: () => void
  onContinue: () => void
}

export function SuccessStep({ userName, userExists, onReset, onContinue }: SuccessStepProps) {
  return (
    <div className="w-full space-y-7 sm:space-y-8 text-center">
      <div className="space-y-5">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#00c853]/20 rounded-full blur-xl"></div>
            <CheckCircle2 className="relative w-20 h-20 sm:w-24 sm:h-24 text-[#00c853] animate-pulse" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {userExists ? "Welcome Back!" : "Account Created!"}
          </h1>
          <p className="text-base sm:text-lg text-white/90">
            {userExists
              ? `Great to see you again, ${userName}! You're all set to continue.`
              : `Welcome to Creative Interiors, ${userName}! Your account is ready.`}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 rounded-2xl p-5 space-y-2">
        <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide">Logged In As</p>
        <p className="text-lg sm:text-xl font-bold text-slate-950 break-all">{userName}</p>
      </div>

      <div className="space-y-3 pt-2">
        <button
          onClick={onContinue}
          className="w-full py-3.5 px-4 bg-gradient-to-r from-[#ff0099] via-[#ff0099] to-[#ff0099] hover:shadow-lg hover:shadow-[#ff0099]/30 hover:from-[#e60088] hover:to-[#e60088] text-white font-bold rounded-2xl transition-all duration-300 text-base"
        >
          Continue to Dashboard
        </button>
        <button
          onClick={onReset}
          className="w-full py-3.5 px-4 border-2 border-slate-300  bg-slate-50 text-slate-900 font-bold rounded-2xl transition-all duration-300 text-base"
        >
          Try Another Account
        </button>
      </div>

      <p className="text-xs sm:text-sm text-slate-500">Your session is secure and will remain active</p>
    </div>
  )
}
