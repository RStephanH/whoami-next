import { skills } from "@/lib/data"

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20">

      {/* Section header */}
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-xs font-mono text-accent tracking-widest uppercase">
          02 / Skills
        </span>
        <h2 className="text-3xl font-bold text-ink">
          What I work with
        </h2>
        <p className="text-muted max-w-lg">
          A mix of network engineering fundamentals and growing development skills.
        </p>
      </div>

      {/* Grid de catégories */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent transition-colors"
          >
            {/* Nom de la catégorie */}
            <h3 className="text-sm font-mono font-medium text-accent tracking-wide">
              {group.category}
            </h3>

            {/* Tags des compétences */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs bg-bg border border-border text-muted rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

