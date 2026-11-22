import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack/>
        <About />
        {/* <TechStack /> */}
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}