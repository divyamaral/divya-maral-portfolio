import React, { useState } from 'react';

const FLAGSHIP_SYSTEMS = [
  {
    id: 'plotpair',
    number: '01',
    title: 'PlotPair',
    subtitle: 'VM0047 Carbon Offset Compliance Engine',
    stack: 'Office.js · TypeScript · Linear Algebra · Cloudflare Pages',
    summary:
      'An open-source Excel add-in executing vectorized Mahalanobis distance calculations and Jonker-Volgenant global assignment algorithms directly inside spreadsheet workflows for Verra VM0047 ecological control-plot matching.',
    metric: 'Exact global assignment across high-dimensional covariate matrices without external Python runtimes.',
    linkLabel: 'Inspect PlotPair architecture',
    href: 'https://github.com/ro-hitmane',
  },
  {
    id: 'nbsglobe',
    number: '02',
    title: 'NBS Globe',
    subtitle: 'Gold Standard Agroforestry & ESG Platform',
    stack: 'React · Vite · Node.js · Cloudflare Workers',
    summary:
      'Multi-page ESG infrastructure engineered for Nature Based Solutions Private Limited, connecting institutional climate partners and field operations across large-scale agroforestry initiatives in Andhra Pradesh.',
    metric: '25,000+ hectares mapped · 12M+ trees planted · 1.2M+ tCO₂e projected climate impact.',
    linkLabel: 'Visit nbsglobe.com',
    href: 'https://nbsglobe.com',
  },
  {
    id: 'plugy',
    number: '03',
    title: 'Plugy (SMEVCS)',
    subtitle: 'Smart EV Charging & Grid Scheduling Platform',
    stack: 'Java MVC · Apache Tomcat · MySQL · REST APIs',
    summary:
      'End-to-end electric vehicle charging station management system built for urban fleet and commuter infrastructure, unifying dynamic tariff pricing, slot reservations, and automated GST tax invoicing.',
    metric: 'Deployed across 26 charging hubs spanning Pune Municipal Corporation and PCMC.',
    linkLabel: 'Read system specification',
    href: '#architecture',
  },
  {
    id: 'pwd-raigad',
    number: '04',
    title: 'PWD Raigad Portal',
    subtitle: 'Public Works Tracking & Liaisoning System',
    stack: 'PHP · MySQL · Relational Schema Design',
    summary:
      'Administrative web platform designed to streamline public infrastructure tracking, departmental documentation, and inter-office liaisoning workflows for Public Works Department Raigad.',
    metric: 'Structured multi-role approval pipelines replacing manual ledger reconciliation.',
    linkLabel: 'View case notes',
    href: '#architecture',
  },
];

const ARCHITECTURE_EXCERPTS = [
  {
    category: 'Numerical Methods in the Browser',
    title: 'Vectorized Mahalanobis Matching Inside Office.js',
    excerpt:
      '“Rather than shipping sensitive ecological plot datasets to a remote server, covariance inversion and Jonker-Volgenant bipartite assignment run deterministically inside the client runtime—turning a multi-hour GIS analyst workflow into a reproducible spreadsheet operation.”',
    attribution: 'From PlotPair Engineering Notes, 2026',
  },
  {
    category: 'Transactional State & Pricing',
    title: 'Dynamic Tariff Engines Across 26 Urban EV Hubs',
    excerpt:
      '“Reliable charging infrastructure depends on predictable concurrency. By modeling station bays, peak-load multipliers, and tax invoice generation inside a strict Java MVC lifecycle on Apache Tomcat, reservation conflicts are eliminated before payment capture.”',
    attribution: 'From Plugy (SMEVCS) Deployment Log, Pune',
  },
];

const PILLARS = [
  {
    numeral: '01',
    title: 'Full-Stack Web & Cloud Systems',
    description:
      'Production applications engineered across Java, Node.js, Python, React, and PostgreSQL/MySQL—deployed on Cloudflare Workers, Pages, and Linux servlet containers.',
    action: 'Explore deployed systems',
    href: '#catalog',
  },
  {
    numeral: '02',
    title: 'Geospatial & ESG Data Tooling',
    description:
      'Analytical pipelines for agroforestry verification, Google Earth Engine land-use filtering, and covariate matching built for verifiable climate reporting.',
    action: 'Review NBS & PlotPair',
    href: '#anthology',
  },
  {
    numeral: '03',
    title: 'Independent Product Engineering',
    description:
      'Founder at Bitnest—taking software from initial domain modeling and typography through backend validation logic, DNS routing, and production delivery.',
    action: 'Read engineering record',
    href: '#record',
  },
];

const RECORD_ITEMS = [
  {
    year: '2026',
    title: 'B.E. in Computer Engineering',
    venue: 'Savitribai Phule Pune University · Pune, Maharashtra',
  },
  {
    year: '2025',
    title: 'Smart India Hackathon — Team Lead, Team OptiCrew',
    venue: 'AI-Enabled Maritime Vessel Scheduling & Logistics Optimizer',
  },
  {
    year: '2025',
    title: 'Published Research Paper (Volume 9, Issue 5)',
    venue: 'Iconic Research And Engineering Journals (IRE Journals)',
  },
  {
    year: 'Ongoing',
    title: 'Cloud Infrastructure & Competitive Programming',
    venue: 'Google Cloud Skills Arcade · HackerRank (rohitmane) · GitHub (ro-hitmane)',
  },
];

const CATALOG_ARTIFACTS = [
  {
    code: 'SYS — 01',
    title: 'PlotPair',
    meta: 'Office.js · VM0047 Compliance Matching',
    year: '2026',
    href: 'https://github.com/ro-hitmane',
  },
  {
    code: 'SYS — 02',
    title: 'NBS Globe',
    meta: 'React · Cloudflare Workers · ESG Platform',
    year: '2026',
    href: 'https://nbsglobe.com',
  },
  {
    code: 'SYS — 03',
    title: 'Plugy (SMEVCS)',
    meta: 'Java MVC · Tomcat · 26 Pune EV Hubs',
    year: '2026',
    href: '#anthology',
  },
  {
    code: 'SYS — 04',
    title: 'AuraScore',
    meta: 'Flutter · Dart · Android Interface',
    year: '2026',
    href: 'https://github.com/ro-hitmane',
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSystem = FLAGSHIP_SYSTEMS[activeIndex];

  return (
    <div className="min-h-screen bg-[#EFEAE2] text-[#1C1B1A]">
      {/* 1. Slim Top Announcement Strip */}
      <div className="border-b border-[#1C1B1A]/15 px-6 py-2.5 text-center text-xs tracking-wide text-[#1C1B1A]/85">
        <a
          href="#anthology"
          className="inline-flex items-center gap-2 transition-colors duration-500 hover:text-[#064734]"
        >
          <span>
            Developing PlotPair (VM0047 Compliance Engine) &amp; available for Software Engineering roles
          </span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* 2. Minimal Header (Centered Wordmark + Quiet Navigation) */}
      <header className="mx-auto max-w-editorial px-6 pt-10 pb-8 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <nav aria-label="Primary Left" className="flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#6E6A63]">
            <a href="#anthology" className="transition-colors duration-500 hover:text-[#1C1B1A]">
              Systems
            </a>
            <a href="#architecture" className="transition-colors duration-500 hover:text-[#1C1B1A]">
              Architecture
            </a>
          </nav>

          <a
            href="#"
            className="font-serif text-2xl tracking-[0.22em] text-[#1C1B1A] uppercase md:text-[26px]"
          >
            Rohit Mane
          </a>

          <nav aria-label="Primary Right" className="flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#6E6A63]">
            <a href="#record" className="transition-colors duration-500 hover:text-[#1C1B1A]">
              Record
            </a>
            <a href="#colophon" className="transition-colors duration-500 hover:text-[#1C1B1A]">
              Colophon
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* 3. Editorial Hero & 4-Item Flagship Anthology */}
        <section id="anthology" className="mx-auto max-w-editorial px-6 pt-16 pb-24 md:px-12 md:pt-24 md:pb-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
              Selected Engineering Works · Pune, India
            </p>
            <h1 className="font-serif text-4xl leading-[1.15] text-[#1C1B1A] sm:text-5xl md:text-6xl">
              Software engineered for{' '}
              <span className="italic">structural clarity</span>, verifiable data, and quiet durability.
            </h1>
          </div>

          {/* 4-Item Selector Strip (Hairline Rules Only, Zero Card Chrome) */}
          <div className="mt-16 border-t border-b border-[#1C1B1A]/15">
            <div className="grid grid-cols-2 divide-y divide-[#1C1B1A]/15 md:grid-cols-4 md:divide-x md:divide-y-0">
              {FLAGSHIP_SYSTEMS.map((system, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={system.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`px-4 py-5 text-left transition-colors duration-500 md:px-6 ${
                      isActive ? 'text-[#1C1B1A]' : 'text-[#6E6A63] hover:text-[#1C1B1A]'
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
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#6E6A63]">
                {activeSystem.subtitle}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[#1C1B1A] md:text-4xl">
                {activeSystem.title}
              </h2>
              <p className="mt-4 text-xs tracking-wide text-[#6E6A63]">
                {activeSystem.stack}
              </p>
            </div>

            <div className="md:col-span-7 md:border-l md:border-[#1C1B1A]/15 md:pl-12">
              <p className="text-base leading-relaxed text-[#1C1B1A]/90 md:text-[17px]">
                {activeSystem.summary}
              </p>
              <p className="mt-5 font-serif text-xl italic text-[#1C1B1A]">
                {activeSystem.metric}
              </p>
              <div className="mt-8">
                <a
                  href={activeSystem.href}
                  target={activeSystem.href.startsWith('http') ? '_blank' : undefined}
                  rel={activeSystem.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734]"
                >
                  <span>{activeSystem.linkLabel}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Narrative Bio Split ("About / Philosophy") */}
        <section className="border-t border-[#1C1B1A]/15 py-24 md:py-32">
          <div className="mx-auto grid max-w-editorial grid-cols-1 items-start gap-12 px-6 md:grid-cols-12 md:px-12">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
                Practice &amp; Approach
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug text-[#1C1B1A] md:text-4xl">
                Full-stack engineer, systems builder, founder at Bitnest.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1C1B1A]/85">
                Graduated in Computer Engineering from Savitribai Phule Pune University (2026). My work sits at the intersection of dependable backend architecture—Java, Node.js, Python, and relational databases—and restrained interfaces that respect the reader’s attention.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1C1B1A]/85">
                Whether building carbon-offset compliance algorithms in Excel or multi-hub EV charging infrastructure across Pune, every system is structured around deterministic logic and maintainable code.
              </p>
            </div>

            {/* Quiet Typographic Specification Plate (Replaces Stock Photos) */}
            <div className="border-t border-b border-[#1C1B1A]/15 py-8 md:col-span-5">
              <dl className="space-y-5 text-sm">
                <div className="flex justify-between border-b border-[#1C1B1A]/10 pb-3">
                  <dt className="text-[#6E6A63]">Location</dt>
                  <dd className="text-[#1C1B1A]">Pune, Maharashtra, India</dd>
                </div>
                <div className="flex justify-between border-b border-[#1C1B1A]/10 pb-3">
                  <dt className="text-[#6E6A63]">Education</dt>
                  <dd className="text-[#1C1B1A]">B.E. Computer Engineering, SPPU</dd>
                </div>
                <div className="flex justify-between border-b border-[#1C1B1A]/10 pb-3">
                  <dt className="text-[#6E6A63]">Venture</dt>
                  <dd className="text-[#1C1B1A]">Founder, Bitnest</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#6E6A63]">Primary Stack</dt>
                  <dd className="text-right text-[#1C1B1A]">Java · React · Node · Python · SQL</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* 5. Featured Excerpt Spreads (2-Column Editorial Notes) */}
        <section id="architecture" className="border-t border-[#1C1B1A]/15 py-24 md:py-32">
          <div className="mx-auto max-w-editorial px-6 md:px-12">
            <p className="mb-12 text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
              Architecture Excerpts
            </p>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16">
              {ARCHITECTURE_EXCERPTS.map((item) => (
                <article key={item.title} className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#6E6A63]">
                      {item.category}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl text-[#1C1B1A] md:text-3xl">
                      {item.title}
                    </h3>
                    <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-[#1C1B1A]/90 md:text-[22px]">
                      {item.excerpt}
                    </blockquote>
                  </div>
                  <p className="mt-8 border-t border-[#1C1B1A]/15 pt-4 text-xs tracking-wide text-[#6E6A63]">
                    {item.attribution}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Numbered Pillars (01, 02, 03) */}
        <section className="border-t border-[#1C1B1A]/15 py-24 md:py-32">
          <div className="mx-auto max-w-editorial px-6 md:px-12">
            <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-12">
              {PILLARS.map((pillar) => (
                <div key={pillar.numeral} className="flex flex-col justify-between">
                  <div>
                    <span className="font-serif text-5xl text-[#1C1B1A]/35 md:text-6xl">
                      {pillar.numeral}
                    </span>
                    <h3 className="mt-6 font-serif text-2xl text-[#1C1B1A]">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#1C1B1A]/80 md:text-[15px]">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href={pillar.href}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734]"
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

        {/* 7. Publications, Hackathons & Credentials List (Hairline Rows) */}
        <section id="record" className="border-t border-[#1C1B1A]/15 py-24 md:py-32">
          <div className="mx-auto max-w-editorial px-6 md:px-12">
            <div className="mb-12 flex flex-col justify-between gap-2 md:flex-row md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
                  Academic &amp; Engineering Record
                </p>
                <h2 className="mt-3 font-serif text-3xl text-[#1C1B1A] md:text-4xl">
                  Publications, Hackathons &amp; Credentials
                </h2>
              </div>
            </div>

            <div className="border-t border-[#1C1B1A]/15">
              {RECORD_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-1 gap-2 border-b border-[#1C1B1A]/15 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-[#6E6A63] md:col-span-2">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl text-[#1C1B1A] md:col-span-5 md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6E6A63] md:col-span-5 md:text-right">
                    {item.venue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Unboxed Live Deployments Catalog */}
        <section id="catalog" className="border-t border-[#1C1B1A]/15 py-24 md:py-32">
          <div className="mx-auto max-w-editorial px-6 md:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#6E6A63]">
              Index of Artifacts
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#1C1B1A] md:text-4xl">
              Live Systems &amp; Repositories
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {CATALOG_ARTIFACTS.map((artifact) => (
                <a
                  key={artifact.title}
                  href={artifact.href}
                  target={artifact.href.startsWith('http') ? '_blank' : undefined}
                  rel={artifact.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group block"
                >
                  {/* Unboxed Paper Frame (No Shadow, No Border Radius) */}
                  <div className="flex aspect-[4/5] flex-col justify-between bg-[#E6E0D6] p-6 transition-colors duration-500 group-hover:bg-[#DFD8CC]">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#6E6A63]">
                      {artifact.code}
                    </span>
                    <div>
                      <p className="font-serif text-2xl italic text-[#1C1B1A]">
                        {artifact.title}
                      </p>
                      <p className="mt-2 text-xs text-[#6E6A63]">{artifact.year}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-xl text-[#1C1B1A] group-hover:underline group-hover:decoration-[#064734] group-hover:underline-offset-4">
                      {artifact.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#6E6A63]">{artifact.meta}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Quiet Footer & Colophon */}
      <footer id="colophon" className="border-t border-[#1C1B1A]/15 py-16">
        <div className="mx-auto flex max-w-editorial flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-12">
          <div>
            <p className="font-serif text-xl tracking-[0.18em] uppercase text-[#1C1B1A]">
              Rohit Mane
            </p>
            <p className="mt-1 text-xs text-[#6E6A63]">
              Set in Cormorant Garamond &amp; Plus Jakarta Sans on warm parchment (#EFEAE2).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-xs uppercase tracking-[0.16em] text-[#1C1B1A]">
            <a
              href="https://github.com/ro-hitmane"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-500 hover:text-[#064734]"
            >
              GitHub
            </a>
            <a
              href="https://nbsglobe.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-500 hover:text-[#064734]"
            >
              NBS Globe
            </a>
            <a
              href="https://www.hackerrank.com/profile/rohitmane"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-500 hover:text-[#064734]"
            >
              HackerRank
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}