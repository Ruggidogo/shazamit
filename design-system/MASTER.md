# Shazam I.T. — Design System (MASTER)

> Fonte unica di verità per il nuovo sito. Ogni valore usato nel codice (colore, font, dimensione,
> spacing, raggio, durata, easing) **deve** esistere in questo file. Se serve un valore che non c'è,
> ci si ferma e si chiede prima di aggiungerlo.
>
> Generato con la skill **ui-ux-pro-max** (`--design-system` + ricerche `product`, `color`, `style`,
> `typography`, `google-fonts`, `landing`, `ux`) e poi rifinito. In fondo trovi l'origine di ogni scelta.

---

## 1. Posizionamento

| Voce | Valore |
|---|---|
| Tipo di prodotto | B2B Service: servizi IT, consulenza, sviluppo software, infrastruttura |
| Pubblico | Titolari e responsabili IT di PMI e aziende italiane; decisori non sempre tecnici |
| Obiettivo del sito | Autorevolezza + conversione (richiesta di contatto/preventivo) |
| Personalità | Precisa, sobria, sicura di sé. Tech di fascia alta, non startup "giocosa" |
| Modalità | **Light di default**; sezioni a contrasto su superficie `ink` (navy) per ritmo e enfasi |

---

## 2. Pattern di landing consigliato

**Trust & Authority + Conversion**, con un blocco **Feature-Rich Showcase** per i servizi (pattern
consigliato per il prodotto "B2B Service") e una vetrina progetti ispirata a **Portfolio Grid**.

Ordine delle sezioni (home):

1. **Header**: logo, navigazione (Servizi, Progetti, Metodo, Pacchetti, Azienda), CTA primaria "Parliamone".
2. **Hero** (missione + credibilità): titolo di grande formato, sottotitolo, CTA primaria + secondaria, 2-3 numeri chiave.
3. **Proof**: loghi clienti/partner e certificazioni. Se è un carosello: pausa al focus/hover, controlli prev/next, statico con reduced-motion.
4. **Servizi** (Feature-Rich Showcase): **bento grid asimmetrica**, NON 3 icone uguali in fila. Ogni tile ha dimensione e contenuto diversi.
5. **Progetti / case study**: griglia con filtro per categoria, card con risultato misurabile.
6. **Metodo**: processo in passi numerati (timeline), non icone.
7. **Pacchetti / pricing**: piani trasparenti o "a partire da", con CTA in ogni piano.
8. **CTA finale**: blocco a contrasto su superficie `ink`, form a basso attrito (pochi campi).
9. **Footer**: contatti completi (ragione sociale, sede, P.IVA, email, telefono), mappa del sito, link legali.

Posizionamento CTA: **Contattaci / Richiedi preventivo** come primaria, ripetuta in nav, hero, dopo i pacchetti e nel blocco finale.

---

## 3. Stile

**Minimalism & Swiss Style** + **Accessible & Ethical**, con accenni di **Exaggerated Minimalism** solo nel titolo dell'hero.

- Layout su griglia a 12 colonne, molto spazio bianco, gerarchia affidata alla tipografia.
- Le superfici si distinguono con **bordi da 1px e cambi di fondo**, mai con ombre.
- Un solo colore d'accento, usato per CTA, link e stati attivi. Niente decorazioni superflue.
- Le icone sono di supporto e mai il protagonista della sezione.

---

## 4. Palette colori

Tutti i rapporti di contrasto sono calcolati (WCAG 2.x). Minimo 4.5:1 per il testo, 3:1 per bordi di
controlli interattivi e indicatori di focus.

### 4.1 Superfici chiare (default)

| Token | Hex | Uso | Contrasto |
|---|---|---|---|
| `canvas` | `#F8FAFC` | Sfondo pagina | — |
| `surface` | `#FFFFFF` | Card, pannelli, input | — |
| `muted` | `#E8ECF1` | Fondo di sezioni alternate, tag | — |
| `ink` | `#0F172A` | Primario: titoli, bottone primario, superfici scure | 17.85 con `#FFFFFF` |
| `ink-hover` | `#1E293B` | Hover del bottone primario | 14.63 con `#FFFFFF` |
| `fg` | `#020617` | Testo principale | 19.28 su `canvas` |
| `secondary` | `#334155` | Testo secondario forte, sottotitoli | 9.90 su `canvas` |
| `fg-muted` | `#475569` | Testo di supporto, didascalie | 7.24 su `canvas` · 6.39 su `muted` · 7.58 su `surface` |
| `accent` | `#0369A1` | CTA d'accento, link, stati attivi | 5.93 con `#FFFFFF` · 5.67 come testo su `canvas` |
| `accent-hover` | `#075985` | Hover di CTA/link d'accento | 7.56 con `#FFFFFF` |
| `on-accent` | `#FFFFFF` | Testo su `accent` | — |
| `border` | `#E2E8F0` | Divisori e bordi card (decorativi) | — |
| `border-strong` | `#64748B` | Bordi di input e controlli (non-testo ≥ 3:1) | 4.55 su `canvas` |
| `ring` | `#0F172A` | Anello di focus su superfici chiare | 17.85 |
| `danger` | `#DC2626` | Errori nei form | 4.83 su `#FFFFFF` |
| `on-danger` | `#FFFFFF` | Testo su `danger` | — |

### 4.2 Superfici scure (`ink`: hero alternativo, CTA finale, footer)

| Token | Hex | Uso | Contrasto su `#0F172A` |
|---|---|---|---|
| `on-ink` | `#FFFFFF` | Testo principale | 17.85 |
| `on-ink-subtle` | `#CBD5E1` | Testo secondario | 12.02 |
| `on-ink-muted` | `#94A3B8` | Didascalie, note legali | 6.96 |
| `accent-on-ink` | `#38BDF8` | Link/CTA d'accento su fondo scuro | 8.33 |
| `accent-on-ink-hover` | `#7DD3FC` | Hover | 10.71 |
| `ink-on-accent` | `#0F172A` | Testo su bottone `accent-on-ink` | 8.33 |
| `border-on-ink` | `#334155` | Divisori su fondo scuro (decorativi) | — |
| `ring-on-ink` | `#FFFFFF` | Anello di focus su fondo scuro | 17.85 |

Regole: niente gradienti, niente trasparenze per creare profondità, niente colori fuori da questa tabella
(nemmeno negli stati hover, focus e active).

---

## 5. Tipografia

| Ruolo | Font | Pesi | Note |
|---|---|---|---|
| Display / Heading | **Space Grotesk** | 500, 600, 700 | Carattere tecnico e distintivo |
| Body / UI | **DM Sans** | 400, 500, 700 | Molto leggibile a 16px |

Coppia "Tech Startup" del database: pensata per aziende tech, SaaS e servizi digitali. Font caricati
self-hosted o da Google Fonts con `display=swap`. **Nessun fallback a font di sistema visibile**: lo stack
fallback serve solo durante il caricamento.

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');
```

### 5.1 Scala tipografica

Base 16px. Scala ~1.25 nei corpi e ~1.33 nei titoli. Il display è fluido.

| Token | Size | Line-height | Peso | Tracking | Font | Uso |
|---|---|---|---|---|---|---|
| `caption` | 14px | 20px | 500 | 0 | DM Sans | Meta, note, label |
| `eyebrow` | 14px | 20px | 500 | `0.08em` uppercase | DM Sans | Sopratitoli di sezione |
| `body` | 16px | 26px | 400 | 0 | DM Sans | Testo corrente |
| `body-lg` | 18px | 28px | 400 | 0 | DM Sans | Paragrafi introduttivi |
| `lead` | 20px | 30px | 400 | 0 | DM Sans | Sottotitolo hero |
| `h4` | 24px | 32px | 600 | `-0.01em` | Space Grotesk | Titoli card |
| `h3` | 32px | 40px | 600 | `-0.02em` | Space Grotesk | Sottosezioni |
| `h2` | `clamp(36px, 4vw, 48px)` | 1.1 | 600 | `-0.02em` | Space Grotesk | Titoli di sezione |
| `h1` | `clamp(40px, 5vw, 64px)` | 1.05 | 700 | `-0.03em` | Space Grotesk | Titoli di pagina interna |
| `display` | `clamp(48px, 8vw, 96px)` | 1.0 | 700 | `-0.04em` | Space Grotesk | Solo titolo hero home |

Lunghezza di riga del testo corrente: massimo **65ch** (`max-w-prose`).

---

## 6. Spacing

**Unità base 4px.** Densità "spaziosa" (dial 3/10): ritmo verticale ampio.

| Token | px | Uso tipico |
|---|---|---|
| `1` | 4 | Micro-gap icona/testo |
| `2` | 8 | Gap interni piccoli |
| `3` | 12 | Padding verticale dei bottoni |
| `4` | 16 | Gutter mobile, gap standard |
| `6` | 24 | Padding orizzontale dei bottoni, padding card mobile |
| `8` | 32 | Padding card desktop, gutter tablet |
| `12` | 48 | Gutter desktop, gap tra blocchi |
| `16` | 64 | Padding verticale sezione (mobile) |
| `24` | 96 | Padding verticale sezione (desktop) |
| `32` | 128 | Respiro extra dell'hero (desktop) |

Layout:

| Token | Valore |
|---|---|
| Container max | `1280px` |
| Gutter | 16px (< 768) · 32px (≥ 768) · 48px (≥ 1024) |
| Griglia | 4 col (mobile) · 8 col (tablet) · 12 col (desktop), gap 24px / 32px |
| Header | altezza 72px, sticky, fondo `canvas` pieno con `border` inferiore |

## 7. Breakpoint

| Nome | Min-width | Target di test |
|---|---|---|
| base | 0 | 375px |
| `md` | 768px | 768px |
| `lg` | 1024px | 1024px |
| `xl` | 1440px | 1440px |

Mobile-first. Nessuno scroll orizzontale; il testo deve fare reflow fino al 200% di zoom.

---

## 8. Forme e bordi

| Token | Valore | Uso |
|---|---|---|
| `radius-none` | 0 | Sezioni, immagini a tutta larghezza |
| `radius-sm` | 4px | **Bottoni**, input, tag |
| `radius-md` | 8px | Card, tile bento, pannelli |
| Bordo | 1px solid `border` | Card e divisori |
| Bordo controlli | 1px solid `border-strong` | Input, select, bottone secondario |

**Vietati:** `rounded-full` sui bottoni (pill), ombre (`box-shadow`) su card e bottoni.

---

## 9. Componenti base (specifiche)

| Componente | Specifica |
|---|---|
| Bottone primario | fondo `ink`, testo `on-ink`, `radius-sm`, padding 12/24, font DM Sans 500 16px; hover `ink-hover` |
| Bottone accento | fondo `accent`, testo `on-accent`; hover `accent-hover` |
| Bottone secondario | fondo `surface`, bordo `border-strong`, testo `fg`; hover fondo `muted` |
| Bottone su `ink` | fondo `accent-on-ink`, testo `ink-on-accent`; hover `accent-on-ink-hover` |
| Link testuale | `accent`, sottolineato su hover/focus; su `ink` → `accent-on-ink` |
| Card | fondo `surface`, bordo `border`, `radius-md`, padding 24 (mobile) / 32 (desktop); hover: bordo `border-strong` (nessuna ombra, nessun sollevamento) |
| Input | altezza ≥ 48px, bordo `border-strong`, `radius-sm`, label sempre visibile sopra il campo, errore in `danger` sotto il campo |
| Target touch | minimo 44×44px |

---

## 10. Effetti chiave e interazione

- **Focus visibile sempre**: `outline` 2px `ring` (o `ring-on-ink` su fondo scuro) con offset 2px, solo su `:focus-visible`. Mai `outline: none` senza sostituto.
- **Skip link** "Vai al contenuto" come primo elemento focusabile.
- Hover: solo cambio di colore/bordo da token, transizione **200ms** `ease-out`.
- `cursor-pointer` su tutto ciò che è cliccabile.
- Icone: **Lucide** (SVG), stroke 1.5, dimensioni 16 / 20 / 24px, `aria-hidden` se decorative, `aria-label` sui bottoni con sola icona.
- Immagini: WebP/AVIF, `loading="lazy"` sotto la piega, dimensioni riservate (CLS < 0.1).
- Scroll àncore: `scroll-behavior: smooth` (disattivato con reduced-motion), `scroll-margin-top` = altezza header.

### 10.1 Motion (Framer Motion)

| Token | Valore |
|---|---|
| Entrata | `opacity 0 → 1`, `y 16px → 0`, su `whileInView`, `viewport: { once: true, amount: 0.2 }` |
| Durata entrata | **0.7s** |
| Easing entrata | `[0.22, 1, 0.36, 1]` (ease-out morbido, senza overshoot) |
| Stagger elenchi | **0.08s** tra figli |
| Durata micro-interazioni | 200ms |
| Reduced motion | `prefers-reduced-motion: reduce` → nessuno spostamento (`y: 0`), stato finale visibile subito, niente smooth-scroll né caroselli automatici |

Non si usano easing con rimbalzo (`back.out`), parallax o scroll-jacking.

---

## 11. Anti-pattern per questo settore

Dalla skill (B2B Service / Trust & Authority):
- Design "giocoso" o infantile: mina la credibilità.
- **Credenziali nascoste**: clienti, certificazioni, P.IVA e sede devono essere visibili.
- Gradienti AI viola/rosa.
- Animazioni eccessive, parallax, scroll-jacking.
- Dark mode come unica modalità o come default.
- Caroselli automatici senza pausa e controlli da tastiera.
- Label solo come placeholder nei form; errori mostrati solo in cima.
- Contrasto grigio su grigio sotto 4.5:1.

Divieti di progetto (vincolanti):
- Nessuna ombra sulle card. Nessun bottone pill. Nessun gradiente. Nessun glassmorphism / backdrop-blur.
- **Nessuna griglia di 3 icone uguali.**
- Nessuna emoji come icona: solo SVG Lucide.
- Nessun font di sistema: solo Space Grotesk e DM Sans.
- Nessun valore arbitrario Tailwind (`text-[17px]`, `p-[13px]`, `#hex` inline…): solo token di questo file.
- Nessun `href="#"`: ogni link porta a una destinazione reale (sezione, pagina, `mailto:`, `tel:`).

---

## 12. Checklist pre-consegna

- [ ] Contrasto testo ≥ 4.5:1 (light e superfici `ink`)
- [ ] Focus visibile su ogni elemento interattivo, ordine di tab logico
- [ ] Reflow fino al 200% di zoom senza scroll orizzontale
- [ ] Verificato a 375 / 768 / 1024 / 1440px
- [ ] `prefers-reduced-motion` rispettato
- [ ] Niente emoji come icone; `cursor-pointer` sui cliccabili
- [ ] Transizioni di hover 150–300ms
- [ ] Target touch ≥ 44×44px
- [ ] Nessun `href="#"`, nessun valore arbitrario, nessun token fuori sistema

---

## 13. Origine delle scelte

| Scelta | Fonte ui-ux-pro-max |
|---|---|
| Pattern Trust & Authority + Conversion | `--design-system` "IT services consulting B2B" + `--domain landing` |
| Feature-Rich Showcase, bento grid | `--domain product` "B2B service" (stile secondario Bento Box Grid) |
| Stile Swiss + Accessible & Ethical | `--domain product` "B2B service" + `--domain style` "swiss minimal" |
| Exaggerated Minimalism nell'hero | `--domain style` (consigliato per landing di agenzie) |
| Palette navy + blu | `--domain color` "B2B Service" (#0F172A / #334155 / #0369A1 / #F8FAFC…) |
| Varianti per superfici scure e `border-strong` | Aggiunte per garantire 4.5:1 e 3:1 (contrasti calcolati sopra) |
| Space Grotesk + DM Sans | `--domain typography` "Tech Startup". Scartate EB Garamond/Lato (registro legale) e Poppins/Open Sans (generico) |
| Dial: variance 6–7, motion 4, density 3 | Spazioso, moderno, motion standard |
| Regole di motion e reduced-motion | `--domain ux` "reduced motion scroll reveal" + specifica di progetto |
