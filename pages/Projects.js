import React from "react";
import Card from "../components/Card";

function Projects() {
  return (
    <div className="  w-full flex items-center  justify-center h-full flex-col gap-20 ">
      <h1 className="text-4xl  text-white ">Projects</h1>
      <div className="w-full flex gap-10 flex-wrap   items-center justify-center">
        <Card
          title="Instagram Clone"
          link="https://github.com/gillsukhman209/Instagram-clone"
        />
        <Card
          title="Twitter Clone"
          link="https://github.com/gillsukhman209/Twitter-Clone"
        />
        <Card
          title="Youtube Clone"
          link="https://github.com/gillsukhman209/Youtube-Clone"
        />
        <Card
          title="Todo App"
          link="https://github.com/gillsukhman209/managy"
        />

        <Card
          title="Gill Auto Booker"
          link="https://gillautobooker.vercel.app/"
        />
        <Card
          title="Trading Website"
          link="https://github.com/gillsukhman209/Trading-Website"
        />
      </div>
    </div>
  );
}

export default Projects;
