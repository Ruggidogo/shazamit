import { useRef } from 'react';
import { motion, useInView, useReducedMotion, type Transition } from 'framer-motion';
import { Linkedin, MapPin, Youtube } from 'lucide-react';
import { company, products } from '@/data/site';
import { AMBIENT } from '@/lib/motion';
import { ButtonLink } from '../ui/Button';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { AnimatedGridPattern } from '../ui/AnimatedGridPattern';

/**
 * Adattato da 21st.dev — ravikatiyar162/minimalist-hero (H1), v2 su superficie ink
 * con dillionverma/animated-grid-pattern come sfondo (§2.2, §10.2).
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="on-ink relative overflow-hidden bg-ink">
      <AnimatedGridPattern />
      <RevealGroup className="container-site relative pb-12 pt-16 lg:pt-24">
        <RevealItem>
          <p className="eyebrow text-accent-on-ink">Dal {company.since} · Distributori esclusivi per l’Italia</p>
        </RevealItem>
        <RevealItem>
          <h1 id="hero-title" className="mt-6 text-display text-on-ink">
            L’intelligenza
            <br />
            nei documenti.
          </h1>
        </RevealItem>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <RevealItem className="md:col-span-2 lg:col-span-5">
            <p className="max-w-prose text-lead text-on-ink-subtle">
              Generiamo, convertiamo, distribuiamo e proteggiamo i documenti delle aziende: dal catalogo prodotti al
              documento di trasporto, dalle etichette all’estratto conto.
            </p>
            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <ButtonLink to="/contatti?richiesta=demo" variant="onInk">
                Richiedi una demo
              </ButtonLink>
              <ButtonLink to="/soluzioni" variant="onInkSecondary">
                Scopri le soluzioni
              </ButtonLink>
            </div>
          </RevealItem>

          <RevealItem className="hidden md:block lg:col-span-3">
            <DocumentMark />
          </RevealItem>

          <RevealItem className="lg:col-span-4">
            <dl className="grid grid-cols-1 border-t border-border-on-ink">
              <Stat value="30+" label="anni nel software per i documenti aziendali" />
              <Stat value={String(products.length)} label="soluzioni software distribuite in esclusiva per l’Italia" />
              <Stat value="24/7" label="hotline di assistenza disponibile su contratto" />
            </dl>
          </RevealItem>
        </div>

        <RevealItem className="mt-16 flex flex-col gap-2 border-t border-border-on-ink pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shazam I.T. su LinkedIn (si apre in una nuova scheda)"
              className="inline-flex cursor-pointer rounded-sm p-3 text-on-ink-subtle transition-colors hover:bg-ink-hover hover:text-on-ink"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href={company.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shazam I.T. su YouTube (si apre in una nuova scheda)"
              className="inline-flex cursor-pointer rounded-sm p-3 text-on-ink-subtle transition-colors hover:bg-ink-hover hover:text-on-ink"
            >
              <Youtube size={20} aria-hidden="true" />
            </a>
          </div>
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 py-3 text-caption text-on-ink-subtle underline-offset-4 transition-colors hover:text-on-ink hover:underline"
          >
            <MapPin size={16} aria-hidden="true" />
            {company.address}, Forlì
          </a>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-border-on-ink py-4">
      <dt className="order-2 text-caption text-on-ink-subtle">{label}</dt>
      <dd className="order-1 font-display text-h3 text-on-ink">{value}</dd>
    </div>
  );
}

/** Documento che si compone da solo e riceve il sigillo di sicurezza. Decorativo. */
function DocumentMark() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const play = inView && !reduce;
  const t = (delay: number, times: number[]): Transition => ({ duration: AMBIENT, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6, delay, times });
  const grow = (w: number, d: number) => ({
    initial: false as const,
    animate: { width: play ? [0, w, w, 0] : w },
    transition: t(d, [0, 0.3, 0.85, 1]),
  });
  return (
    <div ref={ref} className="relative aspect-square w-full rounded-md border border-border-on-ink bg-ink-hover p-8" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <rect x="52" y="20" width="120" height="156" className="fill-ink stroke-border-on-ink" />
        <rect x="28" y="36" width="120" height="156" className="fill-surface" />
        <motion.rect x="44" y="56" height="8" className="fill-ink" {...grow(56, 0)} />
        <motion.rect x="44" y="76" height="4" className="fill-muted" {...grow(88, 0.1)} />
        <motion.rect x="44" y="88" height="4" className="fill-muted" {...grow(88, 0.2)} />
        <motion.rect x="44" y="100" height="4" className="fill-muted" {...grow(64, 0.3)} />
        <motion.rect x="44" y="120" height="12" className="fill-accent" {...grow(88, 0.4)} />
        <motion.g initial={false} animate={{ opacity: play ? [0, 0, 1, 1, 0] : 1 }} transition={t(0, [0, 0.35, 0.45, 0.85, 1])}>
          <rect x="44" y="148" width="28" height="28" className="fill-ink" />
          <rect x="48" y="152" width="8" height="8" className="fill-surface" />
          <rect x="60" y="164" width="8" height="8" className="fill-surface" />
          <rect x="48" y="164" width="4" height="4" className="fill-surface" />
          <rect x="84" y="152" width="48" height="4" className="fill-muted" />
          <rect x="84" y="164" width="32" height="4" className="fill-muted" />
        </motion.g>
      </svg>
    </div>
  );
}
