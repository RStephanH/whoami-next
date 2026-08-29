import { education, certifications } from "@/lib/data"

export default function Background() {
  return (
    <section id="background" className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-xs font-mono text-accent tracking-widest uppercase">
          04 / Background
        </span>
        <h2 className="text-3xl font-bold text-ink font-display">Education & Certifications</h2>
        <p className="text-muted max-w-lg">
          Formal education, industry certifications, and continuous training.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-12">
        <h3 className="text-xs font-mono text-muted tracking-wide uppercase">Education</h3>
        {education.map((entry) => (
          <div
            key={entry.degree}
            className="bg-card border border-border rounded-xl p-6 flex flex-col gap-1"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <h4 className="text-base font-semibold text-ink">{entry.degree}</h4>
              <span className="px-2 py-0.5 text-xs font-mono border border-border rounded-full text-muted shrink-0">
                {entry.period}
              </span>
            </div>
            <p className="text-sm text-muted">
              {entry.institution} - {entry.location}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-xs font-mono text-muted tracking-wide uppercase">
          Certifications & Training
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-2 hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-sm font-semibold text-ink">{cert.name}</h4>
                <span
                  className={`px-2 py-0.5 text-xs font-mono border rounded-full ${
                    cert.type === "certification"
                      ? "bg-accent-light border-accent/20 text-accent"
                      : "bg-bg border-border text-muted"
                  }`}
                >
                  {cert.type === "certification" ? "Certification" : "Training"}
                </span>
              </div>
              <p className="text-xs text-muted font-mono">
                {cert.issuer} · {cert.year}
              </p>
              {cert.link && (
                
                 <a href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-muted hover:text-accent transition-colors mt-1 w-fit"
                >
                  View credential
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
