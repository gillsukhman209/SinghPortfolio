import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="w-full min-h-screen py-24 ">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#91FCDC] text-2xl font-light mb-4"
        >
          03. My Creations
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#CDD6F3] mb-16"
        >
          Showcased Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <Card
            title="21 Habits"
            link="https://www.21habits.co"
            logo={
              <img
                className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
                src="https://cdn-icons-png.flaticon.com/512/8711/8711262.png"
                alt="21 Habits Logo"
              />
            }
            bgColor="bg-gradient-to-br from-[#134E5E] to-[#71B280]"
            textColor="text-white"
            hoverEffect="hover:shadow-xl hover:shadow-[#71B280]/30 transition-all duration-300"
            logoPosition="center"
          />
          <Card
            title="Managy "
            link="https://managy.vercel.app"
            logo={
              <img
                className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
                src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-6114062-5059486.png?f=webp"
                alt="Managy Logo"
              />
            }
            bgColor="bg-gradient-to-br from-[#3A1C71] to-[#D76D77]"
            textColor="text-white"
            hoverEffect="hover:shadow-xl hover:shadow-[#D76D77]/30 transition-all duration-300"
            logoPosition="center"
          />
          <Card
            title="Rapid Relay Pro"
            link="https://rapidrelaypro.vercel.app"
            logo={
              <img
                className="w-20 h-16 object-contain transition-transform duration-300 hover:scale-110"
                src="https://pics.clipartpng.com/Truck_PNG_Clipart-592.png"
                alt="Rapid Relay Pro Logo"
              />
            }
            bgColor="bg-gradient-to-br from-[#1A2980] to-[#26D0CE]"
            textColor="text-white"
            hoverEffect="hover:shadow-xl hover:shadow-[#26D0CE]/30 transition-all duration-300"
            logoPosition="center"
          />
          <Card
            title="Money Tracker"
            link="https://moneytracker-online.vercel.app"
            logo={
              <img
                className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
                src="https://cdn-icons-png.flaticon.com/512/2721/2721091.png"
                alt="Money Tracker Logo"
              />
            }
            bgColor="bg-gradient-to-br from-[#134E5E] to-[#71B280]"
            textColor="text-white"
            hoverEffect="hover:shadow-xl hover:shadow-[#71B280]/30 transition-all duration-300"
            logoPosition="center"
          />
          <Card
            title="Life Map"
            link="https://lifemap.vercel.app"
            logo={
              <img
                className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
                src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png"
                alt="Life Map Logo"
              />
            }
            bgColor="bg-gradient-to-br from-[#4B79A1] to-[#283E51]"
            textColor="text-white"
            hoverEffect="hover:shadow-xl hover:shadow-[#283E51]/30 transition-all duration-300"
            logoPosition="center"
          />
          <Card
            title="Fast-Ship"
            link="https://github.com/gillsukhman209/fast-ship"
            logo={
              <img
                className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110 "
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="Next.js Logo"
              />
            }
            bgColor="bg-gradient-to-br from-[#000000] to-[#0070F3]"
            textColor="text-white"
            hoverEffect="hover:shadow-xl hover:shadow-[#0070F3]/30 transition-all duration-300"
            logoPosition="center"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
