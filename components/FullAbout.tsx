'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experience = [
  { year: 'Present', role: 'Creative Advertising Intern', company: 'Universal Pictures' },
  { year: 'Present', role: 'President',                   company: 'Trojan Marketing Group' },
  { year: '2025–26', role: 'Director of Content',         company: 'Haute Magazine' },
  { year: '2024–25', role: 'Creative Director',           company: 'APCA Closeup' },
  { year: '2020–21', role: 'Director, Writer, EP',        company: 'Shanghaied: The Musical' },
]

export default function FullAbout() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const textRef = useRef(null)
  const textInView = useInView(textRef, { once: true, margin: '-60px' })

  return (
    <section id="about" className="bg-black py-24 md:py-32 border-t border-border">
      <div className="px-8 md:px-12">

        {/* Section label */}
        <motion.span
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-condensed text-[11px] tracking-label text-text-secondary uppercase block mb-14 md:mb-20"
        >
          About Me
        </motion.span>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-surface">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/headshot.jpg"
                alt="Andrew Huang"
                className="w-full h-full object-cover object-top project-thumb"
              />
              <div className="absolute top-0 left-0 w-8 h-0.5 bg-orange" />
            </div>
          </motion.div>

          {/* Bio + experience */}
          <div ref={textRef} className="md:col-span-9 md:col-start-4 flex flex-col gap-10">

            {/* Statement + bio */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                className="font-condensed font-semibold text-glow-minimal uppercase leading-tight mb-8"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3.2rem)', lineHeight: 1.1 }}
              >
                A storyteller who leads with vision and delivers with impact.
              </h2>

              <div className="flex flex-col gap-4 max-w-2xl">
                <p className="font-body font-light text-text-secondary text-sm leading-relaxed">
                  Andrew Huang is a filmmaker, actor, and brand strategist. He operates where
                  cinematic craft meets cultural intelligence. Raised across the Bay Area, Shanghai,
                  and Portland, he brings a global lens and strategic precision to narrative film,
                  branded content, and music videos, creating work that is bold in vision, sharp in
                  strategy, and built to last.
                </p>
                <p className="font-body font-light text-text-secondary text-sm leading-relaxed">
                  He is currently finishing his degree in the Business of Cinematic Arts at USC.
                </p>
              </div>
            </motion.div>

            {/* Experience timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase block mb-5">
                Experience
              </span>
              <div className="flex flex-col">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 gap-4 py-4 border-b border-border last:border-0 group"
                  >
                    <span className="col-span-3 md:col-span-2 font-condensed text-xs text-text-secondary tracking-wide">
                      {exp.year}
                    </span>
                    <span className="col-span-5 md:col-span-5 font-condensed text-sm text-white font-medium tracking-wide group-hover:text-orange transition-colors duration-300">
                      {exp.role}
                    </span>
                    <span className="col-span-4 md:col-span-5 font-condensed text-xs text-text-secondary">
                      {exp.company}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resume — opens in new tab */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={textInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
              href="/AndrewHuang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-condensed text-xs tracking-label text-orange hover:text-white transition-colors duration-300 uppercase w-fit border border-orange hover:border-white px-5 py-3"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              View Resume
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  )
}
