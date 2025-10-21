import { PROJECTS } from '../constants/index'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <section className="pt-15 mb-6" id="projects">
      <motion.h2
        className="mb-8 text-center text-3xl lg:text-4xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link to={`/project/${project.id}`} className="block w-full h-full">
              <div className="relative w-full h-56 md:h-64 lg:h-72">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                {/* Project Icon */}
                <div className="absolute top-4 left-4 text-2xl opacity-80">
                  {project.theme?.icon || '🚀'}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 p-6 bg-black/60">
                <h3 className="mb-3 text-xl font-semibold text-center text-white">
                  {project.name}
                </h3>
                <p className="mb-6 text-sm text-center text-white leading-tight line-clamp-3">
                  {project.shortDescription || project.description}
                </p>

                <div className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Case Study
                </div>
              </div>

              {/* Default visible content */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.name.split('—')[0].trim()}
                </h3>
                <p className="text-gray-300 text-sm">
                  Click to explore case study
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Project
