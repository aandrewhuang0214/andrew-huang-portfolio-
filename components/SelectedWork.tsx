'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { featuredProjects, type Project } from '@/lib/projects'



function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <Link href={`/work/${project.id}`} className="block">
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      className="group cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-[4/5] bg-surface">
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
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-600" />
        <div className="absolute top-0 left-0 w-0 h-0.5 bg-orange group-hover:w-12 transition-all duration-500 ease-cinematic" />
      </div>

      {/* Metadata */}
      <div className="mt-4 flex items-start gap-3">
        <span className="font-condensed text-[11px] text-text-secondary tracking-label mt-0.5 shrink-0">
          0{index + 1}
        </span>
        <div>
          <h3 className="font-condensed font-semibold text-white text-base tracking-wide uppercase leading-tight group-hover:text-orange transition-colors duration-300">
            {project.displayTitle || project.title}
          </h3>
          <p className="font-condensed text-xs text-glow-subtle mt-0.5 tracking-wide">
            {project.client}
          </p>
        </div>
      </div>
    </motion.article>
    </Link>
  )
}

export default function SelectedWork() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="work" className="bg-black py-24 md:py-32 px-8 md:px-12">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between mb-14 md:mb-20"
      >
        <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">
          Selected Work
        </span>
        <Link
          href="/work"
          className="font-condensed text-[11px] tracking-label text-orange hover:text-white transition-colors duration-300 uppercase flex items-center gap-2"
        >
          View All Work
          <span className="inline-block translate-y-px">→</span>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
