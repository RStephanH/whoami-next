import { siteConfig } from "@/lib/data"

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">

      {/* Section header */}
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-xs font-mono text-accent tracking-widest uppercase">
          04 / Contact
        </span>
        <h2 className="text-3xl font-bold text-ink">
          {"Let's work together"}
        </h2>
        <p className="text-muted max-w-lg">
          Open to opportunities in network engineering, sysadmin roles, and junior dev positions.
          Feel free to reach out.
        </p>
      </div>

      {/* Card contact */}
      <div className="bg-card border border-border rounded-xl p-8 flex flex-col gap-6">

        {/* Email */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-mono text-muted uppercase tracking-widest">
            Email
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-lg font-medium text-ink hover:text-accent transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Liens */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-muted uppercase tracking-widest">
              GitHub
            </span>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-accent transition-colors font-mono"
            >
              {"github.com ↗"}
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-muted uppercase tracking-widest">
              LinkedIn
            </span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-accent transition-colors font-mono"
            >
              {"linkedin.com ↗"}
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-muted uppercase tracking-widest">
              Location
            </span>
            <span className="text-sm text-ink font-mono">
              {siteConfig.location}
            </span>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Disponibilité */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
          <span className="text-sm text-muted">
            Currently available for freelance and full-time opportunities
          </span>
        </div>

      </div>

    </section>
  )
}
