import { useEffect } from 'react';
import { company } from '@/data/site';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — ${company.name}` : `${company.name} — ${company.tagline}`;
  }, [title]);
}
