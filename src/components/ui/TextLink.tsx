import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

/** §9 Link testuale: accent, sottolineato su hover/focus */
export function TextLink({ to, children, onInk = false, className }: { to: string; children: ReactNode; onInk?: boolean; className?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex cursor-pointer items-center gap-2 py-3 font-medium underline-offset-4 transition-colors hover:underline focus-visible:underline',
        onInk ? 'text-accent-on-ink hover:text-accent-on-ink-hover' : 'text-accent hover:text-accent-hover',
        className,
      )}
    >
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
