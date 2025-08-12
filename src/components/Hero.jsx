import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import wimansa from '../images/wimansa.png';

const Hero = () => {
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
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
            >
              Himali Wimansa
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-2xl text-orange-300 mb-6 font-medium tracking-wider"
            >
              SOFTWARE ENGINEER <span className="text-white">|</span> <span style={{color: "#150B20"}}>FULL-STACK DEVELOPER</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-white/90 text-lg mb-10 max-w-lg leading-relaxed"
            >
              Passionate undergraduate at Rajarata University of Sri Lanka with experience 
              in Java, C#, Kotlin and full-stack JavaScript. Skilled in building web,mobile apps
             and IoT systems using Spring Boot and Firebase. Proven project leadership from concept to deployment. 
             Committed to clean code, continuous learning and 
              staying updated with industry trends through certifications and hands-on practice.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
            >
              <a 
                href="/himaliwimansa_cv.pdf" 
                download 
                className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-400/30 inline-flex items-center"
              >
                <Download size={18} className="inline mr-2" />
                Download CV
              </a>

              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/himali-wimansa-801bb530b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} className="text-white" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/HimaliWimansa" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} className="text-white" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:himaliwimansa@gmail.com" 
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={22} className="text-white" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image with Pulsing Rotating Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Rotating + Pulsing Border */}
            <motion.div
              className="absolute -inset-6 rounded-full border-4 border-orange-400/40"
              animate={{ 
                rotate: 360, 
                scale: [1, 1.05, 1], 
                opacity: [0.6, 1, 0.6] 
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 10, ease: "linear" },
                scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }}
            />

            {/* Profile Image */}
            <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-orange-400/20 shadow-xl">
              <img 
                src={wimansa} 
                alt="Himali Wimansa" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
