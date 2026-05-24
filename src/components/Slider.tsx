"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import type { Transition } from "framer-motion"
import { Project } from "@/lib/data"

interface SliderProps {
  items: (Project | { category: string; items: string[] })[]
  contentType: "projects" | "skills"
  delay?: number
  showControls?: boolean
  showIndicators?: boolean
}

export default function Slider({
  items,
  contentType,
  delay = 3000,
  showControls = true,
  showIndicators = true,
}: SliderProps) {
  const shouldReduceMotion = useReducedMotion()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (items.length <= 1 || isHovered) return

    const timeout = setTimeout(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, delay)

    return () => clearTimeout(timeout)
  }, [items.length, delay, isHovered, currentIndex])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      prevSlide()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      nextSlide()
    }
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    if (items.length <= 1) return
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    if (items.length <= 1) return
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  if (!items.length) {
    return <div className="text-center py-12">No items to display</div>
  }

  const activeIndex = currentIndex >= items.length ? 0 : currentIndex

  const transition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 320, damping: 30 }

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : dir > 0 ? 24 : -24,
      scale: shouldReduceMotion ? 1 : 0.98,
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: shouldReduceMotion ? 0 : dir > 0 ? -24 : 24,
      scale: shouldReduceMotion ? 1 : 0.98,
    }),
  }

  const activeItem = items[activeIndex]

  const renderProjectSlide = (project: Project) => (
    <div className="w-full max-w-xl">
      <div className="group bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent transition-all">
        <div className="flex items-start gap-4">
          <span className="text-xs font-mono text-muted mt-1 w-5 shrink-0">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <span
                className={`px-2 py-0.5 text-xs font-mono border rounded-full ${
                  project.status === "live"
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

            <p className="text-sm text-muted leading-relaxed">
              {project.description}
            </p>

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
    </div>
  )

  const renderSkillSlide = (skillGroup: {
    category: string
    items: string[]
  }) => (
    <div className="w-full max-w-xl">
      <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-accent transition-colors">
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
    </div>
  )

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label={contentType === "projects" ? "Project highlights" : "Skill groups"}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="flex w-full items-center justify-center"
          >
            {contentType === "projects"
              ? renderProjectSlide(activeItem as Project)
              : renderSkillSlide(
                  activeItem as { category: string; items: string[] }
                )}
          </motion.div>
        </AnimatePresence>
      </div>

      {showControls && items.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 flex justify-between px-4 pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors hover:scale-110"
            aria-label="Previous slide"
          >
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="pointer-events-auto p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors hover:scale-110"
            aria-label="Next slide"
          >
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
              className={`pointer-events-auto w-3 h-3 rounded-full bg-white/50 hover:bg-white/70 transition-colors ${
                index === activeIndex ? "bg-white scale-110" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}