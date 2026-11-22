import { useState, type FormEvent, type ReactNode } from "react";
import { contact } from "../data/contact";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Contact.css";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

// Optional: set VITE_CONTACT_ENDPOINT in .env (for example a Formspree URL) to send messages
// without opening the visitor's email app. Without it, the form falls back to a mailto link.
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

const icon = (children: ReactNode) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const items = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
    icon: icon(
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    label: "Phone",
    value: contact.phone.display,
    href: contact.phone.href,
    external: false,
    icon: icon(
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "LinkedIn",
    value: contact.linkedin.display,
    href: contact.linkedin.href,
    external: true,
    icon: icon(
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "GitHub",
    value: contact.github.display,
    href: contact.github.href,
    external: true,
    icon: icon(
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
  },
];

export default function Contact() {
  const ref = useRevealOnScroll();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot: real visitors never fill this in

    if (!endpoint) {
      const name = String(data.get("name"));
      const email = String(data.get("email"));
      const message = String(data.get("message"));
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">Contact</p>
        <h2 className="about-title reveal">Get in touch</h2>
        <p className="contact-lead reveal">
          Have a project or a role in mind? Send a message here or use any of the links.
        </p>

        <div className="contact-grid">
          <ul className="contact-list reveal">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  className="contact-item"
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <form className="contact-form reveal" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required />
            </div>

            {/* Honeypot field for bots */}
            <div className="hp" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            <p className={`form-status${status === "error" ? " error" : ""}`} role="status" aria-live="polite">
              {status === "sent" && "Thanks, your message is on its way. I will reply soon."}
              {status === "mailto" &&
                `Your email app should open with the message filled in. If nothing happens, write to ${contact.email}.`}
              {status === "error" && `Something went wrong. Please email me directly at ${contact.email}.`}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}