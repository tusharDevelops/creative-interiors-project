import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import PageWrapper from "@/components/layout/pageWrapper"

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
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* SEO */}
  <meta name="description" content="Transform your space with Creative Interiors - offering premium interior and exterior design solutions for homes, offices, and commercial spaces." />
  <meta name="author" content="Creative Interiors" />
  <meta name="theme-color" content="#ffffff" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="robots" content="index, follow" />
  <meta name="apple-mobile-web-app-title" content="Creative Interiors" />

  {/* Favicon */}
  <link rel="icon" href="/images/favicon_io/favicon.ico" type="image/x-icon" />
  <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon_io/favicon-96x96.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
  <link rel="manifest" href="/images/favicon_io/site.webmanifest" />

  {/* Optional SVG Favicon */}
  <link rel="icon" type="image/svg+xml" href="/images/favicon_io/favicon.svg" />

  {/* Open Graph (Facebook / LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Creative Interiors | Premium Interior & Exterior Design Solutions" />
  <meta property="og:description" content="Transform your space with premium interior and exterior design for homes, offices & commercial spaces." />
  <meta property="og:url" content="https://www.creativeinteriorssatna.com" />
  <meta property="og:image" content="https://www.creativeinteriorssatna.com/images/og-cover.png" />

  {/* Twitter / X */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Creative Interiors | Premium Interior & Exterior Design Solutions" />
  <meta name="twitter:description" content="Transform your space with premium interior and exterior design for homes, offices & commercial spaces." />
  <meta name="twitter:image" content="https://www.creativeinteriorssatna.com/images/og-cover.png" />
</head>

<body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          
          <PageWrapper>
          
          <Header />
          {children}
          <Footer />
          
          {/* Add any additional components or elements here */}
          </PageWrapper> {/* Wrap children */}
         
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'



