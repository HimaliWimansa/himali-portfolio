import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { init, send } from '@emailjs/browser';

// Initialize EmailJS with your Public Key (User ID)
init('k0NRg3IvJo5j-EtVV');

const notificationVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    send(
      'service_u9h1zha',        // your Service ID
      'template_o6p9nlh',       // your Template ID
      formData                  // the data object with name, email, message
    )
      .then(() => {
        setNotification({ message: "Message sent! I'll get back to you soon.", type: 'success' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setNotification({ message: '', type: '' }), 4000);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setNotification({ message: 'Failed to send message. Please try again later.', type: 'error' });
        setTimeout(() => setNotification({ message: '', type: '' }), 4000);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white tracking-wide drop-shadow-lg"
        >
          Get In Touch
        </motion.h2>

        {/* Notification */}
        <AnimatePresence>
          {notification.message && (
            <motion.div
              key="notification"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={notificationVariants}
              transition={{ duration: 0.3 }}
              className={`fixed top-4 md:top-10 left-1/2 -translate-x-1/2 z-50 px-4 py-2 md:px-6 md:py-3 rounded shadow-lg text-white max-w-xs sm:max-w-sm text-sm md:text-base text-center
                ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
              role="alert"
              aria-live="assertive"
            >
              {notification.message}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <label className="block text-white text-sm mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/30 transition-all duration-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/30 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400/30 resize-none transition-all duration-300"
              placeholder="Enter your message"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF7C1D] to-[#F53232] hover:from-[#FF9140] hover:to-[#FF5252] text-white py-3 md:py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-[#FF7C1D]/30 text-sm md:text-base"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;