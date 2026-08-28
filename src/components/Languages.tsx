import { languages } from "@/lib/data"

export default function Languages() {
  return (
    <section id="languages" className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center gap-6 flex-wrap">
        <span className="text-xs font-mono text-accent tracking-widest uppercase shrink-0">
          Languages
        </span>
        <div className="flex flex-wrap gap-3">
          {languages.map((lang) => (
            <div
              key={lang.language}
              className="bg-card border border-border rounded-lg px-3 py-1.5 flex items-baseline gap-2"
            >
              <span className="text-sm font-semibold text-ink">{lang.language}</span>
              <span className="text-xs text-muted">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
