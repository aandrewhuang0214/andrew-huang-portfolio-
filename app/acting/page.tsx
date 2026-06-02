'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const YOUTUBE_VIDEO_ID = 'HLlIvd5VMt8'
const HEADSHOT_HREF    = '/headshot.jpg'   // replace with your real headshot path/URL

const links = [
  {
    label: 'Headshot',
    sublabel: 'View / Download',
    href: HEADSHOT_HREF,
    download: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="12" cy="10" r="3" />
        <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" />
      </svg>
    ),
  },
  {
    label: 'Resume',
    sublabel: 'PDF',
    href: '/AndrewHuang_ActingResume.pdf',
    download: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
]

function LinkCard({
  item,
  index,
  inView,
}: {
  item: (typeof links)[0]
  index: number
  inView: boolean
}) {
  return (
    <motion.a
      href={item.href}
      download={item.download || undefined}
      target={item.download ? undefined : '_blank'}
      rel={item.download ? undefined : 'noopener noreferrer'}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.1 }}
      className="group flex items-center gap-5 border border-border hover:border-orange px-6 py-5 transition-all duration-400 ease-cinematic flex-1"
    >
      <span className="text-text-secondary group-hover:text-orange transition-colors duration-300 shrink-0">
        {item.icon}
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="font-condensed font-semibold text-white text-sm tracking-wide uppercase group-hover:text-orange transition-colors duration-300">
          {item.label}
        </span>
        <span className="font-condensed text-[11px] tracking-label text-text-muted uppercase">
          {item.sublabel}
        </span>
      </div>
      <span className="ml-auto text-text-muted group-hover:text-orange transition-colors duration-300">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </span>
    </motion.a>
  )
}

export default function ActingPage() {
  const linksRef = useRef(null)
  const linksInView = useInView(linksRef, { once: true, margin: '-40px' })

  return (
    <>
      <Navigation />

      <main className="bg-black min-h-screen">

        {/* ─── YouTube reel ─────────────────────────────────── */}
        {/* pt-20 clears the fixed nav. maxHeight + maxWidth together ensure
            the 16:9 frame never overflows the viewport vertically.          */}
        <div className="pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full mx-auto bg-black"
            style={{
              aspectRatio: '16/9',
              maxHeight: 'calc(100vh - 5rem)',
              maxWidth: 'calc((100vh - 5rem) * (16/9))',
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&color=white`}
              title="Andrew Huang — Acting Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>
        </div>

        {/* ─── Header + links ───────────────────────────────── */}
        <div className="px-8 md:px-12 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mb-12"
          >
            <span className="font-condensed text-[11px] tracking-label text-text-secondary uppercase block mb-4">
              Acting
            </span>
            <h1
              className="font-condensed font-semibold text-white uppercase leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', lineHeight: 1.05 }}
            >
              REEL &amp; MATERIALS
            </h1>
          </motion.div>

          {/* Download links */}
          <div ref={linksRef} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            {links.map((item, i) => (
              <LinkCard key={item.label} item={item} index={i} inView={linksInView} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
