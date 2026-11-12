import { useEffect, useId, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { AMBIENT, GRID_CELL, GRID_SQUARES } from '@/lib/motion';

/**
 * Adattato da 21st.dev — dillionverma/animated-grid-pattern.
 * §10.2: cella 48px, colori pieni dai token, nessuna maschera sfumata.
 * I quadrati compaiono e scompaiono (4s + 4s) e poi cambiano posizione; fermi con reduced-motion
 * e in pausa quando la sezione non è visibile.
 */
type Square = { id: number; x: number; y: number; accent: boolean };

export function AnimatedGridPattern({ tone = 'ink', accent = false, className }: { tone?: 'ink' | 'light'; accent?: boolean; className?: string }) {
  const id = useId();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: '0px' });
  const reduce = useReducedMotion();
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [squares, setSquares] = useState<Square[]>([]);

  const cols = Math.max(1, Math.floor(size.w / GRID_CELL));
  const rows = Math.max(1, Math.floor(size.h / GRID_CELL));
  const randomPos = () => ({ x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!size.w) return;
    setSquares(Array.from({ length: GRID_SQUARES }, (_, i) => ({ id: i, accent: accent && i % 6 === 0, ...randomPos() })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.w, size.h]);

  const move = (sid: number) => setSquares((sq) => sq.map((s) => (s.id === sid ? { ...s, ...randomPos() } : s)));

  const lineCls = tone === 'ink' ? 'stroke-ink-hover' : 'stroke-border';
  const squareCls = (accent: boolean) =>
    tone === 'ink' ? (accent ? 'fill-accent' : 'fill-border-on-ink') : accent ? 'fill-border' : 'fill-muted';

  return (
    <svg ref={ref} aria-hidden="true" className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}>
      <defs>
        <pattern id={id} width={GRID_CELL} height={GRID_CELL} patternUnits="userSpaceOnUse">
          <path d={`M.5 ${GRID_CELL}V.5H${GRID_CELL}`} fill="none" className={lineCls} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {squares.map((s, i) =>
        reduce || !inView ? (
          reduce && i % 3 === 0 ? (
            <rect key={s.id} x={s.x * GRID_CELL + 1} y={s.y * GRID_CELL + 1} width={GRID_CELL - 1} height={GRID_CELL - 1} className={squareCls(s.accent)} />
          ) : null
        ) : (
          <motion.rect
            key={`${s.id}-${s.x}-${s.y}`}
            x={s.x * GRID_CELL + 1}
            y={s.y * GRID_CELL + 1}
            width={GRID_CELL - 1}
            height={GRID_CELL - 1}
            className={squareCls(s.accent)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: AMBIENT, ease: 'easeInOut', repeat: 1, repeatType: 'reverse', delay: (i % 12) * 0.35 }}
            onAnimationComplete={() => move(s.id)}
          />
        ),
      )}
    </svg>
  );
}
