"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { LampContainer } from "@/components/ui/lamp"
import { GithubGradientButton } from "@/components/ui/github-gradient-button"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import RippleEffect from "@/components/ui/img-ripple-effect"


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
          <section className="relative py-20 bg-gray-50 overflow-hidden h-96">
      {/* Background Image */}
      <div className="absolute inset-0 -z-1">
        <Image
          src="/contact-dark.jpg"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 absolute z-2">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-magenta to-cyan">
            Get in Touch
          </h1>
          <p className="text-xl text-white mb-8">
            Have a project in mind or want to learn more about our services? We'd love to hear from you!
          </p>
        </div>
      </div>
          </section>


      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full px-6 bg-magenta hover:bg-magenta/90 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-center">
                    <GithubGradientButton type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </GithubGradientButton>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-magenta/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-magenta" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <a href="mailto:creativeinteriorssatna@gmail.com" className="text-magenta hover:underline">
                    creativeinteriorssatna@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <a href="tel:07672356032" className="text-cyan hover:underline">
                    07672-356032
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-lime/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-lime" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600">Khermai Road G.D Tower Shop No. 1, Satna: 485001, Madhya Pradesh</p>
                  </div>
                </div>
              </div>

              
              

            </div>
          </div>
        </div>
      </section>

      <div className=" w-full h-full">
      <RippleEffect/>
      </div>

      {/* Office Locations */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop"
                  alt="New York Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">New York</h3>
                <p className="text-gray-600 mb-4">123 Fifth Avenue, New York, NY 10010</p>
                <Button variant="outline" className="w-full border-magenta text-magenta hover:bg-magenta/5">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
                  alt="London Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">London</h3>
                <p className="text-gray-600 mb-4">45 Oxford Street, London, W1D 2DZ</p>
                <Button variant="outline" className="w-full border-cyan text-cyan hover:bg-cyan/5">
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1535139262971-c51845709a48?q=80&w=2070&auto=format&fit=crop"
                  alt="Tokyo Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Tokyo</h3>
                <p className="text-gray-600 mb-4">2-1-1 Nihonbashi, Chuo-ku, Tokyo 103-0027</p>
                <Button variant="outline" className="w-full border-lime text-lime hover:bg-lime/5">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <LampContainer>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-gray-600">Answers to common questions about our services and process</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  What is your typical process for new projects?
                </h3>
                <p className="text-gray-600">
                  Our process typically begins with an initial consultation to understand your needs and goals. From
                  there, we create a project plan, develop concept designs, refine based on your feedback, and then
                  implement the final design. Throughout the process, we maintain clear communication and ensure your
                  vision is brought to life.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  How long does a typical project take to complete?
                </h3>
                <p className="text-gray-600">
                  Project timelines vary depending on scope and complexity. A residential room redesign might take 4-8
                  weeks, while a complete home or commercial project can take 3-6 months or more. We'll provide a
                  detailed timeline during our initial consultation based on your specific project requirements.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Do you work with clients remotely?</h3>
                <p className="text-gray-600">
                  Yes, we offer both in-person and remote design services. With our virtual design process, we can work
                  with clients anywhere in the world. We use video conferencing, 3D visualization tools, and digital
                  communication to ensure a seamless experience regardless of location.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  What types of projects do you typically work on?
                </h3>
                <p className="text-gray-600">
                  We work on a diverse range of projects including residential homes, commercial spaces, hospitality
                  venues, retail environments, and offices. Our portfolio includes everything from single-room redesigns
                  to complete property transformations. We specialize in creating spaces that are both beautiful and
                  functional.
                </p>
              </motion.div>
            </div>
          </div>
        </LampContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-magenta to-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life with cutting-edge design and exceptional craftsmanship
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-white text-magenta hover:bg-white/90">
            <Link href = "#top">Contact</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
