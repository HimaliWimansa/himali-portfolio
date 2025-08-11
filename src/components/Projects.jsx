import { motion } from 'framer-motion';

// Import images for each project
import waterQuality from '../images/water_quality.png';
import AgroRobot from '../images/AgroRobot.jpg';
import hotel from '../images/hotel.png';

const projects = [
  {
    title: "IoT Water Quality Monitoring System",
    description: "Real-time system detecting contaminants with ESP32 and machine learning alerts",
    tags: ["ESP32", "Firebase", "Kotlin", "React", "Python"],
    accent: "bg-[#6532F5]",
    image: waterQuality
  },
  {
    title: "Autonomous Multitasking Agro-Robot",
    description: "An Arduino-powered agricultural robot designed to automate planting, watering, and digging in large-scale farming",
   tags: ["Arduino UNO", "Motor Driver", "Ultrasonic Sensor", "Arduino IDE"],

    accent: "bg-[#6532F5]",
    image: AgroRobot
  },
 {
    title: "Hotel Management System",
    description: " A web-based Hotel Management System for Crown & Crown Boutique Hotel, developed to replace the manual booking process with an efficient online reservation platform",
   tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],

    accent: "bg-[#6532F5]",
    image: hotel
  },
  // Add other projects...
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-bold text-center mb-16 text-white"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="h-full bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:border-orange-400/50 max-w-[350px] mx-auto">
                
                {/* Accent bar */}
                <div className={`h-2 ${project.accent}`}></div>
                
                {/* Project Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-[#6532F5]/10 text-[#6532F5] text-xs px-3 py-1 rounded-full border border-[#6532F5]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-[#FF7C1D] hover:text-[#FF9140] text-sm font-medium flex items-center transition-colors duration-300">
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
