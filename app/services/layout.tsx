import type { ReactNode } from "react"


export default function ServicesLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <main className="w-full pb-16">{children}</main>
    </div>
  )
}
