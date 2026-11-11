import { Link } from 'react-router-dom';
import { company } from '@/data/site';

export function Logo() {
  return (
    <Link to="/" className="inline-flex cursor-pointer items-center" aria-label={`${company.name} — torna alla home`}>
      <img src="/brand/logo-shazam.png" alt={`${company.name} — ${company.tagline}`} width={303} height={59} className="h-8 w-auto xl:h-12" />
    </Link>
  );
}
