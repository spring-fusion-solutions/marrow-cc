// ============================================================
//  MARROW CC — CENTRALIZED THEME CONFIG
//  Change anything here and the whole site reflects it.
// ============================================================

export const COLORS = {
  // Core palette
  black:        '#0A0A0A',
  darkBg:       '#0D0D0D',
  cardBg:       '#141414',
  borderDark:   '#1E1E1E',

  // Brand
  crimson:      '#C8102E',   // Primary red
  crimsonLight: '#E8192E',
  crimsonDark:  '#8B0000',
  gold:         '#D4AF37',   // Primary gold
  goldLight:    '#F0D060',
  goldDim:      '#9A7B20',

  // Text
  white:        '#FFFFFF',
  offWhite:     '#F0EDE6',
  muted:        '#888888',
  subtle:       '#555555',
};

export const FONTS = {
  display: "'Equinox', 'Rajdhani', sans-serif",  // Hero headings
  body:    "'Rajdhani', 'Barlow', sans-serif",    // Body text
  accent:  "'Barlow Condensed', sans-serif",      // Labels / tags
};

export const FONT_SIZES = {
  hero:   'clamp(3rem, 8vw, 7rem)',
  h1:     'clamp(2rem, 5vw, 4rem)',
  h2:     'clamp(1.5rem, 3vw, 2.5rem)',
  h3:     'clamp(1.1rem, 2vw, 1.5rem)',
  body:   '1.05rem',
  small:  '0.875rem',
};

// ============================================================
//  ASSET LINKS — centralize all images / media here
// ============================================================

export const ASSETS = {
  logo:   '/assets/logo.png',   // Replace with your hosted logo URL
  jersey: '/assets/jersey.png', // Replace with your hosted jersey URL

  // Squad member images — add/remove freely
  squad: [
    { id: 1,  name: 'Abdul Wahhab',   role: 'Captain / All-Rounder', number: 18, image: new URL('../assets/abdul-wahhab.jpg', import.meta.url).href },
    { id: 2,  name: 'Infaz',    role: 'Opening Batsman',        number: 7,  image: new URL('../assets/infaz.jpeg', import.meta.url).href },
    { id: 3,  name: 'Thasleem',    role: 'Fast Bowler',            number: 11,  image :new URL('../assets/thasleem.jpg', import.meta.url).href },
    { id: 4,  name: 'Khaiz',    role: 'Wicket Keeper',          number: 4,  image :new URL('../assets/kaiz.jpg', import.meta.url).href },
    { id: 5,  name: 'Nifraz',    role: 'Spin Bowler',            number: 5,  image: '' },
    { id: 6,  name: 'Shifan',    role: 'Wicket Keeper',          number: 4,  image: '' },
    { id: 7,  name: 'Kavin',     role: 'Middle Order',           number: 6,  image: new URL('../assets/kavin.jpeg', import.meta.url).href  },
    { id: 8,  name: 'Dhulakshan',   role: 'Opening Bowler',         number: 9,  image: new URL('../assets/dhulakshan.jpeg', import.meta.url).href },
    { id: 9,  name: 'Shabith',   role: 'All-Rounder',            number: 14, image: new URL('../assets/shabith.jpeg', import.meta.url).href  },
    { id: 10,  name: 'Ammar',    role: 'Batsman',                number: 22, image: '' },
    { id: 11,  name: 'Abdul Malik',    role: 'Wicket Keeper',          number: 4,  image: '' },
    { id: 12,  name: 'Avishka',    role: 'Wicket Keeper',          number: 4,  image: '' },
   
  ],
};

// ============================================================
//  SOCIAL LINKS
// ============================================================

export const SOCIAL = {
  facebook:  'https://facebook.com',
  instagram: 'https://instagram.com',
  tiktok:    'https://tiktok.com',
  whatsapp:  'https://wa.me/94762113551',  // Replace with real number
};

// ============================================================
//  NAVIGATION ITEMS
// ============================================================

export const NAV_ITEMS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Mission',  href: '#mission' },
  { label: 'Squad',    href: '#squad' },
  { label: 'Contact',  href: '#contact' },
];
