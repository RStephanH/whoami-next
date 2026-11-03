"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { siteConfig } from "@/lib/data"

const tags = ["Linux", "Networking", "Security", "Virtualization", "Golang", "LLM Integration", "Docker"]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const entranceTransition = {
    duration: shouldReduceMotion ? 0 : 0.65,
    ease: [0.22, 1, 0.36, 1] as const,
  }
  const riseIn = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    animate: { opacity: 1, y: 0 },
    transition: entranceTransition,
  }
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: entranceTransition,
  }
  const ctaItem = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: entranceTransition,
    },
  }
  const tagItem = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: entranceTransition,
    },
  }
  const metadataItem = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: entranceTransition,
    },
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">

        {/* Colonne gauche — texte */}
        <div className="flex flex-col gap-5 flex-1">

          {/* Badge disponible — style "live status" */}
          <motion.div
            className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-accent/20 bg-accent-light"
            {...fadeIn}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={`absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 ${
                  shouldReduceMotion ? "" : "animate-ping"
                }`}
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs text-accent font-mono tracking-wide">
              status: available_for_work
            </span>
          </motion.div>

          {/* Nom */}
          <motion.div {...riseIn} transition={{ ...entranceTransition, delay: 0.12 }}>
            <h1 className="text-5xl font-bold text-ink leading-tight font-display">

              {siteConfig.fullName.split(" ")[0]}{" "}
              <span className="text-accent">
                {siteConfig.fullName.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Titre */}
            <p className="text-base text-muted">
              {siteConfig.title}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-muted text-base max-w-md leading-relaxed"
            {...riseIn}
            transition={{ ...entranceTransition, delay: 0.24 }}
          >
            {siteConfig.tagline}
          </motion.p>

          {/* Boutons */}
          <motion.div
            className="flex items-center gap-4 pt-1"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.08,
                  delayChildren: shouldReduceMotion ? 0 : 0.32,
                },
              },
            }}
          >
            <motion.div variants={ctaItem}>
              <Link
                href="#projects"
                className="px-5 py-2.5 bg-ink text-white text-sm font-medium rounded-lg hover:bg-accent transition-all"
              >
                View my work
              </Link>
            </motion.div>
            <motion.div variants={ctaItem}>
              <Link
                href="#contact"
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {"Contact me →"}
              </Link>
            </motion.div>
          </motion.div>

          {/* Tags */}
          <motion.div
            className="flex items-center gap-2 flex-wrap pt-1"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.08,
                  delayChildren: shouldReduceMotion ? 0 : 0.82,
                },
              },
            }}
          >
            {tags.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-xs font-medium border border-border text-muted rounded-full hover:border-accent hover:text-accent transition-colors"
                variants={tagItem}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Liens sociaux */}
          <motion.div
            className="flex items-center gap-6 pt-4 border-t border-border"
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.08,
                  delayChildren: shouldReduceMotion ? 0 : 1.18,
                },
              },
            }}
          >
            <motion.a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-ink transition-colors font-mono"
              variants={metadataItem}
            >
              {"GitHub ↗"}
            </motion.a>
            <motion.a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-ink transition-colors font-mono"
              variants={metadataItem}
            >
              {"LinkedIn ↗"}
            </motion.a>
            <motion.span
              className="text-sm text-muted font-mono"
              variants={metadataItem}
            >
              {siteConfig.location}
            </motion.span>
          </motion.div>

        </div>

        {/* Colonne droite — photo */}
        <motion.div
          className="flex justify-center md:justify-end shrink-0"
          {...riseIn}
          transition={{ ...entranceTransition, delay: shouldReduceMotion ? 0 : 0.65 }}
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56">

            {/* Cadre décoratif décalé */}
            <div className="absolute inset-0 rounded-2xl border-2 border-accent translate-x-2 translate-y-2" />

            {/* Photo */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-accent-light">
              <Image
                src="/profile.png"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-cover"
                priority
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
