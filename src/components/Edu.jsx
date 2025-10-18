import { EDUCATION } from '../constants/index'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.section
      className="py-8 mb-12"
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="mb-8 text-center text-3xl lg:text-4xl font-bold text-white">
        Education
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {edu.degree}
            </h3>
            <p className="text-lg font-medium text-white">{edu.institution}</p>
            <p className="text-sm text-white/80 mb-4">{edu.duration}</p>
            <p className="text-white leading-relaxed">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education
