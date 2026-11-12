import { Link, useParams } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import { ArrowLeft, ArrowRight, Check, Minus } from 'lucide-react';
import { caseStudies, products, productSlug } from '@/data/site';
import { solutions, solutionBySlug } from '@/data/solutions';
import { DarkPageHeader } from '@/components/DarkPageHeader';
import { SolutionPanel } from '@/components/sections/Solutions';
import { FlowDiagram } from '@/components/FlowDiagram';
import { FinalCta } from '@/components/sections/FinalCta';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { AnimatedGridPattern } from '@/components/ui/AnimatedGridPattern';
import { usePageTitle } from '@/lib/usePageTitle';
import NotFound from './NotFound';

export default function SolutionDetail() {
  const { slug } = useParams();
  const s = solutionBySlug(slug);
  usePageTitle(s ? s.short : 'Pagina non trovata');
  if (!s) return <NotFound />;

  const idx = solutions.indexOf(s);
  const next = solutions[(idx + 1) % solutions.length];
  const prods = s.products.map((n) => products.find((p) => p.name === n)!).filter(Boolean);
  const cases = s.caseSlugs.map((c) => caseStudies.find((x) => x.slug === c)!).filter(Boolean);
  const demo = `/contatti?richiesta=demo&prodotto=${encodeURIComponent(s.products[0])}`;

  return (
    <>
      <DarkPageHeader
        eyebrow={
          <Link to="/soluzioni" className="inline-flex cursor-pointer items-center gap-2 py-3 text-accent-on-ink underline-offset-4 transition-colors hover:text-accent-on-ink-hover hover:underline">
            <ArrowLeft size={16} aria-hidden="true" /> Soluzioni · {s.number}
          </Link>
        }
        title={s.title}
        intro={s.tagline}
        aside={<SolutionPanel solution={s} linked={false} />}
      >
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <ButtonLink to={demo} variant="onInk">
            Richiedi una demo
          </ButtonLink>
          <ButtonLink to="/contatti?richiesta=try-and-buy" variant="onInkSecondary">
            Prova 30 giorni
          </ButtonLink>
        </div>
      </DarkPageHeader>

      {/* Perché */}
      <section aria-labelledby="perche-title" className="section-y bg-surface">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-accent">Perché serve</p>
            <h2 id="perche-title" className="mt-4 text-h2 text-fg">{s.why.title}</h2>
          </Reveal>
          <Reveal className="flex flex-col gap-6 text-body-lg text-secondary lg:col-span-7">
            {s.why.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        {s.contrast && (
          <Reveal className="container-site mt-16">
            <Tabs.Root defaultValue="with">
              <Tabs.List aria-label="Confronto" className="flex w-full rounded-sm border border-border-strong bg-canvas p-1 md:inline-flex md:w-auto">
                {(['without', 'with'] as const).map((k, i) => (
                  <Tabs.Trigger
                    key={k}
                    value={k}
                    className="flex-1 cursor-pointer rounded-sm px-4 py-3 font-medium text-secondary md:flex-none md:px-6 transition-colors hover:text-fg data-active:bg-ink data-active:text-on-ink"
                  >
                    {s.contrast!.labels[i]}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              {(['without', 'with'] as const).map((k) => (
                <Tabs.Content key={k} value={k} className="mt-6">
                  <RevealGroup as="ul" className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {s.contrast![k].map((item) => (
                      <RevealItem
                        as="li"
                        key={item}
                        className={k === 'with' ? 'flex items-start gap-4 rounded-md bg-ink p-6 text-on-ink' : 'flex items-start gap-4 rounded-md border bg-canvas p-6 text-secondary'}
                      >
                        {k === 'with' ? (
                          <Check size={20} aria-hidden="true" className="mt-1 shrink-0 text-accent-on-ink" />
                        ) : (
                          <Minus size={20} aria-hidden="true" className="mt-1 shrink-0 text-danger" />
                        )}
                        <span>{item}</span>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </Reveal>
        )}
      </section>

      {/* Come funziona */}
      <section aria-labelledby="come-title" className="on-ink section-y relative overflow-hidden bg-ink">
        <AnimatedGridPattern />
        <div className="container-site relative">
          <Reveal>
            <p className="eyebrow text-accent-on-ink">Come funziona</p>
            <h2 id="come-title" className="mt-4 max-w-prose text-h2 text-on-ink">Dal dato al documento, in quattro passaggi.</h2>
          </Reveal>
          <div className="mt-12 lg:mt-16">
            <FlowDiagram steps={s.flow} />
          </div>
        </div>
      </section>

      {/* Cosa puoi fare */}
      <section aria-labelledby="cosa-title" className="section-y bg-canvas">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow text-accent">Cosa permette di fare</p>
            <h2 id="cosa-title" className="mt-4 text-h2 text-fg">Funzionalità principali</h2>
          </Reveal>
          <RevealGroup as="ul" className="grid grid-cols-1 border-t md:grid-cols-2 lg:col-span-8">
            {s.capabilities.map((c, i) => (
              <RevealItem as="li" key={c} className="flex gap-4 border-b py-6 md:pr-8">
                <span className="font-display text-h4 text-accent" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-body-lg text-fg">{c}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Prodotti */}
      <section aria-labelledby="prodotti-title" className="section-y border-t bg-surface">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow text-accent">Prodotti</p>
            <h2 id="prodotti-title" className="mt-4 text-h2 text-fg">Il software della soluzione</h2>
          </Reveal>
          <RevealGroup as="ul" className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {prods.map((p) => (
              <RevealItem as="li" key={p.name}>
                <article className="flex h-full flex-col justify-between gap-6 rounded-md border bg-surface p-6 transition-colors hover:border-border-strong lg:p-8">
                  <div>
                    <h3 className="text-h3 text-fg">{p.name}</h3>
                    <p className="mt-4 text-fg-muted">{p.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                    <ButtonLink to={`/contatti?richiesta=prodotto&prodotto=${encodeURIComponent(p.name)}`} variant="secondary">
                      Richiedi informazioni
                    </ButtonLink>
                    <Link to={`/prodotti#${productSlug(p.name)}`} className="inline-flex cursor-pointer items-center gap-2 py-3 font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline">
                      Nel catalogo <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Case study */}
      {cases.length > 0 && (
        <section aria-labelledby="casi-title" className="section-y border-t bg-canvas">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow text-accent">Case study</p>
              <h2 id="casi-title" className="mt-4 text-h2 text-fg">Chi la usa già</h2>
            </Reveal>
            <RevealGroup as="ul" className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => (
                <RevealItem as="li" key={c.slug}>
                  <Link to={`/case-study/${c.slug}`} className="group flex h-full cursor-pointer flex-col justify-between gap-8 rounded-md border bg-surface p-6 transition-colors hover:border-border-strong">
                    <div>
                      <p className="eyebrow text-accent">{c.client === 'Caso SecureDocs' ? c.sector : c.client}</p>
                      <h3 className="mt-4 text-h4 text-fg">{c.title}</h3>
                      <p className="mt-4 text-fg-muted">{c.result}.</p>
                    </div>
                    <span className="inline-flex items-center gap-2 font-medium text-accent underline-offset-4 group-hover:underline">
                      Leggi il case study <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <nav aria-label="Soluzione successiva" className="border-t bg-surface">
        <Link to={`/soluzioni/${next.slug}`} className="group container-site flex cursor-pointer items-center justify-between gap-6 py-12">
          <span>
            <span className="eyebrow block text-fg-muted">Soluzione successiva · {next.number}</span>
            <span className="mt-2 block font-display text-h3 text-fg transition-colors group-hover:text-accent">{next.title}</span>
          </span>
          <ArrowRight size={24} aria-hidden="true" className="shrink-0 text-accent" />
        </Link>
      </nav>
      <FinalCta />
    </>
  );
}
