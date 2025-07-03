import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Github, Instagram, Facebook, Mail } from 'lucide-react';

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Platform-specific styling
const platformStyles = {
  LinkedIn: {
    bgColor: 'bg-[#0077B5]',
    hoverBg: 'hover:bg-[#006399]',
    textColor: 'text-[#0077B5]',
    icon: Linkedin,
    gradient: 'from-[#0077B5] to-[#006399]'
  },
  X: {
    bgColor: 'bg-black',
    hoverBg: 'hover:bg-gray-900',
    textColor: 'text-black',
    icon: XIcon,
    gradient: 'from-gray-900 to-black'
  },
  GitHub: {
    bgColor: 'bg-[#333]',
    hoverBg: 'hover:bg-[#24292e]',
    textColor: 'text-[#333]',
    icon: Github,
    gradient: 'from-[#333] to-[#24292e]'
  },
  Instagram: {
    bgColor: 'bg-[#E4405F]',
    hoverBg: 'hover:bg-[#d93250]',
    textColor: 'text-[#E4405F]',
    icon: Instagram,
    gradient: 'from-[#E4405F] to-[#d93250]'
  },
  Facebook: {
    bgColor: 'bg-[#1877F2]',
    hoverBg: 'hover:bg-[#166fe5]',
    textColor: 'text-[#1877F2]',
    icon: Facebook,
    gradient: 'from-[#1877F2] to-[#166fe5]'
  }
};

// Enhanced Confirmation Dialog Component
const ConfirmDialog = ({ isOpen, onClose, onConfirm, platform, name }: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  platform: string;
  name: string;
}) => {
  const style = platformStyles[platform as keyof typeof platformStyles] || platformStyles.LinkedIn;
  const Icon = style.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-4 relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Background Gradient */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.gradient}`} />
            
            {/* Platform Icon */}
            <div className="flex justify-center mb-4">
              <motion.div
                className={`p-3 rounded-full ${style.bgColor} bg-opacity-10`}
                initial={{ rotate: -180, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <Icon className={`w-8 h-8 ${style.textColor}`} />
              </motion.div>
            </div>

            {/* Content */}
            <div className="text-center mb-6">
              <motion.h3
                className="text-xl font-bold text-gray-900 mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Connect on {platform}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                You're about to visit {name}'s {platform} profile
              </motion.p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2.5 ${style.bgColor} ${style.hoverBg} text-white rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2`}
                onClick={onConfirm}
              >
                <Icon className="w-4 h-4" />
                <span>Visit Profile</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
                onClick={onClose}
              >
                Maybe Later
              </motion.button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent opacity-50 rounded-full" />
            <div className="absolute -left-8 -top-8 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent opacity-50 rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Leaders: React.FC = () => {
  const [dialogState, setDialogState] = useState<{
    isOpen: boolean;
    url: string;
    platform: string;
    name: string;
  }>({
    isOpen: false,
    url: '',
    platform: '',
    name: ''
  });

  const handleSocialClick = (e: React.MouseEvent, url: string, platform: string, name: string) => {
    e.preventDefault();
    setDialogState({
      isOpen: true,
      url,
      platform,
      name
    });
  };

  const handleConfirm = () => {
    window.open(dialogState.url, '_blank', 'noopener,noreferrer');
    setDialogState(prev => ({ ...prev, isOpen: false }));
  };

  const leaders = [
    {
      name: "Ranuka Jayesh",
      position: "Chairman & Founder",
      image: "/team/ranuka.png",
      bio: "Visionary leader and founder of ogo technology, driving innovation across academic and technological solutions.",
      social: {
        linkedin: "https://www.linkedin.com/in/mr-ranuka-jayesh-474b29217/?originalSubdomain=lk",
        x: "https://x.com/i/flow/login?redirect_after_login=%2Fmr_ranuka",
        github: "https://github.com/Ranuka-Jayesh",
        instagram: "https://www.instagram.com/ranuka_jayesh/",
        facebook: "https://web.facebook.com/people/RJ-Ganegame/100089793589670/?_rdc=1&_rdr",
        email: "dr.ranukajayesh@gmail.com"
      }
    },
    {
      name: "Visal Denuwan",
      position: "Chief Executive Officer",
      image: "/team/denuwan.jpg",
      objectPosition: "center 100%",
      bio: "Strategic leader focused on expanding ogo technology's global presence and fostering technological excellence.",
      social: {
        linkedin: "https://www.linkedin.com/in/visal-denuwan-044452264/",
        x: "https://x.com/visaldenuwan",
        github: "https://github.com/Denuwan10",
        instagram: "https://www.instagram.com/v_denuwan_?igsh=aTZ6cDg3OXcyZnA5",
        facebook: "https://www.facebook.com/visal.denuwan.2025?mibextid=ZbWKwL",
        email: "visalrajapaksha195@gmail.com"
      }
    },
    {
      name: "Manula Pulasthi",
      position: "Chief Operating Officer",
      image: "/team/manula.jpeg",
      bio: "Operations expert ensuring seamless integration of ogo technology's diverse service offerings.",
      social: {
        linkedin: "https://linkedin.com/in/manula-pulasthi",
        x: "https://x.com/manulapulasthi",
        github: "https://github.com/MPrajakaruna",
        instagram: "https://www.instagram.com/manuu_la/profilecard/?igsh=MXNjNGdkNW81eDBwNA==",
        facebook: "https://www.facebook.com/manula.pulasthi?mibextid=ZbWKwL",
        email: "mprajakaruna04@gmail.com"
      }
    }
  ];

  return (
    <section id="leaders" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
      <ConfirmDialog
        isOpen={dialogState.isOpen}
        onClose={() => setDialogState(prev => ({ ...prev, isOpen: false }))}
        onConfirm={handleConfirm}
        platform={dialogState.platform}
        name={dialogState.name}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <span className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
              Our Leadership
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
          </motion.div>
          
          <motion.h2
            className="mt-4 text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Meet the Visionaries
          </motion.h2>
          <motion.p
            className="mt-4 text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The driving force behind ogo technology's success
          </motion.p>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative m-0.5 bg-white rounded-xl overflow-hidden">
                  {/* Image Container with Fixed Aspect Ratio */}
                  <div className="relative pb-[80%] overflow-hidden">
                    <img 
                      src={leader.image}
                      alt={`${leader.name} - ${leader.position}`}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{
                        aspectRatio: "1/1"
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ opacity: 1 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-0.5">{leader.name}</h3>
                    <p className="text-sm text-blue-600 font-medium mb-2">{leader.position}</p>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{leader.bio}</p>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-2">
                      <motion.a
                        href={leader.social.linkedin}
                        onClick={(e) => handleSocialClick(e, leader.social.linkedin, 'LinkedIn', leader.name)}
                        className="text-gray-400 hover:text-[#0077B5] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={leader.social.x}
                        onClick={(e) => handleSocialClick(e, leader.social.x, 'X', leader.name)}
                        className="text-gray-400 hover:text-black transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <XIcon className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={leader.social.github}
                        onClick={(e) => handleSocialClick(e, leader.social.github, 'GitHub', leader.name)}
                        className="text-gray-400 hover:text-[#333] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={leader.social.instagram}
                        onClick={(e) => handleSocialClick(e, leader.social.instagram, 'Instagram', leader.name)}
                        className="text-gray-400 hover:text-[#E4405F] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Instagram className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={leader.social.facebook}
                        onClick={(e) => handleSocialClick(e, leader.social.facebook, 'Facebook', leader.name)}
                        className="text-gray-400 hover:text-[#1877F2] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Facebook className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${leader.social.email}`}
                        className="text-gray-400 hover:text-purple-600 transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders; 