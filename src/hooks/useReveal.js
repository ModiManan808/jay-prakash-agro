import { useEffect, useRef, useState } from 'react';

// Scroll-reveal: returns [ref, visible]. Adds `visible` once the element
// scrolls into view. Fails open — if IntersectionObserver is missing, or the
// user prefers reduced motion, content is shown immediately (never hidden).
export function useReveal({ threshold = 0.2, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}
