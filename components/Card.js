import React from "react";

function Card({ title }) {
  return (
    <div className="w-[400px] h-[500px] bg-[#15223E] shadow-2xl rounded-2xl p-4 text-2xl flex justify-center">
      {title}
    </div>
  );
}

export default Card;
