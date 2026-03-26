import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/data"

const tags = ["Linux", "Networking", "Security", "Golang", "Next.js", "Docker"]

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">

        {/* Colonne gauche — texte */}
        <div className="flex flex-col gap-5 flex-1">

          {/* Badge disponible */}
          <div className="flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-accent font-mono tracking-wide">
              Available for work
            </span>
          </div>

          {/* Nom */}
          <h1 className="text-5xl font-bold text-ink leading-tight">
            {siteConfig.fullName.split(" ")[0]}{" "}
            <span className="text-accent">
              {siteConfig.fullName.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Titre */}
          <p className="text-base text-muted">
            {siteConfig.title}
          </p>

          {/* Tagline */}
          <p className="text-muted text-base max-w-md leading-relaxed">
            {siteConfig.tagline}
          </p>

          {/* Boutons */}
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
              {"Contact me →"}
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
          </div>

        </div>

        {/* Colonne droite — photo */}
        <div className="flex justify-center md:justify-end shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">

            {/* Cadre décoratif décalé */}
            <div className="absolute inset-0 rounded-2xl border-2 border-accent translate-x-2 translate-y-2" />

            {/* Photo */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-accent-light">
              <Image
                src="/profile.jpeg"
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
