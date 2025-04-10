// Navigation
export const ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  HOW_IT_WORKS: '#how-it-works',
  FORM: '/form',
} as const;

// Form Languages
export const LANGUAGES = {
  FRENCH: 'fr',
  ENGLISH: 'en',
  BOTH: 'both',
} as const;

// Form URLs
export const FORM_URLS = {
  [LANGUAGES.FRENCH]: 'https://tally.so/r/3N0jZl',
  [LANGUAGES.ENGLISH]: 'https://tally.so/r/w2rWVM',
} as const;

// Social Media
export const SOCIAL = {
  INSTAGRAM: 'https://www.instagram.com/convivio__paris',
  EMAIL: 'convivio.mailing@gmail.com',
} as const;

// Animation Durations
export const ANIMATION = {
  FAST: '200ms',
  NORMAL: '300ms',
  SLOW: '500ms',
  FADE: '1000ms',
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1400px',
} as const;

// Z-index stack
export const Z_INDEX = {
  BEHIND: -1,
  DEFAULT: 0,
  ABOVE: 1,
  HEADER: 50,
  MODAL: 100,
} as const;

// Common metadata
export const METADATA = {
  TITLE: 'Convivio Paris',
  DESCRIPTION: 'Connecting people through curated dining experiences.',
  KEYWORDS: ['dining', 'social', 'paris', 'community', 'food', 'experience'],
} as const; 