import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Users, Briefcase, Award, GraduationCap, Target, Sparkles,
  Star, Lightbulb, Users2, ArrowUpRight
} from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "3000+", label: "Happy Clients" },
    { icon: <Briefcase className="w-6 h-6" />, value: "5000+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Success Rate" },
    { icon: <GraduationCap className="w-6 h-6" />, value: "25+", label: "Expert Team" },
  ];

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description: "To deliver smart, affordable tech from AI automation project support built for global growth.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Our Vision",
      description: "To lead the world in AI-powered digital solutions that help startups, businesses, and students thrive.",
    },
  ];

  // Flag list for carousel (for seamless repeat)
  const flags = [
    { name: 'Sri Lanka', url: 'https://flagcdn.com/w80/lk.png' },
    { name: 'India', url: 'https://flagcdn.com/w80/in.png' },
    { name: 'United Kingdom', url: 'https://flagcdn.com/w80/gb.png' },
    { name: 'United States', url: 'https://flagcdn.com/w80/us.png' },
    { name: 'Canada', url: 'https://flagcdn.com/w80/ca.png' },
    { name: 'Australia', url: 'https://flagcdn.com/w80/au.png' },
    { name: 'Germany', url: 'https://flagcdn.com/w80/de.png' },
    { name: 'France', url: 'https://flagcdn.com/w80/fr.png' },
    { name: 'UAE', url: 'https://flagcdn.com/w80/ae.png' },
    { name: 'Singapore', url: 'https://flagcdn.com/w80/sg.png' },
    { name: 'Malaysia', url: 'https://flagcdn.com/w80/my.png' },
    { name: 'Japan', url: 'https://flagcdn.com/w80/jp.png' },
    { name: 'South Africa', url: 'https://flagcdn.com/w80/za.png' },
    { name: 'Italy', url: 'https://flagcdn.com/w80/it.png' },
    { name: 'Netherlands', url: 'https://flagcdn.com/w80/nl.png' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white scroll-mt-20"
    >
      {/* Top fade overlay for smooth transition from previous section */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-16 z-20" style={{background: 'linear-gradient(to bottom, rgba(245,245,255,1), rgba(245,245,255,0))'}} />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated grid pattern */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.07) 1px, transparent 0)',
            backgroundSize: '32px 32px',
            zIndex: 0
          }}
          animate={{ backgroundPosition: ["0px 0px", "32px 32px", "0px 0px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 opacity-20 blur-3xl"
          style={{ top: '-180px', left: '-120px', zIndex: 1 }}
          animate={{ x: [0, 60, -40, 0], y: [0, 40, -30, 0], scale: [1, 1.08, 0.97, 1] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-pink-400 via-blue-300 to-purple-200 opacity-20 blur-2xl"
          style={{ bottom: '-120px', right: '-100px', zIndex: 1 }}
          animate={{ x: [0, -40, 30, 0], y: [0, -30, 40, 0], scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 26, repeat: Infinity, repeatType: "mirror", delay: 2 }}
        />
        {/* Floating Particles (enhanced) */}
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              zIndex: 2
            }}
            animate={{
              y: [0, Math.random() * 80 - 40, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 7 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.15
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ scale, opacity }}
      >
        {/* Big animated title at the very top */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mt-2 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Innovating Solutions
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Across Technologies
          </span>
        </motion.h1>
        <div className="relative flex flex-col items-center justify-center mb-20 py-8">
          {/* Animated gradient blob background */}
          <motion.div
            className="absolute -z-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 blur-3xl animate-pulse"
            initial={{ scale: 0.8, opacity: 0.2 }}
            animate={{ scale: [0.8, 1.05, 0.95, 1], opacity: [0.2, 0.35, 0.3, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            style={{ top: '-80px', left: '50%', transform: 'translateX(-50%)' }}
          />
          {/* Floating sparkles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-tr from-blue-400 to-purple-400 opacity-60"
              style={{
                left: `${30 + Math.sin(i) * 120}px`,
                top: `${60 + Math.cos(i) * 120}px`,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2
              }}
            />
          ))}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            About OGO Technology
          </motion.h2>
          <motion.p
            className="max-w-2xl text-center md:text-justify text-lg md:text-xl text-gray-700 font-medium leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            OGO Technology is a global software and AI services company, trusted by startups, entrepreneurs, and university students worldwide. We specialize in AI-powered automation, full-stack web and mobile app development, and final-year academic project support. Our goal is to deliver scalable, cost-effective, and intelligent solutions to help our clients thrive in the digital world.
          </motion.p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 bg-blue-500/5 rounded-2xl -z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="p-6 text-center">
                <motion.div
                  className="inline-block p-3 rounded-xl bg-blue-500/10 text-blue-600 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
            </motion.div>
          ))}
          </div>
          
        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl -z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="p-8">
                <motion.div
                  className="inline-block p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
            </motion.div>
          ))}
            </div>
            
        {/* Interactive Timeline */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="relative inline-block">
              Our Journey
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          <div className="relative">
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1 }}
            />
            {[
              { 
                year: "2020", 
                title: "Initial Vision", 
                description: "Founded with a vision to revolutionize academic and technological solutions",
                icon: "🚀"
              },
              { 
                year: "2021", 
                title: "Academic Excellence", 
                description: "Launched ogo assignment with expert academic writing services",
                icon: "📚"
              },
              { 
                year: "2022", 
                title: "Tech Innovation", 
                description: "Introduced ogo gen for cutting-edge software development and AI solutions",
                icon: "💻"
              },
              { 
                year: "2023 Q1", 
                title: "Creative Expansion", 
                description: "Launched ogo art for professional creative and design services",
                icon: "🎨"
              },
              { 
                year: "2023 Q3", 
                title: "Service Integration", 
                description: "Successfully integrated all three departments for comprehensive solutions",
                icon: "🔄"
              },
              { 
                year: "2024", 
                title: "Global Recognition", 
                description: "Achieved international presence with clients across multiple countries",
                icon: "🌍"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
              >
                <motion.div
                  className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div 
                    className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.span 
                      className="text-4xl absolute -right-2 -top-2 opacity-10 group-hover:opacity-20 transition-opacity"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-4 h-4 rounded-full bg-blue-500 z-10" />
                  <motion.div
                    className="absolute w-8 h-8 rounded-full bg-blue-500/30"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0.2, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mt-16 text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <span className="relative inline-block">
              Our Values
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
            {[
              { 
                value: "Innovation", 
                icon: Lightbulb, 
                color: "blue",
                description: "Pioneering solutions in academics and technology"
              },
              { 
                value: "Excellence", 
                icon: Star, 
                color: "purple",
                description: "Delivering outstanding results across departments"
              },
              { 
                value: "Creativity", 
                icon: Sparkles, 
                color: "indigo",
                description: "Bringing fresh perspectives to every project"
              },
              { 
                value: "Integration", 
                icon: Users2, 
                color: "cyan",
                description: "Seamlessly combining our diverse expertise"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`p-4 rounded-lg bg-white shadow-sm hover:shadow-md 
                             relative overflow-hidden group cursor-pointer border border-gray-100`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${item.color}-50 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-lg 
                                 bg-${item.color}-50 text-${item.color}-500 mb-3`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.div>
                    <motion.h3
                      className={`text-sm font-semibold text-gray-900 mb-1`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {item.value}
                    </motion.h3>
                    <p className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                    <motion.div
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-${item.color}-500/30`}
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
        </div>
                  <motion.div
                    className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300 text-${item.color}-500`}
                  >
                    <ArrowUpRight className="w-3 h-3" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
      </div>
        </motion.div>
        {/* Flag Carousel: Serving Clients in 15+ Countries */}
        <div className="mt-16 flex flex-col items-center w-full">
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-black mb-20 relative inline-block"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <span className="relative inline-block">
              Proudly Serving 15+ Countries Worldwide
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
            </span>
          </motion.h3>
          <div className="relative w-screen overflow-hidden px-2 md:px-8">
            <div className="flex items-center gap-8 animate-slide-x whitespace-nowrap" style={{animation: 'slide-x 30s linear infinite'}}>
              {flags.concat(flags).map((flag, i) => (
                <motion.div
                  key={flag.name + i}
                  className="inline-flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % flags.length) * 0.1 }}
                >
                  <img src={flag.url} alt={flag.name + ' flag'} className="w-16 h-10 object-cover rounded shadow-md mb-2" style={{minWidth: '64px', minHeight: '40px', maxWidth: '64px', maxHeight: '40px', objectFit: 'cover', display: 'block'}} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      {/* Bottom fade overlay for smooth transition to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 z-20" style={{background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))'}} />
    </section>
  );
};

export default About;