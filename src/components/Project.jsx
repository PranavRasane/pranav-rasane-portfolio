import { PROJECTS } from '../constants/index'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'

const Project = () => {
  // Updated descriptions for better mobile display
  const updatedProjects = PROJECTS.map((project) => {
    if (project.id === 2) {
      // Autonomous Drone
      return {
        ...project,
        description:
          'GPS-enabled drone with real-time fire, smoke, and crowd detection using YOLOv8 on Raspberry Pi. Features IoT-based data communication for intelligent surveillance and proactive alerts.',
      }
    }
    return project
  })

  return (
    <section className="pt-15 mb-6" id="projects">
      {/* Animated Projects Title */}
      <motion.h2
        className="mb-8 text-center text-3xl lg:text-4xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-2">
        {/* Loop over Updated Projects */}
        {updatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="relative w-full h-56 md:h-64 lg:h-72">
              {/* Animated Image */}
              <motion.img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 p-4">
              {/* Project Name - Mobile Responsive */}
              <h3
                className={`mb-3 text-lg md:text-xl font-semibold text-center px-2 ${
                  project.id === 1 || project.id === 4
                    ? 'text-black'
                    : 'text-white'
                }`}
              >
                {project.name}
              </h3>

              {/* Project Description - Mobile Responsive */}
              <p
                className={`mb-8 md:mb-12 text-sm md:text-base text-center px-2 leading-tight md:leading-relaxed ${
                  project.id === 1 || project.id === 4
                    ? 'text-black'
                    : 'text-white'
                }`}
              >
                {project.description}
              </p>

              {/* GitHub Button - Mobile Responsive */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 transition-colors duration-200 text-sm md:text-base"
              >
                <div className="flex items-center space-x-2">
                  <span>View on GitHub</span>
                  <MdArrowOutward className="text-sm md:text-base" />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Project
