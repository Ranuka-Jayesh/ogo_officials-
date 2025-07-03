import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] // Spring-like ease
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { 
        duration: 0.4, 
        ease: "easeInOut" 
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="fixed w-full flex justify-center items-start z-50 pt-4">
      <motion.nav 
        className={`${
          scrolled ? "w-[95%] max-w-xl" : "w-[98%] max-w-2xl"
        } transition-all duration-500`}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        {/* iPhone notch-like design with glass effect */}
        <div 
          className={`
            relative rounded-full px-4 h-14
            ${scrolled 
              ? 'bg-white/70 backdrop-blur-lg shadow-lg border border-white/30' 
              : 'bg-black/30 backdrop-blur-md'
            }
            transition-all duration-500
          `}
        >
          <div className="flex items-center justify-between h-full">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex-shrink-0 flex items-center">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                >
                  
                </motion.div>
                <motion.span 
                  className={`ml-2 text-lg font-bold ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  ogo
                </motion.span>
              </div>
            </motion.div>
            
            <div className="hidden md:block">
              <motion.div 
                className="flex items-baseline space-x-3"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a 
                  variants={itemVariants} 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, 'home')}
                  className={`px-2 py-1 text-xs font-medium hover:text-blue-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Home
                </motion.a>
                <motion.a 
                  variants={itemVariants} 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, 'services')}
                  className={`px-2 py-1 text-xs font-medium hover:text-blue-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Services
                </motion.a>
                <motion.a 
                  variants={itemVariants} 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className={`px-2 py-1 text-xs font-medium hover:text-blue-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  About
                </motion.a>
                <motion.a 
                  variants={itemVariants} 
                  href="#projects" 
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className={`px-2 py-1 text-xs font-medium hover:text-blue-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Projects
                </motion.a>
                <motion.a 
                  variants={itemVariants} 
                  href="#leaders" 
                  onClick={(e) => handleNavClick(e, 'leaders')}
                  className={`px-2 py-1 text-xs font-medium hover:text-blue-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Leaders
                </motion.a>
                <motion.a 
                  variants={itemVariants} 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className={`px-2 py-1 text-xs font-medium hover:text-blue-500 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Contact
                </motion.a>
              </motion.div>
            </div>
            
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-1.5 rounded-full hover:bg-white/20 focus:outline-none transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className={`
                absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl shadow-lg
                ${scrolled ? 'bg-white/70 backdrop-blur-lg' : 'bg-black/30 backdrop-blur-md'}
              `}
            >
              <div className="flex flex-col space-y-2">
                <a 
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/20 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Home
                </a>
                <a 
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/20 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Services
                </a>
                <a 
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/20 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  About
                </a>
                <a 
                  href="#projects"
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/20 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Projects
                </a>
                <a 
                  href="#leaders"
                  onClick={(e) => handleNavClick(e, 'leaders')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/20 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Leaders
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/20 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;