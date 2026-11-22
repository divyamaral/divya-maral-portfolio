import { useEffect, useRef, useState } from 'react';

export function useEditorialReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealClass = isVisible
    ? 'opacity-100 translate-y-0 transition-all duration-700 ease-out'
    : 'opacity-0 translate-y-2';

  return { ref, revealClass };
}