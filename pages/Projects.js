import React from "react";
import Card from "../components/Card";

function Projects() {
  return (
    <div className="  w-full flex items-center  justify-start min-h-screen  flex-col gap-20  ">
      <h1 className="4xl:text-5xl xs:text-3xl md:text-4xl  text-white ">
        Projects
      </h1>
      <div className="w-full flex gap-10 flex-wrap   items-center justify-center mt-20">
        <Card
          title="Managy"
          description="Task manager"
          link="https://managy.vercel.app"
        />

        <Card
          title="Rapid Relay Pro "
          description="Advanced auto refresher for truckers"
          link="https://rapidrelaypro.vercel.app"
        />

        <Card
          title="Money Tracker"
          description="Website to manage your money"
          link="https://moneytracker-online.vercel.app"
        />

        <Card
          title="Life Map"
          link="https://lifemap.vercel.app"
          description="Create charts to keep track of your life"
        />

        <Card title="More on GitHub" link="https://github.com/gillsukhman209" />
      </div>
    </div>
  );
}

export default Projects;
