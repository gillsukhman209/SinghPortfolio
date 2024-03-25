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
    <div className="w-full min-h-screen flex justify-center items-start p-4  ">
      <div className="xs:w-[100%] lg:w-[50%] h-[60%] bg-[#18223C] rounded-3xl flex flex-col items-center  p-6  ">
        <div className="w-full  h-full flex items-center justify-center flex-col gap-20 ">
          <div className=" md:text-4xl xs:text-3xl">Skills</div>
          <div className="w-full h-full ">
            <ul className="flex flex-col  h-full xs:text-xs md:text-xl gap-20 ">
              <div className="w-full flex gap-8">
                <SkillCard
                  title="Javascript"
                  logo={<SiJavascript />}
                  color={"text-orange-400"}
                />
                <SkillCard
                  title="Typescript"
                  logo={<SiTypescript />}
                  color={"text-blue-400"}
                />
                <SkillCard
                  title="React JS"
                  logo={<SiReact />}
                  color={"text-teal-400"}
                />
              </div>

              <div className="w-full flex gap-8">
                <SkillCard
                  title="Boostrap"
                  logo={
                    <img
                      width="20px"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                    ></img>
                  }
                />
                <SkillCard
                  title="Next JS"
                  logo={
                    <img
                      width="20px"
                      src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
                    ></img>
                  }
                />
                <SkillCard
                  title="Tailwind"
                  logo={<SiTailwindcss />}
                  color={"text-blue-400"}
                />
              </div>

              <div className="w-full flex gap-8">
                <SkillCard
                  title="Node.js"
                  logo={<SiNodedotjs />}
                  color={"text-green-400"}
                />
                <SkillCard
                  title="Swift"
                  logo={<SiSwift />}
                  color={"text-orange-600"}
                />
                <SkillCard
                  title="HTML/CSS"
                  logo={<SiHtml5 />}
                  color={"text-blue-500"}
                />
              </div>

              <div className="w-full flex gap-8">
                <SkillCard title="Github" logo={<SiGithub />} />
                <SkillCard
                  title="Firebase"
                  logo={<SiFirebase />}
                  color={"text-yellow-400"}
                />
                <SkillCard
                  title="Figma"
                  logo={<SiFigma />}
                  color={"text-red-600"}
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
