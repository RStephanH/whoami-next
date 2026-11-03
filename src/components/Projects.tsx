"use client"

import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { projects } from "@/lib/data"
import type { Project } from "@/lib/data"
import { useState } from "react"

const projectImages: Record<string, string> = {
  "SentryMesh Gateway - IoT Security Gateway": "/images/projects/sentrymesh-gateway.jpeg",
  "SOC Homelab - pfSense + Suricata + ELK": "/images/projects/sochomelab.jpeg",
  "Sonar Signature Classify — Rock vs Mine Classification": "/images/projects/sonar.jpeg",
}

const statusLabels: Record<Project["status"], string> = {
  live: "Live",
  wip: "In progress",
  documented: "Documented",
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const project = projects[currentIndex]
  const image = projectImages[project.title] ?? "/images/projects/default.jpeg"

  const goToProject = (index: number) => {
    setCurrentIndex((index + projects.length) % projects.length)
  }

  const previousProject = () => goToProject(currentIndex - 1)
  const nextProject = () => goToProject(currentIndex + 1)

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    if (Math.abs(info.offset.x) < 50) return
    if (info.offset.x < 0) {
      nextProject()
    } else {
      previousProject()
    }
  }

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12 flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          03 / Projects
        </span>
        <h2 className="font-display text-3xl font-bold text-ink">Things I have built</h2>
        <p className="max-w-lg text-muted">
          Hands-on projects across network engineering, security, and software development.
        </p>
      </div>

      <div className="relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={project.title}
            className="grid gap-8 rounded-xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:h-[clamp(580px,72vh,760px)] lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:gap-6"
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -16 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <header className="flex min-w-0 flex-col">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-xs uppercase tracking-wide text-muted">
                  {statusLabels[project.status]}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                {project.title}
              </h3>
            </header>

            <main className="grid min-h-0 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
              <div className="flex min-w-0 flex-col justify-center">
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                {project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-9 items-center rounded-lg border border-border px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex min-w-0 flex-col justify-center gap-5">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-bg">
                <Image
                  src={image}
                  alt={`${project.title} illustration`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                  priority={currentIndex === 0}
                />
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    Technologies
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/20 bg-accent-light px-2.5 py-1 font-mono text-xs text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </main>

            <footer className="flex items-center justify-between gap-4 border-t border-border pt-5">
              <span className="font-mono text-xs tracking-wide text-accent">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
              <div
                className="h-1 max-w-xs flex-1 overflow-hidden rounded-full bg-border"
                role="progressbar"
                aria-label="Project progress"
                aria-valuemin={1}
                aria-valuemax={projects.length}
                aria-valuenow={currentIndex + 1}
              >
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-300"
                  style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
                />
              </div>
              <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previousProject}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
              aria-label="Previous project"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextProject}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
              aria-label="Next project"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
