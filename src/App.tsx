import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Leaders from './components/Leaders';
import Projects from './components/Projects';
import LoadingScreen from './components/LoadingScreen';
import './animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Update document title
    document.title = 'ogo technology - Global Technology Service Provider';

    // Simulate loading time and preload assets
    const preloadAssets = async () => {
      try {
        // Preload your gif
        const gifPreload = new Promise((resolve) => {
          const img = new Image();
          img.src = '/ogo.gif';
          img.onload = resolve;
        });

        // Add minimum loading time for smooth experience
        const minLoadTime = new Promise(resolve => setTimeout(resolve, 2500));

        // Wait for both gif to load and minimum time to pass
        await Promise.all([gifPreload, minLoadTime]);

        // Add a small delay before removing loading screen
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error loading assets:', error);
        setIsLoading(false);
      }
    };

    preloadAssets();
  }, []);

  // Animation variants for sections

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
          style={{ scaleX }}
        />
        
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Projects />
          <Leaders />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;