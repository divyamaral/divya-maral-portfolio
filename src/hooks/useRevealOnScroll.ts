import { useEffect, useRef } from "react";

// Adds the "in" class to every .reveal element inside the ref'd section as it scrolls into view.
export function useRevealOnScroll() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}