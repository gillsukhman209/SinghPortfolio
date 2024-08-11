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
  SiBootstrap,
  SiNextdotjs,
  SiCss3,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiSass,
  SiStyledcomponents,
  SiMui,
  SiPython,
  SiDjango,
  SiFlask,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-5 h-5" />,
          color: "text-yellow-400",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-5 h-5" />,
          color: "text-blue-400",
        },
        {
          name: "React",
          icon: <SiReact className="w-5 h-5" />,
          color: "text-cyan-400",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-5 h-5" />,
          color: "text-white",
        },
      ],
    },
    {
      title: "Styling",
      skills: [
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="w-5 h-5" />,
          color: "text-purple-500",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="w-5 h-5" />,
          color: "text-teal-400",
        },
        {
          name: "HTML/CSS",
          icon: <SiHtml5 className="w-5 h-5" />,
          color: "text-blue-500",
        },

        {
          name: "Material-UI",
          icon: <SiMui className="w-5 h-5" />,
          color: "text-blue-400",
        },
      ],
    },
    {
      title: "Backend & Mobile",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="w-5 h-5" />,
          color: "text-green-500",
        },
        {
          name: "Swift",
          icon: <SiSwift className="w-5 h-5" />,
          color: "text-orange-500",
        },
        {
          name: "Python",
          icon: <SiPython className="w-5 h-5" />,
          color: "text-yellow-300",
        },
        {
          name: "Django",
          icon: <SiDjango className="w-5 h-5" />,
          color: "text-green-600",
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "GitHub",
          icon: <SiGithub className="w-5 h-5" />,
          color: "text-gray-400",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-5 h-5" />,
          color: "text-yellow-500",
        },

        {
          name: "MongoDB",
          icon: <SiMongodb className="w-5 h-5" />,
          color: "text-green-500",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-5 h-5" />,
          color: "text-blue-500",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#91FCDC] text-2xl font-light mb-4"
        >
          02. My Expertise
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#CDD6F3] mb-16"
        >
          Skills & Technologies
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#1E293B] rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-[#91FCDC] mb-6">
                {category.title}
              </h3>
              <div className="grid sm:grid-cols-1 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    title={skill.name}
                    logo={skill.icon}
                    color={skill.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
