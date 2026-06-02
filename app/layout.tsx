import type { Metadata } from 'next'
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

// ─── TYPOGRAPHY ─────────────────────────────────────────────────────────────
// DISPLAY: Bebas Neue is the current stand-in for Neue Haas Grotesk Display.
// When your Adobe Fonts kit is live, replace by:
//   1. Remove the bebas import below
//   2. Add <link> to your Adobe Fonts kit in the <head>
//   3. Update tailwind.config.ts fontFamily.display to ['neue-haas-grotesk-display', ...]
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Andrew Huang — Director, Producer, Actor',
  description: 'Andrew Huang directs and produces narrative, commercial and music video content that blends cinematic storytelling with strategic intent.',
  openGraph: {
    title: 'Andrew Huang — Director, Producer, Actor',
    description: 'Cinematic storytelling with strategic intent. Based in Los Angeles, California.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-black text-white font-body antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
