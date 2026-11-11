import * as Tabs from '@radix-ui/react-tabs';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseAreas, caseStudies } from '@/data/site';
import { ButtonLink } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

/**
 * Adattato da 21st.dev — shadcnblockscom/feature108 (P3).
 * Una scheda per area; nel pannello il case study principale e, al posto dell'immagine,
 * l'elenco degli altri casi dell'area con il risultato misurabile.
 * Radix Tabs: navigazione con frecce, Home/End, ruoli ARIA gestiti dal componente.
 */
export function CaseStudies() {
  return (
    <section id="case-study" aria-labelledby="case-title" className="section-y border-t bg-surface">
      <div className="container-site">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="case-title"
            eyebrow="Case study"
            title="Risultati misurabili, non promesse."
            intro="Progetti reali realizzati con le soluzioni che distribuiamo: tempi ridotti, errori azzerati, documenti protetti."
          />
          <Reveal>
            <ButtonLink to="/case-study" variant="secondary">
              Tutti i case study
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <Tabs.Root defaultValue={caseAreas[0].id}>
            <Tabs.List aria-label="Aree dei case study" className="flex flex-col gap-2 border-b md:flex-row md:gap-8">
              {caseAreas.map((a) => (
                <Tabs.Trigger
                  key={a.id}
                  value={a.id}
                  className="cursor-pointer border-b border-transparent px-0 py-4 text-left font-medium text-fg-muted transition-colors hover:text-fg data-active:border-accent data-active:text-fg"
                >
                  {a.label}
                  <span className="ml-2 text-caption text-fg-muted">{caseStudies.filter((c) => c.area === a.id).length}</span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {caseAreas.map((a) => {
              const [main, ...others] = caseStudies.filter((c) => c.area === a.id);
              return (
                <Tabs.Content key={a.id} value={a.id} className="mt-8 grid grid-cols-1 gap-8 rounded-md bg-muted p-6 lg:grid-cols-2 lg:gap-12 lg:p-16">
                  <div className="flex flex-col gap-6">
                    <p className="eyebrow text-accent">
                      {main.client} · {main.solution}
                    </p>
                    <h3 className="text-h3 text-fg">{main.title}</h3>
                    <p className="text-body-lg text-secondary">{main.result}.</p>
                    <ButtonLink to={`/case-study/${main.slug}`} className="w-full md:w-auto md:self-start">
                      Leggi il case study
                    </ButtonLink>
                  </div>
                  <ul className="flex flex-col border-t border-border-strong">
                    {others.map((c) => (
                      <li key={c.slug} className="border-b border-border-strong">
                        <Link
                          to={`/case-study/${c.slug}`}
                          className="group flex cursor-pointer items-start justify-between gap-4 py-4 transition-colors hover:text-accent"
                        >
                          <span>
                            <span className="block font-display text-h4 text-fg transition-colors group-hover:text-accent">{c.title}</span>
                            <span className="mt-1 block text-caption text-fg-muted">
                              {c.client === 'Caso SecureDocs' ? c.sector : c.client} — {c.result}
                            </span>
                          </span>
                          <ArrowRight size={20} aria-hidden="true" className="mt-1 shrink-0 text-accent" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Tabs.Content>
              );
            })}
          </Tabs.Root>
        </Reveal>
      </div>
    </section>
  );
}
