"use client"

import { Toaster } from "sonner"
import { ThemeProvider } from "next-themes"

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={3000}
      />

      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
      >
        {children}
      </ThemeProvider>
    </>
  )
}
