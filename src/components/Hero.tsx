import { useEffect, useState } from "react";
import { profile } from "../data/site";

// Types each phrase, pauses, deletes it, then moves to the next one.
function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0] ?? "");
      return;
    }

    let word = 0;
    let chars = 0;
    let deleting = false;
    let timer: number;

    const tick = () => {
      const current = words[word];
      chars += deleting ? -1 : 1;
      setText(current.slice(0, chars));

      let delay = deleting ? 35 : 70;
      if (!deleting && chars === current.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && chars === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        delay = 350;
      }
      timer = window.setTimeout(tick, delay);
    };

    chars = 0;
    setText("");
    timer = window.setTimeout(tick, 700);
    return () => window.clearTimeout(timer);
  }, [words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.typed);
  const [photoFailed, setPhotoFailed] = useState(false);
  const headlineWords = profile.headline.split(" ");
  const headlineLead = headlineWords.slice(0, -2).join(" ");
  const headlineTail = headlineWords.slice(-2).join(" ");

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="photo-wrap rise" style={{ ["--i" as string]: 0 }}>
          <span className="photo-glow" aria-hidden="true" />
          <div className="photo-ring">
            {photoFailed ? (
              <span className="photo-fallback" aria-label={profile.fullName}>
                {profile.name[0]}
              </span>
            ) : (
              <img
                src="/photo.jpeg"
                alt={`Portrait of ${profile.fullName}`}
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
        </div>

        <div>
          <p className="greeting rise" style={{ ["--i" as string]: 1 }}>
            <span>
              Hi, I'm <span className="greeting-name">{profile.fullName}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{profile.role}, {profile.location}</span>
          </p>

          <h1 className="rise" style={{ ["--i" as string]: 2 }}>
            {headlineLead}{" "}
            <span className="h1-accent">{headlineTail}</span>
          </h1>

          <p className="hero-sub rise" style={{ ["--i" as string]: 3 }}>
            I work on <span className="greeting-name">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-intro rise" style={{ ["--i" as string]: 4 }}>
            {profile.intro}
          </p>

          <ul className="chips rise" style={{ ["--i" as string]: 5 }} aria-label="Core stack">
            {profile.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="hero-actions rise" style={{ ["--i" as string]: 6 }}>
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost" href={profile.resume} download="Divya_Maral_Resume.pdf">
              Download resume
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}