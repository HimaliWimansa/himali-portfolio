import { motion } from 'framer-motion';
import waterQuality from '../images/water_quality.png';
import AgroRobot from '../images/AgroRobot.jpg';
import hotel from '../images/hotel.png';

const projects = [
  {
    title: "IoT Water Quality Monitoring System",
    description: "Real-time system detecting contaminants with ESP32 and machine learning alerts",
    tags: ["ESP32", "Firebase", "Kotlin", "React", "Python"],
    accent: "bg-[#ffffff]",
    image: waterQuality,
    githubUrl: "https://github.com/HimaliWimansa/WaterQualityMobileApp"
  },
  {
    title: "Autonomous Multitasking Agro-Robot",
    description: "An Arduino-powered agricultural robot designed to automate planting, watering, and digging in large-scale farming",
    tags: ["Arduino UNO", "Motor Driver", "Ultrasonic Sensor", "Arduino IDE"],
    accent: "bg-[#ffffff]",
    image: AgroRobot,
    githubUrl: "https://github.com/HimaliWimansa/agro-robot"
  },
  {
    title: "Hotel Management System",
    description: "A web-based Hotel Management System for Crown & Crown Boutique Hotel, developed to replace the manual booking process with an efficient online reservation platform",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    accent: "bg-[#ffffff]",
    image: hotel,
    githubUrl: "https://github.com/HimaliWimansa/HotelManagementSystem"
  },
];

const Projects = () => {
  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white tracking-wide drop-shadow-lg"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.githubUrl)}
            >
              <div className="h-full bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:border-orange-400/50 mx-auto w-full max-w-md">
                {/* Accent bar */}
                <div className={`h-1 ${project.accent}`}></div>
                
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-40 sm:h-48 object-cover"
                />
                
                {/* Project Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5" style={{color: "#150B20"}}>{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-[#6532F5]/10 text-[#211231] text-xs px-2 py-1 rounded-full border border-[#211231]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-[#211231] hover:text-[#FF9140] text-xs sm:text-sm font-medium flex items-center transition-colors duration-300">
                    View Project →
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

export default Projects;