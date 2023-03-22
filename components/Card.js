import React from "react";

function Card({ title }) {
  return (
    <div className="w-[400px] h-[500px] bg-[#15223E] shadow-2xl rounded-2xl p-4 text-2xl flex justify-center ">
      <div className="flex flex-col gap-10 items-center">
        <div className="underline">{title}</div>
        <div className="flex gap-4">
          <h1>Skills: React, Javascript, HTML, CSS, API's, Hosting</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
