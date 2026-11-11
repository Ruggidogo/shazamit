/**
 * Tailwind theme = design-system/MASTER.md, 1:1.
 * Le chiavi principali SOSTITUISCONO i default di Tailwind (non `extend`):
 * qualsiasi valore fuori dal design system semplicemente non esiste come classe.
 */

/** §4 Palette */
const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  // Superfici chiare
  canvas: '#F8FAFC',
  surface: '#FFFFFF',
  muted: '#E8ECF1',
  ink: { DEFAULT: '#0F172A', hover: '#1E293B' },
  fg: { DEFAULT: '#020617', muted: '#475569' },
  secondary: '#334155',
  accent: { DEFAULT: '#0369A1', hover: '#075985' },
  'on-accent': '#FFFFFF',
  border: { DEFAULT: '#E2E8F0', strong: '#64748B' },
  ring: '#0F172A',
  danger: '#DC2626',
  'on-danger': '#FFFFFF',
  // Superfici scure (ink)
  'on-ink': { DEFAULT: '#FFFFFF', subtle: '#CBD5E1', muted: '#94A3B8' },
  'accent-on-ink': { DEFAULT: '#38BDF8', hover: '#7DD3FC' },
  'ink-on-accent': '#0F172A',
  'border-on-ink': '#334155',
  'ring-on-ink': '#FFFFFF',
};

/** §6 Spacing (unità 4px) + altezza header (§6 Layout) */
const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
  12: '48px',
  16: '64px',
  24: '96px',
  32: '128px',
  header: '72px',
};

/** §5.1 Scala tipografica: [size, { lineHeight, letterSpacing, fontWeight }] */
const fontSize = {
  caption: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0em', fontWeight: '500' }],
  eyebrow: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.08em', fontWeight: '500' }],
  body: ['1rem', { lineHeight: '1.625rem', letterSpacing: '0em', fontWeight: '400' }],
  'body-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0em', fontWeight: '400' }],
  lead: ['1.25rem', { lineHeight: '1.875rem', letterSpacing: '0em', fontWeight: '400' }],
  h4: ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em', fontWeight: '600' }],
  h3: ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em', fontWeight: '600' }],
  h2: ['clamp(2.25rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
  h1: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
  display: ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '700' }],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // §7 Breakpoint (mobile-first, base = 375)
    screens: { md: '768px', lg: '1024px', xl: '1440px' },
    colors,
    spacing,
    fontSize,
    // §5 Font: solo Space Grotesk e DM Sans
    fontFamily: {
      display: ['"Space Grotesk"', 'sans-serif'],
      sans: ['"DM Sans"', 'sans-serif'],
    },
    fontWeight: { regular: '400', medium: '500', semibold: '600', bold: '700' },
    letterSpacing: { normal: '0em', eyebrow: '0.08em' },
    lineHeight: {},
    // §8 Forme: niente pill
    borderRadius: { none: '0px', sm: '4px', md: '8px' },
    borderWidth: { DEFAULT: '1px', 0: '0px' },
    borderColor: ({ theme }) => ({ ...theme('colors'), DEFAULT: colors.border.DEFAULT }),
    outlineWidth: { 2: '2px' },
    outlineOffset: { 2: '2px' },
    // §11 Divieti: nessuna ombra, nessun gradiente, nessun blur/glass
    boxShadow: { none: 'none' },
    dropShadow: {},
    backgroundImage: {},
    gradientColorStops: {},
    blur: {},
    backdropBlur: {},
    // §6 Layout
    maxWidth: { none: 'none', full: '100%', container: '1280px', prose: '65ch' },
    // §10 Interazione: hover 200ms ease-out
    transitionDuration: { DEFAULT: '200ms', 200: '200ms' },
    transitionTimingFunction: { DEFAULT: 'ease-out', out: 'ease-out' },
    // Stato attivo delle tab Radix senza varianti arbitrarie
    data: { active: 'state="active"' },
    extend: {},
  },
  plugins: [],
};
