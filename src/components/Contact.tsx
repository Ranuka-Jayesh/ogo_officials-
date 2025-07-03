import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, MessageSquare, User, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
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
  
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-blue-600 mx-auto mb-4 rounded-full"
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help.
          </p>
        </motion.div>
        
        {/* Business Cards Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ogo Tech Business Card */}
            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {/* Top decorative element */}
              <div className="h-3 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              
              {/* Decorative animated elements */}
              <motion.div 
                className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full -mr-20 -mt-20"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.3, 0.4, 0.3] 
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full -ml-10 -mb-10"
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.2, 0.3, 0.2] 
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="p-6 pb-8 flex justify-between relative z-10">
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-16 h-16 mr-4 overflow-hidden rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600"
                      whileHover={{ rotate: 5 }}
                    >
                      <img 
                        src="/2OGOlogo.png" 
                        alt="Ogo Tech Logo" 
                        className="w-12 h-12 object-contain" 
                      />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Ogo Technology</h3>
                      <p className="text-sm text-gray-500">Global Technology Service Provider</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      <Globe className="w-4 h-4 text-blue-600 mr-3" />
                      <span className="text-sm text-gray-600">www.ogotechnology.com</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      <Mail className="w-4 h-4 text-blue-600 mr-3" />
                      <span className="text-sm text-gray-600">ogotechnology.lk@gmail.com</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      <Phone className="w-4 h-4 text-blue-600 mr-3" />
                      <span className="text-sm text-gray-600">+94 (075) 930-7059</span>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      <MapPin className="w-4 h-4 text-blue-600 mr-3" />
                      <span className="text-sm text-gray-600">Global Operations</span>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="inline-flex items-center text-sm font-medium text-blue-600 cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Visit Website <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </div>
                
                {/* Large logo on the right side */}
                <motion.div 
                  className="flex items-center justify-center ml-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ 
                    opacity: 0.3,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src="/ogologo.png" 
                    alt="Ogo Tech Big Logo" 
                    className="w-48 h-48 object-contain" 
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 mb-8 transform transition-all hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Global Reach</p>
                    <p className="text-gray-600">Serving clients worldwide</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Email Us</p>
                    <p className="text-gray-600">ogotechnology.lk@gmail.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-900 font-medium">Call Us</p>
                    <p className="text-gray-600">94 (075) 930-7059</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white relative overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.1, 0.2, 0.1] 
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-10 -mb-10"
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.05, 0.1, 0.05] 
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              <div className="relative">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-200 mr-2" />
                  <h3 className="text-2xl font-semibold">Always Available</h3>
                </div>
                
                <motion.div 
                  variants={pulseVariants}
                  animate="pulse"
                  className="mb-6 font-semibold text-3xl text-blue-100"
                >
                  24/7 Support
                </motion.div>
                
                <p className="text-blue-100 mb-4">
                  Our team is always ready to assist you with any questions or needs you may have.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium cursor-pointer backdrop-blur-sm"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Now
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Send className="h-6 w-6 text-blue-600 mr-2" />
              Send us a Message
            </h3>
            
            {submitMessage && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 text-green-700 rounded-md"
              >
                {submitMessage}
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <div className="flex items-center mb-2">
                  <User className="h-4 w-4 text-blue-600 mr-2" />
                  <label htmlFor="name" className="text-gray-700 font-medium">
                  Your Name
                </label>
                </div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                  required
                    placeholder="John Doe"
                />
                </motion.div>
              </div>
              
              <div className="mb-5">
                <div className="flex items-center mb-2">
                  <Mail className="h-4 w-4 text-blue-600 mr-2" />
                  <label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </label>
                </div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                  required
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <MessageSquare className="h-4 w-4 text-blue-600 mr-2" />
                  <label htmlFor="message" className="text-gray-700 font-medium">
                  Your Message
                </label>
                </div>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileFocus={{ scale: 1.01 }}
                >
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"
                  required
                    placeholder="How can we help you?"
                ></textarea>
                </motion.div>
              </div>
              
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span className="flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;