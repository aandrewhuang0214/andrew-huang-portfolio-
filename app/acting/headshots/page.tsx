'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const images = [
  '/headshots/headshot1.jpg',
  '/headshots/headshot2.jpg',
  '/headshots/headshot3.jpg',
  '/headshots/headshot4.jpg',
]

export default function HeadshotsPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col">

      {/* ─── Nav ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 flex-shrink-0 flex items-center justify-between px-8 md:px-12 py-5 bg-black border-b border-border">
        <Link
          href="/acting"
          className="flex items-center gap-2 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Acting
        </Link>

        <div className="grid grid-cols-3 gap-[3px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-[4px] h-[4px] rounded-full bg-orange" />
          ))}
        </div>
      </header>

      {/* ─── Title ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="px-8 md:px-12 pt-10 pb-8"
      >
        <p className="font-condensed text-[10px] tracking-label text-text-secondary uppercase mb-2">
          Acting
        </p>
        <h1
          className="font-display text-white uppercase leading-none"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 0.9 }}
        >
          Headshots
        </h1>
      </motion.div>

      {/* ─── Images: stacked on mobile, 2-col grid on desktop ── */}
      <div className="px-8 md:px-12 pb-20 grid grid-cols-1 md:grid-cols-2 gap-3">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Andrew Huang Headshot ${i + 1}`} className="w-full h-auto block" />
          </motion.div>
        ))}
      </div>

    </div>
  )
}
