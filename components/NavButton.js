import React from "react";
import { useState } from "react";
function NavButton({ elementId, title }) {
  const [textSize, setTextSize] = useState("text-xl");
  const scrollView = (elementId) => {
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <button
      className={
        title === "Portfolio"
          ? "text-3xl tracking-widest"
          : "text-lg tracking-widest hover:scale-110 ease-in-out "
      }
      onClick={() => scrollView(elementId)}
    >
      {title}
    </button>
  );
}

export default NavButton;
