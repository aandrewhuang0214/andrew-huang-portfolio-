'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const captionY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden bg-black">

      {/* ─── Video background ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          aria-hidden="true"
        >
          <source src="/hero.mov" type="video/mp4" />
        </video>

        {/* Dark overlay so captions stay readable */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Bottom gradient — ensures caption text stays readable */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-64 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 110% 110% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ─── 3×3 grid overlay — each active cell links to its project ─────── */}
      {/* On mobile: grid lines + labels are visible. On desktop: invisible until hover. */}
      <div className="absolute inset-0 z-[15] grid grid-cols-3 grid-rows-3">
        {/* Row 1 */}
        <Link href="/work/stay-frosty" className="group relative overflow-hidden" aria-label="Stay Frosty">
          <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 border border-white/[0.12] md:border-transparent group-hover:border-orange/40 transition-all duration-300" />
          <span className="md:hidden absolute bottom-2 left-2 font-condensed text-[8px] tracking-label text-white/50 uppercase leading-tight">Stay Frosty</span>
        </Link>
        <div className="border border-white/[0.12] md:border-0" />
        <Link href="/work/missing-u-asumuh" className="group relative overflow-hidden" aria-label="Missing U — Asumuh">
          <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 border border-white/[0.12] md:border-transparent group-hover:border-orange/40 transition-all duration-300" />
          <span className="md:hidden absolute bottom-2 left-2 font-condensed text-[8px] tracking-label text-white/50 uppercase leading-tight">Missing U</span>
        </Link>

        {/* Row 2 */}
        <div className="border border-white/[0.12] md:border-0" />
        <Link href="/work/la-copa" className="group relative overflow-hidden" aria-label="La Copa de Ángeles">
          <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 border border-white/[0.12] md:border-transparent group-hover:border-orange/40 transition-all duration-300" />
          <span className="md:hidden absolute bottom-2 left-2 font-condensed text-[8px] tracking-label text-white/50 uppercase leading-tight">La Copa</span>
        </Link>
        <div className="border border-white/[0.12] md:border-0" />

        {/* Row 3 */}
        <Link href="/work/minu-001" className="group relative overflow-hidden" aria-label="Minu 001 Hoodie Launch">
          <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 border border-white/[0.12] md:border-transparent group-hover:border-orange/40 transition-all duration-300" />
          <span className="md:hidden absolute bottom-2 left-2 font-condensed text-[8px] tracking-label text-white/50 uppercase leading-tight">Minu 001</span>
        </Link>
        <div className="border border-white/[0.12] md:border-0" />
        <Link href="/work/ruhveda" className="group relative overflow-hidden" aria-label="Mango Muse Launch — Ruhveda">
          <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 border border-white/[0.12] md:border-transparent group-hover:border-orange/40 transition-all duration-300" />
          <span className="md:hidden absolute bottom-2 left-2 font-condensed text-[8px] tracking-label text-white/50 uppercase leading-tight">Ruhveda</span>
        </Link>
      </div>

      {/* ─── Caption row (bottom) ─────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: overlayOpacity, y: captionY }}
        className="relative z-20 mt-auto px-8 md:px-12 pb-10 flex items-end justify-between"
      >
        {/* Roles — bottom left */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col gap-0.5"
        >
          {['DIRECTOR', 'PRODUCER', 'ACTOR'].map((role) => (
            <span
              key={role}
              className="font-condensed font-semibold text-white text-xs tracking-label leading-tight"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Scroll indicator — center */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-10"
          aria-label="Scroll to work"
        >
          <span className="font-condensed text-[10px] tracking-label text-orange">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-orange">
              <path d="M8 0v20M1 13l7 8 7-8" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </motion.div>
        </motion.button>

        {/* Location — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          className="flex flex-col gap-0.5 text-right"
        >
          {['@AANDREWHUANG', 'LOS ANGELES', 'CALIFORNIA'].map((line) => (
            <span
              key={line}
              className="font-condensed font-semibold text-white text-xs tracking-label leading-tight"
            >
              {line}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
