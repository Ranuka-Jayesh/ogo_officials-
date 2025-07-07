import React, { useState, useEffect } from 'react';
import { Mail, Phone, Facebook, Instagram, ArrowRight, ExternalLink, Heart, MapPin, ChevronRight, ChevronUp } from 'lucide-react';
import { motion, useScroll, useAnimationControls } from 'framer-motion';

const Footer: React.FC = () => {
  // Current year
  const currentYear = new Date().getFullYear();
  
  // For back to top button
  const [, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  const controls = useAnimationControls();
  
  // Handle scroll events to show/hide back to top button
  useEffect(() => {
    const updateBackToTop = () => {
      if (scrollY.get() > 500) {
        setShowBackToTop(true);
        controls.start({ opacity: 1, y: 0 });
      } else {
        setShowBackToTop(false);
        controls.start({ opacity: 0, y: 20 });
      }
    };
    
    const unsubscribe = scrollY.onChange(updateBackToTop);
    return () => unsubscribe();
  }, [scrollY, controls]);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };
  
  // Social media links
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: "https://www.facebook.com/share/1AQBQgUpts/", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com/ogo_technology_?igsh=MXhobDRkMnE1OHM2Zw==", label: "Instagram" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 4.44c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm3.71 9.96c-.53 2.12-2.23 3.82-4.35 4.35C14.05 21.23 11.95 21.23 9.63 20.75c-2.12-.53-3.82-2.23-4.35-4.35-.48-2.32-.48-4.42 0-6.74.53-2.12 2.23-3.82 4.35-4.35C11.95 4.83 14.05 4.83 16.37 5.31c2.12.53 3.82 2.23 4.35 4.35.48 2.32.48 4.42 0 6.74z"/></svg>, url: "https://g.co/kgs/PQKdFM2", label: "Google" },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>, url: "https://pin.it/1xGL6Dp1b", label: "Pinterest" }
  ];
  
  // Quick links
  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "Services", url: "#services" },
    { name: "About", url: "#about" },
    { name: "Contact", url: "#contact" }
  ];
  
  // Service links
  const serviceLinks = [
    { name: "Academic Assistance", url: "#" },
    { name: "Graphic Design", url: "#" },
    { name: "AI Solutions", url: "#" },
    { name: "Software Development", url: "#" },
    { name: "Website Development", url: "#" },
    { name: "Mobile Applications", url: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-blue-950 text-white overflow-hidden">
      {/* Back To Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg flex items-center justify-center"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronUp className="h-6 w-6" />
        <span className="absolute -top-8 whitespace-nowrap text-sm font-medium bg-blue-900/80 text-white py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Back to Top
        </span>
      </motion.button>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full translate-x-1/2 translate-y-1/2"
          animate={{ 
            scale: [1, 1.1, 1.2, 1.1, 1],
            rotate: [0, -180, -360],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <motion.div 
                className="flex items-center mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="/2OGOlogo.png" 
                  alt="Ogo Tech Logo" 
                  className="h-10 w-10 object-contain mr-2"
                />
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                  technology
                </span>
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed">
              We provide AI-driven software, web & app development, and academic support to help businesses and students worldwide succeed.
              </p>
              
              <div className="flex space-x-3 mb-8">
                {socialLinks.map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white"
                    whileHover={{ y: -4, backgroundColor: "#3b82f6", color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                className="group flex items-center text-sm text-blue-400 font-medium cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <span>More about us</span>
                <motion.div
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.4 }}
              />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li key={idx} whileHover={{ x: 4 }}>
                  <a 
                    href={link.url} 
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <motion.div
                      className="mr-2 opacity-0 text-blue-400 group-hover:opacity-100"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      <ChevronRight className="h-3 w-3" />
                    </motion.div>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Our Services
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.4, duration: 0.4 }}
              />
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service, idx) => (
                <motion.li key={idx} whileHover={{ x: 4 }}>
                  <a 
                    href={service.url} 
                    className="group flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <motion.div
                      className="mr-2 opacity-0 text-blue-400 group-hover:opacity-100"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      <ChevronRight className="h-3 w-3" />
                    </motion.div>
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.4 }}
              />
            </h3>
            <ul className="space-y-5">
              <motion.li 
                className="flex"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:ogotechnology.lk@gmail.com" className="text-white hover:text-blue-300">
                    info@ogotechnology.net
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+94759307059" className="text-white hover:text-blue-300">
                    +94 759 30 7059
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex"
                whileHover={{ x: 4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
          <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <span className="text-white">
                    ogo technology, Sri Lanka
                  </span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Newsletter */}
        <motion.div 
          className="relative mt-10 mb-16 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl p-6 lg:p-8 backdrop-blur-sm border border-white/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold mb-1">Stay Connected</h3>
              <p className="text-gray-300 mb-4 lg:mb-0">
                Subscribe to our newsletter for updates and exclusive offers from ogo technology, Sri Lanka
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center justify-center font-medium"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe <ExternalLink className="ml-2 h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/20 rounded-full -mr-10 -mt-10 blur-xl" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-indigo-400/20 rounded-full -ml-10 -mb-10 blur-xl" />
        </motion.div>
        
        {/* Bottom bar */}
        <div className="pt-8 mt-10 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p>&copy; {currentYear} ogo technology. All rights reserved.</p>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <motion.div 
                className="text-xs flex items-center text-gray-500"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> by ogo
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;