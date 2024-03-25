import React from "react";
import Card from "../components/Card";

function Projects() {
  return (
    <div className="  w-full flex items-center  justify-start min-h-screen  flex-col gap-20   ">
      <h1 className=" xs:text-3xl md:text-4xl  text-white ">Projects</h1>
      <div className="w-full flex gap-10 flex-wrap   items-center justify-center mt-20">
        <Card
          title="Managy (ToDo List)"
          link="https://managy.vercel.app"
          logo={
            <img
              className="w-[50px]"
              src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-6114062-5059486.png?f=webp"
            />
          }
        />

        <Card
          title="Rapid Relay Pro  "
          link="https://rapidrelaypro.vercel.app"
          logo={
            <img
              className="w-[100px] h-12"
              src="https://pics.clipartpng.com/Truck_PNG_Clipart-592.png"
            />
          }
        />

        <Card
          title="More Projects On GitHub"
          link="https://github.com/gillsukhman209"
          logo={
            <img
              className="w-[50px] h-12 "
              src="https://pngimg.com/d/github_PNG63.png"
            />
          }
        />
      </div>
    </div>
  );
}

export default Projects;
