// Edit this file to change the experience section.

export type Role = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    id: "bitnest",
    role: "Full Stack Developer",
    company: "Bitnest Software Solutions Providers",
    location: "Pune",
    period: "Jul 2025 – Present",
    points: [
      "Integrate REST APIs between React.js frontend modules and a MySQL backend, working with frontend and backend teammates to reduce post-deployment defects.",
      "Redesign MySQL schemas and indexes for high-traffic tables to improve query performance while keeping data consistent across modules.",
      "Deliver client-specific feature modules on schedule while meeting government and organizational compliance requirements.",
    ],
    stack: ["React.js", "REST APIs", "MySQL", "Spring", "Java", "TypeScript"],
  },
  {
    id: "technogrowth",
    role: "Java Developer Intern",
    company: "TechnoGrowth Software Solutions",
    location: "Pune",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Built and maintained Spring-based REST APIs for data exchange between frontend and backend systems.",
      "Investigated and fixed application issues with teammates, which improved code efficiency.",
      "Built semantic, standards-compliant UI components with HTML5, CSS3 and JavaScript.",
    ],
    stack: ["Java", "Spring", "REST APIs", "HTML5", "CSS3", "JavaScript"],
  },
];