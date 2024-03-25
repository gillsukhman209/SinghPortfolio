import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Card({ title, link }) {
  return (
    <div
      onClick={() => {
        window.open(link);
      }}
      className="xl:w-[40%] h-[200px] bg-[#15223E] shadow-2xl rounded-2xl p-4  flex justify-center hover:scale-110 ease-in-out "
    >
      <div className="flex gap-10 items-center justify-between ">
        <div className=" text-3xl font-sans">{title}</div>
        <div className="flex gap-4 cursor-pointer"></div>
      </div>
    </div>
  );
}

export default Card;
