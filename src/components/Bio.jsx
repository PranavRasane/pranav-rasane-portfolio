import { BIO } from '../constants/index'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Bio = () => {
  const softSkills = [
    'Analytical Thinking & Problem-Solving',
    'Team Collaboration & Communication',
    'Leadership & Initiative',
    'Time Management & Multitasking',
    'Adaptability & Continuous Learning',
    'Attention to Detail & Quality Focus',
    'Client Relationship Management',
    'Project Ownership & Accountability',
    'Strategic & Innovative Thinking',
  ]

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const sequence = setInterval(() => {
      // First hide the current skill
      setIsVisible(false)

      // After fade out, change to next skill and show it
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % softSkills.length)
        setIsVisible(true)
      }, 500) // Wait for fade out to complete
    }, 3000) // Total cycle: 3 seconds visible + 0.5 seconds transition

    return () => clearInterval(sequence)
  }, [softSkills.length])

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between px-4 lg:px-12"
      id="bio"
    >
      {/* Image Section - Left Side */}
      <motion.div
        className="flex-1 flex justify-start items-center relative -ml-8 lg:-ml-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Main Photo Container */}
        <div className="relative">
          {/* Main Photo */}
          <motion.img
            src="/animated-PP2.png"
            alt="Pranav Rasane — Portfolio"
            className="w-96 h-96 lg:w-[500px] lg:h-[500px] rounded-3xl object-cover z-20 relative shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Skill Display Area - Top Left Above Laptop Screen */}
          <div className="absolute top-[30%] left-[25%] z-30 w-56">
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentSkillIndex}
                  className="bg-white/80 backdrop-blur-lg border border-gray-300/50 rounded-xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-gray-800 text-sm font-semibold text-center leading-tight block">
                    {softSkills[currentSkillIndex]}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Text Content - Right Side */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Section Title - White Color */}
        <motion.h2
          className="my-8 text-center lg:text-left text-4xl font-extrabold tracking-tight text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Behind the Code
        </motion.h2>

        <div className="space-y-4">
          {BIO.map((bio, index) => (
            <motion.div
              key={index}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg lg:text-xl text-white leading-relaxed text-center lg:text-left">
                {bio}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Bio
