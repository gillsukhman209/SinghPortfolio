import React from "react";
import Card from "../components/Card";

function Projects() {
  return (
    <div className="  w-full flex items-center  justify-center h-full flex-col gap-20 ">
      <h1 className="text-4xl  text-white ">Projects</h1>
      <div className="2xl:w-[30%] md:w-[50%] w-[100%] flex gap-10 flex-wrap  items-center justify-center">
        <Card title="WeatherApp" />
        <Card title={"TodoList"} />
        <Card title={"Calculator"} />
        <Card title={"Finance Manager"} />
        <Card title={"File Manager"} />
        <Card title="Sound Tracker" />
      </div>
    </div>
  );
}

export default Projects;
