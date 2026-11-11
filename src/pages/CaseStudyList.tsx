import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseAreas, caseStudies } from '@/data/site';
import { PageHeader } from '@/components/PageHeader';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FinalCta } from '@/components/sections/FinalCta';
import { usePageTitle } from '@/lib/usePageTitle';

export default function CaseStudyList() {
  usePageTitle('Case study');
  return (
    <>
      <PageHeader
        eyebrow="Case study"
        title="Progetti reali, risultati misurabili."
        intro="Come aziende in Italia e in Europa hanno automatizzato e protetto i propri documenti con le soluzioni che distribuiamo."
      >
        <nav aria-label="Aree dei case study" className="mt-8">
          <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
            {caseAreas.map((a) => (
              <li key={a.id}>
                <Link to={`#${a.id}`} className="cursor-pointer font-medium text-accent underline-offset-4 transition-colors hover:text-accent-hover hover:underline">
                  {a.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {caseAreas.map((a, i) => (
        <section key={a.id} id={a.id} aria-labelledby={`${a.id}-title`} className={i % 2 === 0 ? 'section-y bg-surface' : 'section-y bg-canvas'}>
          <div className="container-site">
            <Reveal>
              <h2 id={`${a.id}-title`} className="text-h2 text-fg">{a.label}</h2>
            </Reveal>
            <RevealGroup as="ul" className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {caseStudies.filter((c) => c.area === a.id).map((c) => (
                <RevealItem as="li" key={c.slug}>
                  <Link
                    to={`/case-study/${c.slug}`}
                    className="group flex h-full cursor-pointer flex-col justify-between gap-8 rounded-md border bg-surface p-6 transition-colors hover:border-border-strong lg:p-8"
                  >
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
      ))}
      <FinalCta />
    </>
  );
}
