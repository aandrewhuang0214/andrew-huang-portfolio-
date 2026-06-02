'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-charcoal py-24 md:py-32 px-8 md:px-12 border-t border-border">
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start"
      >
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5"
        >
          <h2
            className="font-condensed font-semibold text-white uppercase leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', lineHeight: 1.05 }}
          >
            I TELL STORIES THAT BUILD BRANDS AND MOVE PEOPLE.
          </h2>
        </motion.div>

        {/* Supporting copy + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="md:col-span-5 md:col-start-7 flex flex-col gap-8 justify-between h-full"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <p className="font-body font-light text-text-secondary text-sm leading-relaxed flex-1">
              I direct and produce narrative, commercial and music video content that blends
              cinematic storytelling with strategic intent.
            </p>
            <p className="font-body font-light text-text-secondary text-sm leading-relaxed flex-1">
              I also act — bringing depth, truth, and perspective to every role I step into.
            </p>
          </div>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="font-condensed text-xs tracking-label text-orange hover:text-white transition-colors duration-300 uppercase flex items-center gap-2 w-fit"
          >
            About Me
            <span className="inline-block translate-y-px">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
