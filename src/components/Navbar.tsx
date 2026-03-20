import Link from "next/link"
import { siteConfig } from "@/lib/data"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — ton nom à gauche */}
        <span className="font-mono text-sm text-ink font-medium tracking-wide">
          {siteConfig.name}
        </span>

        {/* Liens de navigation à droite */}
        <div className="flex items-center gap-8">
          <Link href="#skills" className="text-sm text-muted hover:text-ink transition-colors">Skills</Link>
          <Link href="#projects" className="text-sm text-muted hover:text-ink transition-colors">Projects</Link>
          <Link href="#contact" className="text-sm text-muted hover:text-ink transition-colors">Contact</Link>
        </div>

      </nav>
    </header>
  )
}
