"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { EmailStep } from "../auth-steps/email-step"
import { OtpStep } from "../auth-steps/otp-step"
import { RegisterStep } from "../auth-steps/register-step"
import { SuccessStep } from "../auth-steps/success-step"
import { X } from "lucide-react"
import { useDispatch } from "react-redux"
import { sendOtp, verifyOtp, onboardUser } from "@/services/operations/authAPI"


interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [step, setStep] = useState<"email" | "otp" | "register" | "success">("email")
  const [email, setEmail] = useState("")
  const [isNewUser, setIsNewUser] = useState(false)
  const [userData, setUserData] = useState<any>(null)
  const dispatch = useDispatch<any>()


  useEffect(() => {
    if (!isOpen) {
      setStep("email")
      setEmail("")
      setIsNewUser(false)
      setUserData(null)
    }
  }, [isOpen])

  const handleEmailSubmit = async (emailValue: string): Promise<void> => {
  setEmail(emailValue)
  await dispatch(
    sendOtp(emailValue, () => {
      setStep("otp")
    })
  )
}



  const handleOtpSubmit = async (otp: string): Promise<void> => {
  await dispatch(
    verifyOtp(email, otp, (nextRoute: string) => {
      if (nextRoute === "/onboarding") {
        setIsNewUser(true)
        setStep("register")
      } else {
        setIsNewUser(false)
        setStep("success")
      }
    })
  )
}



 const handleRegisterSubmit = async (
  data: { name: string; phone: string }
): Promise<void> => {
  await dispatch(
    onboardUser(data.name, data.phone, () => {
      setUserData({ email, ...data })
      setStep("success")
    })
  )
}



  const handleSuccess = () => {
  onClose()
}


  const handleTryAnother = () => {
    setStep("email")
    setEmail("")
    setIsNewUser(false)
    setUserData(null)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-lg z-40"
            style={{
              backdropFilter: "blur(12px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl">
              <div
                className="relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/98 border border-white/30 shadow-2xl"
                style={{
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.5)",
                }}
              >
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10 p-2 hover:bg-red-50/80 rounded-full transition-all duration-200 text-slate-500 hover:text-red-600 hover:scale-110 active:scale-95"
                  aria-label="Close modal"
                  type="button"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Background gradient accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff0099]/3 via-transparent to-[#00c853]/3 pointer-events-none" />

                <div className="relative p-6 sm:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {step === "email" && <EmailStep onSubmit={handleEmailSubmit} />}
                      {step === "otp" && <OtpStep email={email} onSubmit={handleOtpSubmit} />}
                      {step === "register" && <RegisterStep onSubmit={handleRegisterSubmit} />}
                      {step === "success" && (
                        <SuccessStep
                          userName={userData?.name}
                          userExists={!isNewUser}
                          onReset={handleTryAnother}
                          onContinue={handleSuccess}
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
