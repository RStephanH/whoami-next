import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Stephan Hernandez — Systems & Network Engineer",
  description: "Portfolio of Stephan Hernandez, Systems & Network Engineer based in Madagascar.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
