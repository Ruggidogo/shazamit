import { areas, products, type AreaId } from '@/data/site';
import { cn } from '@/lib/cn';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { TextLink } from '../ui/TextLink';

/** Feature-Rich Showcase in bento grid asimmetrica (§2.4): tile di dimensioni e contenuti diversi, nessuna icona ripetuta. */
const layout: Record<AreaId, string> = {
  sicurezza: 'md:col-span-2 lg:col-span-7 lg:row-span-2',
  publishing: 'lg:col-span-5',
  'dati-variabili': 'lg:col-span-5',
  conversione: 'lg:col-span-5',
  workflow: 'lg:col-span-4',
};

const productsOf = (id: AreaId) => products.filter((p) => p.area === id).map((p) => p.name);

export function Solutions() {
  const [security, ...rest] = areas;
  return (
    <section id="soluzioni" aria-labelledby="soluzioni-title" className="section-y border-t bg-canvas">
      <div className="container-site">
        <SectionHeading
          id="soluzioni-title"
          eyebrow="Soluzioni"
          title="Ogni documento, dal dato alla stampa."
          intro="Selezioniamo i migliori software internazionali, li sottoponiamo a stress test e li portiamo in Italia in esclusiva. Poi li adattiamo ai vostri processi."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {/* Tile principale: sicurezza, su superficie ink */}
          <RevealItem as="article" className={cn('on-ink flex flex-col justify-between gap-12 rounded-md bg-ink p-6 lg:p-12', layout.sicurezza)}>
            <div>
              <p className="eyebrow text-accent-on-ink">01 · {security.short}</p>
              <h3 className="mt-4 text-h3 text-on-ink">{security.title}</h3>
              <p className="mt-4 max-w-prose text-body-lg text-on-ink-subtle">{security.description}</p>
            </div>
            <div>
              <p className="text-caption text-on-ink-muted">{productsOf(security.id).join(' · ')}</p>
              <ul className="mt-4 grid grid-cols-1 border-t border-border-on-ink md:grid-cols-2">
                {['MicroPrint e TROYMark', 'Sfondi anti-copia e pantografi', 'Verifica da smartphone', 'Tracciabilità di ogni stampa'].map((f) => (
                  <li key={f} className="border-b border-border-on-ink py-3 text-on-ink">
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col md:flex-row md:gap-8">
                <TextLink to={`/prodotti#${security.id}`} onInk>
                  Vedi i prodotti
                </TextLink>
                <TextLink to="/case-study#sicurezza" onInk>
                  6 case study
                </TextLink>
              </div>
            </div>
          </RevealItem>

          {rest.map((area, i) => (
            <RevealItem as="article" key={area.id} className={cn('flex flex-col justify-between gap-8 rounded-md border bg-surface p-6 lg:p-8', layout[area.id])}>
              <div>
                <p className="eyebrow text-accent">
                  {String(i + 2).padStart(2, '0')} · {area.short}
                </p>
                <h3 className="mt-4 text-h4 text-fg">{area.title}</h3>
                <p className="mt-4 text-fg-muted">{area.description}</p>
                {area.id === 'publishing' && (
                  <p className="mt-6 border-l border-accent pl-4 text-secondary">
                    <span className="font-display text-h4 text-fg">30 minuti</span> per un catalogo di 1.000 pagine e 30.000 articoli.
                  </p>
                )}
              </div>
              <div className="border-t pt-4">
                <p className="text-caption text-fg-muted">{productsOf(area.id).join(' · ')}</p>
                <TextLink to={`/prodotti#${area.id}`}>
                  Vedi i prodotti
                </TextLink>
              </div>
            </RevealItem>
          ))}

          {/* Tile PIM: diversa per contenuto e fondo */}
          <RevealItem as="article" className="flex flex-col justify-between gap-8 rounded-md bg-muted p-6 md:col-span-2 lg:col-span-3 lg:p-8">
            <div>
              <p className="eyebrow text-accent">06 · PIM</p>
              <h3 className="mt-4 text-h4 text-fg">Un’unica fonte per tutti i dati di prodotto</h3>
              <p className="mt-4 text-secondary">PimCore collegato dal vivo alla pubblicazione automatica: sito, cataloghi e marketplace sempre allineati.</p>
            </div>
            <TextLink to="/case-study#pim">Vadigran e Van Iperen</TextLink>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
