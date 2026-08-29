import type { Metadata } from "next"
import { Inter, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Stephan Hernandez — Systems & Security Engineer",
  description:
    "Portfolio of Stephan Hernandez, Systems & Security Engineer building AI-integrated infrastructure, based in Madagascar.",
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plexSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-ink antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
