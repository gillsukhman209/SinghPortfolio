import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Card({ title, link, description }) {
  return (
    <div
      onClick={() => {
        window.open(link);
      }}
      className="xl:w-[35%] xs:w-[50%]  h-[200px] bg-[#15223E] shadow-2xl rounded-2xl   p-4  flex justify-center hover:scale-110 ease-in-out "
    >
      <div className="flex flex-col items-center justify-around">
        <div className="xs:text-lg md:text-2xl 4xl:text-3xl  font-sans">
          {title}
        </div>
        <div className="text-gray-400">{description}</div>
      </div>
    </div>
  );
}

export default Card;
