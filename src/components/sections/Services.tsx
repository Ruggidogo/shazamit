import { projectSteps } from '@/data/site';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';
import { TextLink } from '../ui/TextLink';

/** Metodo / Servizi (§2.6): timeline numerata, niente icone. */
export function Services() {
  return (
    <section id="servizi" aria-labelledby="servizi-title" className="section-y border-t bg-canvas">
      <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="servizi-title"
              eyebrow="Servizi"
              title="Siamo anzitutto consulenti."
              intro="Partiamo dall’analisi delle vostre esigenze e solo dopo un attento studio di fattibilità proponiamo il software. Ogni soluzione acquista valore solo se accompagnata da un supporto eccellente."
            />
            <Reveal className="mt-8 flex flex-col gap-4 border-t pt-6">
              <p className="text-fg-muted">
                Alcune soluzioni possono essere gestite anche <strong className="font-medium text-fg">in outsourcing</strong> dal nostro team specializzato.
              </p>
              <TextLink to="/contatti?richiesta=assistenza">Parla con l’assistenza</TextLink>
            </Reveal>
          </div>
        </div>

        <RevealGroup as="ol" className="border-t lg:col-span-6 lg:col-start-7">
          {projectSteps.map((step, i) => (
            <RevealItem as="li" key={step.title} className="grid grid-cols-1 gap-2 border-b py-6 md:grid-cols-12 md:gap-6">
              <span className="font-display text-h4 text-accent md:col-span-2" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="md:col-span-10">
                <h3 className="text-h4 text-fg">{step.title}</h3>
                <p className="mt-2 text-fg-muted">{step.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
