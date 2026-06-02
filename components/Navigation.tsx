'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// type: 'page' → Link to a route; 'hash' → scroll to section (home only)
const navLinks = [
  { label: 'Work',    href: '/work',     type: 'page' },
  { label: 'About',   href: '/#about',   type: 'hash' },
  { label: 'Acting',  href: '/acting',   type: 'page' },
  { label: 'Contact', href: '/#contact', type: 'hash' },
] as const

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Handles hash links smartly: scroll if on home, navigate otherwise
  const handleHashClick = (href: string) => {
    setMenuOpen(false)
    const hash = href.split('#')[1]
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(href)
    }
  }

  const isActive = (href: string) =>
    href === '/work' ? pathname === '/work' : href === '/acting' ? pathname === '/acting' : false

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-8 md:px-12 py-6">

          {/* Logo */}
          <Link
            href="/"
            className="font-display text-white text-sm tracking-label no-select leading-none hover:text-orange transition-colors duration-300"
          >
            ANDREW<br />HUANG
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ label, href, type }) =>
              type === 'page' ? (
                <Link
                  key={label}
                  href={href}
                  className={`font-condensed font-medium text-xs tracking-label uppercase transition-colors duration-300 ${
                    isActive(href) ? 'text-white' : 'text-orange hover:text-white'
                  }`}
                >
                  {label}
                  {isActive(href) && (
                    <span className="block h-px bg-white mt-0.5" />
                  )}
                </Link>
              ) : (
                <button
                  key={label}
                  onClick={() => handleHashClick(href)}
                  className="font-condensed font-medium text-xs tracking-label text-orange hover:text-white transition-colors duration-300 uppercase"
                >
                  {label}
                </button>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 w-6 z-50 relative"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px bg-orange transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px bg-orange transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-px bg-orange transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map(({ label, href, type }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {type === 'page' ? (
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl text-glow tracking-wide"
                  >
                    {label.toUpperCase()}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleHashClick(href)}
                    className="font-display text-5xl text-glow tracking-wide"
                  >
                    {label.toUpperCase()}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
