import { projects } from "@/lib/data"
import Slider from "@/components/Slider"
import { Project } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">

      {/* Section header */}
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-xs font-mono text-accent tracking-widest uppercase">
          03 / Projects
        </span>
        <h2 className="text-3xl font-bold text-ink font-display">
          Things I have built
        </h2>
        <p className="text-muted max-w-lg">
          Hands-on projects across network engineering, security, and software development.
        </p>
      </div>

      <Slider
        items={projects as Project[]}
        contentType="projects"
        delay={5000}
        showControls={true}
        showIndicators={true}
      />

    </section>
  )
}
