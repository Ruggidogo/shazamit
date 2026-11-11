import { company } from '@/data/site';
import { PageHeader } from '@/components/PageHeader';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Clients } from '@/components/sections/Clients';
import { FinalCta } from '@/components/sections/FinalCta';
import { usePageTitle } from '@/lib/usePageTitle';

const roles = [
  {
    title: 'Commerciale di zona',
    text: 'Promuove e sviluppa le opportunità commerciali nella propria area secondo le linee strategiche aziendali: gestisce direttamente il rapporto con i clienti, monitora i risultati e sviluppa nuovi rapporti con clienti potenziali.',
  },
  {
    title: 'Sistemista / Analista di supporto tecnico',
    text: 'Consulenza e progettazione delle configurazioni per clienti e partner, test applicativi, dimostrazioni e presentazioni; supporto tecnico di 1° e 2° livello, installazione, configurazione e implementazione delle soluzioni.',
  },
];

export default function Company() {
  usePageTitle('Azienda');
  return (
    <>
      <PageHeader
        eyebrow="Azienda"
        title={`Dal ${company.since}, un punto di riferimento per i documenti aziendali.`}
        intro="Forte dell’esperienza maturata presso importanti multinazionali informatiche, Shazam I.T. accompagna aziende medio-grandi, private e pubbliche, verso decisioni IT informate."
      />

      <section aria-labelledby="storia-title" className="section-y bg-surface">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 id="storia-title" className="text-h2 text-fg">La nostra storia</h2>
          </Reveal>
          <Reveal className="flex flex-col gap-6 text-body-lg text-secondary lg:col-span-7">
            <p>
              In oltre 30 anni abbiamo accompagnato l’evoluzione del mercato, spesso anticipando le esigenze delle aziende. Dalle
              soluzioni per la stampa cartacea siamo passati gradualmente al software per generare, convertire, ottimizzare e
              distribuire documenti, stampati ed elettronici, e a soluzioni per la sicurezza dei dati.
            </p>
            <p>
              Scegliamo le migliori soluzioni sviluppate da primarie società internazionali, le sottoponiamo a stress test e ne
              valutiamo il supporto prima di portarle sul mercato italiano, di cui siamo distributori unici.
            </p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="mission-title" className="on-ink section-y bg-ink">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-accent-on-ink">La nostra mission</p>
            <h2 id="mission-title" className="mt-4 text-h2 text-on-ink">L’informatica non è un costo.</h2>
          </Reveal>
          <RevealGroup as="ul" className="border-t border-border-on-ink lg:col-span-7">
            {[
              ['Consulenti, prima di tutto', 'Partiamo dall’analisi di esigenze e obiettivi; solo dopo attenti studi di fattibilità proponiamo le soluzioni con il miglior rapporto prestazioni/prezzo.'],
              ['Soluzioni mission-critical', 'Software che aiuta a lavorare in modo più efficiente, con investimenti IT sicuri e un ritorno misurabile anche in risparmio sui costi.'],
              ['Sistemisti al vostro fianco', 'Un’ampia gamma di servizi specifici, con i nostri sistemisti a disposizione anche in sede.'],
            ].map(([t, d]) => (
              <RevealItem as="li" key={t} className="border-b border-border-on-ink py-6">
                <h3 className="text-h4 text-on-ink">{t}</h3>
                <p className="mt-2 text-on-ink-subtle">{d}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Clients />

      <section id="carriere" aria-labelledby="carriere-title" className="section-y border-t bg-surface">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-accent">Lavora con noi</p>
            <h2 id="carriere-title" className="mt-4 text-h2 text-fg">Cerchiamo professionisti di talento.</h2>
            <p className="mt-6 text-body-lg text-fg-muted">Apprezziamo le persone competenti che con impegno e passione lavorano per il successo dell’intera squadra.</p>
            <ButtonLink to={`mailto:${company.emailCareers}?subject=${encodeURIComponent('Candidatura')}`} className="mt-8">
              Invia il tuo CV
            </ButtonLink>
          </Reveal>
          <RevealGroup as="ul" className="border-t lg:col-span-7">
            {roles.map((r) => (
              <RevealItem as="li" key={r.title} className="border-b py-6">
                <h3 className="text-h4 text-fg">{r.title}</h3>
                <p className="mt-2 text-fg-muted">{r.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="partner" aria-labelledby="partner-title" className="section-y border-t bg-canvas">
        <Reveal className="container-site grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent">Partners Program</p>
            <h2 id="partner-title" className="mt-4 text-h2 text-fg">Insieme otteniamo risultati migliori.</h2>
            <p className="mt-6 max-w-prose text-body-lg text-fg-muted">
              Il programma è rivolto a fornitori di hardware e software, consulenti e intermediari: le nostre soluzioni e i nostri
              servizi diventano nuove opportunità di business con i vostri clienti.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <ButtonLink to="/contatti?richiesta=partner" className="w-full">Diventa partner</ButtonLink>
          </div>
        </Reveal>
      </section>
      <FinalCta />
    </>
  );
}
