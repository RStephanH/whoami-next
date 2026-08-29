"use client"
import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import type { Transition } from "framer-motion"
import { Project } from "@/lib/data"

type SlideItem = Project | { category: string; items: string[] }

interface SliderProps {
  items: SlideItem[]
  contentType: "projects" | "skills"
  delay?: number
  showControls?: boolean
  showIndicators?: boolean
}

const CARD_SPACING = 340 // px between each visible card's center — tune to taste
const MAX_VISIBLE_OFFSET = 2 // how many neighbors on each side stay mounted

export default function Slider({
  items,
  contentType,
  delay = 1800,
  showControls = true,
  showIndicators = true,
}: SliderProps) {
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (items.length <= 1 || isHovered) return
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, delay)
    return () => clearTimeout(timeout)
  }, [items.length, delay, isHovered, currentIndex])

  const goToSlide = (index: number) =>
    setCurrentIndex(((index % items.length) + items.length) % items.length)
  const nextSlide = () => items.length > 1 && goToSlide(currentIndex + 1)
  const prevSlide = () => items.length > 1 && goToSlide(currentIndex - 1)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      prevSlide()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      nextSlide()
    }
  }

  if (!items.length) {
    return <div className="text-center py-12">No items to display</div>
  }

  const transition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 300, damping: 32 }

  // Shortest circular distance from currentIndex, so the wrap-around also peeks correctly
  const wrappedOffset = (index: number) => {
    const raw = index - currentIndex
    const half = items.length / 2
    if (raw > half) return raw - items.length
    if (raw < -half) return raw + items.length
    return raw
  }

  const renderProjectSlide = (project: Project, isActive: boolean) => (
    <div
      className={`w-[min(90vw,36rem)] group bg-card border rounded-xl p-6 flex flex-col gap-4 transition-colors ${isActive ? "border-accent" : "border-border"
        }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <span
              className={`px-2 py-0.5 text-xs font-mono border rounded-full ${project.status === "live"
                  ? "bg-accent-light border-accent/20 text-accent"
                  : project.status === "documented"
                    ? "bg-card border-border text-muted"
                    : "bg-amber-50 border-amber-200 text-amber-700"
                }`}
            >
              {project.status === "live"
                ? "Live"
                : project.status === "documented"
                  ? "Documented"
                  : "In progress"}
            </span>
          </div>
          <p className="text-sm text-muted leading-relaxed">{project.description}</p>
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
          {project.links.length > 0 && (
            <div className="flex items-center gap-1 pt-1 flex-wrap">
              <span className="text-xs text-muted font-mono mr-2">Code:</span>
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isActive ? 0 : -1}
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono border border-border text-muted rounded-lg hover:border-accent hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const renderSkillSlide = (
    skillGroup: { category: string; items: string[] },
    isActive: boolean
  ) => (
    <div
      className={`w-[min(90vw,36rem)] bg-card border rounded-xl p-6 flex flex-col gap-4 transition-colors ${isActive ? "border-accent" : "border-border"
        }`}
    >
      <h3 className="text-sm font-mono font-medium text-accent tracking-wide">
        {skillGroup.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skillGroup.items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 text-xs bg-bg border border-border text-muted rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <div
      className="relative w-full overflow-hidden pt-6 pb-14"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={contentType === "projects" ? "Project highlights" : "Skill groups"}
    >
      <div className="relative flex items-center justify-center min-h-[380px]">
        {items.map((item, index) => {
          const offset = wrappedOffset(index)
          const isActive = offset === 0
          if (Math.abs(offset) > MAX_VISIBLE_OFFSET) return null

          const scale = isActive ? 1 : Math.max(0.82, 1 - Math.abs(offset) * 0.1)
          const opacity = isActive ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.35)
          const x = offset * CARD_SPACING

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ zIndex: 10 - Math.abs(offset) }}
              animate={{ x: shouldReduceMotion ? 0 : x, scale, opacity }}
              initial={false}
              transition={transition}
              aria-hidden={!isActive}
              inert={!isActive}            >
              {contentType === "projects"
                ? renderProjectSlide(item as Project, isActive)
                : renderSkillSlide(item as { category: string; items: string[] }, isActive)}
            </motion.div>
          )
        })}
      </div>

      {showControls && items.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 flex justify-between px-4 pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto p-2 rounded-full bg-card border border-border text-ink hover:border-accent hover:text-accent hover:scale-110 shadow-sm transition-all"
            aria-label="Previous slide"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto p-2 rounded-full bg-card border border-border text-ink hover:border-accent hover:text-accent hover:scale-110 shadow-sm transition-all"
            aria-label="Next slide"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`pointer-events-auto w-2.5 h-2.5 rounded-full border border-border transition-colors ${index === currentIndex ? "bg-accent border-accent" : "bg-card hover:border-accent"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
