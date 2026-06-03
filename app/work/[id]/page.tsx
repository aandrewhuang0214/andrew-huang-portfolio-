'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { projects, type Project } from '@/lib/projects'

// ─── Video panel ─────────────────────────────────────────────────────────────
function VideoPanel({ project }: { project: Project }) {
  if (project.youtubeId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1&color=white`}
        title={project.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    )
  }
  if (project.vimeoId) {
    return (
      <iframe
        src={`https://player.vimeo.com/video/${project.vimeoId}?color=FF4500&title=0&byline=0&portrait=0`}
        title={project.title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    )
  }
  if (project.videoSrc) {
    return (
      <video
        src={project.videoSrc}
        controls
        poster={project.src}
        className="absolute inset-0 w-full h-full object-contain"
      />
    )
  }
  if (project.instagramReel) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <iframe
          src={`https://www.instagram.com/reel/${project.instagramReel}/embed/`}
          title={project.title}
          allowFullScreen
          scrolling="no"
          style={{ border: 'none', aspectRatio: '9/16', height: '100%', maxHeight: '100%', width: 'auto' }}
        />
      </div>
    )
  }
  if (project.showcaseImages && project.showcaseImages.length > 0) {
    return (
      <div className="absolute inset-0 overflow-y-auto flex flex-col gap-1 bg-black">
        {project.showcaseImages.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt={`${project.title} ${i + 1}`}
            className="w-full h-auto block"
          />
        ))}
      </div>
    )
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.src} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="w-14 h-14 border border-white/20 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/40">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
        <p className="font-condensed text-[10px] tracking-label text-white/30 uppercase">
          Add youtubeId, vimeoId, or videoSrc in lib/projects.ts
        </p>
      </div>
    </div>
  )
}

// ─── Shared gallery links (used in both mobile + desktop layouts) ─────────────
function GalleryLinks({ project }: { project: Project }) {
  return (
    <>
      {project.stills && project.stills.length > 0 && (
        <div className="border-t border-border">
          <Link href={`/work/${project.id}/stills`} className="w-full flex items-center justify-between py-4 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase group">
            <span>Stills</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
          </Link>
        </div>
      )}
      {project.bts && project.bts.length > 0 && (
        <div className="border-t border-border">
          <Link href={`/work/${project.id}/bts`} className="w-full flex items-center justify-between py-4 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase group">
            <span>Behind the Scenes</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
          </Link>
        </div>
      )}
      {project.impact && project.impact.length > 0 && (
        <div className="border-t border-border">
          <Link href={`/work/${project.id}/impact`} className="w-full flex items-center justify-between py-4 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase group">
            <span>Impact</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
          </Link>
        </div>
      )}
      {project.instagramUrl && (
        <div className="border-t border-border">
          <a href={project.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between py-4 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase group">
            <span>Instagram</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </a>
        </div>
      )}
      {project.youtubeChannelUrl && (
        <div className="border-t border-border">
          <a href={project.youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between py-4 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase group">
            <span>YouTube</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </a>
        </div>
      )}
      {project.caseStudyUrl && (
        <div className="border-t border-border">
          <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between py-4 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase group">
            <span>Campaign Case Study</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
          </a>
        </div>
      )}
      <div className="border-t border-border" />
    </>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectPage({ params }: { params: { id: string } }) {
  const currentIndex = projects.findIndex((p) => p.id === params.id)
  const project = projects[currentIndex]
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  if (!project) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-center flex flex-col gap-4">
          <p className="font-condensed text-text-secondary text-sm tracking-label uppercase">Project not found</p>
          <Link href="/work" className="font-condensed text-xs tracking-label text-orange hover:text-white transition-colors duration-300 uppercase">
            ← Back to Work
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen md:h-screen flex flex-col md:overflow-hidden">

      {/* ─── Top nav ──────────────────────────────────────────── */}
      <header className="flex-shrink-0 flex items-center justify-between px-6 md:px-12 py-5 border-b border-border">
        <Link
          href="/work"
          className="flex items-center gap-2 font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Work
        </Link>

        <div className="flex items-center gap-5">
          {prev ? (
            <Link href={`/work/${prev.id}`} className="font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase">
              ← Prev
            </Link>
          ) : (
            <span className="font-condensed text-[11px] tracking-label text-text-muted uppercase opacity-30">← Prev</span>
          )}
          <span className="text-border text-xs">|</span>
          {next ? (
            <Link href={`/work/${next.id}`} className="font-condensed text-[11px] tracking-label text-text-secondary hover:text-white transition-colors duration-300 uppercase">
              Next →
            </Link>
          ) : (
            <span className="font-condensed text-[11px] tracking-label text-text-muted uppercase opacity-30">Next →</span>
          )}
        </div>
      </header>

      {/* ─── MOBILE layout: title → roles → video → info ──────── */}
      <div className="md:hidden flex-1 overflow-y-auto">

        {/* Category + Title + Roles */}
        <div className="px-6 pt-8 pb-5 flex flex-col gap-4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-condensed text-[11px] tracking-label text-orange uppercase"
          >
            {project.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="font-display text-white uppercase"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', lineHeight: 0.9 }}
          >
            {project.title}
          </motion.h1>

          {project.roles && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-condensed text-[11px] tracking-label text-white uppercase"
            >
              {project.roles}
            </motion.p>
          )}
        </div>

        {/* Video — 16:9 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video bg-black"
        >
          <VideoPanel project={project} />
        </motion.div>

        {/* Info below video */}
        <div className="px-6 py-8 flex flex-col gap-6">

          {/* Orange rule */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 56 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-orange flex-shrink-0"
          />

          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col gap-3"
          >
            {project.year && (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">
                  {project.year === 'COMING SOON' ? 'Status' : 'Year'}
                </span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.year}</span>
              </div>
            )}
            {project.artist ? (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">Artist</span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.artist}</span>
              </div>
            ) : project.client && project.client !== 'Independent' ? (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">Client</span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.client}</span>
              </div>
            ) : null}
            {project.directedBy && (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">Directed By</span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.directedBy}</span>
              </div>
            )}
            {project.format && (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">Format</span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.format}</span>
              </div>
            )}
          </motion.div>

          {/* Description */}
          {project.description && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              {project.description.split('\n').filter(Boolean).map((line, i) => (
                <p key={i} className="font-body font-light text-text-secondary text-sm leading-relaxed">{line}</p>
              ))}
            </motion.div>
          )}

          {/* Gallery + external links */}
          <GalleryLinks project={project} />
        </div>
      </div>

      {/* ─── DESKTOP layout: split left/right ─────────────────── */}
      <div className="hidden md:grid flex-1 grid-cols-[2fr_3fr] overflow-hidden">

        {/* Left: info panel — scrollable */}
        <div className="overflow-y-auto border-r border-border px-10 py-10 flex flex-col gap-7">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-condensed text-[11px] tracking-label text-orange uppercase"
          >
            {project.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="font-display text-white uppercase"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 6.5rem)', lineHeight: 0.9 }}
          >
            {project.title}
          </motion.h1>

          {project.roles && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-condensed text-[11px] tracking-label text-white uppercase"
            >
              {project.roles}
            </motion.p>
          )}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 56 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-px bg-orange flex-shrink-0"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col gap-3"
          >
            {project.year && (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">
                  {project.year === 'COMING SOON' ? 'Status' : 'Year'}
                </span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.year}</span>
              </div>
            )}
            {project.artist ? (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">Artist</span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.artist}</span>
              </div>
            ) : project.client && project.client !== 'Independent' ? (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">Client</span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.client}</span>
              </div>
            ) : null}
            {project.directedBy && (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">Directed By</span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.directedBy}</span>
              </div>
            )}
            {project.format && (
              <div className="grid grid-cols-[100px_1fr]">
                <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">Format</span>
                <span className="font-condensed text-[11px] tracking-label text-white">{project.format}</span>
              </div>
            )}
          </motion.div>

          {project.description && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              {project.description.split('\n').filter(Boolean).map((line, i) => (
                <p key={i} className="font-body font-light text-text-secondary text-sm leading-relaxed">{line}</p>
              ))}
            </motion.div>
          )}

          <GalleryLinks project={project} />
        </div>

        {/* Right: video — fills height */}
        <div className="relative bg-black overflow-hidden">
          <VideoPanel project={project} />
        </div>
      </div>

    </div>
  )
}
