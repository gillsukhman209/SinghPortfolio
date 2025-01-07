import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import NavButton from "./NavButton";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "skills", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-opacity-90 backdrop-blur-md shadow-lg" : "bg-opacity-0"
      } bg-[#080e1c] font-['Poppins', sans-serif]`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <NavButton
            elementId="home"
            title="Portfolio"
            className={`text-2xl font-bold ${
              activeSection === "home" ? "text-[#91FCDC]" : "text-gray-300"
            } hover:text-[#91FCDC] transition-colors duration-200`}
          />

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavButton
                  elementId={item.id}
                  title={item.title}
                  className={`relative ${
                    activeSection === item.id
                      ? "text-[#91FCDC]"
                      : "text-gray-300"
                  } hover:text-[#91FCDC] transition-colors duration-200 pb-1 text-sm tracking-wide`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#91FCDC]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </NavButton>
              </motion.div>
            ))}
            <NavButton
              elementId="resume"
              title="Resume"
              className={`text-[#080e1c] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200 text-sm tracking-wide`}
              onClick={() => window.open("/resume.pdf", "_blank")}
            />
          </div>

          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-300 hover:text-[#91FCDC] transition-colors duration-200"
            >
              {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#080e1c] shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavButton
                    elementId={item.id}
                    title={item.title}
                    className={`block px-3 py-2 text-base font-medium ${
                      activeSection === item.id
                        ? "text-[#91FCDC] bg-gray-800"
                        : "text-gray-300"
                    } hover:text-[#91FCDC] hover:bg-gray-800 transition-all duration-200 rounded-md`}
                    onClick={() => setShowMenu(false)}
                  />
                </motion.div>
              ))}
              <NavButton
                elementId="resume"
                title="Resume"
                className={`w-full text-left block px-3 py-2 text-base font-medium bg-[#91FCDC] text-[#080e1c] rounded-md hover:bg-opacity-90 transition-all duration-200`}
                onClick={() => window.open("/resume.pdf", "_blank")}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Nav;
