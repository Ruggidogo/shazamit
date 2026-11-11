import { Plus } from 'lucide-react';
import { clients } from '@/data/site';
import { cn } from '@/lib/cn';
import { Reveal, RevealGroup, RevealItem } from '../ui/Reveal';

/**
 * Adattato da 21st.dev — efferd/logo-cloud-2.
 * Griglia statica (niente carosello) con bordi e crocini agli incroci. Fondo surface: i loghi hanno sfondo bianco.
 */
export function Clients({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section aria-labelledby={withHeading ? 'referenze-title' : undefined} aria-label={withHeading ? undefined : 'Referenze'} className="bg-canvas py-16">
      <div className="container-site">
        {withHeading && (
          <Reveal className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 id="referenze-title" className="text-h4 text-fg">
              Alcune referenze italiane
            </h2>
            <p className="text-caption text-fg-muted">Ringraziamo i clienti che ci hanno autorizzato alla pubblicazione.</p>
          </Reveal>
        )}
        <RevealGroup as="ul" className={cn('grid grid-cols-2 border-l border-t md:grid-cols-4 lg:grid-cols-8', withHeading && 'mt-8')}>
          {clients.map((c, i) => (
            <RevealItem
              as="li"
              key={c.name}
              className="relative flex items-center justify-center border-b border-r bg-surface p-6"
            >
              <img src={c.src} alt={c.name} loading="lazy" className="h-12 w-auto max-w-full object-contain" />
              {i % 3 === 0 && (
                <Plus size={16} strokeWidth={1} aria-hidden="true" className="absolute bottom-0 right-0 z-10 translate-x-1/2 translate-y-1/2 text-border-strong" />
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
