import React from "react";
import { motion } from "framer-motion";

function SkillCard({ title, logo, color }) {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full h-16 flex items-center justify-start bg-gradient-to-r from-[#1E293B] to-[#2A3A4F] rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
    >
      <div
        className={`${color} w-16 h-full flex items-center justify-center text-2xl`}
      >
        {logo}
      </div>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-grow"
      >
        <h1 className="text-lg font-semibold text-white ml-4">{title}</h1>
      </motion.div>
      <motion.div
        whileHover={{ width: "100%" }}
        className="h-1 w-0 bg-gradient-to-r from-[#91FCDC] to-[#CDD6F3] absolute bottom-0 left-0 transition-all duration-300"
      />
    </motion.li>
  );
}

export default SkillCard;
