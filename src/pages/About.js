import React from "react";

function About() {
  return (
    <div className="w-full min-h-screen  ">
      <div className="  w-full flex items-center  justify-center h-full flex-col gap-20">
        <div className=" max-w-[80%] lg:max-w-[50%] 2xl:max-w-[50%] 3xl:max-w-[40%] flex flex-col gap-10 h-full text-xl text-gray-600">
          <h1 className="text-3xl text-white text-center  ">
            <div className="flex gap-6 items-center">
              <span className="text-xl">01.</span>
              <h1 className="text-">About Me</h1>

              <hr className=" w-[100%] sm:w-[60%]" />
            </div>
          </h1>
          <p className="text-left flex flex-col gap-6  ease-in-out hover:text-white">
            As an 20-year-old with a strong passion for coding since 2016, I
            have immersed myself in the world of computer science and have
            developed a range of skills and abilities that have allowed me to
            create a diverse portfolio of projects. Despite not having any
            formal work experience in the field, I am a self-motivated
            individual who is committed to continuous learning and growth.
            <span>
              Throughout my coding journey, I have undertaken numerous projects
              that have allowed me to hone my skills and develop a strong
              foundation in programming. I have built a weather app that allows
              users to check the current weather conditions of any location in
              the world. In addition, I have also created clones of popular
              social media platforms such as Instagram, Twitter, YouTube, and
              Facebook. These projects have allowed me to experiment with
              various programming languages and technologies, and have given me
              the confidence to tackle more complex projects.
            </span>
            <span>
              My passion for coding extends beyond personal projects, as I am
              constantly seeking to expand my knowledge and skills through
              online courses and attending hackathons. These opportunities have
              allowed me to collaborate with other coders and work on projects
              that have real-world applications.
            </span>
            <span>
              Through my portfolio, I showcase my ability to develop creative
              and innovative solutions that are user-friendly and aesthetically
              pleasing. I am proficient in various programming languages such as
              Python, JavaScript, and HTML/CSS, and have experience with
              frameworks such as React and Django.
            </span>
            <span>
              I am excited to continue exploring new opportunities and
              challenges in the field of coding. I am eager to work with others
              to solve complex problems and create impactful solutions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
