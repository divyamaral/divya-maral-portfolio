import { experience } from "../data/Experience";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Experience.css";

export default function Experience() {
  const ref = useRevealOnScroll();

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">Work history</p>
        <h2 className="about-title reveal">Experience</h2>

        <div className="exp-list">
          {experience.map((r) => (
            <article key={r.id} className="exp reveal">
              <div className="exp-card">
                <div className="exp-head">
                  <div>
                    <h3>{r.role}</h3>
                    <p className="exp-company">
                      {r.company}, {r.location}
                    </p>
                  </div>
                  <span className="exp-when">{r.period}</span>
                </div>

                <ul className="exp-points">
                  {r.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="chips">
                  {r.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}