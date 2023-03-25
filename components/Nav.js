import React from "react";
import NavButton from "./NavButton";

function Nav() {
  return (
    <div className="w-full h-14 sticky top-0">
      <div className="w-full h-full bg-[#080e1c] shadow-2xl rounded-md flex justify-between items-center p-10">
        <NavButton elementId="home" title="Portfolio" />

        <div className="flex gap-10 text-xl text-white font-light items-center cursor-pointer ">
          <NavButton elementId="about" title="About" />
          <NavButton elementId="projects" title="Projects" />
          <NavButton elementId="skills" title="Skills" />
          <NavButton elementId="contact" title="Contact" />
          <button
            onClick={() => scrollView("resume")}
            className="border border-white text-white h-10 w-24 shadow-xl rounded-md flex items-center justify-center font-semibold tracking-wide"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
