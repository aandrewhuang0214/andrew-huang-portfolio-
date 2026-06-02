'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { projects, categories, type Category, type Project } from '@/lib/projects'

type Filter = 'ALL' | Category

function WorkCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <Link href={`/work/${project.id}`} className="block">
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 6) * 0.06 }}
      className="group cursor-pointer"
    >
      {/* Thumbnail — 16:9 */}
      <div className="relative overflow-hidden aspect-video bg-surface">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.src}
            alt={project.title}
            className="w-full h-full object-cover project-thumb"
          />
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-600" />

        {/* Category tag — top right */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-condensed text-[9px] tracking-label text-white bg-black/70 px-2 py-1 uppercase">
            {project.category}
          </span>
        </div>

        {/* Orange line — top edge on hover */}
        <div className="absolute top-0 left-0 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-700 ease-cinematic" />
      </div>

      {/* Title */}
      <div className="mt-3 text-center">
        <h2 className="font-condensed font-semibold text-white text-sm tracking-wide uppercase leading-tight group-hover:text-orange transition-colors duration-300">
          {project.displayTitle || project.title}
        </h2>
        {project.client !== 'Independent' && (
          <p className="font-condensed text-[11px] text-text-secondary tracking-wide mt-0.5">
            {project.client}
          </p>
        )}
      </div>
    </motion.article>
    </Link>
  )
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL')

  const byYear = (a: Project, b: Project) => {
    const toNum = (y?: string) => y === 'COMING SOON' ? 9999 : parseInt(y || '0')
    return toNum(b.year) - toNum(a.year)
  }

  const filtered = (
    activeFilter === 'ALL' ? projects : projects.filter((p) => p.category === activeFilter)
  ).slice().sort(byYear)

  return (
    <>
      <Navigation />

      <main className="bg-black min-h-screen pt-28 pb-24 px-8 md:px-12">

        {/* ─── Page header ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16"
        >
          <h1
            className="font-condensed font-semibold text-white uppercase leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            All Work
          </h1>

          {/* Category filters */}
          <div className="flex items-center gap-1 flex-wrap">
            {(['ALL', ...categories] as Filter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-condensed text-[11px] tracking-label uppercase px-4 py-2 transition-all duration-300 ${
                  activeFilter === cat
                    ? 'text-black bg-orange'
                    : 'text-text-secondary hover:text-white border border-border hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ─── Project count ────────────────────────────────── */}
        <motion.p
          layout
          className="font-condensed text-[11px] tracking-label text-text-muted uppercase mb-10"
        >
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          {activeFilter !== 'ALL' && ` — ${activeFilter}`}
        </motion.p>

        {/* ─── Grid ─────────────────────────────────────────── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <WorkCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-condensed text-text-secondary text-sm tracking-wide text-center py-24"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </main>

      <Footer />
    </>
  )
}
