import { useEffect, useId, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { nav } from '@/data/site';
import { cn } from '@/lib/cn';
import { Logo } from './ui/Logo';
import { buttonClass } from './ui/Button';

const linkCls =
  'cursor-pointer whitespace-nowrap font-medium text-secondary underline-offset-4 transition-colors hover:text-fg hover:underline';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelId = useId();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (to: string) =>
    to.includes('#') ? location.pathname === '/' && location.hash === to.slice(1) : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 border-b bg-surface">
      <div className="container-site flex h-header items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={cn(linkCls, isActive(item.to) && 'text-fg underline')}
                  aria-current={isActive(item.to) ? 'page' : undefined}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contatti?richiesta=demo" className={buttonClass('primary', 'hidden whitespace-nowrap md:inline-flex lg:hidden xl:inline-flex')}>
            Richiedi una demo
          </Link>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-sm border border-border-strong p-3 text-fg transition-colors hover:bg-muted lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id={panelId} hidden={!open} className="border-t bg-surface lg:hidden">
        <nav aria-label="Menu mobile" className="container-site py-6">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to} className="border-b">
                <Link
                  to={item.to}
                  className="flex cursor-pointer py-4 font-display text-h4 text-fg transition-colors hover:text-accent"
                  aria-current={isActive(item.to) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contatti?richiesta=demo" className={buttonClass('primary', 'mt-6 w-full md:hidden')}>
            Richiedi una demo
          </Link>
        </nav>
      </div>
    </header>
  );
}
