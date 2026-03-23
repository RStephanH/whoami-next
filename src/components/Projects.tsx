// src/components/Projects.tsx
import { projects } from "@/lib/data"

const statusLabel: Record<string, string> = {
  live: "Live",
  documented: "Documented",
  wip: "In progress",
}

const statusStyle: Record<string, string> = {
  live: "bg-accent-light border-accent/20 text-accent",
  documented: "bg-card border-border text-muted",
  wip: "bg-amber-50 border-amber-200 text-amber-700",
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">

      {/* Section header */}
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-xs font-mono text-accent tracking-widest uppercase">
          03 / Projects
        </span>
        <h2 className="text-3xl font-bold text-ink">
          Things I have built
        </h2>
        <p className="text-muted max-w-lg">
          Hands-on projects across network engineering, security, and software development.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent transition-all"
          >
            {/* Ligne du haut : numéro + titre + badge status */}
            <div className="flex items-start gap-4">
              <span className="text-xs font-mono text-muted mt-1 w-5 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 text-xs font-mono border rounded-full ${statusStyle[project.status] ?? statusStyle.documented}`}
                  >
                    {statusLabel[project.status] ?? project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-accent-light border border-accent/20 text-accent rounded-md font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Liens GitHub — seulement si le tableau n'est pas vide */}
                {project.links.length > 0 && (
                  <div className="flex items-center gap-1 pt-1 flex-wrap">
                    <span className="text-xs text-muted font-mono mr-2">
                      Code:
                    </span>
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono border border-border text-muted rounded-lg hover:border-accent hover:text-accent transition-colors"
                      >
                        {/* Icône GitHub SVG */}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
