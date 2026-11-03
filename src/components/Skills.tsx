"use client"

import { useReducedMotion } from "framer-motion"
import { motion } from "framer-motion"
import { skills } from "@/lib/data"

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12 flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          02 / Skills
        </span>
        <h2 className="font-display text-3xl font-bold text-ink">What I work with</h2>
        <p className="max-w-lg text-muted">
          A mix of network engineering fundamentals and growing development skills.
        </p>
      </div>

      <motion.div
        className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.1,
            },
          },
        }}
      >
        {skills.map((group, index) => {
          const shortLabel = group.category.split(" & ")[0]

          return (
            <motion.article
              key={group.category}
              className="group flex h-full flex-col rounded-lg border border-border border-l-4 border-l-accent bg-card p-5 shadow-sm transition-colors duration-200 hover:border-accent hover:bg-accent-light/40"
              variants={cardVariants}
            >
              <div className="flex h-full flex-col justify-center">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs tracking-wide text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {shortLabel}
                  </span>
                </div>

                <h3 className="mb-4 font-display text-lg font-semibold leading-snug text-ink">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs text-muted transition-colors group-hover:border-accent/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
