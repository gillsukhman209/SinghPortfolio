import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

function SocialBar() {
  const links = {
    linkedin: "https://www.linkedin.com/in/sukhmanpreet-singh-115a30239/",
    github: "https://github.com/gillsukhman209",
    twitter: "https://twitter.com/singhsukhman209",
    instagram: "https://www.instagram.com/gill_sukhman209/",
  };
  return (
    <div className="w-full h-20 sticky bottom-0 left-0 animate-bounce">
      <div className="w-[300px] h-full  p-10 bg-[#18223C] rounded-xl">
        <div className="w-full h-full flex items-center justify-between cursor-pointer">
          <FaLinkedin
            size={35}
            color="white"
            onClick={() => {
              window.open(links.linkedin);
            }}
          />
          <AiFillGithub
            size={35}
            color="white"
            onClick={() => {
              window.open(links.github);
            }}
          />
          <AiFillTwitterCircle
            size={35}
            color="white"
            onClick={() => {
              window.open(links.twitter);
            }}
          />
          <AiFillInstagram
            size={35}
            color="white"
            onClick={() => {
              window.open(links.instagram);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SocialBar;
