import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { caseAreas, caseStudies } from '@/data/site';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/sections/FinalCta';
import { usePageTitle } from '@/lib/usePageTitle';
import NotFound from './NotFound';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const index = caseStudies.findIndex((c) => c.slug === slug);
  const c = caseStudies[index];
  usePageTitle(c ? `${c.title} · Case study` : 'Pagina non trovata');
  if (!c) return <NotFound />;

  const area = caseAreas.find((a) => a.id === c.area)!;
  const next = caseStudies[(index + 1) % caseStudies.length];
  const label = c.client === 'Caso SecureDocs' ? c.sector : c.client;

  return (
    <>
      <article>
        <header className="border-b bg-canvas pb-12 pt-16 lg:pb-16 lg:pt-24">
          <Reveal className="container-site">
            <Link to={`/case-study#${c.area}`} className="inline-flex cursor-pointer items-center gap-2 py-3 font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline">
              <ArrowLeft size={16} aria-hidden="true" /> {area.label}
            </Link>
            <p className="eyebrow mt-6 text-accent">{label}</p>
            <h1 className="mt-4 max-w-prose text-h1 text-fg">{c.title}</h1>
            <p className="mt-6 max-w-prose text-lead text-secondary">{c.result}.</p>
          </Reveal>
        </header>

        <div className="section-y bg-surface">
          <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-h3 text-fg">Il contesto</h2>
                <p className="mt-4 max-w-prose text-body-lg text-secondary">{c.intro}</p>
              </Reveal>

              <Reveal className="mt-12">
                <h2 className="text-h3 text-fg">Le sfide</h2>
              </Reveal>
              <RevealGroup as="ol" className="mt-6 border-t">
                {c.challenges.map((ch, i) => (
                  <RevealItem as="li" key={ch.title} className="grid grid-cols-1 gap-2 border-b py-6 md:grid-cols-12 md:gap-6">
                    <span className="font-display text-h4 text-accent md:col-span-2" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <div className="md:col-span-10">
                      <h3 className="text-h4 text-fg">{ch.title}</h3>
                      <p className="mt-2 text-fg-muted">{ch.text}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>

              <Reveal className="mt-12">
                <h2 className="text-h3 text-fg">Il risultato</h2>
                <p className="mt-4 max-w-prose text-body-lg text-secondary">{c.outcome}</p>
              </Reveal>

              {c.quote && (
                <Reveal as="div" className="mt-12 border-l border-accent pl-6">
                  <figure>
                    <blockquote className="font-display text-h4 text-fg">“{c.quote.text}”</blockquote>
                    <figcaption className="mt-4 text-caption text-fg-muted">{c.quote.author}</figcaption>
                  </figure>
                </Reveal>
              )}
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal className="rounded-md border bg-canvas p-6 lg:sticky lg:top-32 lg:p-8">
                <dl className="flex flex-col gap-4">
                  <div>
                    <dt className="eyebrow text-fg-muted">Settore</dt>
                    <dd className="mt-1 text-fg">{c.sector}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-fg-muted">Soluzione</dt>
                    <dd className="mt-1 text-fg">{c.solution}</dd>
                  </div>
                </dl>
                <p className="mt-6 border-t pt-6 text-fg-muted">
                  Vuoi un risultato simile? Concordiamo un webinar, una demo o un Try-and-Buy.
                </p>
                <ButtonLink to={`/contatti?richiesta=demo&prodotto=${encodeURIComponent(c.solution)}`} className="mt-6 w-full">
                  Richiedi una demo
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </article>

      <nav aria-label="Case study successivo" className="border-t bg-canvas">
        <Link to={`/case-study/${next.slug}`} className="group container-site flex cursor-pointer items-center justify-between gap-6 py-12">
          <span>
            <span className="eyebrow block text-fg-muted">Prossimo case study</span>
            <span className="mt-2 block font-display text-h3 text-fg transition-colors group-hover:text-accent">{next.title}</span>
          </span>
          <ArrowRight size={24} aria-hidden="true" className="shrink-0 text-accent" />
        </Link>
      </nav>
      <FinalCta />
    </>
  );
}
