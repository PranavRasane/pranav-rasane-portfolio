import { EXPERIENCES } from '../constants/index'
import { motion } from 'framer-motion'
import { MdArrowOutward } from 'react-icons/md'

const Work = () => {
  const handleWebonacciClick = () => {
    window.open('https://www.webonacci.in/', '_blank')
  }

  return (
    <motion.section
      className="pd-20"
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-center text-4xl font-semibold tracking-tighter text-white">
        Work Experience
      </h2>
      <div className="space-y-8 p-10">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Header Section with Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {experience.title}
                </h3>
                <p className="text-xl text-white">{experience.company}</p>
                <p className="text-sm text-white/80">{experience.duration}</p>
              </div>

              {/* Webonacci Website Button */}
              <motion.button
                onClick={handleWebonacciClick}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Website
                <MdArrowOutward className="text-xs" />
              </motion.button>
            </div>

            {/* Description Points */}
            <ul className="mt-4 space-y-3">
              {experience.description.map((point, pointIndex) => (
                <li key={pointIndex} className="text-white flex items-start">
                  <span className="text-white mr-3 mt-1">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Work
