// Edit this file to change the copy and links across the site.

export const profile = {
  name: "Divya",
  fullName: "Divya Maral",
  role: "Full Stack Developer",
  location: "Pune, India",
  headline: "Developing practical solutions through code",
  // Phrases typed out after "I work on"
  typed: [
    "React.js interfaces",
    "Spring REST APIs",
    "MySQL schemas and indexes",
    "secure, compliant client features",
  ],
  intro:
    "Full stack developer with over a year of professional experience. At Bitnest Software Solutions I connect React.js modules to a MySQL backend through REST APIs and tune schemas and indexes on high-traffic tables. The client features I ship meet government and organizational compliance requirements.",
  stack: ["React.js", "TypeScript", "Java", "Spring", "MySQL", "REST APIs"],
  stats: [
    { value: "1+ yr", label: "Professional experience" },
    { value: "148+", label: "Infrastructure projects digitized" },
    { value: "8.94", label: "CGPA, B.E. Computer Engineering" },
    { value: "Top 1%", label: "NPTEL Software Testing, IIT Kharagpur" },
  ],
  resume: "/Divya_Maral_resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  // { label: "Tech stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  eyebrow: "About",
  title: "I like the part where the frontend meets the database.",
  paragraphs: [
    "I'm a full stack developer in Pune. I finished a Diploma in Computer Engineering at Government Polytechnic Pune in 2023, then a B.E. in Computer Engineering at Navsahyadri Education Society's Group of Institutions in 2026, with a CGPA of 8.94.",
    "At Bitnest Software Solutions I connect React.js modules to a MySQL backend through REST APIs, and I rework schemas and indexes on the tables that get the most traffic. Before that I was a Java developer intern at TechnoGrowth, where I wrote Spring REST APIs and fixed application issues with the team.",
    "I think about security and correctness early. In Plugy, an EV charging platform, I used SELECT FOR UPDATE inside transactions so two drivers can't book the same slot, and I hash passwords with salted PBKDF2. For E-PWD Raigad, a government platform, I moved records for 148+ infrastructure projects and 25 rest houses off manual handling.",
  ],
  facts: [
    { label: "Based in", value: "Pune, Maharashtra" },
    { label: "Now", value: "Full Stack Developer at Bitnest Software Solutions" },
    { label: "Education", value: "B.E. Computer Engineering, SPPU, 2026" },
    { label: "Certified", value: "Oracle Cloud Infrastructure 2025 AI Foundations Associate" },
    // { label: "Outside code", value: "Little Bloom.Co, a small handmade floral business" },
  ],
  links: [
    { label: "Email me", href: "mailto:divyamaral472@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/divya-maral" },
  ],
  journey: [
    { when: "2023", title: "Diploma in Computer Engineering", where: "Government Polytechnic Pune" },
    { when: "Jan – Apr 2025", title: "Java Developer Intern", where: "TechnoGrowth Software Solutions" },
    { when: "Jul 2025 – now", title: "Full Stack Developer", where: "Bitnest Software Solutions" },
    { when: "2026", title: "B.E. in Computer Engineering", where: "Savitribai Phule Pune University" },
  ],
};
export const techStack = {
  eyebrow: "Tech stack",
  title: "The tools I reach for, front to back.",
  intro:
    "From React interfaces to MySQL schemas, this is the stack I use to build web applications end to end.",
  groups: [
    {
      title: "Frontend",
      blurb: "Interfaces that talk to REST APIs and stay readable.",
      items: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Backend",
      blurb: "APIs and schemas, including index tuning on high-traffic tables.",
      items: ["Java", "Spring Framework", "RESTful API design", "MySQL", "PHP"],
    },
    {
      title: "Tools",
      blurb: "What I write, run and ship code with.",
      items: ["Git", "Visual Studio Code", "Eclipse", "XAMPP", "Claude AI"],
    },
    {
      title: "Core concepts",
      blurb: "The fundamentals behind the code.",
      items: [
        "Data structures and algorithms",
        "Object-oriented programming",
        "SDLC",
        "Application security",
      ],
    },
    {
      title: "Soft skills",
      blurb: "How I work with the people around the code.",
      items: ["Critical thinking", "Problem solving", "Team collaboration", "Adaptability"],
      wide: true,
    },
  ],
};