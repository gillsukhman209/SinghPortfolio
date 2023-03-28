import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Card({ title, link }) {
  return (
    <div className="xl:w-[30%] h-[400px] bg-[#15223E] shadow-2xl rounded-2xl p-4  flex justify-center  ">
      <div className="flex flex-col gap-10 items-center justify-between">
        <div className=" text-4xl">{title}</div>
        <div className="flex gap-4">
          <AiFillGithub
            size={65}
            color="white"
            onClick={() => {
              window.open(link);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
