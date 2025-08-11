import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 w-full"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Himali Wimansa
          </motion.h1>
          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-2xl text-orange-300 mb-6 font-medium tracking-wider"
          >
            SOFTWARE ENGINEER <span className="text-[#ffffff]">| </span> <span className="text-[#211231]">FULL-STACK DEVELOPER  </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/90 text-lg mb-10 max-w-lg leading-relaxed"
          >
            Building innovative solutions through code
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex items-center space-x-6 mb-12"
          >
            {/* Download CV as a link */}
            <a 
              href="/himaliwimansa_cv.pdf" 
              download 
              className="bg-orange-400 hover:bg-red-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-400/30 inline-flex items-center"
            >
              <Download size={18} className="inline mr-2" />
              Download CV
            </a>

            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/himali-wimansa-801bb530b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin size={22} className="text-white" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://github.com/HimaliWimansa" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Github size={22} className="text-white" />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="mailto:himaliwimansa@gmail.com" 
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Mail size={22} className="text-white" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
