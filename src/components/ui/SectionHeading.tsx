import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  onInk?: boolean;
  className?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, onInk = false, className, id }: Props) {
  return (
    <Reveal as="header" className={cn('max-w-prose', className)}>
      <p className={cn('eyebrow', onInk ? 'text-accent-on-ink' : 'text-accent')}>{eyebrow}</p>
      <h2 id={id} className={cn('mt-4 text-h2', onInk ? 'text-on-ink' : 'text-fg')}>
        {title}
      </h2>
      {intro && <p className={cn('mt-6 text-body-lg', onInk ? 'text-on-ink-subtle' : 'text-fg-muted')}>{intro}</p>}
    </Reveal>
  );
}
