import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF4500',
          light: '#FF6B35',
          glow: '#FF3300',
          dim: '#CC3700',
          ember: '#E03D00',
        },
        charcoal: '#0A0A0A',
        surface: '#111111',
        panel: '#161616',
        border: '#222222',
        'text-secondary': '#888888',
        'text-muted': '#555555',
      },
      fontFamily: {
        // DISPLAY: Replace var(--font-display) with Neue Haas Grotesk Display
        // via Adobe Fonts once your kit is live. Bebas Neue is the stand-in.
        display: ['var(--font-display)', 'Impact', 'Arial Black', 'sans-serif'],
        condensed: ['var(--font-condensed)', 'Arial Narrow', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.18em',
        wide: '0.1em',
        tightest: '-0.03em',
      },
      lineHeight: {
        none: '1',
        display: '0.88',
        tight: '1.1',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}

export default config
