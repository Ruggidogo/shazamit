import { DarkPageHeader } from '@/components/DarkPageHeader';
import { Solutions } from '@/components/sections/Solutions';
import { FinalCta } from '@/components/sections/FinalCta';
import { usePageTitle } from '@/lib/usePageTitle';

export default function SolutionsIndex() {
  usePageTitle('Soluzioni');
  return (
    <>
      <DarkPageHeader
        eyebrow="Soluzioni"
        title="Sei soluzioni per l’intero ciclo di vita dei documenti."
        intro="Dalla generazione alla protezione, passando per conversione, distribuzione e gestione dei dati di prodotto. Software che selezioniamo, testiamo e distribuiamo in esclusiva per l’Italia."
      />
      <Solutions withHeading={false} />
      <FinalCta />
    </>
  );
}
