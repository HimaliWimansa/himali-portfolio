import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 pt-10"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <div className="bg-purple-900/30 backdrop-blur-sm rounded-full px-2 py-2 border border-white/10">
            <div className="flex space-x-2">
              <a href="#home" className="px-10 py-3 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300">HOME</a>
              <a href="#projects" className="px-10 py-3 text-white/80 hover:text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">PROJECTS</a>
              <a href="#education" className="px-10 py-3 text-white/80 hover:text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">EDUCATION</a>
              <a href="#contact" className="px-10 py-3 text-white/80 hover:text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;