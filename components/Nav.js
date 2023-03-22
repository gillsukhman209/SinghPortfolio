import React from "react";
import Link from "next/link";

function Nav() {
  const scrollView = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="w-full h-14 sticky top-0">
      <div className="w-full h-full bg-[#080e1c] shadow-xl flex justify-between items-center p-10">
        <button
          className="text-[rgb(141,240,180)] text-3xl"
          href="#home"
          onClick={() => scrollView("home")}
        >
          Portfolio
        </button>

        <div className="flex gap-10 text-xl text-[rgb(141,240,180)] font-light items-center cursor-pointer">
          <button className="" onClick={() => scrollView("about")}>
            About
          </button>
          <button onClick={() => scrollView("projects")}>Projects</button>
          <button onClick={() => scrollView("contact")}>Contact</button>

          <button
            onClick={() => scrollView("resume")}
            className="border border-[#91FCDC] h-10 w-24 shadow-xl rounded-md flex items-center justify-center font-semibold"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
