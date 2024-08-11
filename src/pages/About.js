import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen   py-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <h2 className="text-[#91FCDC] text-xl font-light">01. About Me</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#CDD6F3]">
            Passionate Coder Since 2016
          </h1>
          <div className="space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
            <p>
              As a dedicated software enthusiast since 2016, I've immersed
              myself in the world of computer science, cultivating a diverse and
              robust skill set that is showcased in my comprehensive portfolio.
              While I may not have formal work experience, my self-motivation
              and unwavering commitment to continuous learning have driven me to
              excel in this field.
            </p>
            <p>
              My journey in software development encompasses a wide range of
              projects, from creating sophisticated weather applications to
              developing feature-rich social media platforms. I've also honed my
              skills through participation in numerous hackathons, pushing the
              boundaries of my abilities and fostering innovation. My technical
              proficiency spans multiple languages and frameworks, including
              Python, JavaScript, HTML/CSS, React, and Django, enabling me to
              tackle diverse challenges in software development.
            </p>
            <p>
              I am enthusiastic about leveraging my skills to explore new
              opportunities in the tech industry. My passion lies in solving
              complex problems and creating impactful, user-centric solutions
              that push the boundaries of what's possible in the digital realm.
              I am eager to contribute my expertise and fresh perspectives to
              innovative projects that make a difference in the world of
              technology.
            </p>
          </div>
          <button className="bg-transparent hover:bg-[#91FCDC] text-[#91FCDC] hover:text-[#0E182D] font-semibold py-2 px-6 border border-[#91FCDC] hover:border-transparent rounded transition duration-300 ease-in-out w-fit mt-4">
            View My Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
