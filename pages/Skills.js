import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSwift,
  SiHtml5,
  SiTailwindcss,
  SiGithub,
  SiFirebase,
  SiFigma,
} from "react-icons/si";
import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <div className="w-full h-screen flex items-end justify-center ">
      <div className="w-[70%] h-[60%] bg-[#18223C] rounded-3xl flex flex-col items-center  p-6 ">
        <div className="w-full h-full flex items-center justify-center flex-col gap-14 ">
          <div className=" text-4xl">Skills</div>
          <div className="w-full h-full mt-8 ">
            <ul className="flex  h-full text-xl flex-wrap w-full gap-3  ">
              <SkillCard title="Javascript" logo={<SiJavascript />} />
              <SkillCard title="Typescript" logo={<SiTypescript />} />
              <SkillCard title="React/NextJS" logo={<SiReact />} />
              <SkillCard title="Boostrap" logo={<SiTypescript />} />
              <SkillCard title="Saas" logo={<SiTypescript />} />
              <SkillCard title="Tailwind" logo={<SiTailwindcss />} />
              <SkillCard title="Node.js" logo={<SiNodedotjs />} />
              <SkillCard title="Swift" logo={<SiSwift />} />
              <SkillCard title="HTML/CSS" logo={<SiHtml5 />} />
              <SkillCard title="Github" logo={<SiGithub />} />
              <SkillCard title="Firebase" logo={<SiFirebase />} />
              <SkillCard title="Figma" logo={<SiFigma />} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
