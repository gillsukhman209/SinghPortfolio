import Nav from "../components/Nav";
import HomePage from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import SocialBar from "../components/SocialBar";

export default function Home() {
  return (
    <div className="w-full max-h-full bg-[#0E182D] text-white ">
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
      <section id="contact">
        <Contact />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <SocialBar />
    </div>
  );
}
