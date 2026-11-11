/**
 * Contenuti del sito. Fonte: www.shazam.it (vedi design-system/CONTENUTI.md).
 * Nessun dato inventato: ciò che non c'è sul sito attuale non è qui.
 */

export const company = {
  name: 'Shazam I.T.',
  legalName: 'Shazam I. T. Srl a socio unico',
  tagline: "L'intelligenza nei documenti",
  since: 1993,
  address: 'Via Monte Santo 25',
  city: '47122 Forlì (FC), Italia',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Monte+Santo+25+47122+Forl%C3%AC',
  phone: '+39 0543 1900811',
  phoneHref: 'tel:+3905431900811',
  hours: '9:00–13:00 · 14:00–18:00',
  emailSales: 'shsales@shazam.it',
  emailSupport: 'shsupport@shazam.it',
  emailCareers: 'curriculum@shazam.it',
  vat: 'IT 02266260401',
  capital: '€ 31.200,00 i.v.',
  rea: 'REA FC 253534',
  register: 'Registro Imprese Forlì-Cesena n. 02266260401',
  linkedin: 'https://www.linkedin.com/company/shazam-i-t-srl/',
  youtube: 'https://www.youtube.com/channel/UCM09oGF3iWcpewjzmchb7GA',
  privacy: 'https://www.iubenda.com/privacy-policy/33078910',
  cookie: 'https://www.iubenda.com/privacy-policy/33078910/cookie-policy',
};

export const nav = [
  { label: 'Soluzioni', to: '/#soluzioni' },
  { label: 'Prodotti', to: '/prodotti' },
  { label: 'Servizi', to: '/#servizi' },
  { label: 'Case study', to: '/case-study' },
  { label: 'Azienda', to: '/azienda' },
  { label: 'Contatti', to: '/contatti' },
];

export type AreaId = 'sicurezza' | 'publishing' | 'dati-variabili' | 'conversione' | 'workflow';

export const areas: { id: AreaId; title: string; short: string; description: string }[] = [
  {
    id: 'sicurezza',
    title: 'Sicurezza e antifalsificazione dei documenti',
    short: 'Sicurezza documenti',
    description:
      'Protezione dalla contraffazione, dall’alterazione e dalla fuga di documenti stampati con dati sensibili: microstampa, filigrane, sfondi anti-copia e verifica da smartphone.',
  },
  {
    id: 'publishing',
    title: 'Cataloghi, listini e schede prodotto automatici',
    short: 'Database publishing',
    description:
      'Generazione, impaginazione e reimpaginazione automatica e dinamica di cataloghi, listini prezzi, offerte e documenti strutturati, per la stampa e per il web.',
  },
  {
    id: 'dati-variabili',
    title: 'Documenti da dati variabili, distribuiti su ogni canale',
    short: 'Dati variabili',
    description:
      'Documenti personalizzati, elettronici e stampati, generati da dati variabili e database e distribuiti in modo mirato e multicanale.',
  },
  {
    id: 'conversione',
    title: 'Conversione di flussi di stampa e PDF',
    short: 'Conversione e PDF',
    description:
      'Conversione di dati e flussi di stampa (AFP, PCL, PostScript, RDO), ottimizzazione e re-engineering dei file PDF.',
  },
  {
    id: 'workflow',
    title: 'Workflow, print & output management',
    short: 'Workflow e output',
    description:
      'Gestione automatizzata dei documenti, cattura intelligente dei dati, controllo in tempo reale delle stampe e connessioni ai mainframe.',
  },
];

export type Product = { name: string; area: AreaId; description: string };

export const products: Product[] = [
  { name: 'SecureDocs Sentry', area: 'sicurezza', description: 'Sicurezza antifrode personalizzata a più livelli quando emetti documenti importanti per i dati sensibili che contengono.' },
  { name: 'Secure IPP Print Server', area: 'sicurezza', description: 'Crittografia di dati e documenti inviati in rete da un sistema all’altro.' },
  { name: 'Leaflet', area: 'publishing', description: 'Il software standalone per impaginare, reimpaginare e pubblicare cataloghi, listini prezzi, schede prodotto e offerte, abbattendo tempi, errori e costi.' },
  { name: 'InBetween', area: 'publishing', description: 'Database publishing che, insieme a InDesign, automatizza la creazione del materiale di marketing e di vendita.' },
  { name: 'DocForm', area: 'dati-variabili', description: 'Generazione automatizzata di documenti personalizzati, elettronici e stampati, basati su dati variabili e distribuiti su più canali.' },
  { name: 'Paris', area: 'dati-variabili', description: 'Creazione e generazione di documenti da dati variabili, con funzioni di stampa e generazione di file PDF.' },
  { name: 'DesignPro Tools Plus', area: 'dati-variabili', description: 'Creazione e generazione di risorse per ambienti di stampa Xerox e IBM AFP.' },
  { name: 'BarSTORM', area: 'dati-variabili', description: 'Generazione e stampa di codici a barre in PCL da applicazioni Host, ERP, custom e Windows, su qualsiasi stampante, senza hardware aggiuntivo.' },
  { name: 'ReadyPDF', area: 'conversione', description: 'Verifica, ottimizzazione e correzione dei file PDF per la stampa di produzione e la distribuzione elettronica.' },
  { name: 'Rubika', area: 'conversione', description: 'Re-ingegnerizzazione con post-composition per potenziare i documenti PDF.' },
  { name: 'SPDE', area: 'conversione', description: 'Conversione di protocolli e flussi di stampa con gestione delle stampanti.' },
  { name: 'iCONVERT', area: 'conversione', description: 'Conversioni da IBM AFP a PCL, PostScript e PDF.' },
  { name: 'PrePrint', area: 'conversione', description: 'Emulazione delle stampanti PreScribe e conversione in PCL, PostScript e PDF.' },
  { name: 'RDOPrint', area: 'conversione', description: 'Converte i file RDO di Xerox per stamparli su qualsiasi stampante PostScript o trasformarli in PDF.' },
  { name: 'DocRecord', area: 'workflow', description: 'Electronic Document and Content Management con workflow automatici per la gestione avanzata dei documenti aziendali.' },
  { name: 'Capture', area: 'workflow', description: 'Cattura ed estrazione automatica e intelligente di dati da documenti scansionati ed elettronici, con workflow.' },
  { name: 'WorkPath', area: 'workflow', description: 'Gestione automatizzata e avanzata dei documenti direttamente dal desktop.' },
  { name: 'SOLitrack', area: 'workflow', description: 'Print manager con gestione e controllo in tempo reale del workflow di stampa.' },
  { name: 'ReadyPrint', area: 'workflow', description: 'Prestampa universale, indipendente dalla stampante, per preparare e automatizzare ogni stampante di produzione.' },
  { name: 'BHCS', area: 'workflow', description: 'Connessioni ai mainframe in RJE, NJE e TCP/IP.' },
];

export const productSlug = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export type CaseArea = 'publishing' | 'sicurezza' | 'pim';

export type CaseStudy = {
  slug: string;
  area: CaseArea;
  client: string;
  sector: string;
  title: string;
  result: string;
  solution: string;
  intro: string;
  challenges: { title: string; text: string }[];
  outcome: string;
  quote?: { text: string; author: string };
};

export const caseAreas: { id: CaseArea; label: string }[] = [
  { id: 'publishing', label: 'Database publishing' },
  { id: 'sicurezza', label: 'Sicurezza documenti' },
  { id: 'pim', label: 'PIM e omnicanalità' },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'aswo',
    area: 'publishing',
    client: 'ASWO',
    sector: 'Ricambi per elettronica di consumo ed elettrodomestici',
    title: 'Un catalogo di 1.000 pagine generato in 30 minuti',
    result: '1.000 pagine e oltre 30.000 articoli in mezz’ora, gestiti da una sola persona',
    solution: 'Leaflet',
    intro:
      'ASWO commercializza in tutta Europa ricambi per l’elettronica di consumo e gli elettrodomestici. Lo strumento della rete commerciale era un catalogo di circa 1.000 pagine, con oltre mille immagini, più di 30.000 articoli, modelli alternativi e riferimenti incrociati su oltre 50 pagine.',
    challenges: [
      { title: 'Autonomia al marketing', text: 'Il marketing doveva gestire il catalogo senza competenze di programmazione.' },
      { title: 'Dati sempre allineati', text: 'Serviva un database flessibile collegato direttamente al sistema AS/400.' },
      { title: 'Assortimenti in rapida evoluzione', text: 'L’impaginazione manuale con PageMaker non teneva più il passo.' },
    ],
    outcome:
      'ASWO France è passata alla pubblicazione da database con Leaflet. La generazione dell’intero catalogo richiede mezz’ora ed è gestita da una sola persona; il personale, formato da noi, rigenera le pagine e produce PDF sia per la stampa tipografica sia per il web.',
  },
  {
    slug: 'facq',
    area: 'publishing',
    client: 'Facq',
    sector: 'Distribuzione termoidraulica',
    title: 'Cataloghi B2B in pochi giorni invece che in settimane',
    result: 'Cataloghi da 550 pagine generati al 95% in automatico, anche per il web',
    solution: 'Leaflet',
    intro:
      'Facq è un importante grossista belga del settore sanitario, noto per i suoi cataloghi B2B: il “Piccolo Libro Verde” per l’impiantistica idraulica e il “Piccolo Libro Rosso” per il riscaldamento. Il Libro Verde conta circa 550 pagine e viene aggiornato due volte l’anno.',
    challenges: [
      { title: 'Nessun compromesso sulla qualità', text: 'Il documento automatico doveva essere identico a quello impaginato a mano.' },
      { title: 'Nessuno spazio perso', text: 'L’automazione non doveva sprecare spazio nelle pagine.' },
      { title: 'Stesso layout su carta e online', text: 'Il layout esistente andava mantenuto anche in HTML.' },
    ],
    outcome:
      'Con circa 5 modelli dinamici per catalogo, Leaflet genera e reimpagina il 95% dei contenuti in automatico. Le pagine sono diventate anche interattive nella Extranet: i clienti ordinano online ritrovando su PC, smartphone e tablet il layout dei Libri Verde e Rosso.',
  },
  {
    slug: 'philips-massive',
    area: 'publishing',
    client: 'Massive (Philips)',
    sector: 'Illuminazione',
    title: 'Documenti di marketing su richiesta in oltre 20 lingue',
    result: 'Cataloghi B2C e B2B in più di 20 lingue con layout perfetto',
    solution: 'Leaflet + InDesign',
    intro:
      'Oltre ai documenti B2B stampati su richiesta, Philips Consumer Luminaires cercava una soluzione per il layout dei cataloghi B2C: più collezioni, oltre 20 lingue, molte caratteristiche tecniche e lo stesso requisito di un layout perfetto.',
    challenges: [
      { title: 'Dati in tempo reale', text: 'Da un flat-plan in Excel, dati e immagini arrivano dal database prodotti.' },
      { title: 'Tabelle tecniche leggibili', text: 'Campi calcolati trasformano il testo del database in tabelle chiare.' },
      { title: 'Traduzioni', text: 'Le stringhe già tradotte vengono riutilizzate in automatico.' },
    ],
    outcome:
      'Leaflet e InDesign lavorano in un unico flusso: i documenti escono in PDF per la stampa o il web, oppure in InDesign con pagine mastro, stili e tabelle preservati, così i grafici restano liberi di intervenire.',
  },
  {
    slug: 'vadigran',
    area: 'pim',
    client: 'Vadigran',
    sector: 'Distribuzione petware',
    title: 'Un unico database per 5.000 articoli in 6 lingue',
    result: 'Un’unica fonte dati per sito, cataloghi e marketplace',
    solution: 'PimCore + Leaflet',
    intro:
      'Vadigran è un grossista petware presente in diversi paesi europei, con vendita B2B a catene e negozi di un assortimento di 5.000 articoli. I cataloghi su carta e iPad sono una parte essenziale del suo kit di vendita.',
    challenges: [
      { title: 'Sito obsoleto', text: 'Serviva un nuovo sito con ricerca full-text, parametrica e filtri.' },
      { title: 'Concorrenza aggressiva', text: 'I competitor avevano materiali di vendita più efficaci.' },
      { title: 'Data pool GS1', text: 'I grandi clienti chiedevano lo scambio dati attraverso GS1.' },
    ],
    outcome:
      'Vadigran ha scelto un database PIM basato su PimCore come unica fonte per tutti i processi: marketplace, sito web e sistema di pubblicazione dei cataloghi.',
    quote: {
      text: 'Il nostro nuovo database PimCore ci consente di arricchire i dati dei nostri prodotti per interfacciarli al nostro nuovo sito web, al nostro sistema di cataloghi e ai nostri mercati come GS1 o Amazon.',
      author: 'Willem Van Diest, CTO, Vadigran',
    },
  },
  {
    slug: 'van-iperen',
    area: 'pim',
    client: 'Van Iperen',
    sector: 'Fertilizzanti speciali',
    title: 'Una sola banca dati per centinaia di documenti in molte lingue',
    result: 'Aggiornamenti di prodotto su centinaia di documenti “in un attimo”',
    solution: 'PimCore + Leaflet',
    intro:
      'Van Iperen produce fertilizzanti speciali e serve clienti in oltre 90 paesi. Le schede tecniche e i volantini venivano composti a mano in InDesign, mettendo insieme dati da Excel, Word e Outlook.',
    challenges: [
      { title: 'Processo lento', text: 'Ogni documento conteneva molte tabelle compilate a mano.' },
      { title: 'Traduzioni e nuovi marchi', text: 'Rinnovi, traduzioni ed espansione ad altri marchi erano rallentati.' },
      { title: 'Dati affidabili per il web', text: 'Il nuovo sito e un modulo di calcolo richiedevano un database.' },
    ],
    outcome:
      'PimCore, installato da Tetrasoft, è collegato dal vivo a Leaflet, che pubblica su richiesta documenti di qualsiasi dimensione e complessità.',
    quote: {
      text: 'L’impostazione di un database PimCore combinato con la pubblicazione automatica dei database era il percorso più breve per la precisione dei dati. Aggiungiamo aggiornamenti di prodotto a centinaia di documenti nella maggior parte delle lingue del mondo in un attimo.',
      author: 'Marc van Oers, Direttore Marketing, Van Iperen International',
    },
  },
  {
    slug: 'farmaceutico',
    area: 'sicurezza',
    client: 'Caso SecureDocs',
    sector: 'Farmaceutico',
    title: 'Originali cartacei distinguibili da qualsiasi copia',
    result: 'Conformità normativa senza cambiare stampanti né carta',
    solution: 'SecureDocs Sentry',
    intro:
      'L’obiettivo era rispettare le normative garantendo la sicurezza, proteggere il valore del marchio ed evitare interruzioni nella catena di fornitura.',
    challenges: [
      { title: 'Anti-copia e anti-alterazione', text: 'Funzioni di sicurezza nascoste e palesi (MicroPrint, TROYMark, sfondi di sicurezza) verificabili con l’app SecureDocs Mobile.' },
      { title: 'Protezione solo dove serve', text: 'PrintMatch riconosce il tipo di documento e applica il template di sicurezza corretto.' },
      { title: 'Infrastruttura esistente', text: 'Server di stampa, stampanti e carta comune restano quelli già in uso.' },
    ],
    outcome:
      'Gli elementi di stampa personalizzabili di SecureDocs Sentry sono conformi alle norme e garantiscono autenticità e tracciabilità lungo tutto il ciclo di vita del documento.',
  },
  {
    slug: 'sanita',
    area: 'sicurezza',
    client: 'Caso SecureDocs',
    sector: 'Sanità',
    title: 'Referti e certificati a prova di manomissione',
    result: 'Documenti sanitari protetti su qualsiasi stampante di rete',
    solution: 'SecureDocs Sentry',
    intro:
      'Referti, certificati e altri documenti sui pazienti possono essere alterati, falsificati o fotocopiati per un uso improprio.',
    challenges: [
      { title: 'Conformità', text: 'Funzioni antifalsificazione applicate su carta comune e stampanti di rete.' },
      { title: 'Anti-copia', text: 'Elementi nascosti e palesi per riconoscere le fotocopie dagli originali.' },
      { title: 'Flussi clinici', text: 'Integrazione con la cartella clinica elettronica e gli ambienti IT.' },
    ],
    outcome:
      'Elementi nascosti, digitali e personalizzati garantiscono l’autenticità e prevengono le frodi sui documenti che contengono informazioni sanitarie sensibili.',
  },
  {
    slug: 'certificati-conformita',
    area: 'sicurezza',
    client: 'Caso SecureDocs',
    sector: 'Veicoli e attrezzature',
    title: 'Certificati di Conformità conformi al Regolamento UE 167/2013',
    result: 'Soluzione scalabile su 30 sedi europee con tracciabilità completa',
    solution: 'SecureDocs Sentry',
    intro:
      'I Certificati di Conformità (COC) di molti produttori di veicoli e attrezzature nell’UE devono contenere caratteristiche di sicurezza contro la contraffazione.',
    challenges: [
      { title: 'Sicurezza visibile e invisibile', text: 'Logo UV nascosto, TROYMark, MicroPrint e pantografi anti-copia.' },
      { title: 'Audit completo', text: 'SecureMark e PrintTrace registrano ogni stampa per la verifica di conformità.' },
      { title: 'Scala europea', text: '30 sedi e una rete di stampa presso i rivenditori, certificati fino a 8 pagine.' },
    ],
    outcome:
      'Una soluzione end-to-end e on demand, con un approccio multilivello alla sicurezza, che supporta la prevenzione della contraffazione e la tracciabilità della conformità.',
  },
  {
    slug: 'fatture-contrassegno',
    area: 'sicurezza',
    client: 'Caso SecureDocs',
    sector: 'Beni di largo consumo',
    title: 'Fatture in contrassegno protette dalle alterazioni',
    result: 'Ogni fattura autentica fino alla consegna della merce',
    solution: 'SecureDocs Sentry',
    intro:
      'Nei pagamenti in contrassegno in contanti le fatture possono essere modificate con importi più alti per frodare i clienti, con danni economici per il consumatore e reputazionali per il marchio.',
    challenges: [
      { title: 'Anti-alterazione su ogni fattura', text: 'TROYMark, SecureMark e QR code con campi dati verificabili.' },
      { title: 'Apparecchiature esistenti', text: 'Stampa protetta da remoto su qualsiasi stampante della rete sicura.' },
      { title: 'Solo dove serve', text: 'Le stampe che non sono fatture non ricevono protezioni inutili.' },
    ],
    outcome:
      'Una soluzione di stampa on demand che incorpora funzioni anti-alterazione su ogni fattura e semplifica la gestione del lavoro ibrido.',
  },
  {
    slug: 'anti-copia-produzione',
    area: 'sicurezza',
    client: 'Caso SecureDocs',
    sector: 'Produzione',
    title: 'Riconoscere a colpo d’occhio una fotocopia dall’originale',
    result: 'Check-list di produzione non più sostituibili con fotocopie',
    solution: 'SecureDocs Sentry',
    intro:
      'I documenti di produzione contengono check-list compilate a mano. In caso di errore, i fogli venivano sostituiti con fotocopie in bianco e ricompilati.',
    challenges: [
      { title: 'Anti-copia', text: 'MicroPrint, TROYMark e sfondi di sicurezza verificabili con l’app.' },
      { title: 'Riconoscimento automatico', text: 'PrintMatch associa il template giusto a ogni tipo di documento.' },
      { title: 'Nessun nuovo hardware', text: 'Server di stampa, stampanti e carta comune già in uso.' },
    ],
    outcome:
      'MicroPrint e pantografi di SecureDocs Sentry permettono di riconoscere immediatamente una fotocopia da un documento originale.',
  },
  {
    slug: 'certificati-anagrafici',
    area: 'sicurezza',
    client: 'Caso SecureDocs',
    sector: 'Certificati anagrafici',
    title: 'Certificati anagrafici protetti da alterazione e falsificazione',
    result: 'Emissione da più uffici con tracciabilità e verifica da smartphone',
    solution: 'SecureDocs Sentry',
    intro:
      'I truffatori d’identità alterano o falsificano documenti come i certificati di nascita o di vaccinazione: servono funzioni di sicurezza a più livelli.',
    challenges: [
      { title: 'Più uffici, piena tracciabilità', text: 'Ogni stampa registra numero di serie, data e funzionario.' },
      { title: 'Verifica rapida', text: 'I funzionari convalidano i documenti con l’app SecureDocs Mobile.' },
      { title: 'Sicurezza incorporata', text: 'TROYMark, MicroPrint e Security Background su ogni certificato.' },
    ],
    outcome:
      'Certificati e documenti generati con caratteristiche uniche e personalizzate, verificabili e protetti contro contraffazione e alterazione.',
  },
];

export const clients: { name: string; src: string; href?: string }[] = [
  { name: 'Calligaris', src: '/clienti/calligaris.jpg', href: 'https://www.calligaris.com/' },
  { name: 'Burgo', src: '/clienti/burgo.jpg', href: 'https://www.burgo.com/it' },
  { name: 'Luisa Spagnoli', src: '/clienti/luisaspagnoli.jpg', href: 'https://www.luisaspagnoli.it/it_it/' },
  { name: 'Moroso', src: '/clienti/moroso.png', href: 'https://moroso.it/' },
  { name: 'Magis', src: '/clienti/magis.jpg', href: 'https://www.magisdesign.com/' },
  { name: 'Stosa Cucine', src: '/clienti/stosa.png', href: 'https://www.stosacucine.com/' },
  { name: 'Alberta', src: '/clienti/alberta.png', href: 'https://www.alberta.it/' },
  { name: 'Pianca', src: '/clienti/pianca.png', href: 'https://www.pianca.com/' },
  { name: 'Frescura', src: '/clienti/frescura.jpg', href: 'https://www.frescura.it/' },
  { name: 'Toninelli', src: '/clienti/toninelli.png', href: 'https://www.toninelli.it/' },
  { name: 'Tarros', src: '/clienti/tarros.png', href: 'https://www.tarros.it/' },
  { name: 'Tubosider', src: '/clienti/tubosider.jpg', href: 'https://www.tubosider.it/' },
  { name: 'CS Roma', src: '/clienti/csroma.png', href: 'https://www.csroma.com/' },
  { name: 'Insiel', src: '/clienti/insiel.png' },
  { name: 'Ecor NaturaSì', src: '/clienti/ecor.jpg', href: 'https://www.naturasi.it/' },
  { name: 'Unes', src: '/clienti/unes.png' },
];

/** Fasi di progetto (pagina "Soluzioni chiavi in mano") */
export const projectSteps = [
  { title: 'Analisi delle esigenze', text: 'La fase più importante: conoscere a fondo ambiente, necessità e obiettivi. Con demo personalizzate, POC e Try-and-Buy.' },
  { title: 'Studio di fattibilità', text: 'Valutiamo l’impatto tecnico ed economico prima di proporre qualsiasi software.' },
  { title: 'Scelta della soluzione', text: 'Selezioniamo il software più adatto tra quelli che distribuiamo in esclusiva, già sottoposti a stress test.' },
  { title: 'Budget, ruoli e tempi', text: 'Definiamo budget, compiti, responsabilità e data di messa in produzione.' },
  { title: 'Personalizzazione e installazione', text: 'Dalle installazioni più semplici alle configurazioni più complesse, in sede o da remoto.' },
  { title: 'Formazione', text: 'Corsi presso il cliente con training on the job, fino alla piena autonomia degli operatori.' },
  { title: 'Messa in produzione', text: 'La soluzione personalizzata entra nei vostri processi, con un anno di garanzia.' },
  { title: 'Assistenza continuativa', text: 'Supporto di 1° e 2° livello in sede o da remoto, 3° livello con i produttori, hotline 24/7 su contratto.' },
];

export const formulas = [
  {
    id: 'try-and-buy',
    name: 'Try-and-Buy',
    claim: 'Prova prima di decidere',
    description: 'Valuti funzionalità e prestazioni della soluzione nel tuo ambiente reale e confermi l’acquisto solo dopo il periodo di prova.',
    terms: 'Prova di 30 giorni',
    includes: ['Demo online o in sede', 'Test gratuiti sui tuoi file', 'Configurazione per il periodo di prova', 'Acquisto solo a prova conclusa'],
    cta: { label: 'Richiedi il Try-and-Buy', to: '/contatti?richiesta=try-and-buy' },
  },
  {
    id: 'chiavi-in-mano',
    name: 'Chiavi in mano',
    claim: 'Il progetto completo',
    description: 'Dall’analisi alla messa in produzione: un progetto personalizzato, allineato a tempi e budget, con un unico interlocutore.',
    terms: 'Valutazione su progetto',
    includes: ['Analisi e studio di fattibilità', 'Personalizzazione e installazione', 'Formazione degli operatori', 'Un anno di garanzia'],
    cta: { label: 'Richiedi una valutazione', to: '/contatti?richiesta=progetto' },
  },
  {
    id: 'noleggio-operativo',
    name: 'Noleggio operativo',
    claim: 'Nessun investimento iniziale',
    description: 'Software e servizi di installazione e personalizzazione a canone, senza impegnare il budget del primo anno.',
    terms: 'Contratto da 2 a 5 anni, estendibile',
    includes: ['Canoni interamente deducibili nell’esercizio', 'Rate trimestrali anticipate', 'Manutenzione inclusa per tutta la durata', 'Nessun obbligo di acquisto a fine contratto'],
    cta: { label: 'Chiedi informazioni sul noleggio', to: '/contatti?richiesta=noleggio' },
  },
];
