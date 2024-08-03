import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

function SocialBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const icons = [
    {
      component: FaLinkedin,
      link: "https://www.linkedin.com/in/sukhmanpreet-singh-115a30239/",
    },
    { component: AiFillGithub, link: "https://github.com/gillsukhman209" },
    { component: AiFillTwitterCircle, link: "https://x.com/Sukhmanpre30268" },
    {
      component: AiFillInstagram,
      link: "https://www.instagram.com/gill_sukhman209/",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1500); // Change this value to control the speed of the bouncing effect
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="w-full h-20 sticky bottom-0 left-0">
      <div className="w-[300px] h-full p-10 bg-[#18223C] rounded-xl">
        <div className="w-full h-full flex items-center justify-between cursor-pointer">
          {icons.map((icon, index) => {
            const IconComponent = icon.component;
            return (
              <IconComponent
                key={index}
                size={35}
                color="white"
                onClick={() => window.open(icon.link)}
                className={`${index === activeIndex ? "animate-spin" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SocialBar;
