import React, { useEffect, useRef } from 'react';
import { SystemCaseStudy } from '../data/portfolio';

interface CaseStudyDrawerProps {
  system: SystemCaseStudy | null;
  systems: SystemCaseStudy[];
  onSelectSystem: (system: SystemCaseStudy) => void;
  onClose: () => void;
}

export default function CaseStudyDrawer({
  system,
  systems,
  onSelectSystem,
  onClose,
}: CaseStudyDrawerProps) {
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  const currentIndex = system ? systems.findIndex((item) => item.id === system.id) : -1;
  const prevSystem =
    currentIndex >= 0
      ? systems[(currentIndex - 1 + systems.length) % systems.length]
      : null;
  const nextSystem =
    currentIndex >= 0 ? systems[(currentIndex + 1) % systems.length] : null;

  useEffect(() => {
    if (!system) return;

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && prevSystem) onSelectSystem(prevSystem);
      if (event.key === 'ArrowRight' && nextSystem) onSelectSystem(nextSystem);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [system, prevSystem, nextSystem, onSelectSystem, onClose]);

  if (!system) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#1C1B1A]/35 transition-opacity duration-500"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      <aside
        ref={scrollContainerRef}
        className="flex h-full w-full max-w-2xl flex-col justify-between overflow-y-auto border-l border-[#1C1B1A]/20 bg-[#EFEAE2] px-8 py-10 text-[#1C1B1A] md:px-14 md:py-14"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Top Ledger Bar */}
          <div className="flex items-center justify-between border-b border-[#1C1B1A]/15 pb-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
              Case Study · {system.number} / {system.year}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="text-xs uppercase tracking-[0.18em] text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734]"
            >
              Close [Esc]
            </button>
          </div>

          {/* Header */}
          <header className="mt-10">
            <p className="text-xs uppercase tracking-[0.18em] text-[#6E6A63]">
              {system.subtitle}
            </p>
            <h2 id="drawer-title" className="mt-3 font-serif text-4xl text-[#1C1B1A] md:text-5xl">
              {system.title}
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-b border-[#1C1B1A]/15 py-3 text-xs text-[#6E6A63]">
              <span>Role: {system.role}</span>
              <span>·</span>
              <span>{system.stack.join(' · ')}</span>
            </div>
          </header>

          {/* Editorial Thesis */}
          <blockquote className="mt-10 font-serif text-2xl italic leading-relaxed text-[#1C1B1A]">
            “{system.caseStudy.thesis}”
          </blockquote>

          {/* Context */}
          <section className="mt-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
              01 · Problem &amp; Context
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#1C1B1A]/90">
              {system.caseStudy.context}
            </p>
          </section>

          {/* Architecture Decisions */}
          <section className="mt-10 border-t border-[#1C1B1A]/15 pt-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
              02 · System Architecture
            </h3>
            <ul className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#1C1B1A]/90">
              {system.caseStudy.architecture.map((point, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-serif italic text-[#6E6A63]">0{index + 1}</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Verified Outcomes */}
          <section className="mt-10 border-t border-[#1C1B1A]/15 pt-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
              03 · Outcomes &amp; Impact
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-[#1C1B1A]/90">
              {system.caseStudy.outcomes.map((outcome, index) => (
                <li key={index} className="border-l border-[#064734] pl-4">
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          {/* External Artifact Link */}
          {system.href.startsWith('http') && (
            <div className="mt-10 border-t border-[#1C1B1A]/15 pt-8">
              <a
                href={system.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734]"
              >
                <span>Open live deployment / repository</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>

        {/* Anthology Page Turn Footer */}
        {prevSystem && nextSystem && (
          <nav
            aria-label="Case study pagination"
            className="mt-14 flex items-center justify-between border-t border-[#1C1B1A]/15 pt-6 text-xs"
          >
            <button
              type="button"
              onClick={() => onSelectSystem(prevSystem)}
              className="text-left text-[#6E6A63] transition-colors duration-500 hover:text-[#1C1B1A]"
            >
              <span className="block uppercase tracking-[0.16em]">← Previous</span>
              <span className="mt-1 block font-serif text-lg italic text-[#1C1B1A]">
                {prevSystem.title}
              </span>
            </button>

            <button
              type="button"
              onClick={() => onSelectSystem(nextSystem)}
              className="text-right text-[#6E6A63] transition-colors duration-500 hover:text-[#1C1B1A]"
            >
              <span className="block uppercase tracking-[0.16em]">Next →</span>
              <span className="mt-1 block font-serif text-lg italic text-[#1C1B1A]">
                {nextSystem.title}
              </span>
            </button>
          </nav>
        )}
      </aside>
    </div>
  );
}