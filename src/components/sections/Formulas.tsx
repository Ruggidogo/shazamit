import { Check } from 'lucide-react';
import { formulas } from '@/data/site';
import { cn } from '@/lib/cn';
import { ButtonLink } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealGroup, RevealItem } from '../ui/Reveal';

/**
 * Adattato da 21st.dev — uilayout.contact/pricing-section (F1).
 * Niente prezzi né toggle mensile/annuale: i progetti sono su misura.
 * Il posto del prezzo è occupato dalle condizioni della formula.
 */
export function Formulas() {
  return (
    <section id="formule" aria-labelledby="formule-title" className="section-y border-t bg-surface">
      <div className="container-site">
        <SectionHeading
          id="formule-title"
          eyebrow="Formule"
          title="Tre modi per partire. Un solo progetto su misura."
          intro="Ogni soluzione è dimensionata sui vostri processi: prima la valutiamo insieme, poi scegliete come adottarla."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-3">
          {formulas.map((f, i) => {
            const dark = i === 1;
            return (
              <RevealItem
                as="article"
                key={f.id}
                className={cn('flex flex-col rounded-md border p-6 lg:p-8', dark ? 'on-ink border-ink bg-ink' : 'bg-surface')}
              >
                <p className={cn('eyebrow', dark ? 'text-accent-on-ink' : 'text-accent')}>{f.claim}</p>
                <h3 id={`formula-${f.id}`} className={cn('mt-4 text-h3', dark ? 'text-on-ink' : 'text-fg')}>
                  {f.name}
                </h3>
                <p className={cn('mt-4', dark ? 'text-on-ink-subtle' : 'text-fg-muted')}>{f.description}</p>

                <p className={cn('mt-8 border-t pt-6 font-display text-h4', dark ? 'border-border-on-ink text-on-ink' : 'text-fg')}>{f.terms}</p>

                <ButtonLink to={f.cta.to} variant={dark ? 'onInk' : 'primary'} className="mt-6 w-full">
                  {f.cta.label}
                </ButtonLink>

                <ul className="mt-8 flex flex-col gap-3" aria-label={`Cosa include ${f.name}`}>
                  {f.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={20} aria-hidden="true" className={cn('mt-1 shrink-0', dark ? 'text-accent-on-ink' : 'text-accent')} />
                      <span className={dark ? 'text-on-ink' : 'text-secondary'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
