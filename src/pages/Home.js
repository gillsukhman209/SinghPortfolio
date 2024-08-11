import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="w-full p-8 md:p-16 flex items-center justify-center min-h-screen ">
      <div className="flex flex-col gap-8 md:gap-10 max-w-4xl">
        <h2 className="text-[#91FCDC] text-xl sm:text-2xl md:text-3xl font-light">
          Hi, my name is
        </h2>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gap-4 flex flex-col">
          <h1 className="text-[#CDD6F3]">Sukhmanpreet Singh</h1>
          <h1 className="text-gray-400">Frontend Developer</h1>
        </div>

        <p className="text-gray-400 w-full md:max-w-[70%] text-start text-base md:text-lg font-light leading-relaxed transition-colors duration-300 ease-in-out hover:text-white">
          I'm a dedicated frontend developer with a passion for programming that
          ignited in 2016. Leveraging a robust foundation in software
          development, I've cultivated a diverse portfolio that demonstrates my
          expertise in HTML, CSS, JavaScript, React, and Python. My unwavering
          commitment to continuous learning, coupled with my ability to craft
          innovative and efficient solutions, positions me as a valuable asset
          for cutting-edge frontend development projects. I thrive on
          transforming complex challenges into seamless, user-centric
          experiences.
        </p>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="bg-transparent hover:bg-[#91FCDC] text-[#91FCDC] hover:text-[#0E182D] font-semibold py-2 px-4 border border-[#91FCDC] hover:border-transparent rounded transition duration-300 ease-in-out w-fit mt-4 cursor-pointer"
        >
          View My Work
        </Link>
      </div>
    </div>
  );
}

export default Home;
