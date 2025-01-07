import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { motion } from "framer-motion";

function SocialBar() {
  const links = {
    linkedin: "https://www.linkedin.com/in/sukhmanpreet-singh-115a30239/",
    github: "https://github.com/gillsukhman209",
    twitter: "https://x.com/singhcodes209",
    instagram: "https://www.instagram.com/gill_sukhman209/",
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed bottom-8 left-0 flex justify-center items-center z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-auto px-8 py-4 bg-gradient-to-r from-[#1E293B] to-[#2A3A4F] rounded-full shadow-lg"
      >
        <div className="flex items-center justify-between space-x-6">
          {Object.entries(links).map(([key, url]) => (
            <motion.div
              key={key}
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => window.open(url)}
              className="cursor-pointer"
            >
              {key === "linkedin" && (
                <FaLinkedin
                  size={30}
                  className="text-[#91FCDC] hover:text-white transition-colors duration-300"
                />
              )}
              {key === "github" && (
                <AiFillGithub
                  size={30}
                  className="text-[#91FCDC] hover:text-white transition-colors duration-300"
                />
              )}
              {key === "twitter" && (
                <AiFillTwitterCircle
                  size={30}
                  className="text-[#91FCDC] hover:text-white transition-colors duration-300"
                />
              )}
              {key === "instagram" && (
                <AiFillInstagram
                  size={30}
                  className="text-[#91FCDC] hover:text-white transition-colors duration-300"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SocialBar;
