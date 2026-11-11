import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { areas, company } from '@/data/site';
import { Logo } from './ui/Logo';
import { RevealGroup, RevealItem } from './ui/Reveal';

/**
 * Adattato da 21st.dev — efferd/sticky-footer (FT3).
 * L'effetto "rivelazione" è ottenuto con position: sticky (nessun JS, nessuna altezza fissa):
 * da lg in su il footer resta sotto il contenuto che scorre via. Con prefers-reduced-motion è statico.
 * Rimossi: decorazioni radiali di sfondo, blur in entrata, link segnaposto.
 */
const groups = [
  {
    label: 'Soluzioni',
    links: areas.map((a) => ({ title: a.short, to: `/prodotti#${a.id}` })),
  },
  {
    label: 'Azienda',
    links: [
      { title: 'Chi siamo', to: '/azienda' },
      { title: 'Servizi', to: '/#servizi' },
      { title: 'Case study', to: '/case-study' },
      { title: 'Lavora con noi', to: '/azienda#carriere' },
      { title: 'Partners Program', to: '/azienda#partner' },
    ],
  },
];

const linkCls = 'cursor-pointer text-fg-muted underline-offset-4 transition-colors hover:text-fg hover:underline';

export function Footer() {
  return (
    <footer className="relative z-0 border-t bg-surface lg:sticky lg:bottom-0 motion-reduce:static">
      <RevealGroup className="container-site grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <RevealItem className="flex flex-col gap-6 md:col-span-2 lg:col-span-4">
          <Logo />
          <p className="max-w-prose text-fg-muted">
            Dal {company.since} software e servizi per generare, convertire, distribuire e proteggere i documenti aziendali.
          </p>
          <div className="flex gap-2">
            <a href={company.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (si apre in una nuova scheda)" className="inline-flex cursor-pointer rounded-sm border border-border-strong p-3 text-fg transition-colors hover:bg-muted">
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a href={company.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube (si apre in una nuova scheda)" className="inline-flex cursor-pointer rounded-sm border border-border-strong p-3 text-fg transition-colors hover:bg-muted">
              <Youtube size={20} aria-hidden="true" />
            </a>
          </div>
        </RevealItem>

        {groups.map((g) => (
          <RevealItem as="div" key={g.label} className="lg:col-span-2">
            <h2 className="eyebrow text-fg">{g.label}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {g.links.map((l) => (
                <li key={l.title}>
                  <Link to={l.to} className={linkCls}>
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}

        <RevealItem className="lg:col-span-4">
          <h2 className="eyebrow text-fg">Contatti</h2>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-start gap-2`}>
                <MapPin size={20} aria-hidden="true" className="shrink-0" />
                {company.address}, {company.city}
              </a>
            </li>
            <li>
              <a href={company.phoneHref} className={`${linkCls} inline-flex items-center gap-2`}>
                <Phone size={20} aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.emailSales}`} className={`${linkCls} inline-flex items-center gap-2`}>
                <Mail size={20} aria-hidden="true" />
                {company.emailSales}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.emailSupport}`} className={`${linkCls} inline-flex items-center gap-2`}>
                <Mail size={20} aria-hidden="true" />
                {company.emailSupport} <span className="text-caption">(assistenza)</span>
              </a>
            </li>
          </ul>
        </RevealItem>
      </RevealGroup>

      <div className="border-t">
        <div className="container-site flex flex-col gap-4 py-6 text-caption text-fg-muted lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName} · P.IVA e C.F. {company.vat} · Capitale sociale {company.capital} · {company.register} · {company.rea}
          </p>
          <ul className="flex shrink-0 gap-6 whitespace-nowrap">
            <li>
              <a href={company.privacy} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Privacy policy
              </a>
            </li>
            <li>
              <a href={company.cookie} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
