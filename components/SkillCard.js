import React from "react";

function SkillCard({ title, logo }) {
  return (
    <li className="w-[30%] h-10 gap-3 flex items-center  justify-center">
      <div> {logo}</div>
      <h1>{title}</h1>
    </li>
  );
}

export default SkillCard;
