import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Card({ title }) {
  return (
    <div className="w-[400px] h-[500px] bg-[#15223E] shadow-2xl rounded-2xl p-4  flex justify-center ">
      <div className="flex flex-col gap-10 items-center justify-between">
        <div className=" text-2xl">{title}</div>
        <h1 className="text-lg">React, Javascript, HTML, Tailwind, API, CSS</h1>
        <div className="flex gap-4">
          <AiFillGithub size={65} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Card;
