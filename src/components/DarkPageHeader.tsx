import type { ReactNode } from 'react';
import { AnimatedGridPattern } from './ui/AnimatedGridPattern';
import { Reveal } from './ui/Reveal';

/** Testata delle pagine su superficie ink con griglia animata (§2, §10.2). */
export function DarkPageHeader({ eyebrow, title, intro, children, aside }: { eyebrow: ReactNode; title: ReactNode; intro?: ReactNode; children?: ReactNode; aside?: ReactNode }) {
  return (
    <section className="on-ink relative overflow-hidden bg-ink pb-16 pt-16 lg:pb-24 lg:pt-24">
      <AnimatedGridPattern />
      <div className="container-site relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <Reveal className={aside ? 'lg:col-span-6' : 'lg:col-span-9'}>
          <div className="eyebrow text-accent-on-ink">{eyebrow}</div>
          <h1 className="mt-4 text-h1 text-on-ink">{title}</h1>
          {intro && <p className="mt-6 max-w-prose text-lead text-on-ink-subtle">{intro}</p>}
          {children}
        </Reveal>
        {aside && <Reveal className="lg:col-span-5 lg:col-start-8">{aside}</Reveal>}
      </div>
    </section>
  );
}
