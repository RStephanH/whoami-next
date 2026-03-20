import { projects } from "@/lib/data"

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
          Hands-on projects across network engineering, Linux systems, and web development.
        </p>
      </div>

      {/* Liste des projets */}
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent transition-all"
          >
            <div className="flex items-start justify-between gap-4">

              {/* Numéro + titre */}
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-muted mt-1 w-5 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Lien externe (si disponible) */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-mono text-muted hover:text-accent transition-colors mt-1"
                >
                  {"↗"}
                </a>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pl-9">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs bg-accent-light border border-accent/20 text-accent rounded-md font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
