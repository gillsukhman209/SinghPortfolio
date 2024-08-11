import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Nav from "../components/Nav";
import HomePage from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import SocialBar from "../components/SocialBar";

const Section = ({ id, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen bg-transparent"
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name - Professional Portfolio</title>
        <meta
          name="description"
          content="Portfolio showcasing skills, projects, and experience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full min-h-screen bg-gradient-to-b from-[#0E182D] to-[#1A2942] text-white overflow-hidden">
        <Nav />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Section id="home">
            <HomePage />
          </Section>
          <Section id="about">
            <About />
          </Section>
          <Section id="skills">
            <Skills />
          </Section>
          <Section id="projects">
            <Projects />
          </Section>
          <Section id="contact">
            <Contact />
          </Section>
        </main>
        <SocialBar />
      </div>
    </>
  );
}
