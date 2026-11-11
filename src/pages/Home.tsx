import { Hero } from '@/components/sections/Hero';
import { Clients } from '@/components/sections/Clients';
import { Solutions } from '@/components/sections/Solutions';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Services } from '@/components/sections/Services';
import { Formulas } from '@/components/sections/Formulas';
import { FinalCta } from '@/components/sections/FinalCta';
import { usePageTitle } from '@/lib/usePageTitle';

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <Clients />
      <Solutions />
      <CaseStudies />
      <Services />
      <Formulas />
      <FinalCta />
    </>
  );
}
