import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <div className="mb-4 md:mb-0">© {new Date().getFullYear()} Himali Wimansa. All rights reserved.</div>
          <div className="flex space-x-6">
            <motion.a 
              whileHover={{ y: -2 }}
              href="#" 
              className="hover:text-[#FF7C1D] transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              whileHover={{ y: -2 }}
              href="#" 
              className="hover:text-[#FF7C1D] transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;