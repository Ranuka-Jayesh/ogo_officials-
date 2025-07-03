import React, { useRef } from 'react';
import { Briefcase, Paintbrush, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values based on scroll - only transform the content, not the entire section
  const translateY = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9], [0, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  // Title animation variants

  const services = [
    {
      id: 1,
      title: "Academic Department",
      brandName: "ogo assignment",
      description: "Comprehensive academic writing and support services for global university students, delivering custom, plagiarism-free solutions.",
      icon: <Briefcase className="h-8 w-8" />,
      logo: "/ogologo.png",
      features: [
        "University Assignments",
        "Research Papers & Essays",
        "Dissertations & Theses",
        "Programming Assignments",
        "Case Studies & Reports",
        "Plagiarism-Free Content"
      ],
      color: "blue",
      stats: [
        { label: "Success Rate", value: "99%" },
        { label: "Projects Done", value: "3000+" },
        { label: "Expert Writers", value: "10+" }
      ],
      bgGradient: "from-blue-500 via-blue-400 to-blue-600",
      accentColor: "blue"
    },
    {
      id: 2,
      title: "Software & AI Department",
      brandName: "ogo gen",
      description: "Cutting-edge software development and AI/ML solutions, crafting innovative digital experiences and intelligent systems.",
      icon: <Cpu className="h-8 w-8" />,
      logo: "/ogologo.png",
      features: [
        "Custom Software Development",
        "AI & Machine Learning",
        "Web Applications",
        "Mobile Apps (iOS/Android)",
        "API Development & Integration",
        "Cloud Solutions"
      ],
      color: "purple",
      stats: [
        { label: "Projects Delivered", value: "100+" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Tech Stack", value: "15+" }
      ],
      bgGradient: "from-purple-500 via-purple-400 to-purple-600",
      accentColor: "purple"
    },
    {
      id: 3,
      title: "Graphic Design Department",
      brandName: "ogo art",
      description: "Professional visual design solutions delivering creative excellence for both academic and commercial projects.",
      icon: <Paintbrush className="h-8 w-8" />,
      logo: "/ogologo.png",
      features: [
        "Logo & Brand Design",
        "UI/UX Design",
        "Social Media Graphics",
        "Academic Posters",
        "Marketing Materials",
        "Motion Graphics"
      ],
      color: "indigo",
      stats: [
        { label: "Designs Created", value: "1000+" },
        { label: "Client Satisfaction", value: "99%" },
        { label: "Design Tools", value: "10+" }
      ],
      bgGradient: "from-indigo-500 via-indigo-400 to-indigo-600",
      accentColor: "indigo"
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Enhanced background animations */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-indigo-50/30"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                filter: 'blur(20px)'
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                scale: [1, Math.random() * 0.2 + 0.9],
                opacity: [0.3, 0.6]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5">
          <motion.div
            className="w-full h-full"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ 
          y: translateY,
          opacity,
          scale: contentScale
        }}
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Departments
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="relative inline-block">
              Specialized Solutions
              <motion.span 
                className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Delivering excellence through our specialized departments, each focused on unique aspects of technology and creativity.
          </motion.p>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-lg shadow-md overflow-hidden h-[480px] transform transition-all duration-300 hover:shadow-xl">
                {/* Animated Gradient Border */}
                <motion.div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.bgGradient}`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                
                {/* Card Inner */}
                <div className="relative p-5 h-full flex flex-col">
                  {/* Header with Logo */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`p-2 rounded-lg bg-${service.color}-50 relative group-hover:shadow-lg transition-shadow duration-300`}>
                        {React.cloneElement(service.icon, { 
                          className: `h-5 w-5 text-${service.color}-500 relative z-10` 
                        })}
                        <motion.div
                          className={`absolute inset-0 bg-${service.color}-100 rounded-lg`}
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold text-gray-900`}>
                          {service.title}
                        </h3>
                        <span className={`text-sm text-${service.color}-600 font-medium`}>
                          {service.brandName}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Department Logo */}
                    <motion.img
                      src={service.logo}
                      alt={`${service.brandName} logo`}
                      className="h-8 w-8 object-contain"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Animated Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {service.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        className={`p-2 rounded-lg bg-${service.color}-50/30 text-center relative overflow-hidden`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-${service.color}-100/20`}
                          initial={{ y: "100%" }}
                          whileHover={{ y: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.p 
                          className={`text-base font-semibold text-${service.color}-600 mb-0.5 relative z-10`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          {stat.value}
                        </motion.p>
                        <p className="text-xs text-gray-500 relative z-10">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features List with Animations */}
                  <div className="flex-grow mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <motion.div
                            className={`w-1.5 h-1.5 rounded-full bg-${service.color}-400`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-xs text-gray-600">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Animated Action Button */}
                  <motion.button
                    className={`w-full py-2.5 px-4 rounded-lg bg-gradient-to-r ${service.bgGradient}
                              text-white text-sm font-medium shadow-sm
                              flex items-center justify-center space-x-2`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore {service.brandName}</span>
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.button>
                </div>

                {/* Animated Background Elements */}
                <motion.div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-${service.color}-500/10 to-transparent rounded-bl-full`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-${service.color}-500/10 to-transparent rounded-tr-full`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Brand Showcase */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <motion.h3 
            className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted Tools & Technologies
          </motion.h3>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Academic Tools Section */}
        <motion.div className="mb-12">
          <motion.h4 
            className="text-lg text-gray-600 mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Academic Integrity Tools
          </motion.h4>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {[
              {
                name: "ChatGPT",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
                width: "140px"
              },
              {
                name: "GrokAI",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvwGLjIYF5J3EJzmKaKFjLzLnCQl5fmrwoIA&s",
                width: "140px"
              },
              {
                name: "ClaudeAI",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Claude_AI_logo.png?20240802092617",
                width: "120px"
              },
              {
                name: "Turnitin",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDDbK0F13A9HUqN3vNelaq4GdIWCbwnTc6Q&s",
                width: "130px"
              },
              {
                name: "ZeroGPT",
                logo: "https://zerogpt.com/logo.png",
                width: "120px"
              },
              {
                name: "GPTZero",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Header_gptzero_logo.svg/2560px-Header_gptzero_logo.svg.png",
                width: "120px"
              }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-500/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: brand.width }}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Design Tools Section */}
        <motion.div>
          <motion.h4 
            className="text-lg text-gray-600 mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Design & Creative Tools
          </motion.h4>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {[
              {
                name: "Photoshop",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png",
                width: "48px"
              },
              {
                name: "Illustrator",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/512px-Adobe_Illustrator_CC_icon.svg.png",
                width: "48px"
              },
              {
                name: "Figma",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
                width: "32px"
              }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-purple-500/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: brand.width }}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {brand.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Development Environments Section */}
        <motion.div className="mb-12">
          <motion.h4 
            className="text-lg text-gray-600 mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Development Environments
          </motion.h4>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {[
              {
                name: "Visual Studio",
                logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Visual_Studio_Icon_2019.svg",
                width: "48px"
              },
              {
                name: "VS Code",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
                width: "48px"
              },
              {
                name: "JetBrains",
                logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg",
                width: "48px"
              },
              {
                name: "Google Colab",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
                width: "48px"
              },
              {
                name: "GitHub",
                logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                width: "48px"
              },
              {
                name: "Jupyter",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
                width: "48px"
              },
              {
                name: "Android Studio",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg",
                width: "48px"
              },
              {
                name: "R Studio",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg",
                width: "120px"
              }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-500/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: brand.width }}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {brand.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Frontend & Frameworks Section */}
        <motion.div className="mb-12">
          <motion.h4 
            className="text-lg text-gray-600 mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Frontend & Frameworks
          </motion.h4>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {[
              {
                name: "HTML",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
                width: "48px"
              },
              {
                name: "CSS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                width: "48px"
              },
              {
                name: "JavaScript",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                width: "48px"
              },
              {
                name: "React",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                width: "55px"
              },
              {
                name: "Node.js",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                width: "80px"
              },
              {
                name: "Vite.js",
                logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
                width: "48px"
              },
              {
                name: "Tailwind CSS",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
                width: "48px"
              },
              {
                name: "Flutter",
                logo: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
                width: "48px"
              },
              {
                name: "C#",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg",
                width: "48px"
              }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-green-500/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: brand.width }}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {brand.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Programming Languages Section */}
        <motion.div className="mb-12">
          <motion.h4 
            className="text-lg text-gray-600 mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Programming Languages
          </motion.h4>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {[
              {
                name: "PHP",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
                width: "65px"
              },
              {
                name: "Python",
                logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                width: "48px"
              },
              {
                name: "R",
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/724px-R_logo.svg.png",
                width: "48px"
              },
              {
                name: "Java",
                logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
                width: "40px"
              },
              {
                name: ".NET",
                logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
                width: "48px"
              }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-yellow-500/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: brand.width }}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
          <motion.span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {brand.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Databases Section */}
        <motion.div className="mb-12">
          <motion.h4 
            className="text-lg text-gray-600 mb-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Databases
          </motion.h4>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          >
            {[
              {
                name: "MySQL",
                logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
                width: "100px"
              },
              {
                name: "PostgreSQL",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
                width: "48px"
              },
              {
                name: "Supabase",
                logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
                width: "48px"
              },
              {
                name: "Firebase",
                logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
                width: "120px"
              },
              {
                name: "MongoDB",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
                width: "120px"
              }
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-red-500/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: brand.width }}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {brand.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Auto-scrolling brand banner */}
        <motion.div 
          className="mt-20 overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex space-x-16 animate-scroll"
            animate={{
              x: [0, -1000],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }
            }}
          >
            {[...Array(2)].map((_, bannerIndex) => (
              <div key={bannerIndex} className="flex space-x-16">
                {[
                  // Academic Tools
                  "ChatGPT", "GrokAI", "ClaudeAI", "Turnitin", "ZeroGPT", "GPTZero",
                  // Design Tools
                  "Photoshop", "Illustrator", "Figma",
                  // Development Environments
                  "Visual Studio", "VS Code", "JetBrains", "Google Colab", "GitHub", "Jupyter", "Android Studio", "R Studio",
                  // Frontend & Frameworks
                  "HTML", "CSS", "JavaScript", "React", "Node.js", "Vite.js", "Tailwind CSS", "Flutter", "C#",
                  // Programming Languages
                  "PHP", "Python", "R", "Java", ".NET",
                  // Databases
                  "MySQL", "PostgreSQL", "Supabase", "Firebase", "MongoDB"
                ].map((name, index) => (
                  <motion.span
                    key={index}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    whileHover={{ scale: 1.1 }}
                  >
                    {name}
          </motion.span>
                ))}
      </div>
            ))}
          </motion.div>
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;