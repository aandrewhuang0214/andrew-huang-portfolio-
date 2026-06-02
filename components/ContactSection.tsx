'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const socialLinks = [
  {
    label: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/andrew-huang81/',
    newTab: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'RESUME',
    href: '/AndrewHuang_Resume.pdf',
    newTab: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: 'INSTAGRAM',
    href: 'https://www.instagram.com/aandrewhuang/',
    newTab: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
]

type FormState = 'idle' | 'sending' | 'success' | 'error'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
        return
      }

      setStatus('success')
      setForm({ email: '', subject: '', message: '' })
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-charcoal py-24 md:py-32 border-t border-border">
      <div ref={ref} className="px-8 md:px-12">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-condensed text-[11px] tracking-label text-text-secondary uppercase block mb-14 md:mb-20"
        >
          Contact
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Left: headline + links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col gap-12 justify-between"
          >
            <h2
              className="font-condensed font-semibold text-white uppercase leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)', lineHeight: 1.05 }}
            >
              GOT AN IDEA?<br />LET&apos;S WORK
            </h2>

            {/* Social links */}
            <div className="flex flex-col gap-5">
              {socialLinks.map(({ label, href, newTab, icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={newTab ? '_blank' : undefined}
                  rel={newTab ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 group w-fit"
                >
                  <span className="text-text-secondary group-hover:text-orange transition-colors duration-300">
                    {icon}
                  </span>
                  <span className="font-condensed text-xs tracking-label text-text-secondary group-hover:text-white transition-colors duration-300 uppercase">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="md:col-span-6 md:col-start-7"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="py-16 flex flex-col gap-3"
              >
                <span className="font-display text-orange" style={{ fontSize: '3rem' }}>
                  SENT.
                </span>
                <p className="font-body font-light text-text-secondary text-sm leading-relaxed">
                  Message received. I&apos;ll be in touch.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="flex flex-col gap-2">
                  <label className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="form-input text-sm py-3 px-4"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="form-input text-sm py-3 px-4"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-condensed text-[11px] tracking-label text-text-secondary uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="form-input text-sm py-3 px-4"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-condensed text-xs text-red-500 tracking-wide">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-2 w-full flex items-center justify-center gap-3 font-condensed text-xs tracking-label uppercase py-4 px-6 bg-orange text-black hover:bg-orange-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  {status !== 'sending' && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  )}
                </button>

                <p className="font-condensed text-[10px] tracking-wide text-text-muted text-center">
                  This will send an email to ahuang95@usc.edu
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
