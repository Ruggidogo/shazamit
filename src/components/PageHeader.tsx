import type { ReactNode } from 'react';
import { Reveal } from './ui/Reveal';

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="border-b bg-canvas pb-12 pt-16 lg:pb-16 lg:pt-24">
      <Reveal className="container-site">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-prose text-h1 text-fg">{title}</h1>
        {intro && <p className="mt-6 max-w-prose text-lead text-secondary">{intro}</p>}
        {children}
      </Reveal>
    </section>
  );
}
