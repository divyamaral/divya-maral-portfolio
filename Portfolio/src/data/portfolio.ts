export interface SystemCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  metric: string;
  linkLabel: string;
  href: string;
  caseStudy: {
    thesis: string;
    context: string;
    architecture: string[];
    outcomes: string[];
  };
}

export interface ArchitectureExcerpt {
  id: string;
  systemId: string;
  category: string;
  title: string;
  excerpt: string;
  attribution: string;
}

export interface Pillar {
  numeral: string;
  title: string;
  description: string;
  action: string;
  href: string;
}

export interface RecordEntry {
  year: string;
  title: string;
  venue: string;
}

export interface ArchiveArtifact {
  code: string;
  title: string;
  meta: string;
  year: string;
  href: string;
}

export const SITE_META = {
  name: 'Rohit Mane',
  contactEmail: 'your-email@domain.com', // Update with your active inbox prior to deployment
  announcement:
    'Developing PlotPair (VM0047 Compliance Engine) & available for Software Engineering roles',
  location: 'Pune, Maharashtra, India',
  education: 'B.E. Computer Engineering, SPPU (2026)',
  venture: 'Founder, Bitnest',
  primaryStack: 'Java · React · Node · Python · SQL',
  links: {
    github: 'https://github.com/ro-hitmane',
    nbsGlobe: 'https://nbsglobe.com',
    hackerrank: 'https://www.hackerrank.com/profile/rohitmane',
  },
};

export const FLAGSHIP_SYSTEMS: SystemCaseStudy[] = [
  {
    id: 'plotpair',
    number: '01',
    title: 'PlotPair',
    subtitle: 'VM0047 Carbon Offset Compliance Engine',
    year: '2026',
    role: 'Creator & Core Engineer',
    stack: ['Office.js', 'TypeScript', 'Linear Algebra', 'Cloudflare Pages'],
    summary:
      'An open-source Excel add-in executing vectorized Mahalanobis distance calculations and Jonker-Volgenant global assignment algorithms directly inside spreadsheet workflows for Verra VM0047 ecological control-plot matching.',
    metric:
      'Exact global assignment across high-dimensional covariate matrices without external Python runtimes.',
    linkLabel: 'Read case study',
    href: 'https://github.com/ro-hitmane',
    caseStudy: {
      thesis:
        'Bringing deterministic econometric matching directly into the spreadsheet environment where carbon auditors already work.',
      context:
        'Under Verra VM0047 afforestation and reforestation methodology, project developers must pair treatment plots with statistically equivalent control plots across multi-dimensional environmental covariates. Existing workflows required exporting sensitive GIS tables to external R or Python scripts.',
      architecture: [
        'Implemented vectorized covariance matrix estimation and regularized matrix inversion in TypeScript for client-side execution inside the Office.js taskpane.',
        'Engineered an exact Jonker-Volgenant linear assignment solver to minimize total Mahalanobis distance globally rather than relying on greedy nearest-neighbor heuristics.',
        'Deployed as a zero-backend static bundle on Cloudflare Pages so ecological datasets never leave the analyst’s workstation.',
      ],
      outcomes: [
        'Eliminated external runtime dependencies for VM0047 baseline control-plot pairing.',
        'Produced auditable, one-click pair assignments written directly back to structured Excel sheets.',
      ],
    },
  },
  {
    id: 'nbsglobe',
    number: '02',
    title: 'NBS Globe',
    subtitle: 'Gold Standard Agroforestry & ESG Platform',
    year: '2026',
    role: 'Full-Stack & Infrastructure Engineer',
    stack: ['React', 'Vite', 'Node.js', 'Cloudflare Workers'],
    summary:
      'Multi-page ESG platform engineered for Nature Based Solutions Private Limited, connecting institutional climate partners and field operations across large-scale agroforestry initiatives in Andhra Pradesh.',
    metric:
      '25,000+ hectares mapped · 50,000+ beneficiaries · 12M+ trees planted · 1.2M+ tCO₂e climate impact.',
    linkLabel: 'Read case study',
    href: 'https://nbsglobe.com',
    caseStudy: {
      thesis:
        'Translating field-level agroforestry metrics into institutional-grade ESG reporting and partner onboarding.',
      context:
        'Nature Based Solutions Private Limited required a unified digital platform capable of presenting verified Gold Standard carbon credit metrics to global climate buyers while supporting landowner and partner workflows in Andhra Pradesh.',
      architecture: [
        'Built a responsive React and Vite frontend paired with Cloudflare Workers edge routing for low-latency global delivery.',
        'Engineered a token-protected administrative interface for managing project disclosures and partner inquiries.',
        'Configured custom domain DNS routing, Google Workspace mail infrastructure, and technical SEO metadata.',
      ],
      outcomes: [
        'Publicly documents 25,000+ hectares under agroforestry management and 1.2M+ tCO₂e projected sequestration.',
        'Established a dual-sided portal serving both institutional ESG evaluators and regional field collaborators.',
      ],
    },
  },
  {
    id: 'plugy',
    number: '03',
    title: 'Plugy (SMEVCS)',
    subtitle: 'Smart EV Charging & Grid Scheduling Platform',
    year: '2026',
    role: 'Lead Backend & Systems Developer',
    stack: ['Java MVC', 'Apache Tomcat', 'MySQL', 'REST APIs'],
    summary:
      'End-to-end electric vehicle charging station management system built for urban fleet and commuter infrastructure, unifying dynamic tariff pricing, slot reservations, and automated GST tax invoicing.',
    metric:
      'Deployed across 26 charging hubs spanning Pune Municipal Corporation and PCMC.',
    linkLabel: 'Read case study',
    href: '#anthology',
    caseStudy: {
      thesis:
        'Deterministic slot concurrency and transparent dynamic tariff calculation for urban EV charging networks.',
      context:
        'Fragmented charger availability and static billing models create bottlenecks across municipal charging hubs. Plugy (SMEVCS) models charger bays, time-window reservations, and load-aware pricing in a single transactional platform.',
      architecture: [
        'Structured around a strict Java MVC architecture deployed on Apache Tomcat with normalized MySQL schemas.',
        'Built a dynamic pricing engine adjusting per-kWh tariffs based on hub demand windows and charger connector tiers.',
        'Automated itemized digital GST tax invoice generation upon session completion.',
      ],
      outcomes: [
        'Mapped and modeled operational workflows across 26 charging locations in Pune Municipal Corporation (PMC) and Pimpri-Chinchwad (PCMC).',
        'Prevented double-booked charging bays via transactional slot locking.',
      ],
    },
  },
  {
    id: 'pwd-raigad',
    number: '04',
    title: 'PWD Raigad Portal',
    subtitle: 'Public Works Tracking & Liaisoning System',
    year: '2026',
    role: 'Project Lead & Full-Stack Developer',
    stack: ['PHP', 'MySQL', 'Relational Schema Design'],
    summary:
      'Administrative web platform designed to streamline public infrastructure tracking, departmental documentation, and inter-office liaisoning workflows for Public Works Department Raigad.',
    metric:
      'Structured multi-role approval pipelines replacing manual ledger reconciliation.',
    linkLabel: 'Read case study',
    href: '#anthology',
    caseStudy: {
      thesis:
        'Replacing fragmented paper registers with traceable, role-based public works status ledgers.',
      context:
        'Regional public works divisions coordinate dozens of concurrent civil contractors, inspection milestones, and tender approvals across administrative offices.',
      architecture: [
        'Designed a relational MySQL database tracking project milestones, contractor assignments, and departmental sign-offs.',
        'Implemented role-based access views separating administrative oversight from field reporting updates.',
      ],
      outcomes: [
        'Delivered a responsive administrative portal tailored to PWD Raigad liaisoning workflows.',
        'Reduced status-lookup overhead through centralized milestone indexing.',
      ],
    },
  },
];

export const ARCHITECTURE_EXCERPTS: ArchitectureExcerpt[] = [
  {
    id: 'excerpt-plotpair',
    systemId: 'plotpair',
    category: 'Numerical Methods in the Browser',
    title: 'Vectorized Mahalanobis Matching Inside Office.js',
    excerpt:
      '“Rather than shipping sensitive ecological plot datasets to a remote server, covariance inversion and Jonker-Volgenant bipartite assignment run deterministically inside the client runtime—turning a multi-hour GIS analyst workflow into a reproducible spreadsheet operation.”',
    attribution: 'From PlotPair Engineering Notes, 2026',
  },
  {
    id: 'excerpt-plugy',
    systemId: 'plugy',
    category: 'Transactional State & Pricing',
    title: 'Dynamic Tariff Engines Across 26 Urban EV Hubs',
    excerpt:
      '“Reliable charging infrastructure depends on predictable concurrency. By modeling station bays, peak-load multipliers, and tax invoice generation inside a strict Java MVC lifecycle on Apache Tomcat, reservation conflicts are eliminated before payment capture.”',
    attribution: 'From Plugy (SMEVCS) Deployment Log, Pune',
  },
];

export const PILLARS: Pillar[] = [
  {
    numeral: '01',
    title: 'Full-Stack Web & Cloud Systems',
    description:
      'Production applications engineered across Java, Node.js, Python, React, and PostgreSQL/MySQL—deployed on Cloudflare Workers, Pages, and Linux servlet containers.',
    action: 'Explore secondary index',
    href: '#catalog',
  },
  {
    numeral: '02',
    title: 'Geospatial & ESG Data Tooling',
    description:
      'Analytical pipelines for agroforestry verification, Google Earth Engine land-use filtering, and covariate matching built for verifiable climate reporting.',
    action: 'Inspect PlotPair & NBS',
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

export const RECORD_ITEMS: RecordEntry[] = [
  {
    year: '2026',
    title: 'B.E. in Computer Engineering',
    venue: 'Savitribai Phule Pune University · Pune, Maharashtra',
  },
  {
    year: '2025–2026',
    title: 'Cloud Infrastructure & Competitive Programming',
    venue: 'Google Cloud Skills Arcade · HackerRank (rohitmane) · GitHub (ro-hitmane)',
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
];

export const ARCHIVE_ARTIFACTS: ArchiveArtifact[] = [
  {
    code: 'IDX — 01',
    title: 'AuraScore',
    meta: 'Flutter · Dart · Android Interface & Custom Interaction Sliders',
    year: '2026',
    href: 'https://github.com/ro-hitmane',
  },
  {
    code: 'IDX — 02',
    title: 'Earth Engine Land-Use Pipeline',
    meta: 'Google Earth Engine · JavaScript · Post-2023 Vegetation Filtering',
    year: '2026',
    href: 'https://github.com/ro-hitmane',
  },
  {
    code: 'IDX — 03',
    title: 'Team OptiCrew Scheduler',
    meta: 'Smart India Hackathon 2025 · Maritime Vessel Logistics Optimizer',
    year: '2025',
    href: 'https://github.com/ro-hitmane',
  },
  {
    code: 'IDX — 04',
    title: 'Cloud CDN & Infrastructure Labs',
    meta: 'Google Cloud · gcloud CLI · Security & Storage Architecture',
    year: '2025',
    href: 'https://github.com/ro-hitmane',
  },
];