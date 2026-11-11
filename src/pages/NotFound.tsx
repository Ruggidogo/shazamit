import { ButtonLink } from '@/components/ui/Button';
import { usePageTitle } from '@/lib/usePageTitle';

export default function NotFound() {
  usePageTitle('Pagina non trovata');
  return (
    <section className="section-y bg-canvas">
      <div className="container-site">
        <p className="eyebrow text-accent">Errore 404</p>
        <h1 className="mt-4 max-w-prose text-h1 text-fg">Questa pagina non esiste.</h1>
        <p className="mt-6 max-w-prose text-lead text-secondary">Il collegamento potrebbe essere cambiato con il nuovo sito.</p>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <ButtonLink to="/">Torna alla home</ButtonLink>
          <ButtonLink to="/contatti" variant="secondary">Contattaci</ButtonLink>
        </div>
      </div>
    </section>
  );
}
