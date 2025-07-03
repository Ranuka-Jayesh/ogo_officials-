import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    brandName: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    color: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      hoverBg: 'group-hover:bg-blue-600',
      shadow: 'group-hover:shadow-blue-200/50',
      text: 'text-blue-600',
      feature: 'bg-blue-100'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      hoverBg: 'group-hover:bg-purple-600',
      shadow: 'group-hover:shadow-purple-200/50',
      text: 'text-purple-600',
      feature: 'bg-purple-100'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      hoverBg: 'group-hover:bg-indigo-600',
      shadow: 'group-hover:shadow-indigo-200/50',
      text: 'text-indigo-600',
      feature: 'bg-indigo-100'
    }
  };
  
  const colors = colorClasses[service.color as keyof typeof colorClasses];

  // Animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] // Improved easing
      }
    },
    hover: { 
      y: -12,
      scale: 1.02,
      boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.25)',
      transition: { 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1] // Spring-like easing
      }
    }
  };

  const backgroundVariants: Variants = {
    initial: { opacity: 0 },
    hover: { 
      opacity: 0.95, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut" 
      } 
    }
  };

  const iconVariants: Variants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: { 
        duration: 0.6, 
        ease: "easeInOut",
        times: [0, 0.33, 0.66, 1],
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  const titleVariants: Variants = {
    initial: { y: 0 },
    hover: { 
      y: -3,
      transition: { duration: 0.3 }
    }
  };

  const featureVariants = {
    initial: { opacity: 0, x: -10, scale: 0.95 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        delay: i * 0.1 + 0.3,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }),
    hover: { 
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className={`group relative overflow-hidden rounded-xl border ${colors.border} ${colors.bg} p-6 h-full`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient on hover */}
      <motion.div 
        className={`absolute inset-0 ${colors.hoverBg}`}
        variants={backgroundVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="flex items-center mb-4"
          variants={titleVariants}
        >
          <motion.div variants={iconVariants}>
            {service.icon}
          </motion.div>
          <motion.h3 
            className={`ml-2 text-xl font-semibold ${colors.text} group-hover:text-white transition-colors duration-300`}
            variants={titleVariants}
          >
            {service.title}
          </motion.h3>
        </motion.div>
        
        <motion.p 
          className={`text-gray-500 text-sm font-medium mb-4 ${colors.text} group-hover:text-blue-100 transition-colors duration-300`}
          variants={titleVariants}
        >
          {service.brandName}
        </motion.p>
        
        <motion.p 
          className="text-gray-700 mb-6 group-hover:text-white transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {service.description}
        </motion.p>
        
        <motion.ul 
          className="space-y-2"
          initial="hidden"
          animate="visible"
          whileHover="groupHover"
        >
          {service.features.map((feature, index) => (
            <motion.li 
              key={index} 
              className={`py-1 px-3 rounded-md ${colors.feature} text-gray-800 text-sm group-hover:text-white transition-colors duration-300`}
              custom={index}
              variants={featureVariants}
              whileHover="hover"
            >
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;