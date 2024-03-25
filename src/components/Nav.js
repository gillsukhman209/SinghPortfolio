import React from "react";
import NavButton from "./NavButton";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full fixed top-0 ">
      <div className="w-full h-full  bg-[#080e1c]  shadow-2xl rounded-md flex justify-around items-center p-6">
        <NavButton elementId="home" title="Portfolio" />

        <div className="hidden md:flex gap-10 text-xl text-white font-light items-center cursor-pointer ">
          <NavButton elementId="about" title="About" />
          <NavButton elementId="projects" title="Projects" />
          <NavButton elementId="skills" title="Skills" />
          <NavButton elementId="contact" title="Contact" />
          {/* <button
            onClick={() => scrollView("resume")}
            className="border border-white text-white h-10 w-24 shadow-xl rounded-md flex items-center justify-center font-semibold tracking-wide"
          >
            Resume
          </button> */}
        </div>

        <div className=" md:hidden xs:flex items-center justify-end w-full">
          <BiMenuAltRight
            size={35}
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />

          <div
            className={
              showMenu
                ? " absolute top-0 right-0 h-screen w-[40%] bg-[#080e1c]  "
                : "hidden"
            }
          >
            <div className="w-full h-full  p-4">
              <button
                className="w-full h-14 flex justify-end text-3xl "
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                X
              </button>

              <div className="w-full h-full flex flex-col gap-10 text-xl text-white font-light items-center cursor-pointer ">
                <NavButton elementId="about" title="About" />
                <NavButton elementId="projects" title="Projects" />
                <NavButton elementId="skills" title="Skills" />
                <NavButton elementId="contact" title="Contact" />
                {/* <button
                  onClick={() => scrollView("resume")}
                  className="border border-white text-white h-10 w-24 shadow-xl rounded-md flex items-center justify-center font-semibold tracking-wide"
                >
                  Resume
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
