import React from 'react';
import useInView from '../../hooks/useInView';

/**
 * Wrap elemen apapun dengan animasi scroll reveal.
 * 
 * Props:
 *   dir      — 'up' | 'left' | 'right' | 'fade' | 'scale'  (default: 'up')
 *   delay    — ms delay: 0 | 100 | 200 | 300 | 400 | 500 | 600  (default: 0)
 *   className — extra class untuk wrapper div
 */
export default function Reveal({ children, dir = 'up', delay = 0, className = '' }) {
  const [ref, inView] = useInView();

  const dirClass = inView ? `in-view-${dir}` : '';
  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
