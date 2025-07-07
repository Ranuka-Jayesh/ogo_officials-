import React, { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll-based transformations
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yBlobPosition = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const blobScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  
  const primaryButtonVariants: Variants = {
    rest: {
      background: "linear-gradient(to right, #3182ce, #4299e1)",
      boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.3), 0 2px 4px -1px rgba(59, 130, 246, 0.2)",
      scale: 1,
    },
    hover: {
      background: "linear-gradient(to right, #2b6cb0, #3182ce)",
      boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.4), 0 4px 6px -2px rgba(59, 130, 246, 0.2)",
      scale: 1.05,
      y: -2,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 2px 4px -1px rgba(59, 130, 246, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };
  
  const secondaryButtonVariants: Variants = {
    rest: {
      border: "1px solid rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(8px)",
      scale: 1,
    },
    hover: {
      border: "1px solid rgba(255, 255, 255, 0.6)",
      backdropFilter: "blur(12px)",
      y: -2,
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };
  
  const textCharacterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };
  
  const sentence = "Where Innovation Meets Automation.";
  const words = sentence.split(" ");

  // Star field animation
  const StarField = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 0.6 + 0.1
            }}
            animate={{ 
              opacity: [null, Math.random() * 0.5 + 0.1], 
              scale: [null, Math.random() * 0.6 + 0.1] 
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            style={{ 
              width: Math.random() * 3 + 1 + "px", 
              height: Math.random() * 3 + 1 + "px" 
            }}
          />
        ))}
      </div>
    );
  };

  // Animated wave background
  const WaveBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave 1 */}
        <motion.div 
          className="absolute w-[200%] h-[50vh] left-[-50%] bottom-[-25vh]"
          initial={{ rotate: 0 }}
          animate={{ rotate: 5, y: [0, -10, 0] }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            y: { duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
          style={{
            background: "linear-gradient(180deg, rgba(28, 27, 51, 0) 0%, rgba(59, 130, 246, 0.05) 100%)",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            filter: "blur(30px)"
          }}
        />
        
        {/* Wave 2 */}
        <motion.div 
          className="absolute w-[200%] h-[40vh] left-[-50%] bottom-[-20vh]"
          initial={{ rotate: 0 }}
          animate={{ rotate: -3, y: [0, -5, 0] }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
          style={{
            background: "linear-gradient(180deg, rgba(28, 27, 51, 0) 0%, rgba(79, 70, 229, 0.08) 100%)",
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            filter: "blur(20px)"
          }}
        />
      </div>
    );
  };

  // Animated particles with connections
  const ParticleNetwork = () => {
    const particles = [...Array(12)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.2
    }));

    return (
      <div className="absolute inset-0 overflow-hidden opacity-70">
        {particles.map((particle) => (
        <motion.div 
            key={particle.id}
            className="absolute rounded-full bg-blue-400/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              filter: "blur(1px)"
            }}
          animate={{ 
              x: [
                `${Math.random() * 100 - 50}px`, 
                `${Math.random() * 100 - 50}px`, 
                `${Math.random() * 100 - 50}px`
              ],
              y: [
                `${Math.random() * 100 - 50}px`, 
                `${Math.random() * 100 - 50}px`, 
                `${Math.random() * 100 - 50}px`
              ]
          }}
          transition={{ 
              duration: 20 / particle.speed,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear"
            }}
          />
        ))}
      </div>
    );
  };

  // Animated gradient background
  const GradientBackground = () => {
    return (
      <motion.div 
        className="absolute inset-0 opacity-40"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        style={{ 
          background: "linear-gradient(135deg, #0a1128 0%, #1a237e 50%, #0a1128 100%)",
          backgroundSize: "200% 200%"
        }}
      />
    );
  };

  // Grid lines background
  const GridBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="h-full w-full" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)`,
            backgroundSize: '100% 100%'
          }}
        />
      </div>
    );
  };

  const BlobAnimation = () => {
    return (
      <motion.div 
        className="relative w-72 h-72 md:w-96 md:h-96"
        style={{ 
          y: yBlobPosition,
          scale: blobScale
        }}
        animate={{ 
          rotate: [0, 5, -5, 0],
        }}
        transition={{ 
          duration: 12, 
          ease: "easeInOut", 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {/* Base blob */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400/60 blur-sm"
          initial={{ scale: 0.8, borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" }}
          animate={{ 
            scale: [0.8, 0.9, 0.8],
            borderRadius: [
              "60% 40% 30% 70%/60% 30% 70% 40%",
              "30% 60% 70% 40%/50% 60% 30% 60%",
              "60% 40% 30% 70%/60% 30% 70% 40%"
            ]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut" 
          }}
        />
        
        {/* Middle blob */}
        <motion.div
          className="absolute inset-2 rounded-full bg-blue-500/70 blur-[2px]"
          initial={{ scale: 0.9, borderRadius: "40% 60% 70% 30%/40% 50% 60% 50%" }}
          animate={{ 
            scale: [0.9, 0.8, 0.9],
            borderRadius: [
              "40% 60% 70% 30%/40% 50% 60% 50%",
              "60% 40% 30% 60%/60% 30% 70% 40%",
              "40% 60% 70% 30%/40% 50% 60% 50%"
            ]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        
        {/* Inner blob */}
        <motion.div
          className="absolute inset-10 rounded-full bg-blue-600/90"
          initial={{ scale: 0.7, borderRadius: "40% 60% 70% 30%/40% 50% 60% 50%" }}
          animate={{ 
            scale: [0.7, 0.9, 0.7],
            borderRadius: [
              "50% 60% 30% 70%/40% 60% 30% 60%",
              "30% 40% 70% 50%/50% 30% 60% 70%",
              "50% 60% 30% 70%/40% 60% 30% 60%"
            ]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.6
          }}
        />

        {/* Light reflections */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-12 h-6 bg-white rounded-full opacity-40 blur-sm"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-10 h-5 bg-white rounded-full opacity-30 blur-sm"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            duration: 4,
            delay: 1,
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </motion.div>
    );
  };

  return (
    <motion.section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1128]"
    >
      {/* Animated gradient background */}
      <GradientBackground />
      
      {/* Grid background */}
      <GridBackground />
      
      {/* Wave background */}
      <WaveBackground />
      
      {/* Particle network */}
      <ParticleNetwork />
      
      {/* Star field background */}
      <StarField />
      
      {/* Circular gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0a1128] opacity-80" />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, y: textY }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - All text content */}
          <motion.div 
            className="text-left order-2 md:order-1"
            variants={itemVariants}
          >
            <motion.div 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              <div className="overflow-hidden">
                {words.map((word, i) => (
                  <div key={i} className="inline-block mr-2 mb-2">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className="inline-block"
                        custom={charIndex}
                        variants={textCharacterVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-blue-200 mb-10 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Turn your ideas into reality with powerful AI automations, custom websites, mobile apps, and academic project support trusted by clients worldwide.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <motion.a 
                href="#services" 
                className="relative px-8 py-3 rounded-md text-white font-medium overflow-hidden group"
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={primaryButtonVariants}
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-blue-600 opacity-70"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.2, 1], 
                    opacity: [0, 0.5, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  style={{ borderRadius: 6 }}
                />
                <motion.span className="relative flex items-center justify-center gap-2">
                  Explore Projects
                  <motion.span
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ x: 2, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.span>
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="relative px-8 py-3 rounded-md bg-transparent text-white font-medium overflow-hidden"
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={secondaryButtonVariants}
              >
                <motion.span 
                  className="absolute inset-0 bg-white/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ borderRadius: 6 }}
                />
                <motion.span className="relative flex items-center justify-center gap-2">
                  <motion.span
                    initial={{ opacity: 0.8 }}
                    whileHover={{ 
                      opacity: 1,
                      transition: { duration: 0.2 }
                    }}
                  >
                    Contact Us
                  </motion.span>
                  <motion.span
                    initial={{ scale: 1 }}
                    whileHover={{ 
                      scale: [1, 1.2, 1],
                      transition: { 
                        duration: 0.6,
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }
                    }}
                  >
                  </motion.span>
                </motion.span>
              </motion.a>
            </motion.div>
            
            {/* Customer avatars with count */}
            <motion.div
              className="mt-10 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="flex overflow-hidden -space-x-3 relative">
                {[
                  "https://randomuser.me/api/portraits/women/32.jpg",
                  "https://randomuser.me/api/portraits/men/44.jpg",
                  "https://randomuser.me/api/portraits/women/76.jpg",
                  "https://randomuser.me/api/portraits/men/15.jpg",
                  "https://randomuser.me/api/portraits/women/60.jpg",
                ].map((src, index, array) => {
                  // Special styles for first and last avatars
                  const isFirst = index === 0;
                  const isLast = index === array.length - 1;
                  
                  return (
                    <motion.div
                      key={index}
                      className={`w-8 h-8 rounded-full border-2 relative ${
                        isFirst || isLast 
                          ? "border-blue-400/70" 
                          : "border-[#0a1128]"
                      } overflow-hidden`}
                      initial={{ 
                        opacity: 0, 
                        x: isFirst ? -30 : (isLast ? 30 : -20),
                        scale: isFirst || isLast ? 0.7 : 0.8,
                        filter: isFirst || isLast ? "blur(2px)" : "blur(0px)"
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1,
                        filter: "blur(0px)"
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 1.9 + index * 0.1,
                        type: "spring",
                        stiffness: isFirst || isLast ? 400 : 300,
                        damping: 15
                      }}
                      whileHover={{
                        y: -4,
                        zIndex: 20,
                        boxShadow: isFirst || isLast 
                          ? "0 6px 20px rgba(59, 130, 246, 0.4)" 
                          : "0 6px 15px rgba(0,0,0,0.3)",
                        scale: 1.2,
                        filter: "brightness(1.1) contrast(1.05)",
                        border: isFirst || isLast 
                          ? "2px solid rgba(96, 165, 250, 0.9)" 
                          : "2px solid rgba(255, 255, 255, 0.8)",
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 15, 
                          duration: 0.3 
                        }
                      }}
                    >
                      {/* Blur overlay for first and last profile */}
                      {(isFirst || isLast) && (
                        <motion.div 
                          className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px] z-10"
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 0 }}
                          transition={{ duration: 1, delay: 2.5 }}
                          whileHover={{ 
                            opacity: 0,
                            transition: { duration: 0.2 }
                          }}
                        />
                      )}
                      
                      <img 
                        src={src} 
                        alt={`Customer ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Glow effect on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-blue-400/20"
                        initial={{ opacity: 0 }}
                        whileHover={{ 
                          opacity: 1,
                          transition: { duration: 0.3 } 
                        }}
                      />
                    </motion.div>
                  );
                })}
                
                {/* Blurred shadow element to create depth */}
                <motion.div 
                  className="absolute -right-4 w-12 h-8 bg-blue-500/10 rounded-full -z-10"
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 0.7, filter: "blur(8px)" }}
                  transition={{ duration: 1, delay: 2.5 }}
                />
              </div>
              
              <motion.div 
                className="ml-4 text-white/80 text-sm flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 2.4 }}
              >
                <motion.span 
                  className="font-bold text-white mr-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    textShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 8px rgba(96, 165, 250, 0.7)", "0px 0px 0px rgba(255,255,255,0)"]
                  }}
                  transition={{ 
                    y: { duration: 0.4, delay: 2.5 },
                    textShadow: { duration: 2, delay: 3, repeat: Infinity, repeatDelay: 5 }
                  }}
                >
                  +3K
                </motion.span> 
                <motion.span
                  className="bg-gradient-to-r from-white/80 to-blue-300/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 2.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    transition: { duration: 0.2 }
                  }}
                >
                  happy customers
                </motion.span>
              </motion.div>
            </motion.div>
            
            {/* Vertical line decorative element */}
            <motion.div 
              className="hidden md:block h-24 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent absolute -left-8 top-1/2 transform -translate-y-1/2"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.6 }}
              transition={{ duration: 1, delay: 1.7 }}
            />
          </motion.div>
          
          {/* Right side - All shapes and animations */}
          <motion.div 
            className="relative order-1 md:order-2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative z-10">
            <BlobAnimation />
            </div>
            
            {/* Pulsing glow effect behind the blob */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 
                        bg-blue-500/20 rounded-full blur-3xl"
              initial={{ width: '250px', height: '250px' }}
              animate={{ 
                width: ['250px', '300px', '250px'],
                height: ['250px', '300px', '250px'],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
        
        {/* Modern scroll indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          style={{ opacity: scrollOpacity }}
        >
          <motion.p
            className="text-white/60 text-sm mb-2 font-light tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Scroll
          </motion.p>
          <motion.div 
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center items-start p-1"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
        <motion.div 
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
          animate={{ 
                y: [0, 12, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;