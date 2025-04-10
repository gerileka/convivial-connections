export const convivioColors = {
  bg: 'var(--convivio-bg)',
  text: 'var(--convivio-text)',
  accent: 'var(--convivio-accent)',
} as const;

// CSS color values for reference and fallbacks
export const convivioColorValues = {
  bg: '#f4f2e5',
  text: '#3d615a',
  accent: '#8B4513',
} as const;

// Utility type for type-safe color keys
export type ConvivioColor = keyof typeof convivioColors;

// Opacity variants utility
export const withOpacity = (colorVar: string, opacity: number) => {
  return `rgb(var(${colorVar}) / ${opacity})`;
}; 