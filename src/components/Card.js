import React from "react";
import { motion } from "framer-motion";

function Card({ title, link, logo, textColor, hoverEffect }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open(link)}
      className={`w-full sm:h-64 bg-gradient-to-br from-[#1E293B] to-[#2A3A4F] ${textColor} shadow-lg rounded-3xl p-6 flex flex-col transition-all duration-300 ${hoverEffect} cursor-pointer overflow-hidden group`}
    >
      <h3 className="text-2xl font-bold tracking-tight mb-4 w-full">{title}</h3>
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="text-4xl flex justify-center items-center flex-grow"
      >
        {logo}
      </motion.div>
      <div className="mt-4">
        <span className="text-sm opacity-75">Click to view project</span>
        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
          className="h-0.5 bg-current mt-1"
        />
      </div>
    </motion.div>
  );
}

export default Card;
