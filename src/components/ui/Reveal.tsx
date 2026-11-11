import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { DURATION, EASE, OFFSET_Y, STAGGER } from '@/lib/motion';

/**
 * §10.1 Motion: fade + slide 16px su whileInView, 0.7s, ease-out morbido.
 * Con prefers-reduced-motion il contenuto è subito nel suo stato finale.
 */
const item: Variants = {
  hidden: { opacity: 0, y: OFFSET_Y },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
};

type Tag = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'header' | 'article' | 'p';

type Props = { children: ReactNode; className?: string; as?: Tag; id?: string };

export function Reveal({ children, className, as = 'div', id }: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className} id={id}>{children}</Tag>;
  }
  const M = motion[as];
  return (
    <M className={className} id={id} variants={item} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </M>
  );
}

/** Contenitore che fa entrare i figli <RevealItem> in sequenza (stagger 0.08s). */
export function RevealGroup({ children, className, as = 'div', id }: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className} id={id}>{children}</Tag>;
  }
  const M = motion[as];
  return (
    <M
      className={className}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: STAGGER } } }}
    >
      {children}
    </M>
  );
}

export function RevealItem({ children, className, as = 'div' }: Omit<Props, 'id'>) {
  const reduce = useReducedMotion();
  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }
  const M = motion[as];
  return (
    <M className={className} variants={item}>
      {children}
    </M>
  );
}
