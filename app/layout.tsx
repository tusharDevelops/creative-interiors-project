import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Creative Interiors | Premium Interior & Exterior Design Solutions",
  description:
    "Transform your space with Creative Interiors - offering premium interior and exterior design solutions for homes, offices, and commercial spaces.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/favicon_io/favicon.ico" />
        
        {/* Apple Touch Icon (optional) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />

        {/* Web Manifest */}
        <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'