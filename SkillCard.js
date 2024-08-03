import React from "react";

function SkillCard({ title, logo, color }) {
  return (
    <li className="w-[30%] h-10 gap-3 flex items-center  justify-center hover:scale-125 ease-in-out">
      <div className={color}> {logo}</div>
      <h1>{title}</h1>
    </li>
  );
}

export default SkillCard;
