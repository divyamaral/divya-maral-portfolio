import Reveal from "./Reveal";
import { about } from "../data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="about-title">{about.title}</h2>

        <Reveal className="about-grid">
          <div className="about-copy">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <div className="about-links">
              {about.links.map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {l.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="about-card" aria-label="At a glance">
            <h3>At a glance</h3>
            <dl>
              {about.facts.map((f) => (
                <div key={f.label} className="fact">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>

        <Reveal>
          <h3 className="journey-heading">Journey so far</h3>
          <ol className="journey">
            {about.journey.map((step) => (
              <li key={step.when + step.title}>
                <span className="journey-when">{step.when}</span>
                <span className="journey-title">{step.title}</span>
                <span className="journey-where">{step.where}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}