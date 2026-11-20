import { useEffect, useRef, useState } from 'react';

/**
 * Animasi hitung dari 0 ke target saat elemen masuk viewport.
 * @param {number} target  — angka tujuan
 * @param {number} duration — durasi ms (default 2000)
 */
export default function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutExpo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [ref, count];
}
