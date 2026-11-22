import React, { useState } from 'react';
import {
  SITE_META,
  FLAGSHIP_SYSTEMS,
  ARCHITECTURE_EXCERPTS,
  PILLARS,
  RECORD_ITEMS,
  ARCHIVE_ARTIFACTS,
  SystemCaseStudy,
} from './data/portfolio';
import { useEditorialReveal } from './hooks/useEditorialReveal';
import CaseStudyDrawer from './components/CaseStudyDrawer';
import InquiryDrawer from './components/InquiryDrawer';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [drawerSystem, setDrawerSystem] = useState<SystemCaseStudy | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const aboutReveal = useEditorialReveal();
  const architectureReveal = useEditorialReveal();
  const pillarsReveal = useEditorialReveal();
  const recordReveal = useEditorialReveal();
  const catalogReveal = useEditorialReveal();

  const activeSystem = FLAGSHIP_SYSTEMS[activeIndex];

  const openSystemById = (id?: string) => {
    if (!id) return;
    const found = FLAGSHIP_SYSTEMS.find((item) => item.id === id);
    if (found) setDrawerSystem(found);
  };

  return (
    <div className="min-h-screen bg-[#EFEAE2] text-[#1C1B1A]">
      {/* 1. Slim Top Announcement Strip */}
      <div className="border-b border-[#1C1B1A]/15 px-6 py-2.5 text-center text-xs tracking-wide text-[#1C1B1A]/90">
        <button
          type="button"
          onClick={() => setInquiryOpen(true)}
          className="inline-flex items-center gap-2 py-1 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
        >
          <span>{SITE_META.announcement}</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* 2. Minimal Header (Wordmark First on Mobile, Split Nav on Desktop) */}
      <header className="mx-auto max-w-editorial px-6 pt-8 pb-6 md:px-12 md:pt-10 md:pb-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <a
            href="#"
            className="order-first font-serif text-2xl uppercase tracking-[0.22em] text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734] md:order-none md:text-[26px]"
          >
            {SITE_META.name}
          </a>

          <nav
            aria-label="Primary Navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs uppercase tracking-[0.18em] text-[#59554E] md:gap-8"
          >
            <a
              href="#anthology"
              className="py-2 transition-colors duration-500 hover:text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              Systems
            </a>
            <a
              href="#architecture"
              className="py-2 transition-colors duration-500 hover:text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              Architecture
            </a>
            <a
              href="#record"
              className="py-2 transition-colors duration-500 hover:text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734] md:hidden"
            >
              Record
            </a>
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="py-2 uppercase tracking-[0.18em] transition-colors duration-500 hover:text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734] md:hidden"
            >
              Inquire
            </button>
          </nav>

          <nav
            aria-label="Secondary Navigation"
            className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#59554E] md:flex"
          >
            <a
              href="#record"
              className="py-2 transition-colors duration-500 hover:text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              Record
            </a>
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="py-2 uppercase tracking-[0.18em] transition-colors duration-500 hover:text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              Inquire
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* 3. Editorial Hero & 4-Item Flagship Anthology */}
        <section
          id="anthology"
          className="mx-auto max-w-editorial px-6 pt-12 pb-20 md:px-12 md:pt-24 md:pb-32"
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#59554E]">
              Selected Engineering Works · {SITE_META.location}
            </p>
            <h1 className="font-serif text-4xl leading-[1.15] text-[#1C1B1A] sm:text-5xl md:text-6xl">
              Software engineered for{' '}
              <span className="italic">structural clarity</span>, verifiable data, and quiet durability.
            </h1>
          </div>

          {/* 4-Item Selector Strip (Clean Mobile 2x2 & Desktop 1x4 Hairline Grid) */}
          <div className="mt-12 border-t border-[#1C1B1A]/15 md:mt-16 md:border-b">
            <div
              role="tablist"
              aria-label="Flagship Engineering Systems"
              className="grid grid-cols-2 md:grid-cols-4"
            >
              {FLAGSHIP_SYSTEMS.map((system, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={system.id}
                    id={`tab-${system.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${system.id}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`border-b border-[#1C1B1A]/15 px-4 py-5 text-left transition-colors duration-500 odd:border-r md:border-b-0 md:border-r md:px-6 md:last:border-r-0 focus-visible:outline-1 focus-visible:outline-offset-[-4px] focus-visible:outline-[#064734] ${
                      isActive ? 'text-[#1C1B1A]' : 'text-[#59554E] hover:text-[#1C1B1A]'
                    }`}
                  >
                    <span className="block text-[11px] uppercase tracking-[0.18em]">
                      {system.number}
                    </span>
                    <span
                      className={`mt-1 block font-serif text-xl md:text-2xl ${
                        isActive ? 'italic underline decoration-[#064734] underline-offset-8' : ''
                      }`}
                    >
                      {system.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active System Reading View */}
          <div
            id={`panel-${activeSystem.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeSystem.id}`}
            className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-12 md:gap-12"
          >
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#59554E]">
                {activeSystem.subtitle}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[#1C1B1A] md:text-4xl">
                {activeSystem.title}
              </h2>
              <p className="mt-4 text-xs tracking-wide text-[#59554E]">
                {activeSystem.stack.join(' · ')}
              </p>
            </div>

            <div className="md:col-span-7 md:border-l md:border-[#1C1B1A]/15 md:pl-12">
              <p className="text-base leading-relaxed text-[#1C1B1A]/90 md:text-[17px]">
                {activeSystem.summary}
              </p>
              <p className="mt-5 font-serif text-xl italic text-[#1C1B1A]">
                {activeSystem.metric}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-8">
                <button
                  type="button"
                  onClick={() => setDrawerSystem(activeSystem)}
                  className="inline-flex items-center gap-2 py-1 text-sm text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
                >
                  <span>{activeSystem.linkLabel}</span>
                  <span aria-hidden="true">→</span>
                </button>

                {activeSystem.href.startsWith('http') && (
                  <a
                    href={activeSystem.href}
                    target="_blank"
                    rel="noreferrer"
                    className="py-1 text-xs uppercase tracking-[0.16em] text-[#59554E] transition-colors duration-500 hover:text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
                  >
                    Live Source ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Narrative Bio Split */}
        <section
          ref={aboutReveal.ref}
          className={`border-t border-[#1C1B1A]/15 py-16 md:py-28 ${aboutReveal.revealClass}`}
        >
          <div className="mx-auto grid max-w-editorial grid-cols-1 items-start gap-12 px-6 md:grid-cols-12 md:px-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#59554E]">
                Practice &amp; Approach
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug text-[#1C1B1A] md:text-4xl">
                Full-stack engineer, systems builder, founder at Bitnest.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1C1B1A]/85">
                Graduated in Computer Engineering from Savitribai Phule Pune University (2026). I build backend services in Java, Node.js, and Python alongside restrained interfaces that keep complex operational data legible.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1C1B1A]/85">
                Whether implementing carbon-offset compliance algorithms inside Excel or multi-hub EV charging infrastructure across Pune, every system is structured around deterministic logic and maintainable code.
              </p>
            </div>

            <div className="border-t border-b border-[#1C1B1A]/15 py-8 md:col-span-5">
              <dl className="space-y-5 text-sm">
                <div className="flex justify-between gap-4 border-b border-[#1C1B1A]/10 pb-3">
                  <dt className="text-[#59554E]">Location</dt>
                  <dd className="text-right text-[#1C1B1A]">{SITE_META.location}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#1C1B1A]/10 pb-3">
                  <dt className="text-[#59554E]">Education</dt>
                  <dd className="text-right text-[#1C1B1A]">{SITE_META.education}</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-[#1C1B1A]/10 pb-3">
                  <dt className="text-[#59554E]">Venture</dt>
                  <dd className="text-right text-[#1C1B1A]">{SITE_META.venture}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-[#59554E]">Primary Stack</dt>
                  <dd className="text-right text-[#1C1B1A]">{SITE_META.primaryStack}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* 5. Featured Architecture Excerpts */}
        <section
          id="architecture"
          ref={architectureReveal.ref}
          className={`border-t border-[#1C1B1A]/15 py-16 md:py-28 ${architectureReveal.revealClass}`}
        >
          <div className="mx-auto max-w-editorial px-6 md:px-12">
            <p className="mb-10 text-xs uppercase tracking-[0.2em] text-[#59554E] md:mb-12">
              Architecture Excerpts
            </p>
            <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
              {ARCHITECTURE_EXCERPTS.map((item) => (
                <article key={item.id} className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#59554E]">
                      {item.category}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl text-[#1C1B1A] md:text-3xl">
                      {item.title}
                    </h3>
                    <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-[#1C1B1A]/90 md:text-[22px]">
                      {item.excerpt}
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#1C1B1A]/15 pt-4 text-xs tracking-wide text-[#59554E]">
                    <span>{item.attribution}</span>
                    <button
                      type="button"
                      onClick={() => openSystemById(item.systemId)}
                      className="shrink-0 py-1 text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
                    >
                      Full note →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Numbered Pillars */}
        <section
          ref={pillarsReveal.ref}
          className={`border-t border-[#1C1B1A]/15 py-16 md:py-28 ${pillarsReveal.revealClass}`}
        >
          <div className="mx-auto max-w-editorial px-6 md:px-12">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-12">
              {PILLARS.map((pillar) => (
                <div key={pillar.numeral} className="flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-5xl text-[#59554E] md:text-6xl">
                      {pillar.numeral}
                    </span>
                    <h3 className="mt-5 font-serif text-2xl text-[#1C1B1A] md:mt-6">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#1C1B1A]/85 md:text-[15px]">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href={pillar.href}
                      className="inline-flex items-center gap-2 py-1 text-xs uppercase tracking-[0.16em] text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
                    >
                      <span>{pillar.action}</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Academic & Engineering Record */}
        <section
          id="record"
          ref={recordReveal.ref}
          className={`border-t border-[#1C1B1A]/15 py-16 md:py-28 ${recordReveal.revealClass}`}
        >
          <div className="mx-auto max-w-editorial px-6 md:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#59554E]">
              Academic &amp; Engineering Record
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#1C1B1A] md:text-4xl">
              Publications, Hackathons &amp; Credentials
            </h2>

            <div className="mt-10 border-t border-[#1C1B1A]/15 md:mt-12">
              {RECORD_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 gap-2 border-b border-[#1C1B1A]/15 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-[#59554E] md:col-span-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl text-[#1C1B1A] md:col-span-5 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#59554E] md:col-span-5 md:text-right">
                    {item.venue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Editorial Archive Index (Secondary & Research Builds) */}
        <section
          id="catalog"
          ref={catalogReveal.ref}
          className={`border-t border-[#1C1B1A]/15 py-16 md:py-28 ${catalogReveal.revealClass}`}
        >
          <div className="mx-auto max-w-editorial px-6 md:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#59554E]">
              Archive &amp; Secondary Works
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#1C1B1A] md:text-4xl">
              Additional Systems &amp; Research Builds
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 border-t border-[#1C1B1A]/15 pt-10 md:mt-12 md:grid-cols-2 md:gap-y-10">
              {ARCHIVE_ARTIFACTS.map((artifact) => (
                <a
                  key={artifact.title}
                  href={artifact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-baseline justify-between gap-6 border-b border-[#1C1B1A]/15 pb-8 transition-colors duration-500 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#59554E]">
                      {artifact.code} · {artifact.year}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-[#1C1B1A] group-hover:underline group-hover:decoration-[#064734] group-hover:underline-offset-4">
                      {artifact.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[#59554E]">{artifact.meta}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-sm text-[#59554E] transition-colors duration-500 group-hover:text-[#064734]"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Quiet Footer & Colophon */}
      <footer id="colophon" className="border-t border-[#1C1B1A]/15 py-14 md:py-16">
        <div className="mx-auto flex max-w-editorial flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-12">
          <div>
            <p className="font-serif text-xl uppercase tracking-[0.18em] text-[#1C1B1A]">
              {SITE_META.name}
            </p>
            <p className="mt-1 text-xs text-[#59554E]">
              Set in Cormorant Garamond &amp; Plus Jakarta Sans on warm parchment (#EFEAE2).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.16em] text-[#1C1B1A]">
            <button
              type="button"
              onClick={() => setInquiryOpen(true)}
              className="py-1 uppercase tracking-[0.16em] transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              Inquire
            </button>
            <a
              href={SITE_META.links.github}
              target="_blank"
              rel="noreferrer"
              className="py-1 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              GitHub
            </a>
            <a
              href={SITE_META.links.nbsGlobe}
              target="_blank"
              rel="noreferrer"
              className="py-1 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              NBS Globe
            </a>
            <a
              href={SITE_META.links.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="py-1 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              HackerRank
            </a>
          </div>
        </div>
      </footer>

      {/* Book-Page Case Study Drawer */}
      <CaseStudyDrawer
        system={drawerSystem}
        systems={FLAGSHIP_SYSTEMS}
        onSelectSystem={setDrawerSystem}
        onClose={() => setDrawerSystem(null)}
      />

      {/* Correspondence Drawer */}
      <InquiryDrawer isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  );
}