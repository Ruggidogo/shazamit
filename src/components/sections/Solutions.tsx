import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { solutions, type Solution } from '@/data/solutions';
import { cn } from '@/lib/cn';
import { DURATION, EASE, EXIT } from '@/lib/motion';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { AnimatedGridPattern } from '../ui/AnimatedGridPattern';
import { SolutionIllustration } from '../illustrations/SolutionIllustration';

/**
 * Adattato da 21st.dev — manuarora700/sticky-scroll-reveal.
 * Differenze: scroll della pagina (non un contenitore interno), pannello ink con griglia animata
 * al posto degli sfondi sfumati, voci inattive con colore attenuato dai token invece dell'opacità,
 * su mobile ogni soluzione mostra la propria illustrazione.
 */
export function Solutions({ withHeading = true }: { withHeading?: boolean }) {
  const [active, setActive] = useState(0);
  return (
    <section id="soluzioni" aria-labelledby="soluzioni-title" className="section-y border-t bg-canvas">
      <div className="container-site">
        {!withHeading && (
          <h2 id="soluzioni-title" className="sr-only">
            Le soluzioni
          </h2>
        )}
        {withHeading && (
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id="soluzioni-title"
              eyebrow="Soluzioni"
              title="Ogni documento, dal dato alla stampa."
              intro="Selezioniamo i migliori software internazionali, li sottoponiamo a stress test e li portiamo in Italia in esclusiva. Poi li adattiamo ai vostri processi."
            />
            <TextLink to="/soluzioni">Tutte le soluzioni</TextLink>
          </div>
        )}

        <div className={cn('grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8', withHeading && 'mt-12 lg:mt-16')}>
          <ol className="lg:col-span-5">
            {solutions.map((s, i) => (
              <SolutionItem key={s.slug} solution={s} index={i} active={active === i} onActive={() => setActive(i)} />
            ))}
          </ol>
          <div className="hidden lg:col-span-6 lg:col-start-7 lg:block">
            <div className="sticky top-32">
              <SolutionPanel solution={solutions[active]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionItem({ solution, index, active, onActive }: { solution: Solution; index: number; active: boolean; onActive: () => void }) {
  const ref = useRef<HTMLLIElement>(null);
  // Attiva la voce quando attraversa la fascia centrale dello schermo
  const inCenter = useInView(ref, { margin: '-45% 0px -45% 0px' });
  useEffect(() => {
    if (inCenter) onActive();
  }, [inCenter, onActive]);

  return (
    <li ref={ref} className={cn('border-l py-8 pl-6 transition-colors lg:py-24', active ? 'border-accent' : 'border-border')}>
      <div className="mb-6 lg:hidden">
        <SolutionPanel solution={solution} />
      </div>
      <p className={cn('eyebrow transition-colors', active ? 'text-accent' : 'text-fg-muted')}>
        {solution.number} · {solution.short}
      </p>
      <h3 className="mt-4 text-h3">
        <Link
          to={`/soluzioni/${solution.slug}`}
          className={cn('cursor-pointer underline-offset-4 transition-colors hover:text-accent hover:underline', active ? 'text-fg' : 'text-fg-muted')}
          onFocus={onActive}
        >
          {solution.title}
        </Link>
      </h3>
      <p className="mt-4 text-fg-muted">{solution.tagline}</p>
      <TextLink to={`/soluzioni/${solution.slug}`} className="mt-2">
        Scopri la soluzione
      </TextLink>
      <span className="sr-only">{index + 1} di {solutions.length}</span>
    </li>
  );
}

export function SolutionPanel({ solution, linked = true }: { solution: Solution; linked?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="on-ink relative aspect-square w-full overflow-hidden rounded-md border border-border-on-ink bg-ink">
      <AnimatedGridPattern accent />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={solution.slug}
          className="absolute inset-0 flex flex-col"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } }}
          exit={reduce ? undefined : { opacity: 0, transition: { duration: EXIT } }}
        >
          <div className="flex-1 p-6 lg:p-12">
            <SolutionIllustration slug={solution.slug} />
          </div>
          <div className="relative flex items-center justify-between gap-4 border-t border-border-on-ink bg-ink px-6 py-4">
            <p className="eyebrow text-on-ink-subtle">
              {solution.number} · {solution.short}
            </p>
            {linked && (
              <Link
                to={`/soluzioni/${solution.slug}`}
                className="inline-flex cursor-pointer items-center gap-2 py-3 font-medium text-accent-on-ink underline-offset-4 transition-colors hover:text-accent-on-ink-hover hover:underline"
                tabIndex={-1}
                aria-hidden="true"
              >
                Apri
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
