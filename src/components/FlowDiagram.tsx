import { motion, useReducedMotion } from 'framer-motion';
import { AMBIENT } from '@/lib/motion';
import { RevealGroup, RevealItem } from './ui/Reveal';

/**
 * Diagramma "come funziona": passi collegati da una linea su cui scorre un impulso
 * (ispirato a 21st.dev — dillionverma/animated-beam, a colore pieno, senza sfumature).
 */
export function FlowDiagram({ steps }: { steps: { title: string; text: string }[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* linea orizzontale (desktop) */}
      <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden border-t border-border-on-ink lg:block">
        {!reduce && (
          <motion.div
            className="absolute top-0 h-1 w-12 -translate-y-1/2 bg-accent-on-ink"
            initial={{ left: '0%' }}
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: AMBIENT, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6 }}
          />
        )}
      </div>
      {/* linea verticale (mobile/tablet) */}
      <div aria-hidden="true" className="absolute bottom-0 left-6 top-0 border-l border-border-on-ink lg:hidden">
        {!reduce && (
          <motion.div
            className="absolute left-0 h-12 w-1 -translate-x-1/2 bg-accent-on-ink"
            initial={{ top: '0%' }}
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: AMBIENT, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6 }}
          />
        )}
      </div>
      <RevealGroup as="ol" className="relative grid grid-cols-1 gap-8 lg:grid-cols-4">
        {steps.map((s, i) => (
          <RevealItem as="li" key={s.title} className="flex gap-6 lg:flex-col">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border-on-ink bg-ink-hover font-display text-h4 text-accent-on-ink">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-h4 text-on-ink">{s.title}</h3>
              <p className="mt-2 text-on-ink-subtle">{s.text}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
