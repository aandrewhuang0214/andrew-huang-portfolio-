'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface GalleryPageProps {
  projectId:    string
  projectTitle: string
  label:        string
  images:       string[]
  singleColumn?: boolean  // stack images one per row, centred
}

export default function GalleryPage({
  projectId,
  projectTitle,
  label,
  images,
  singleColumn = false,
}: GalleryPageProps) {
  return (
    <div className="bg-black min-h-screen flex flex-col">

      {/* ─── Nav ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 flex-shrink-0 flex items-center justify-between px-8 md:px-12 py-5 bg-black border-b border-border">
        <Link
          href={`/work/${projectId}`}
          className="flex items-center gap-2 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Project
        </Link>

        {/* Orange dot-grid icon */}
        <div className="grid grid-cols-3 gap-[3px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-[4px] h-[4px] rounded-full bg-orange" />
          ))}
        </div>
      </header>

      {/* ─── Title ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="px-8 md:px-12 pt-10 pb-8"
      >
        <p className="font-condensed text-[10px] tracking-label text-text-secondary uppercase mb-2">
          {label}
        </p>
        <h1
          className="font-display text-white uppercase leading-none"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: 0.9 }}
        >
          {projectTitle}
        </h1>
      </motion.div>

      {/* ─── Images — full width, stacked ─────────────────────── */}
      <div className={`pb-20 flex flex-col gap-3 ${singleColumn ? 'px-8 md:px-12 items-center' : ''}`}>
        {images.map((src, i) => (
          <motion.div
            key={i}
            className={singleColumn ? 'w-full md:w-1/2' : 'w-full'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${label} ${i + 1}`}
              className="w-full h-auto block"
            />
          </motion.div>
        ))}
      </div>

    </div>
  )
}
