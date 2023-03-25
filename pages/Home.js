import React from "react";

function Home() {
  return (
    <div className="w-full p-16  flex items-center justify-center h-screen ">
      <div className="flex flex-col gap-10">
        <h1 className="text-[#91FCDC]  font-light">Hi, my name is</h1>
        <div className="text-5xl sm:text-7xl font-semibold gap-5 flex flex-col">
          <h1 className="text-[#CDD6F3] ">Sukhmanpreet Singh</h1>
          <h1 className="text-gray-500">I build things for the web.</h1>
        </div>

        <h1 className="text-gray-400 w-full sm:max-w-[50%] text-start text-lg font-light ">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. currently, I'm focused on
          building accessible, human-centered prducts at{" "}
          <span className="text-[#91FCDC]">Upstatement</span>.
        </h1>
      </div>
    </div>
  );
}

export default Home;
