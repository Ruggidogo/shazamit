import { Linkedin, MapPin, Youtube } from 'lucide-react';
import { company, products } from '@/data/site';
import { ButtonLink } from '../ui/Button';
import { RevealGroup, RevealItem } from '../ui/Reveal';

/**
 * Adattato da 21st.dev — ravikatiyar162/minimalist-hero (H1).
 * Della struttura originale restano: titolo enorme, testo + elemento grafico centrale + colonna laterale,
 * barra inferiore con social e località. Colori, spaziature, animazioni e immagine sostituiti con i token.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-canvas">
      <RevealGroup className="container-site pb-12 pt-16 lg:pt-24">
        <RevealItem>
          <p className="eyebrow text-accent">Dal {company.since} · Distributori esclusivi per l’Italia</p>
        </RevealItem>
        <RevealItem>
          <h1 id="hero-title" className="mt-6 text-display text-fg">
            L’intelligenza
            <br />
            nei documenti.
          </h1>
        </RevealItem>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <RevealItem className="md:col-span-2 lg:col-span-5">
            <p className="max-w-prose text-lead text-secondary">
              Generiamo, convertiamo, distribuiamo e proteggiamo i documenti delle aziende: dal catalogo prodotti al
              documento di trasporto, dalle etichette all’estratto conto.
            </p>
            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <ButtonLink to="/contatti?richiesta=demo">Richiedi una demo</ButtonLink>
              <ButtonLink to="/#soluzioni" variant="secondary">
                Scopri le soluzioni
              </ButtonLink>
            </div>
          </RevealItem>

          <RevealItem className="hidden md:block lg:col-span-3">
            <DocumentMark />
          </RevealItem>

          <RevealItem className="lg:col-span-4">
            <dl className="grid grid-cols-1 border-t">
              <Stat value="30+" label="anni nel software per i documenti aziendali" />
              <Stat value={String(products.length)} label="soluzioni software distribuite in esclusiva per l’Italia" />
              <Stat value="24/7" label="hotline di assistenza disponibile su contratto" />
            </dl>
          </RevealItem>
        </div>

        <RevealItem className="mt-16 flex flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shazam I.T. su LinkedIn (si apre in una nuova scheda)"
              className="inline-flex cursor-pointer rounded-sm p-3 text-secondary transition-colors hover:bg-muted hover:text-fg"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href={company.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shazam I.T. su YouTube (si apre in una nuova scheda)"
              className="inline-flex cursor-pointer rounded-sm p-3 text-secondary transition-colors hover:bg-muted hover:text-fg"
            >
              <Youtube size={20} aria-hidden="true" />
            </a>
          </div>
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 text-caption text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
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
    <div className="flex items-baseline gap-4 border-b py-4">
      <dt className="order-2 text-caption text-fg-muted">{label}</dt>
      <dd className="order-1 font-display text-h3 text-fg">{value}</dd>
    </div>
  );
}

/** Elemento grafico centrale: documenti sovrapposti con marcatura di sicurezza. Decorativo. */
function DocumentMark() {
  return (
    <div className="aspect-square w-full rounded-md bg-ink p-8" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-full w-full" role="presentation">
        <rect x="52" y="20" width="120" height="156" className="fill-ink-hover stroke-border-on-ink" strokeWidth="1" />
        <rect x="28" y="36" width="120" height="156" className="fill-surface" />
        <rect x="44" y="56" width="56" height="8" className="fill-ink" />
        <rect x="44" y="76" width="88" height="4" className="fill-muted" />
        <rect x="44" y="88" width="88" height="4" className="fill-muted" />
        <rect x="44" y="100" width="64" height="4" className="fill-muted" />
        <rect x="44" y="120" width="88" height="12" className="fill-accent" />
        <rect x="44" y="148" width="28" height="28" className="fill-ink" />
        <rect x="48" y="152" width="8" height="8" className="fill-surface" />
        <rect x="60" y="164" width="8" height="8" className="fill-surface" />
        <rect x="48" y="164" width="4" height="4" className="fill-surface" />
        <rect x="84" y="152" width="48" height="4" className="fill-muted" />
        <rect x="84" y="164" width="32" height="4" className="fill-muted" />
      </svg>
    </div>
  );
}
