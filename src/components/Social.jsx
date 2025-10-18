import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from 'framer-motion'

const Social = () => {
  return (
    <motion.div
      className="py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="glass-effect rounded-2xl p-8 border border-gray-600/30 max-w-md mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="mb-3 text-2xl font-bold gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Pranav Rasane
          </motion.p>
          <motion.p
            className="text-gray-400 hover:text-gray-300 transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            pranav.rasane@gmail.com
          </motion.p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {SOCIAL_MEDIA_LINKS.map((link, index) => {
            const IconComponent = link.icon
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-effect border border-gray-600/30 hover:border-gray-400/50 transition-all duration-300 hover-lift"
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <IconComponent fontSize={25} className="hover:opacity-80" />
              </motion.a>
            )
          })}
        </motion.div>

        <motion.p
          className="text-center text-sm tracking-wide text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} Pranav Rasane. All rights reserved.
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Social
