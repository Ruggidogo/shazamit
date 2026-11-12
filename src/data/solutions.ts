/**
 * Le 6 soluzioni. Fonte: pagine "Soluzioni" di www.shazam.it (soluzioni/85, 89, 94, 98, 121 e PIM/DAM).
 */
import type { AreaId } from './site';

export type SolutionSlug =
  | 'sicurezza-documenti'
  | 'database-publishing'
  | 'documenti-dati-variabili'
  | 'conversione-pdf'
  | 'workflow-output-management'
  | 'pim-dam';

export type Solution = {
  slug: SolutionSlug;
  area?: AreaId;
  number: string;
  short: string;
  title: string;
  tagline: string;
  why: { title: string; paragraphs: string[] };
  contrast?: { labels: [string, string]; without: string[]; with: string[] };
  flow: { title: string; text: string }[];
  capabilities: string[];
  products: string[];
  caseSlugs: string[];
};

export const solutions: Solution[] = [
  {
    slug: 'sicurezza-documenti',
    area: 'sicurezza',
    number: '01',
    short: 'Sicurezza documenti',
    title: 'Sicurezza e antifalsificazione dei documenti',
    tagline:
      'Proteggi i dati sensibili e impedisci falsificazioni, alterazioni e copie non autorizzate dei documenti che emetti, su carta comune e con le stampanti che hai già.',
    why: {
      title: 'Le frodi documentali colpiscono i dati personalizzati.',
      paragraphs: [
        'Sempre più persone accedono da smartphone, tablet e computer a documenti con dati personali e sensibili, e spesso li salvano. Sempre più criminali riescono a carpire quei dati, nei documenti e nei flussi di dati.',
        'La maggior parte delle frodi si realizza modificando nomi, date, numeri di serie e valori monetari. Per le organizzazioni significa danni alle persone, cattiva pubblicità, multe e azioni legali.',
      ],
    },
    flow: [
      { title: 'Documento', text: 'Certificati, fatture, referti, documenti di produzione: qualsiasi stampa da proteggere.' },
      { title: 'Template di sicurezza', text: 'PrintMatch riconosce il tipo di documento e applica il template giusto.' },
      { title: 'Stampa protetta', text: 'MicroPrint, TROYMark e sfondi anti-copia su carta comune e stampanti esistenti.' },
      { title: 'Verifica', text: 'SecureMark e l’app SecureDocs Mobile convalidano l’originale in pochi secondi.' },
    ],
    capabilities: [
      'Microstampa (MicroPrint) e filigrane personalizzate (TROYMark)',
      'Sfondi di sicurezza e pantografi anti-copia',
      'Elementi nascosti con inchiostro UV',
      'Verifica da smartphone con SecureMark e l’app SecureDocs Mobile (iOS e Android)',
      'Tracciabilità di ogni stampa con PrintTrace e registro di controllo',
      'Crittografia di dati e documenti inviati in rete',
    ],
    products: ['SecureDocs Sentry', 'Secure IPP Print Server'],
    caseSlugs: ['farmaceutico', 'sanita', 'certificati-conformita', 'fatture-contrassegno', 'anti-copia-produzione', 'certificati-anagrafici'],
  },
  {
    slug: 'database-publishing',
    area: 'publishing',
    number: '02',
    short: 'Database publishing',
    title: 'Cataloghi, listini e schede prodotto automatici',
    tagline:
      'Generazione, impaginazione e reimpaginazione automatica e dinamica di cataloghi, listini prezzi, offerte e documenti strutturati, per la stampa e per il web.',
    why: {
      title: 'Automatizzare i documenti di business è ormai un obbligo.',
      paragraphs: [
        'La pressione competitiva impone cicli brevi di innovazione: la gamma prodotti e i materiali di marketing vanno aggiornati sempre più spesso. I nuovi mercati chiedono comunicazione adattata ad altre lingue e culture, su tutti i media, stampa compresa.',
        'Spesso più reparti, sedi e agenzie esterne lavorano agli stessi materiali: grandi sforzi di coordinamento e un alto rischio di errore.',
      ],
    },
    contrast: {
      labels: ['Senza automazione', 'Con l’automazione'],
      without: [
        'Lavoro manuale con lunghi tempi di attesa',
        'Alto tasso di errori, soprattutto da copia e incolla',
        'Costi alti: molte persone impegnate anche nei controlli',
        'Lunghe attese per modifiche e reimpaginazioni',
        'Perdita di fatturato e minore produttività della forza vendita',
        'Immagine del brand appannata',
      ],
      with: [
        'Tempi di realizzazione rapidi e costi abbattuti',
        'Dati affidabili, errori azzerati',
        'Impaginazione e reimpaginazione flessibili e velocissime',
        'Documenti on demand e accesso controllato per ogni utente',
        'Processi di business integrati nel workflow documentale',
        'Forza vendita soddisfatta e immagine aziendale migliore',
      ],
    },
    flow: [
      { title: 'Dati di prodotto', text: 'ERP, database, PIM o fogli Excel: i dati restano dove sono.' },
      { title: 'Template dinamici', text: 'Pochi modelli definiscono layout, tabelle e regole di impaginazione.' },
      { title: 'Impaginazione automatica', text: 'Cataloghi e listini vengono generati e reimpaginati in automatico.' },
      { title: 'Pubblicazione', text: 'PDF per la tipografia e per il web, HTML, oppure InDesign per i ritocchi.' },
    ],
    capabilities: [
      'Generazione di cataloghi, listini, schede prodotto e offerte da database',
      'Reimpaginazione automatica a ogni aggiornamento dei dati',
      'Versioni in più lingue dallo stesso flusso',
      'Stesso layout su carta, PDF e web',
      'Integrazione con InDesign per il lavoro dei grafici',
      'Gestione da parte del marketing, senza programmare',
    ],
    products: ['Leaflet', 'InBetween'],
    caseSlugs: ['aswo', 'facq', 'philips-massive'],
  },
  {
    slug: 'documenti-dati-variabili',
    area: 'dati-variabili',
    number: '03',
    short: 'Dati variabili',
    title: 'Documenti da dati variabili, distribuiti su ogni canale',
    tagline:
      'Creazione e generazione di documenti personalizzati da dati variabili e database, e loro distribuzione mirata su carta, web e mobile.',
    why: {
      title: 'Più documenti, più personalizzati, su più canali.',
      paragraphs: [
        'Due fattori rendono decisivo un sistema moderno: la quantità sempre crescente di documenti personalizzati e con informazioni complesse, e la crescita dei canali di comunicazione elettronica, che mette sotto pressione le risorse IT.',
        'Le soluzioni parziali sviluppate internamente non bastano più, mentre aumenta la pressione sui costi. Le soluzioni che proponiamo sono indipendenti e si integrano anche con sistemi sofisticati e ambienti diversi.',
      ],
    },
    flow: [
      { title: 'Dati', text: 'Applicazioni transazionali, ERP, database e host.' },
      { title: 'Modello', text: 'Documenti progettati in WYSIWYG o importati da Word, RTF, PDF, EPS, TIFF.' },
      { title: 'Composizione', text: 'Ogni documento viene personalizzato con i dati del destinatario.' },
      { title: 'Distribuzione', text: 'Stampa, PDF, web e mobile, dallo stesso flusso.' },
    ],
    capabilities: [
      'Composizione documentale anche per il mondo applicativo transazionale',
      'Distribuzione su carta, web e mobile',
      'Documenti nativi RTF o importati da Microsoft Word, con import di PDF, EPS e TIFF',
      'Risorse di stampa Xerox e AFP (font, AFP Full Color Management) in WYSIWYG',
      'Codici a barre in PCL su qualsiasi stampante, senza hardware aggiuntivo',
    ],
    products: ['DocForm', 'Paris', 'DesignPro Tools Plus', 'BarSTORM'],
    caseSlugs: [],
  },
  {
    slug: 'conversione-pdf',
    area: 'conversione',
    number: '04',
    short: 'Conversione e PDF',
    title: 'Conversione di flussi di stampa e PDF',
    tagline:
      'Ottimizzazione, editing e re-engineering di file PDF, conversione di formati e flussi di stampa, anche in ambienti ad altissimo volume.',
    why: {
      title: 'Dai sistemi legacy alla Customer Communication moderna.',
      paragraphs: [
        'Le nostre soluzioni elaborano flussi di stampa da uno a uno o più formati di output e armonizzano canali diversi in ingresso e in uscita, preparando ogni documento nel modo corretto per ogni destinatario e destinazione.',
        'Così valorizzate gli investimenti in applicazioni legacy e moderne, colmando il divario tra il vecchio modo di dialogare con i clienti e la Customer Communication di oggi. Senza programmare, con pochi clic.',
      ],
    },
    flow: [
      { title: 'Flussi in ingresso', text: 'AFPDS, DJDE/LCDS/Metacode, IPDS, PCL, PostScript, TIFF, RDO, PreScribe, VIPP.' },
      { title: 'Conversione', text: 'Il flusso viene interpretato e trasformato nel formato richiesto.' },
      { title: 'Re-engineering', text: 'Contenuti rimossi o sostituiti, documenti uniti, divisi, cifrati, ottimizzati.' },
      { title: 'Destinazione', text: 'Stampa di produzione con istruzioni di finitura, consegna elettronica, archivio.' },
    ],
    capabilities: [
      'Conversione tra AFPDS, DJDE/LCDS/Metacode, IPDS, PCL, PDF, PostScript, TIFF, RDO, PreScribe e VIPP',
      'Rimozione o sostituzione di testi e immagini nei PDF',
      'Unione, suddivisione e crittografia di documenti PDF',
      'Ottimizzazione di font, colori, immagini e risorse per stampa, archivio o invio elettronico',
      'Indicizzazione dei PDF transazionali per ritrovare le informazioni',
      'Istruzioni per finitura e imbustamento incluse nei documenti di stampa',
    ],
    products: ['ReadyPDF', 'Rubika', 'SPDE', 'iCONVERT', 'PrePrint', 'RDOPrint'],
    caseSlugs: [],
  },
  {
    slug: 'workflow-output-management',
    area: 'workflow',
    number: '05',
    short: 'Workflow e output',
    title: 'Workflow, print & output management multicanale',
    tagline:
      'Automatizza e ottimizza il ciclo di vita dei documenti: dalla creazione o acquisizione all’approvazione, alla distribuzione multicanale, fino all’archiviazione.',
    why: {
      title: 'I documenti sono il patrimonio di conoscenza dell’azienda.',
      paragraphs: [
        'Le aziende hanno bisogno di accedere subito ai propri documenti, stampati o destinati al web e al mobile. Le informazioni sulle attività aziendali vivono nei documenti: serve un approccio completo per gestirne l’intero ciclo di vita.',
        'Le soluzioni che proponiamo snelliscono i processi, automatizzano l’interoperabilità con gli altri sistemi aziendali e riducono l’intervento umano, i costi e quindi migliorano i profitti.',
      ],
    },
    flow: [
      { title: 'Acquisizione', text: 'Documenti creati o scansionati; i dati vengono estratti in modo intelligente.' },
      { title: 'Approvazione', text: 'Workflow automatici instradano i documenti alle persone giuste.' },
      { title: 'Distribuzione', text: 'Stampa di produzione controllata in tempo reale, web, mobile.' },
      { title: 'Archiviazione', text: 'Gestione documentale e dei contenuti, sempre ricercabile.' },
    ],
    capabilities: [
      'Gestione documentale e dei contenuti con workflow automatici',
      'Cattura ed estrazione intelligente dei dati da documenti scansionati ed elettronici',
      'Automazione delle attività ripetitive direttamente dal desktop',
      'Prestampa universale, indipendente dalla stampante di produzione',
      'Controllo in tempo reale del workflow di stampa',
      'Connessioni ai mainframe in RJE, NJE e TCP/IP',
    ],
    products: ['DocRecord', 'Capture', 'WorkPath', 'ReadyPrint', 'SOLitrack', 'BHCS'],
    caseSlugs: [],
  },
  {
    slug: 'pim-dam',
    number: '06',
    short: 'PIM e DAM',
    title: 'PIM e DAM: un’unica fonte per tutti i dati di prodotto',
    tagline:
      'Product Information Management e Digital Asset Management enterprise per centralizzare dati e risorse multimediali e alimentare ogni canale.',
    why: {
      title: 'Dati di prodotto incoerenti fanno perdere vendite.',
      paragraphs: [
        'Processi manuali, dati in fogli di calcolo, sistemi disparati e team disallineati sprecano tempo, duplicano il lavoro, rallentano il time-to-market e mostrano ai clienti informazioni diverse tra loro.',
        'L’introduzione manuale di un nuovo prodotto può richiedere anche quattro settimane. Con clienti che acquistano sempre più online, una gestione tempestiva dei dati di prodotto è la chiave del commercio omnicanale.',
      ],
    },
    contrast: {
      labels: ['Senza PIM', 'Con PIM e DAM'],
      without: [
        'Dati di prodotto in fogli di calcolo e sistemi separati',
        'Team disallineati e lavoro duplicato',
        'Fino a quattro settimane per introdurre un nuovo prodotto',
        'Informazioni incoerenti tra sito, cataloghi e marketplace',
      ],
      with: [
        'Un’unica fonte per dati e risorse multimediali',
        'Arricchimento dei dati condiviso tra marketing, vendite e partner',
        'Time-to-market più rapido',
        'Sito, cataloghi, marketplace e data pool GS1 sempre allineati',
      ],
    },
    flow: [
      { title: 'Sorgenti', text: 'ERP, fogli di calcolo, fornitori e risorse multimediali.' },
      { title: 'PIM e DAM', text: 'Dati e asset centralizzati, arricchiti e approvati in un unico punto.' },
      { title: 'Pubblicazione', text: 'Collegamento dal vivo alla pubblicazione automatica dei cataloghi.' },
      { title: 'Canali', text: 'Sito web, cataloghi su carta e tablet, marketplace come GS1 e Amazon.' },
    ],
    capabilities: [
      'Database di prodotto unico, potente ed estensibile (PimCore)',
      'Gestione centralizzata delle risorse multimediali (DAM)',
      'Ricerca full-text, parametrica e filtri per il sito web',
      'Collegamento ai marketplace e ai data pool GS1',
      'Pubblicazione automatica di documenti con Leaflet, collegato dal vivo',
      'Gestione multilingua dei contenuti',
    ],
    products: ['Leaflet'],
    caseSlugs: ['vadigran', 'van-iperen'],
  },
];

export const solutionBySlug = (slug?: string) => solutions.find((s) => s.slug === slug);
export const solutionByArea = (area: AreaId) => solutions.find((s) => s.area === area)!;
