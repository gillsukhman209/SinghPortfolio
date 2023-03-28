import React from "react";

function Home() {
  return (
    <div className="w-full p-16  flex items-center justify-center h-screen ">
      <div className="flex flex-col gap-10">
        <h1 className="text-[#91FCDC] sm:text-3xl text-2xl font-light">
          Hi, my name is
        </h1>
        <div className="text-5xl sm:text-7xl font-semibold gap-5 flex flex-col">
          <h1 className="text-[#CDD6F3] ">Sukhmanpreet Singh</h1>
          <h1 className="text-gray-500">Frontend Developer.</h1>
        </div>

        <h1 className="text-gray-400 w-full sm:max-w-[35%]  text-start text-lg font-light ">
          I am an aspiring frontend developer with a passion for programming
          since 2016. I have developed a strong foundation in programming and
          created a diverse portfolio of projects that showcase my proficiency
          in various frontend technologies such as HTML, CSS, Javascript, Python
          and have used React for most of my projects . My dedication to
          continuous learning and growth, coupled with my ability to develop
          creative and innovative solutions, make me a strong candidate for any
          frontend development role.
          <span className="text-[#91FCDC]">Upstatement</span>.
        </h1>
      </div>
    </div>
  );
}

export default Home;
