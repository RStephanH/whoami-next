import { skills } from "@/lib/data"
import Slider from "@/components/Slider"

export default function Skills() {
  // Transform skills data to match the expected format for the slider
  const skillsForSlider = skills.map(group => ({
    category: group.category,
    items: group.items
  }));

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

      <Slider
        items={skillsForSlider}
        contentType="skills"
        delay={4000}
        showControls={true}
        showIndicators={true}
      />

    </section>
  )
}

