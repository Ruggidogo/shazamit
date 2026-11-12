import { areas, products, productSlug } from '@/data/site';
import { solutionByArea } from '@/data/solutions';
import { TextLink } from '@/components/ui/TextLink';
import { PageHeader } from '@/components/PageHeader';
import { ButtonLink } from '@/components/ui/Button';
import { RevealGroup, RevealItem, Reveal } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/sections/FinalCta';
import { usePageTitle } from '@/lib/usePageTitle';
import { Link } from 'react-router-dom';

export default function Products() {
  usePageTitle('Prodotti');
  return (
    <>
      <PageHeader
        eyebrow="Prodotti"
        title="Software di cui siamo distributori unici per l’Italia."
        intro="Soluzioni modulari e configurabili, disponibili con demo online o in sede, Try-and-Buy di 30 giorni, chiavi in mano o a noleggio operativo."
      >
        <nav aria-label="Aree di prodotto" className="mt-6">
          <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-x-6">
            {areas.map((a) => (
              <li key={a.id}>
                <Link to={`#${a.id}`} className="inline-flex cursor-pointer py-3 font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline">
                  {a.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {areas.map((a, i) => (
        <section key={a.id} id={a.id} aria-labelledby={`${a.id}-title`} className={i % 2 === 0 ? 'section-y bg-surface' : 'section-y bg-canvas'}>
          <div className="container-site grid grid-cols-1 gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow text-accent">{String(i + 1).padStart(2, '0')}</p>
              <h2 id={`${a.id}-title`} className="mt-4 text-h3 text-fg">{a.title}</h2>
              <p className="mt-4 text-fg-muted">{a.description}</p>
              <TextLink to={`/soluzioni/${solutionByArea(a.id).slug}`} className="mt-2">Scopri la soluzione</TextLink>
            </Reveal>
            <RevealGroup as="ul" className="border-t lg:col-span-7 lg:col-start-6">
              {products.filter((p) => p.area === a.id).map((p) => (
                <RevealItem as="li" key={p.name} className="border-b py-6">
                  <article id={productSlug(p.name)} className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-start">
                    <div className="md:col-span-8">
                      <h3 className="text-h4 text-fg">{p.name}</h3>
                      <p className="mt-2 text-fg-muted">{p.description}</p>
                    </div>
                    <div className="md:col-span-4 md:flex md:justify-end">
                      <ButtonLink to={`/contatti?richiesta=prodotto&prodotto=${encodeURIComponent(p.name)}`} variant="secondary" className="w-full md:w-auto">
                        Richiedi informazioni
                      </ButtonLink>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ))}
      <FinalCta />
    </>
  );
}
