import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Projects.css";

function Shot({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="shot">
      <div className="shot-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="shot-body">
        {failed ? (
          <div className="shot-fallback">{project.title}</div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRevealOnScroll();

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">Selected work</p>
        <h2 className="about-title reveal">Featured projects</h2>

        <div className="projects-list">
          {projects.map((p) => (
            <article key={p.id} className="project reveal">
              <Shot project={p} />
              <div className="project-body">
                <p className="project-type">{p.type}</p>
                <h3>{p.title}</h3>
                <p className="project-summary">{p.summary}</p>
                <ul className="project-points">
                  {p.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="project-stack-label">Tech stack</p>
                <ul className="chips">
                  {p.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {p.link && (
                  <a className="project-link" href={p.link.href} target="_blank" rel="noreferrer">
                    {p.link.label}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}