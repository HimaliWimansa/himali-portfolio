import { motion } from 'framer-motion';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      institution: "Rajarata University of Sri Lanka",
      degree: "BSc in Information Technology",
      period: "2024 - Present",
      isCurrent: true,
      accentColor: "#6532F5" // Purple
    },
    {
      id: 2,
      institution: "National Institute Of Business Management (NIBM-Sri Lanka)",
      degree: "Higher Diploma In Software Engineering",
      period: "2024 - 2025",
      accentColor: "#F53232" // Red
    },
    {
      id: 3,
      institution: "National Institute Of Business Management (NIBM-Sri Lanka)",
      degree: "Diploma In Software Engineering",
      period: "2023 - 2024",
      accentColor: "#FF7C1D" // Orange
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-20 relative">
      {/* Full Website Background */}
      <div className="fixed inset-0 -z-50 bg-[#150B20]">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#6532F5]/10 via-[#211231]/80 to-[#FF7C1D]/10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center mb-20 text-white"
        >
          Education Journey
        </motion.h2>
        
        <div className="relative">
          {/* Colorful timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#6532F5] via-[#F53232] to-[#FF7C1D]"></div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-24"
          >
            {educationItems.map((item, index) => (
              <motion.div 
                key={item.id}
                variants={itemVariants}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Accent-colored dot */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 ring-4"
                  style={{ 
                    backgroundColor: item.accentColor,
                    borderColor: `${item.accentColor}80`,
                    boxShadow: `0 0 0 4px ${item.accentColor}40`
                  }}
                ></div>
                
                {/* Education card */}
                <div className={`w-5/6 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#211231]/50 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-300"
                    style={{
                      boxShadow: `0 10px 25px -5px ${item.accentColor}30`,
                      borderLeftColor: item.accentColor,
                      borderLeftWidth: '4px'
                    }}
                  >
                    <h4 className="text-white font-bold text-xl mb-3">
                      {item.institution}
                      {item.isCurrent && (
                        <span 
                          className="ml-3 text-white text-sm px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${item.accentColor}30`,
                            border: `1px solid ${item.accentColor}`
                          }}
                        >
                          Current
                        </span>
                      )}
                    </h4>
                    <p className="text-white/90 text-lg mb-2">{item.degree}</p>
                    <p className="text-white/70 text-base">{item.period}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;