import { motion } from 'framer-motion'

const skills = [
  // Programming Languages
  { name: 'Python', category: 'Language', level: 90 },
  { name: 'SQL', category: 'Language', level: 85 },
  { name: 'TypeScript', category: 'Language', level: 80 },
  { name: 'JavaScript', category: 'Language', level: 85 },

  // Web Development
  { name: 'React.js', category: 'Frontend', level: 88 },
  { name: 'Node.js', category: 'Backend', level: 82 },
  { name: 'HTML/CSS', category: 'Frontend', level: 90 },
  { name: 'RESTful APIs', category: 'Backend', level: 85 },
  { name: 'Flask', category: 'Backend', level: 83 },
  { name: 'Streamlit', category: 'Frontend', level: 85 },

  // AI/ML Frameworks
  { name: 'TensorFlow', category: 'AI/ML', level: 85 },
  { name: 'Scikit-learn', category: 'AI/ML', level: 88 },
  { name: 'Keras', category: 'AI/ML', level: 83 },
  { name: 'OpenCV', category: 'Computer Vision', level: 80 },
  { name: 'YOLOv8', category: 'Computer Vision', level: 85 },
  { name: 'PyTorch', category: 'AI/ML', level: 40 },

  // Data Science
  { name: 'Pandas', category: 'Data Science', level: 90 },
  { name: 'NumPy', category: 'Data Science', level: 88 },
  { name: 'Data Analysis', category: 'Data Science', level: 40 },

  // Tools & Platforms
  { name: 'GitHub', category: 'Tools', level: 90 },
  { name: 'Docker', category: 'DevOps', level: 20 },
  { name: 'Google Colab', category: 'Tools', level: 88 },
  { name: 'Jupyter Notebook', category: 'Tools', level: 92 },
  { name: 'VS Code', category: 'Tools', level: 95 },
]

const Tech = () => {
  return (
    <motion.div
      className="py-16"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="my-12 text-center text-4xl lg:text-5xl font-bold gradient-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      {/* Rotating Skills Carousel */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex overflow-hidden py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 glass-effect rounded-2xl px-6 py-4 border border-gray-600/30 hover:border-gray-400/50 transition-all duration-300 hover-lift"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-20 h-1 bg-gray-600 rounded-full mx-auto mb-2">
                    <motion.div
                      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-xs text-gray-400">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Skills Grid for Mobile */}
      <div className="lg:hidden mt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {skills.slice(0, 12).map((skill, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl p-4 border border-gray-600/30 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold text-white text-sm mb-1">
                {skill.name}
              </h3>
              <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto">
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Categories - No Counts */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        {[
          {
            name: 'AI & Machine Learning',
            color: 'from-purple-500 to-pink-500',
            icon: '🤖',
          },
          {
            name: 'Web Development',
            color: 'from-blue-500 to-cyan-500',
            icon: '🌐',
          },
          {
            name: 'Data Science',
            color: 'from-green-500 to-teal-500',
            icon: '📊',
          },
          {
            name: 'Tools & Platforms',
            color: 'from-orange-500 to-red-500',
            icon: '🛠️',
          },
        ].map((category, index) => (
          <motion.div
            key={category.name}
            className="text-center p-6 rounded-2xl glass-effect border border-gray-600/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} mx-auto mb-4 flex items-center justify-center`}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <h3 className="text-white font-semibold text-sm">
              {category.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Tech
