// ─── Thumbnail images ─────────────────────────────────────────────────────────
// Recommended: export a 1920×1080 JPEG still from each project,
// drop it in /public/work/, and set src: '/work/project-name.jpg'
//
// ─── Videos ───────────────────────────────────────────────────────────────────
// youtubeId: 'abc123'   → embeds https://youtube.com/watch?v=abc123
// vimeoId:   '123456'   → embeds https://vimeo.com/123456
// videoSrc:  '/work/project.mp4' → self-hosted file in /public/work/

export type Category = 'COMMERCIAL' | 'MUSIC VIDEO' | 'NARRATIVE' | 'SOCIAL MEDIA'

export interface Project {
  id:           string
  title:        string        // used on detail page
  displayTitle?: string       // override shown in work grid (e.g. 'MISSING U — ASUMUH')
  client:       string        // label defaults to "Client"; use artist field to show "Artist" instead
  artist?:      string        // if set, shows "Artist" row instead of "Client" on detail page
  directedBy?:  string        // shows "Directed By" metadata row if set
  category:     Category
  src:          string        // thumbnail shown in grids
  featured?:    boolean       // true = shown on homepage (max 3)
  // ── Detail page fields ──────────────────────────────────────────────────
  year?:        string
  roles?:       string        // your role, e.g. 'PRODUCER / ACTOR'
  format?:      string
  description?: string
  youtubeId?:      string
  vimeoId?:        string
  videoSrc?:       string
  instagramReel?:  string  // e.g. 'DKPqmfKpbjk' from instagram.com/reel/DKPqmfKpbjk/
  stills?:         string[]   // production stills — links to /work/[id]/stills
  bts?:            string[]   // behind the scenes — links to /work/[id]/bts
  thumbnail?:      string     // key art / poster (falls back to src)
  showcaseImages?:    string[]  // shown in the right panel in place of a video
  caseStudyUrl?:      string    // external link — "Campaign Case Study" row
  impact?:            string[]  // impact images — links to /work/[id]/impact
  instagramUrl?:      string    // external link — "Instagram" row
  youtubeChannelUrl?: string    // external link — "YouTube" row
}

export const projects: Project[] = [
  // ── COMMERCIAL ──────────────────────────────────────────────────────────
  {
    id:          'keep-going',
    title:       'KEEP GOING',
    client:      'Nike LA',
    category:    'COMMERCIAL',
    src:         'https://img.youtube.com/vi/13iiDQKmpcU/maxresdefault.jpg',
    featured:    false,
    year:        '2025',
    roles:       'DIRECTOR / EXECUTIVE PRODUCER',
    format:      'Commercial',
    description: 'A collaboration between USC\'s Haute Magazine and Nike LA\n\nThe spot highlights the essence of being a creative: endurance, the pursuit of progress, and the unwillingness to quit - with the Nike Shox supporting performance and inspiration throughout the process.',
    youtubeId:   '13iiDQKmpcU',
    bts: [
      '/work/keep-going/bts1.jpg',
      '/work/keep-going/bts2.jpg',
      '/work/keep-going/bts3.jpg',
      '/work/keep-going/bts4.jpg',
    ],
  },
  {
    id:           'minu-001',
    title:        'MINU 001 HOODIE LAUNCH',
    displayTitle: 'MINU 001 HOODIE LAUNCH',
    client:       'Minu',
    category:     'COMMERCIAL',
    src:          'https://img.youtube.com/vi/pMMdjDOy_1c/maxresdefault.jpg',
    featured:     true,
    year:         '2025',
    roles:        'DIRECTOR',
    format:       'Commercial',
    description:  "Minu's debut commercial for their first drop. I built the brand's world from scratch: a pillow fight as a reclamation of the absurd joy we quietly leave behind growing up.",
    youtubeId:    'pMMdjDOy_1c',
    stills: [
      '/work/minu/still1.jpg',
      '/work/minu/still2.jpg',
      '/work/minu/still3.jpg',
      '/work/minu/still4.jpg',
    ],
    bts: [
      '/work/minu/bts1.jpg',
      '/work/minu/bts2.jpg',
      '/work/minu/bts3.jpg',
    ],
  },
  {
    id:          'la-copa',
    title:       'LA COPA DE ÁNGELES',
    client:      'Nike LA',
    category:    'COMMERCIAL',
    src:         '/work/la-copa/still2.jpg',
    thumbnail:   '/work/la-copa/still2.jpg',
    featured:    false,
    year:        'COMING SOON',
    roles:       'DIRECTOR / EXECUTIVE PRODUCER',
    format:      'Commercial',
    description: "The second collaboration between USC's Haute Magazine and Nike LA.\n\nAny Block. Any Hour. Game On.\n\nIn LA, soccer isn't confined to the pitch. It lives in the streets, in music, in conversation, and in style. It's a cultural language that transcends neighborhoods, backgrounds, and generations.\n\nFollowing our players through some of LA's most iconic cultural pockets, La Copa de Ángeles is a reminder that despite our differences, we're connected by the rhythms we share.",
    showcaseImages: [
      '/work/la-copa/still1.jpg',
      '/work/la-copa/still2.jpg',
    ],
    bts: [
      '/work/la-copa/bts1.jpg',
      '/work/la-copa/bts2.jpg',
      '/work/la-copa/bts3.jpg',
      '/work/la-copa/bts4.jpg',
      '/work/la-copa/bts5.jpg',
      '/work/la-copa/bts6.jpg',
    ],
  },
  {
    id:          'ruhveda',
    title:       'MANGO MUSE LAUNCH',
    client:      'Ruhveda',
    category:    'COMMERCIAL',
    src:         '/work/ruhveda/still1.jpg',
    thumbnail:   '/work/ruhveda/still1.jpg',
    featured:    false,
    year:        'COMING SOON',
    roles:       'DIRECTOR',
    format:      'Commercial',
    description: "A collaboration between USC's Haute Magazine and Ruhveda.\n\nThis ad highlights the Mango Muse fragrance and announces Ruhveda's release in Sephora locations nationwide.",
    showcaseImages: [
      '/work/ruhveda/still1.jpg',
    ],
  },
  {
    id:          'stay-frosty',
    title:       'STAY FROSTY',
    client:      'Creamy Boys Ice Cream',
    category:    'COMMERCIAL',
    src:         'https://img.youtube.com/vi/JpDXTRT4NyI/maxresdefault.jpg',
    featured:    true,
    year:        '2026',
    roles:       'DIRECTOR / EXECUTIVE PRODUCER',
    format:      'Commercial',
    description: 'Who do you call when things get heated?\n\nA commercial announcing USC Haute Magazine\'s partnership with Creamy Boys Ice Cream. Set against a record-breaking LA heat wave, the spot follows the Creamy Boys as they rescue a defeated, drained city — one scoop at a time.',
    youtubeId:   'JpDXTRT4NyI',
  },

  // ── MUSIC VIDEO ─────────────────────────────────────────────────────────
  {
    id:           'missing-u-asumuh',
    title:        'MISSING U',
    displayTitle: 'MISSING U — ASUMUH',
    client:       'Asumuh',
    artist:       'Asumuh',
    directedBy:   'Eugene Yang',
    category:     'MUSIC VIDEO',
    // YouTube max-res thumbnail — replace src with your custom still if preferred:
    // src: '/work/missing-u.jpg'
    src:          'https://img.youtube.com/vi/DwK4D5g_kko/maxresdefault.jpg',
    featured:     true,
    year:         '2025',
    roles:        'PRODUCER / ACTOR',
    format:       'Music Video',
    description:  'Official music video for "missing u" by Asumuh. A USC Asian Pacific Cinema Association production.',
    youtubeId:    'DwK4D5g_kko',
    stills: [
      '/work/missing-u-asumuh/still1.png',
      '/work/missing-u-asumuh/still2.png',
      '/work/missing-u-asumuh/still3.png',
      '/work/missing-u-asumuh/still4.png',
    ],
    bts: [
      '/work/missing-u-asumuh/bts1.jpg',
      '/work/missing-u-asumuh/bts2.jpg',
      '/work/missing-u-asumuh/bts3.jpg',
    ],
  },
  {
    id:           'anesthetic',
    title:        'ANESTHETIC',
    displayTitle: 'ANESTHETIC — EVAN PAK',
    client:       'Evan Pak',
    artist:       'Evan Pak',
    directedBy:   'Eugene Yang',
    category:     'MUSIC VIDEO',
    src:          '/work/anesthetic/still1.jpg',
    featured:     false,
    year:         'COMING SOON',
    roles:        'PRODUCER / ACTOR',
    format:       'Music Video',
    description:  'Official music video for Evan Pak\'s single "Anesthetic"',
    showcaseImages: [
      '/work/anesthetic/still1.jpg',
      '/work/anesthetic/still2.jpg',
    ],
    bts: [
      '/work/anesthetic/bts1.jpg',
      '/work/anesthetic/bts2.jpg',
      '/work/anesthetic/bts3.jpg',
      '/work/anesthetic/bts4.jpg',
    ],
  },

  // ── NARRATIVE ───────────────────────────────────────────────────────────
  {
    id:          'falling-forward',
    title:       'FALLING FORWARD',
    client:      'Independent',
    category:    'NARRATIVE',
    src:         '/work/falling-forward/thumbnail.jpg',
    thumbnail:   '/work/falling-forward/thumbnail.jpg',
    featured:    false,
    year:        '2024',
    roles:       'DIRECTOR',
    format:      'Short Film',
    description: 'A USC APCA PA Program Alumni Competition Film\nWinner of Audience Choice Award\n\nOut of an everlasting one-sided infatuation with his classmate, a college student finds his most formative friendship in the serendipitous fallout of their impossible romance.',
    youtubeId:   '_Q0f1-kHZ-o',
  },
  {
    id:          'the-i-dilemma',
    title:       'THE I.DILEMMA',
    client:      'Independent',
    category:    'NARRATIVE',
    src:         'https://img.youtube.com/vi/xuEDcJYxeUU/maxresdefault.jpg',
    featured:    false,
    year:        '2024',
    roles:       'DIRECTOR',
    format:      'Short Film',
    description: 'A college student who befriends a bouncer decides whether to use his fake ID or real ID for the first time since turning 21.',
    youtubeId:   'xuEDcJYxeUU',
  },
  {
    id:          'making-of-shanghaied',
    title:       'THE MAKING OF SHANGHAIED',
    client:      'Independent',
    category:    'NARRATIVE',
    src:         'https://img.youtube.com/vi/I-GGBfINwPU/maxresdefault.jpg',
    featured:    false,
    year:        '2022',
    roles:       'DIRECTOR / EXECUTIVE PRODUCER / EDITOR',
    format:      'Documentary',
    description: 'A documentary on a musical I co-created with my childhood best friend during COVID. The musical performed 3 sold-out nights at the Huiyin Theater in Shanghai, China.',
    youtubeId:   'I-GGBfINwPU',
  },

  // ── SOCIAL MEDIA ────────────────────────────────────────────────────────
  {
    id:          'reflekt-together',
    title:       'REFLEKT TOGETHER',
    client:      'Reflekt Skincare',
    category:    'SOCIAL MEDIA',
    src:         '/work/reflekt-together/thumbnail.jpg',
    featured:    false,
    year:        '2025',
    roles:       'DIRECTOR / EDITOR',
    format:      'Social Media Series',
    description: 'A Trojan Marketing Group social media series for Reflekt Skincare where students share how skincare has helped them connect with their parents, their cultures, and even each other.',
    youtubeId:   'Bb1STZBVFBQ',
    caseStudyUrl: 'https://docs.google.com/presentation/d/19H-ZVW0wyRwj14gZbxxFT63i-F5CLYqM_p5LwfQU_yE/edit?usp=sharing',
  },
  {
    id:          'intl-vs-abc',
    title:       'INTERNATIONAL VS ABC STUDENTS',
    client:      'APCA Closeup',
    category:    'SOCIAL MEDIA',
    src:         '/work/intl-vs-abc/still2.jpg',
    featured:    false,
    year:        '2025',
    roles:       'CREATIVE DIRECTOR',
    format:      'Social Media Series',
    description: 'We put 12 Asian students from diverse ethnicities and backgrounds in dialogue with each other — sparking conversations about the nuanced experiences of being Asian in America, from East Coast to West Coast, NorCal to SoCal, growing up internationally versus in the U.S., and the many identities within the Asian American community.\n\nIn just the span of one month:\n+350% subscribers on Youtube\n+750% followers on Instagram\n+5,000% views across platforms',
    showcaseImages: [
      '/work/intl-vs-abc/still1.jpg',
      '/work/intl-vs-abc/still2.jpg',
      '/work/intl-vs-abc/still3.jpg',
    ],
    impact: [
      '/work/intl-vs-abc/impact1.jpg',
      '/work/intl-vs-abc/impact2.jpg',
    ],
    instagramUrl:      'https://www.instagram.com/apca.closeup/',
    youtubeChannelUrl: 'https://www.youtube.com/@APCACloseup/videos',
  },
  {
    id:          'ultimate-cooking-show',
    title:       'THE ULTIMATE COOKING SHOW',
    client:      'APCA Closeup',
    category:    'SOCIAL MEDIA',
    src:         '/work/ultimate-cooking-show/thumbnail.jpg',
    featured:    false,
    year:        '2025',
    roles:       'CREATIVE DIRECTOR',
    format:      'YouTube Video',
    description: 'Closeup is the New Media Program of the Asian Pacific Cinema Association based at the University of Southern California. This student-run production takes a deeper dive into the APIDA culture and experience through experimental and unscripted content.',
    youtubeId:   'aVfPDL_ybxw',
    bts: [
      '/work/ultimate-cooking-show/bts1.jpg',
      '/work/ultimate-cooking-show/bts2.jpg',
      '/work/ultimate-cooking-show/bts3.jpg',
    ],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const categories: Category[] = ['COMMERCIAL', 'MUSIC VIDEO', 'NARRATIVE', 'SOCIAL MEDIA']
