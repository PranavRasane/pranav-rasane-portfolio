import { motion } from 'framer-motion'

const Contact = () => {
  // ✅ YOUR ACTUAL GOOGLE DRIVE LINK
  const resumeDriveLink =
    'https://drive.google.com/file/d/1L8d7dsWD76QAy8BVrDa5-h3I0Qb91CRh/view'

  // Open resume in Google Drive
  const handleResumeView = () => {
    window.open(resumeDriveLink, '_blank')
  }

  return (
    <motion.div
      className="p-4 lg:w-3/4 mx-auto"
      id="contact"
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
        Let&apos;s Connect
      </motion.h2>

      <motion.div
        className="glass-effect rounded-2xl p-12 border border-gray-600/30 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-3xl">📄</span>
        </motion.div>

        <h3 className="text-3xl font-bold text-white mb-4">
          Open to Opportunities
        </h3>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          I&apos;m actively seeking AI/ML and software development
          opportunities. Check out my resume below 👇
        </p>

        {/* Resume Button */}
        <motion.button
          onClick={handleResumeView}
          className="btn-primary rounded-xl px-8 py-4 text-lg font-semibold text-white hover-lift flex items-center gap-3 mx-auto mb-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📄 View My Resume
        </motion.button>

        <p className="text-gray-500 text-sm mt-4">
          Available for AI/ML, Software, Data science roles.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Contact
