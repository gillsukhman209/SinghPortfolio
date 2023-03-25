import Nav from "../components/Nav";
import HomePage from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import SocialBar from "../components/SocialBar";

export default function Home() {
  return (
    <div className="w-full max-h-full bg-[#0E182D] text-white animate-pulse-short">
      <Nav />

      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <SocialBar />
    </div>
  );
}
