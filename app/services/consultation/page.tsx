"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { TracingBeam } from "@/components/ui/tracing-beam"
import { Spotlight } from "@/components/ui/spotlight"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Home,
  Mail,
  MessageSquare,
  Phone,
  User,
  CheckCircle,
  Star,
} from "lucide-react"

// Consultation process steps
const consultationSteps = [
  {
    number: 1,
    title: "Get in Touch",
    description: "You can contact us via a call or email or simply fill the enquiry form on this website.",
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    color: "bg-amber-500",
  },
  {
    number: 2,
    title: "Site Visit",
    description: "We get on a call or visit your site to get to know you, your space and your requirements.",
    icon: <Home className="h-8 w-8 text-white" />,
    color: "bg-cyan",
  },
  {
    number: 3,
    title: "Budgets and More",
    description: "Detailed discussion about style of work, purpose and budget in mind.",
    icon: <Check className="h-8 w-8 text-white" />,
    color: "bg-magenta",
  },
  {
    number: 4,
    title: "Presenting Options",
    description:
      "We show you a variety of design options to choose from and advise you helping you pick the best option.",
    icon: <Check className="h-8 w-8 text-white" />,
    color: "bg-amber-500",
  },
  {
    number: 5,
    title: "Make a Choice",
    description: "You choose what you like the most and place an order.",
    icon: <Check className="h-8 w-8 text-white" />,
    color: "bg-cyan",
  },
  {
    number: 6,
    title: "Work in Progress",
    description: "Design work and planning begins.",
    icon: <Check className="h-8 w-8 text-white" />,
    color: "bg-magenta",
  },
  {
    number: 7,
    title: "And It's Ready",
    description: "Your design is ready, we take your feedback for any changes and implement the work in your space.",
    icon: <Check className="h-8 w-8 text-white" />,
    color: "bg-amber-500",
  },
]

// Consultation types
const consultationTypes = [
  {
    id: "interior",
    title: "Interior Design",
    description: "For residential spaces including living rooms, bedrooms, kitchens, etc.",
    duration: "60 min",
    price: "$150",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: "exterior",
    title: "Exterior Design",
    description: "For outdoor spaces, facades, landscapes, and gardens.",
    duration: "60 min",
    price: "$150",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "commercial",
    title: "Commercial Design",
    description: "For offices, retail spaces, restaurants, and other commercial properties.",
    duration: "90 min",
    price: "$250",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "renovation",
    title: "Renovation Planning",
    description: "For planning complete renovations and remodeling projects.",
    duration: "90 min",
    price: "$250",
    image: "https://images.unsplash.com/photo-1600607687644-c7f34bc91088?q=80&w=2070&auto=format&fit=crop",
  },
]

// Available time slots
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "The consultation was incredibly helpful. The designer understood my vision immediately and provided practical solutions that fit my budget.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    content:
      "Their commercial design consultation transformed how I thought about my restaurant space. The ideas were innovative yet practical.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Office Manager",
    content:
      "We needed help redesigning our office space for better workflow. The consultation provided exactly what we needed and more.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    rating: 4,
  },
]

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState("process")
  const [selectedType, setSelectedType] = useState("")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <main className="min-h-screen pb-16 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <BackgroundBeams className="absolute inset-0 z-10" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <Image
                  src="/consultation.jpg"
                  alt="Background"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                  
                />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-block"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-white text-sm font-medium">
                Expert Design Guidance
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Design Consultation
            </motion.h1>
            <div className="mb-8">
              <TextGenerateEffect
                words="Start your design journey with a personalized consultation. Our experts will guide you through the process and help bring your vision to life."
                className="text-lg md:text-xl text-gray-200"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-full px-8 shadow-lg"
                onClick={() => {
                  document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })
                  setActiveTab("booking")
                }}
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className=" hover:bg-white/10 rounded-full px-8"
                onClick={() => {
                  document.getElementById("process-section")?.scrollIntoView({ behavior: "smooth" })
                  setActiveTab("process")
                }}
              >
                Learn About Our Process
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white" id="main-section">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="process" value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="process">Our Consultation Process</TabsTrigger>
              <TabsTrigger value="booking" id="booking-tab">
                Book a Consultation
              </TabsTrigger>
            </TabsList>

            {/* Process Tab */}
            <TabsContent value="process" id="process-section">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 7-Step Consultation Process</h2>
                <p className="text-gray-600 text-lg">
                  We follow a comprehensive approach to ensure your design needs are understood and met with excellence.
                </p>
              </div>

              <TracingBeam className="px-6">
                <div className="max-w-4xl mx-auto">
                  {consultationSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className="mb-16 last:mb-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className={cn("md:col-span-3", index % 2 === 1 ? "md:order-2" : "")}>
                          <div
                            className={cn(
                              "rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg",
                              step.color,
                            )}
                          >
                            {step.icon}
                          </div>
                          <h3 className="text-2xl font-bold mb-2">
                            {step.number}. {step.title}
                          </h3>
                        </div>
                        <div className={cn("md:col-span-9", index % 2 === 1 ? "md:order-1" : "")}>
                          <Card className="border-none shadow-lg overflow-hidden">
                            <CardContent className="p-6">
                              <p className="text-gray-600 text-lg">{step.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TracingBeam>

              <div className="text-center mt-12">
                <Button
                  className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-full px-8 shadow-lg"
                  onClick={() => {
                    setActiveTab("booking")
                    document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Book Your Consultation Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            {/* Booking Tab */}
            <TabsContent value="booking" id="booking-section">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Consultation</h2>
                <p className="text-gray-600 text-lg">
                  Choose the type of consultation you need and schedule a time that works for you.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl shadow-lg"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Consultation Booked Successfully!</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Thank you for booking a consultation with us. We've sent a confirmation email with all the details.
                    Our team will contact you shortly to confirm your appointment.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-full px-8"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Book Another Consultation
                  </Button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Consultation Types */}
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold mb-6">Select Consultation Type</h3>
                    <RadioGroup value={selectedType} onValueChange={setSelectedType} className="space-y-4">
                      {consultationTypes.map((type) => (
                        <div key={type.id} className="flex">
                          <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                          <Label
                            htmlFor={type.id}
                            className="flex flex-col w-full rounded-lg border border-gray-200 p-4 cursor-pointer hover:bg-gray-50 peer-data-[state=checked]:border-amber-500 peer-data-[state=checked]:bg-amber-50 transition-all"
                          >
                            <div className="flex justify-between">
                              <span className="font-medium">{type.title}</span>
                              <span className="font-bold text-amber-500">{type.price}</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{type.description}</p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{type.duration}</span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    {/* Testimonials */}
                    <div className="mt-8 bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-4">What Our Clients Say</h3>
                      <div className="relative h-[200px]">
                        <AnimatePresence mode="wait">
                          {testimonials.map(
                            (testimonial, index) =>
                              index === currentTestimonial && (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ duration: 0.5 }}
                                  className="absolute inset-0"
                                >
                                  <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                      <Image
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                      />
                                    </div>
                                    <div>
                                      <p className="font-medium">{testimonial.name}</p>
                                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                  </div>
                                  <p className="text-gray-600 italic mb-3">"{testimonial.content}"</p>
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                          i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                </motion.div>
                              ),
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="flex justify-center mt-4">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full mx-1 ${
                              index === currentTestimonial ? "bg-amber-500" : "bg-gray-300"
                            }`}
                            onClick={() => setCurrentTestimonial(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div className="lg:col-span-2">
                    <Card className="border-none shadow-xl overflow-hidden">
                      <CardContent className="p-6 md:p-8">
                        <h3 className="text-xl font-bold mb-6">Your Information</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input id="name" placeholder="John Doe" className="pl-10" required />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                  id="email"
                                  type="email"
                                  placeholder="john@example.com"
                                  className="pl-10"
                                  required
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input id="phone" placeholder="+1 (555) 000-0000" className="pl-10" required />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="date">Preferred Date</Label>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input id="date" type="date" className="pl-10" required />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>Preferred Time</Label>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                              {timeSlots.map((time) => (
                                <Button
                                  key={time}
                                  type="button"
                                  variant="outline"
                                  className="data-[state=active]:bg-amber-500/10 data-[state=active]:border-amber-500 data-[state=active]:text-amber-500"
                                  data-state={time === "10:00 AM" ? "active" : "inactive"}
                                >
                                  {time}
                                </Button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Tell us about your project</Label>
                            <Textarea
                              id="message"
                              placeholder="Please share details about your space, design preferences, and any specific requirements."
                              rows={4}
                              required
                            />
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white rounded-full py-6 text-lg font-medium"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Processing...
                              </span>
                            ) : (
                              <>
                                Schedule Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </>
                            )}
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Find answers to common questions about our consultation services.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical consultation last?",
                answer:
                  "Our standard consultations last 60-90 minutes depending on the complexity of your project. This gives us enough time to understand your needs and provide initial recommendations.",
              },
              {
                question: "Do I need to prepare anything before the consultation?",
                answer:
                  "It's helpful to gather inspiration images, have a general idea of your budget, and think about your goals for the space. If you have floor plans or measurements, those are also useful but not required.",
              },
              {
                question: "Can I book a consultation for multiple spaces?",
                answer:
                  "Yes, you can book a consultation for multiple spaces. Just let us know in the project description field when booking, and we may recommend a longer consultation time if needed.",
              },
              {
                question: "What happens after the consultation?",
                answer:
                  "After the consultation, we'll provide you with a summary of our discussion and recommendations. If you decide to move forward, we'll create a detailed proposal for your project including timeline and pricing.",
              },
              {
                question: "Is the consultation fee applied to my project if I hire you?",
                answer:
                  "Yes, if you decide to proceed with our services after the consultation, the consultation fee will be credited toward your project.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-400 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
            <p className="text-white/80 text-lg mb-8">
              Book a consultation today and take the first step towards creating your dream space.
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-500 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg"
              onClick={() => {
                setActiveTab("booking")
                document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Book Your Consultation Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
