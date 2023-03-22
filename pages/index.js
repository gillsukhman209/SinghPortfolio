import Nav from "../components/Nav";
import HomePage from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

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
    </div>
  );
}
