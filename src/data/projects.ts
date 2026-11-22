// Edit this file to change the projects section.
// Screenshots go in public/projects/ (any size, 16:10 looks best).

export type Project = {
  id: string;
  title: string;
  type: string;
  summary: string;
  points: string[];
  stack: string[];
  image: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    id: "plugy",
    title: "Plugy",
    type: "EV charging platform",
    summary: "Drivers find a charging station, reserve a slot and pay in one place.",
    points: [
      "Double booking is blocked with database transactions that use SELECT FOR UPDATE, so overlapping reservations are rejected.",
      "Security covers PBKDF2 salted password hashing, role-based access filters, session-fixation protection and parameterized SQL queries.",
    ],
    stack: ["Java", "Servlets", "MySQL"],
    image: "/projects/plugy.png",
  },
  {
    id: "e-pwd-raigad",
    title: "E-PWD Raigad",
    type: "E-governance web platform",
    summary:
      "Digitized records for 148+ infrastructure projects and 25 rest houses, replacing manual record handling.",
    points: [
      "A normalized MySQL database handles secure CRUD operations.",
      "Role-based access, media management and project monitoring modules support the department’s daily workflows.",
    ],
    // Add the frontend and backend tools you used here.
    stack: ["HTML","JavaScript", "BootStrap", "MySQL", "PHP",],
    image: "/projects/e-pwd-raigad.png",
    link: { label: "Visit pwdraigad.in", href: "https://pwdraigad.in/" },
  },
  {
    id: "nbs",
    title: "NBS website",
    type: "Company website",
    summary: "The public website for NBS (Nature Based Solution) Pvt Ltd.",
    points: [
      "I built the UI, the contact forms and the responsive layout.",
      "Forms save to a Supabase PostgreSQL database through Cloudflare Workers, and Turnstile keeps bots out.",
    ],
    stack: ["React", "Vite", "Node.js", "Supabase"],
    image: "/projects/nbs.png",
    link: { label: "Visit nbsglobe.com", href: "https://nbsglobe.com" },
  },
];