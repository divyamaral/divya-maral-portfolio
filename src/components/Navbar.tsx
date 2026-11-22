import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navLinks, profile } from "../data/site";

const cta = navLinks.find((l) => l.href === "#contact")!;
const pillLinks = navLinks.filter((l) => l.href !== "#contact");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });
  const pillRef = useRef<HTMLElement>(null);

  // Scroll state and progress bar
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 12);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = ["top", ...navLinks.map((l) => l.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === "top" ? "" : entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Slide the highlight under the hovered link, or the active one
  const target = hovered ?? active;
  useLayoutEffect(() => {
    const update = () => {
      const el = pillRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${target}"]`);
      if (!el) return setPill((p) => ({ ...p, visible: false }));
      setPill({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [target]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-dot" aria-hidden="true" />
          {profile.name}
        </a>

        <nav
          className="nav-pill"
          aria-label="Main"
          ref={pillRef}
          onMouseLeave={() => setHovered(null)}
        >
          <span
            className={`nav-indicator${pill.visible ? " visible" : ""}`}
            style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
            aria-hidden="true"
          />
          {pillLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? "active" : ""}
              onMouseEnter={() => setHovered(link.href.slice(1))}
              onFocus={() => setHovered(link.href.slice(1))}
              onBlur={() => setHovered(null)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href={cta.href}>
          {cta.label}
        </a>

        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="nav-menu" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <span className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}