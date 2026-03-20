// src/components/Hero.tsx
import Link from "next/link"
import { siteConfig } from "@/lib/data"

const tags = ["Linux", "Networking", "Cisco", "Next.js", "Open-source"]

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-5">

      {/* Nom splitté */}
      <h1 className="text-5xl font-bold text-ink leading-tight">
        {siteConfig.fullName.split(" ")[0]}{" "}
        <span className="text-accent">
          {siteConfig.fullName.split(" ").slice(1).join(" ")}
        </span>
      </h1>

      {/* Titre + tagline sur une ligne */}
      <p className="text-base text-muted">
        {siteConfig.title}
        <span className="mx-2 text-border">—</span>
        {siteConfig.tagline}
      </p>

      {/* Bouton principal */}
      <div className="flex items-center gap-4 pt-1">
        <Link
          href="#projects"
          className="px-5 py-2.5 bg-ink text-white text-sm font-medium rounded-lg hover:bg-accent transition-all"
        >
          View my work
        </Link>
        <Link
          href="#contact"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          Contact me →
        </Link>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-2 flex-wrap pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium border border-border text-muted rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Liens sociaux */}
      <div className="flex items-center gap-6 pt-4 border-t border-border">
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-ink transition-colors font-mono"
        >
          {"GitHub ↗"}
        </a>

        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-ink transition-colors font-mono"
        >
          {"LinkedIn ↗"}
        </a>
        <span className="text-sm text-muted font-mono">
          {siteConfig.location}
        </span>
      </div >

    </section >
  )
}
