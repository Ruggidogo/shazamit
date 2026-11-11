import { useRef, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { company, products } from '@/data/site';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { buttonClass } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { usePageTitle } from '@/lib/usePageTitle';

const requestTypes = [
  { value: 'demo', label: 'Demo o webinar' },
  { value: 'try-and-buy', label: 'Try-and-Buy (prova di 30 giorni)' },
  { value: 'progetto', label: 'Valutazione di un progetto chiavi in mano' },
  { value: 'noleggio', label: 'Noleggio operativo' },
  { value: 'prodotto', label: 'Informazioni su un prodotto' },
  { value: 'assistenza', label: 'Assistenza tecnica' },
  { value: 'partner', label: 'Partners Program' },
  { value: 'altro', label: 'Altro' },
];

type Field = 'nome' | 'azienda' | 'email' | 'telefono' | 'richiesta' | 'prodotto' | 'messaggio';
type Errors = Partial<Record<Field, string>>;

const inputCls = 'w-full rounded-sm border bg-surface px-4 py-3 text-body text-fg';

export default function Contact() {
  usePageTitle('Contatti');
  const [params] = useSearchParams();
  const initialType = requestTypes.some((r) => r.value === params.get('richiesta')) ? params.get('richiesta')! : 'demo';
  const initialProduct = params.get('prodotto') ?? '';
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<Field, string>;
    const next: Errors = {};
    if (!data.nome?.trim()) next.nome = 'Inserisci nome e cognome.';
    if (!data.azienda?.trim()) next.azienda = 'Inserisci il nome dell’azienda.';
    if (!data.email?.trim()) next.email = 'Inserisci un indirizzo email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = 'L’indirizzo email non è valido, es. nome@azienda.it.';
    if (!data.messaggio?.trim()) next.messaggio = 'Scrivi in breve la tua richiesta.';
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      setSent(false);
      return;
    }
    const type = requestTypes.find((r) => r.value === data.richiesta)?.label ?? data.richiesta;
    const to = data.richiesta === 'assistenza' ? company.emailSupport : company.emailSales;
    const subject = `Richiesta dal sito: ${type}${data.prodotto ? ` — ${data.prodotto}` : ''}`;
    const body = [
      `Nome: ${data.nome}`,
      `Azienda: ${data.azienda}`,
      `Email: ${data.email}`,
      data.telefono ? `Telefono: ${data.telefono}` : '',
      `Richiesta: ${type}`,
      data.prodotto ? `Prodotto: ${data.prodotto}` : '',
      '',
      data.messaggio,
    ].filter((l) => l !== '').join('\n');
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const fieldProps = (name: Field) => ({
    id: name,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: cn(inputCls, errors[name] ? 'border-danger' : 'border-border-strong'),
  });

  const error = (name: Field) =>
    errors[name] && (
      <p id={`${name}-error`} className="mt-2 text-caption text-danger">
        {errors[name]}
      </p>
    );

  return (
    <>
      <PageHeader
        eyebrow="Contatti"
        title="Parliamo dei vostri documenti."
        intro="Webinar in diretta, analisi delle esigenze e studio di fattibilità, valutazione economica, configurazioni personalizzate e test gratuiti sui vostri file."
      />

      <section className="section-y bg-surface" aria-label="Recapiti e modulo di contatto">
        <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="text-h3 text-fg">Recapiti</h2>
            <ul className="mt-6 flex flex-col border-t">
              <ContactRow icon={<MapPin size={20} aria-hidden="true" />} label="Sede legale">
                <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-fg underline-offset-4 hover:underline">
                  {company.address}, {company.city}
                </a>
              </ContactRow>
              <ContactRow icon={<Phone size={20} aria-hidden="true" />} label="Centralino">
                <a href={company.phoneHref} className="cursor-pointer text-fg underline-offset-4 hover:underline">{company.phone}</a>
              </ContactRow>
              <ContactRow icon={<Clock size={20} aria-hidden="true" />} label="Orario d’ufficio">
                <span className="text-fg">{company.hours}</span>
              </ContactRow>
              <ContactRow icon={<Mail size={20} aria-hidden="true" />} label="Commerciale">
                <a href={`mailto:${company.emailSales}`} className="cursor-pointer text-fg underline-offset-4 hover:underline">{company.emailSales}</a>
              </ContactRow>
              <ContactRow icon={<Mail size={20} aria-hidden="true" />} label="Assistenza">
                <a href={`mailto:${company.emailSupport}`} className="cursor-pointer text-fg underline-offset-4 hover:underline">{company.emailSupport}</a>
              </ContactRow>
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6">
            <h2 className="text-h3 text-fg">Scriveteci</h2>
            <p className="mt-2 text-fg-muted">I campi contrassegnati con * sono obbligatori.</p>
            <form ref={formRef} noValidate onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="nome" className="mb-2 block font-medium text-fg">Nome e cognome *</label>
                <input type="text" autoComplete="name" {...fieldProps('nome')} />
                {error('nome')}
              </div>
              <div>
                <label htmlFor="azienda" className="mb-2 block font-medium text-fg">Azienda *</label>
                <input type="text" autoComplete="organization" {...fieldProps('azienda')} />
                {error('azienda')}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-medium text-fg">Email *</label>
                <input type="email" autoComplete="email" inputMode="email" {...fieldProps('email')} />
                {error('email')}
              </div>
              <div>
                <label htmlFor="telefono" className="mb-2 block font-medium text-fg">Telefono</label>
                <input type="tel" autoComplete="tel" {...fieldProps('telefono')} />
              </div>
              <div>
                <label htmlFor="richiesta" className="mb-2 block font-medium text-fg">Tipo di richiesta</label>
                <select defaultValue={initialType} {...fieldProps('richiesta')}>
                  {requestTypes.map((r) => (
                    <option key={r.value} value={r.value}>{r.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="prodotto" className="mb-2 block font-medium text-fg">Prodotto di interesse</label>
                <select defaultValue={initialProduct} {...fieldProps('prodotto')}>
                  <option value="">Nessuno in particolare</option>
                  {Array.from(new Set([initialProduct, ...products.map((p) => p.name)].filter(Boolean))).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="messaggio" className="mb-2 block font-medium text-fg">Messaggio *</label>
                <textarea rows={6} {...fieldProps('messaggio')} />
                {error('messaggio')}
              </div>
              <div className="flex flex-col gap-4 md:col-span-2">
                <p className="text-caption text-fg-muted">
                  Inviando la richiesta si aprirà il vostro programma di posta con il messaggio già compilato. I dati sono trattati secondo la{' '}
                  <a href={company.privacy} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-accent underline underline-offset-4 hover:text-accent-hover">
                    privacy policy
                  </a>
                  .
                </p>
                <button type="submit" className={buttonClass('primary', 'w-full md:w-auto md:self-start')}>
                  Invia la richiesta
                </button>
                <p role="status" aria-live="polite" className="text-fg">
                  {sent && 'Abbiamo preparato il messaggio nel vostro programma di posta: verificatelo e inviatelo. Vi risponderemo al più presto.'}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 border-b py-4">
      <span className="mt-1 text-accent">{icon}</span>
      <span>
        <span className="block text-caption text-fg-muted">{label}</span>
        {children}
      </span>
    </li>
  );
}
