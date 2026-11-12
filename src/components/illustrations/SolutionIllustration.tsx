import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion, type Transition } from 'framer-motion';
import type { SolutionSlug } from '@/data/solutions';
import { AMBIENT } from '@/lib/motion';

/**
 * §10.3 Illustrazioni animate delle soluzioni. Solo colori dei token, ciclo di 4s,
 * avvio quando visibili, fotogramma finale con reduced-motion. Decorative: aria-hidden.
 */
const loop = (delay = 0, times?: number[]): Transition => ({
  duration: AMBIENT,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatDelay: 0.6,
  delay,
  ...(times ? { times } : {}),
});

function Frame({ children, label }: { children: (play: boolean) => ReactNode; label: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const play = inView && !reduce;
  return (
    <svg ref={ref} viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true" data-illustration={label}>
      {children(play)}
    </svg>
  );
}

/** Valore animato quando play, altrimenti l'ultimo fotogramma. */
const kf = <T,>(play: boolean, frames: T[]) => (play ? frames : frames[frames.length - 1]);

function Lines({ x, y, w, n, gap = 14 }: { x: number; y: number; w: number[]; n: number; gap?: number }) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => (
        <rect key={i} x={x} y={y + i * gap} width={w[i % w.length]} height={4} className="fill-muted" />
      ))}
    </>
  );
}

function Security() {
  return (
    <Frame label="sicurezza">
      {(play) => (
        <>
          <rect x={120} y={28} width={160} height={232} className="fill-surface" />
          <rect x={140} y={52} width={72} height={10} className="fill-ink" />
          <Lines x={140} y={78} w={[120, 104, 112]} n={5} />
          {/* microstampa */}
          {Array.from({ length: 30 }, (_, i) => (
            <rect key={i} x={140 + (i % 15) * 8} y={160 + Math.floor(i / 15) * 6} width={5} height={2} className="fill-border-strong" />
          ))}
          <rect x={140} y={184} width={120} height={14} className="fill-accent" />
          <rect x={140} y={212} width={32} height={32} className="fill-ink" />
          <rect x={146} y={218} width={8} height={8} className="fill-surface" />
          <rect x={158} y={230} width={8} height={8} className="fill-surface" />
          {/* linea di scansione */}
          <motion.rect
            x={108}
            width={184}
            height={3}
            y={28}
            className="fill-accent-on-ink"
            initial={false}
            animate={{ y: kf(play, [28, 258, 28]), opacity: kf(play, [1, 1, 0]) }}
            transition={loop(0, [0, 0.6, 1])}
          />
          {/* sigillo di verifica */}
          <motion.g initial={false} animate={{ opacity: kf(play, [0, 0, 1, 1]), scale: kf(play, [0.8, 0.8, 1, 1]) }} transition={loop(0, [0, 0.55, 0.7, 1])} style={{ originX: '50%', originY: '50%' }}>
            <rect x={244} y={196} width={64} height={64} className="fill-accent-on-ink" />
            <path d="M260 228 l10 10 l20 -22" fill="none" strokeWidth={6} className="stroke-ink" />
          </motion.g>
        </>
      )}
    </Frame>
  );
}

function Publishing() {
  return (
    <Frame label="publishing">
      {(play) => (
        <>
          {/* tabella dati */}
          <rect x={24} y={60} width={136} height={180} className="fill-ink-hover stroke-border-on-ink" />
          {Array.from({ length: 7 }, (_, r) => (
            <g key={r}>
              <rect x={36} y={76 + r * 22} width={40} height={6} className="fill-on-ink-muted" />
              <rect x={84} y={76 + r * 22} width={64} height={6} className="fill-border-on-ink" />
              <motion.rect
                x={30}
                y={70 + r * 22}
                width={124}
                height={18}
                className="fill-accent"
                initial={false}
                animate={{ opacity: kf(play, [0, 0.9, 0]) }}
                transition={loop(r * 0.35, [0, 0.15, 0.35])}
              />
            </g>
          ))}
          <path d="M172 150 H204" strokeWidth={2} className="stroke-accent-on-ink" />
          <path d="M198 144 L206 150 L198 156" fill="none" strokeWidth={2} className="stroke-accent-on-ink" />
          {/* pagine del catalogo */}
          {[0, 1, 2].map((p) => (
            <motion.g
              key={p}
              initial={false}
              animate={{ opacity: kf(play, [0, 1, 1]), x: kf(play, [-16, 0, 0]) }}
              transition={loop(0.6 + p * 0.5, [0, 0.25, 1])}
            >
              <rect x={220 + p * 20} y={44 + p * 16} width={136} height={180} className="fill-surface stroke-border" />
              <rect x={232 + p * 20} y={58 + p * 16} width={56} height={8} className="fill-ink" />
              {[0, 1, 2, 3].map((c) => (
                <g key={c}>
                  <rect x={232 + p * 20 + (c % 2) * 58} y={76 + p * 16 + Math.floor(c / 2) * 64} width={50} height={36} className="fill-muted" />
                  <rect x={232 + p * 20 + (c % 2) * 58} y={116 + p * 16 + Math.floor(c / 2) * 64} width={42} height={4} className={c === 1 ? 'fill-accent' : 'fill-border-strong'} />
                </g>
              ))}
            </motion.g>
          ))}
        </>
      )}
    </Frame>
  );
}

/** Punti di una curva di Bézier da (140,150) a (244,yEnd), per animare l'impulso. */
const bez = (yEnd: number) =>
  [0, 0.25, 0.5, 0.75, 1].map((t) => {
    const p = [[140, 150], [190, 150], [190, yEnd], [244, yEnd]];
    const u = 1 - t;
    const c = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
    return [c.reduce((a, k, j) => a + k * p[j][0], 0), c.reduce((a, k, j) => a + k * p[j][1], 0)];
  });

function VariableData() {
  const outs = [
    { y: 36, label: 'Carta' },
    { y: 120, label: 'Email' },
    { y: 204, label: 'Web e mobile' },
  ];
  return (
    <Frame label="dati-variabili">
      {(play) => (
        <>
          <rect x={28} y={80} width={112} height={140} className="fill-surface" />
          <rect x={40} y={94} width={44} height={8} className="fill-ink" />
          <rect x={40} y={112} width={88} height={10} className="fill-border stroke-border-strong" strokeDasharray="4 3" />
          <Lines x={40} y={134} w={[88, 72, 80]} n={4} />
          <rect x={40} y={192} width={64} height={12} className="fill-muted" />
          {outs.map((o, i) => (
            <g key={o.label}>
              <path d={`M140 150 C 190 150, 190 ${o.y + 30}, 244 ${o.y + 30}`} fill="none" strokeWidth={2} className="stroke-border-on-ink" />
              <motion.circle
                r={5}
                className="fill-accent-on-ink"
                initial={false}
                animate={{ cx: kf(play, bez(o.y + 30).map((q) => q[0])), cy: kf(play, bez(o.y + 30).map((q) => q[1])), opacity: kf(play, [1, 1, 1, 1, 0]) }}
                transition={loop(i * 0.4)}
              />
              <rect x={248} y={o.y} width={120} height={60} className="fill-surface" />
              <rect x={258} y={o.y + 10} width={40} height={6} className="fill-ink" />
              <motion.rect
                x={258}
                y={o.y + 24}
                height={8}
                className="fill-accent"
                initial={false}
                animate={{ width: kf(play, [0, 0, 64 + i * 12]) }}
                transition={loop(i * 0.4, [0, 0.5, 0.7])}
              />
              <rect x={258} y={o.y + 40} width={92} height={4} className="fill-muted" />
              <text x={372} y={o.y + 56} textAnchor="end" className="fill-on-ink-subtle font-sans text-caption">
                {o.label}
              </text>
            </g>
          ))}
        </>
      )}
    </Frame>
  );
}

function Conversion() {
  const fmts = ['AFP', 'PCL', 'PS', 'RDO'];
  return (
    <Frame label="conversione">
      {(play) => (
        <>
          <rect x={150} y={96} width={100} height={108} className="fill-ink-hover stroke-accent-on-ink" strokeWidth={2} />
          <path d="M172 150 h56 M216 140 l12 10 l-12 10" fill="none" strokeWidth={2} className="stroke-accent-on-ink" />
          {fmts.map((f, i) => (
            <motion.g
              key={f}
              initial={false}
              animate={{ x: kf(play, [0, 0, 104, 104]), opacity: kf(play, [1, 1, 0, 1]) }}
              transition={loop(i * 0.5, [0, 0.2, 0.45, 1])}
            >
              <rect x={28} y={58 + i * 50} width={72} height={34} className="fill-border-on-ink" />
              <text x={64} y={80 + i * 50} textAnchor="middle" className="fill-on-ink font-display text-caption">
                {f}
              </text>
            </motion.g>
          ))}
          <motion.g initial={false} animate={{ opacity: kf(play, [0.4, 0.4, 1, 1]), y: kf(play, [8, 8, 0, 0]) }} transition={loop(0.3, [0, 0.4, 0.6, 1])}>
            <rect x={284} y={70} width={92} height={120} className="fill-surface" />
            <rect x={284} y={70} width={92} height={24} className="fill-accent" />
            <text x={330} y={87} textAnchor="middle" className="fill-on-accent font-display text-caption">
              PDF
            </text>
            <Lines x={296} y={106} w={[68, 56, 64]} n={5} />
            <text x={330} y={222} textAnchor="middle" className="fill-on-ink-subtle font-sans text-caption">
              ottimizzato
            </text>
          </motion.g>
        </>
      )}
    </Frame>
  );
}

function Workflow() {
  const nodes = [
    { x: 28, y: 48, label: 'Acquisizione' },
    { x: 220, y: 48, label: 'Approvazione' },
    { x: 220, y: 196, label: 'Distribuzione' },
    { x: 28, y: 196, label: 'Archivio' },
  ];
  const path = 'M180 76 H220 M300 104 V196 M220 224 H180 M100 196 V104';
  return (
    <Frame label="workflow">
      {(play) => (
        <>
          <path d="M100 76 H300 V224 H100 Z" fill="none" strokeWidth={2} className="stroke-border-on-ink" />
          <path d={path} fill="none" strokeWidth={2} className="stroke-border-on-ink" />
          {nodes.map((n, i) => (
            <g key={n.label}>
              <rect x={n.x} y={n.y} width={152} height={56} className="fill-ink-hover stroke-border-on-ink" />
              <motion.rect
                x={n.x}
                y={n.y}
                width={152}
                height={56}
                className="fill-accent"
                initial={false}
                animate={{ opacity: kf(play, [0, 1, 0, 0]) }}
                transition={loop(i * (AMBIENT / 4), [0, 0.08, 0.22, 1])}
              />
              <text x={n.x + 76} y={n.y + 33} textAnchor="middle" className="fill-on-ink font-sans text-caption">
                {n.label}
              </text>
            </g>
          ))}
          <motion.circle
            r={6}
            className="fill-accent-on-ink"
            initial={false}
            animate={{ cx: kf(play, [100, 300, 300, 100, 100]), cy: kf(play, [76, 76, 224, 224, 76]) }}
            transition={{ duration: AMBIENT, ease: 'linear', repeat: Infinity, times: [0, 0.287, 0.5, 0.787, 1] }}
          />
        </>
      )}
    </Frame>
  );
}

function Pim() {
  const channels = [
    { x: 24, y: 28, label: 'Sito web' },
    { x: 264, y: 28, label: 'Cataloghi' },
    { x: 24, y: 224, label: 'ERP' },
    { x: 264, y: 224, label: 'Marketplace' },
  ];
  return (
    <Frame label="pim">
      {(play) => (
        <>
          {channels.map((c, i) => {
            const cx = c.x + 56;
            const cy = c.y + 24;
            const d = `M200 150 L${cx} ${cy}`;
            return (
              <g key={c.label}>
                <path d={d} strokeWidth={2} className="stroke-border-on-ink" />
                <motion.circle
                  r={5}
                  className="fill-accent-on-ink"
                  initial={false}
                  animate={{ cx: kf(play, [200, cx, cx]), cy: kf(play, [150, cy, cy]), opacity: kf(play, [1, 1, 0]) }}
                  transition={loop(i * 0.45, [0, 0.45, 0.55])}
                />
                <rect x={c.x} y={c.y} width={112} height={48} className="fill-ink-hover stroke-border-on-ink" />
                <text x={cx} y={cy + 5} textAnchor="middle" className="fill-on-ink font-sans text-caption">
                  {c.label}
                </text>
              </g>
            );
          })}
          <motion.rect
            x={140}
            y={102}
            width={120}
            height={96}
            className="fill-accent-on-ink"
            initial={false}
            animate={{ opacity: kf(play, [0, 1, 0]) }}
            transition={loop(0, [0, 0.12, 0.4])}
          />
          <rect x={148} y={110} width={104} height={80} className="fill-surface" />
          <text x={200} y={146} textAnchor="middle" className="fill-ink font-display text-h4">
            PIM
          </text>
          <text x={200} y={170} textAnchor="middle" className="fill-fg-muted font-sans text-caption">
            + DAM
          </text>
        </>
      )}
    </Frame>
  );
}

const map: Record<SolutionSlug, () => JSX.Element> = {
  'sicurezza-documenti': Security,
  'database-publishing': Publishing,
  'documenti-dati-variabili': VariableData,
  'conversione-pdf': Conversion,
  'workflow-output-management': Workflow,
  'pim-dam': Pim,
};

export function SolutionIllustration({ slug }: { slug: SolutionSlug }) {
  const C = map[slug];
  return <C />;
}
