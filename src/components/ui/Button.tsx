import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** §9 Bottoni: radius-sm, padding 12/24, DM Sans 500 16px, hover = cambio colore 200ms */
const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm border px-6 py-3 font-sans text-body font-medium transition-colors';

const variants = {
  primary: 'border-ink bg-ink text-on-ink hover:border-ink-hover hover:bg-ink-hover',
  accent: 'border-accent bg-accent text-on-accent hover:border-accent-hover hover:bg-accent-hover',
  secondary: 'border-border-strong bg-surface text-fg hover:bg-muted',
  onInk: 'border-accent-on-ink bg-accent-on-ink text-ink-on-accent hover:border-accent-on-ink-hover hover:bg-accent-on-ink-hover',
  onInkSecondary: 'border-on-ink-muted bg-ink text-on-ink hover:border-on-ink hover:bg-ink-hover',
};

export type ButtonVariant = keyof typeof variants;

type Props = {
  to: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const isExternal = (to: string) => /^(https?:|mailto:|tel:)/.test(to);

export function ButtonLink({ to, variant = 'primary', children, className }: Props) {
  const cls = cn(base, variants[variant], className);
  if (isExternal(to)) {
    const newTab = to.startsWith('http');
    return (
      <a href={to} className={cls} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

export function buttonClass(variant: ButtonVariant = 'primary', className?: string) {
  return cn(base, variants[variant], className);
}
