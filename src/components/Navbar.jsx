import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 pt-6 md:pt-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center w-full">
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10">
              <div className="flex space-x-2">
                <a href="#home" className="px-6 py-2 md:px-10 md:py-3 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">HOME</a>
                <a href="#education" className="px-6 py-2 md:px-10 md:py-3 text-white/80 hover:text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">EDUCATION</a>
                <a href="#projects" className="px-6 py-2 md:px-10 md:py-3 text-white/80 hover:text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">PROJECTS</a>
                <a href="#contact" className="px-6 py-2 md:px-10 md:py-3 text-white/80 hover:text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">CONTACT</a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-purple-900/90 backdrop-blur-sm rounded-xl p-4 border border-white/10"
          >
            <div className="flex flex-col space-y-2">
              <a 
                href="#home" 
                className="px-4 py-3 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </a>
              
              <a 
                href="#education" 
                className="px-4 py-3 text-white/80 hover:text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                EDUCATION
              </a>
              <a 
                href="#projects" 
                className="px-4 py-3 text-white/80 hover:text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </a>
              <a 
                href="#contact" 
                className="px-4 py-3 text-white/80 hover:text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;