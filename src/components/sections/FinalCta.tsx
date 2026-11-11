import { company } from '@/data/site';
import { ButtonLink } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

/** CTA finale (§2.8) su superficie ink. */
export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="on-ink section-y bg-ink">
      <Reveal className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-accent-on-ink">Parliamone</p>
          <h2 id="cta-title" className="mt-4 text-h1 text-on-ink">
            Quanto tempo vi costano oggi i vostri documenti?
          </h2>
          <p className="mt-6 max-w-prose text-body-lg text-on-ink-subtle">
            Webinar in diretta, analisi delle esigenze, studio di fattibilità, valutazione economica e test gratuiti sui vostri file.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
          <ButtonLink to="/contatti?richiesta=demo" variant="onInk" className="w-full">
            Richiedi una demo
          </ButtonLink>
          <ButtonLink to={company.phoneHref} variant="onInkSecondary" className="w-full">
            Chiama {company.phone}
          </ButtonLink>
          <p className="text-caption text-on-ink-muted">Orari d’ufficio: {company.hours}</p>
        </div>
      </Reveal>
    </section>
  );
}
