import { techStack } from "../data/techstack";
import "./TechStack.css";

export default function TechStack() {
  return (
    <section id="tech-stack" className="ts" aria-label="Tech stack">
      <p className="ts-label">Tech stack</p>

      <div className="ts-row">
        {/* The names are listed twice so the loop has no visible jump. */}
        <ul className="ts-track">
          {techStack.map((name) => (
            <li key={name}>{name}</li>
          ))}
          {techStack.map((name) => (
            <li key={`${name}-dup`} className="ts-dup" aria-hidden="true">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}