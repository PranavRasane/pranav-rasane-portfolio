import { HERO } from '../constants'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center pt-20 lg:pt-0">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mt-8 lg:mt-0"
      >
        <h2 className="my-8 p-2 text-4xl font-black md:text-5xl lg:text-[7rem] font-roboto-serif">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl font-roboto-serif font-semibold">
          {HERO.greet}
        </p>

        {/* Description with Blur Box */}
        <motion.div
          className="mb-8 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl font-roboto-serif text-white leading-relaxed">
            {HERO.description}
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8 relative mt-16 lg:mt-2"
      >
        <div className="flex justify-center relative">
          {/* Your Photo with White Background */}
          <motion.img
            src="/animated-PP-new.png"
            width={500}
            height={500}
            alt="Pranav Rasane"
            className="rounded-3xl object-contain z-10 relative"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />

          {/* Floating Skills Text */}
          {[
            { text: 'AI', x: '25%', y: '35%', delay: 0.4 },
            { text: 'ML', x: '70%', y: '45%', delay: 1.6 },
            { text: 'DL', x: '30%', y: '10%', delay: 2.2 },
            { text: 'NLP', x: '65%', y: '80%', delay: 0.9 },
            { text: 'SQL', x: '20%', y: '75%', delay: 3.2 },
            { text: 'Python', x: '75%', y: '65%', delay: 1.1 },
            { text: 'React', x: '15%', y: '50%', delay: 2.8 },
            { text: 'TensorFlow', x: '80%', y: '25%', delay: 1.9 },
            { text: 'JavaScript', x: '70%', y: '15%', delay: 3.5 },
          ].map((snippet, i) => (
            <motion.div
              key={i}
              className="absolute text-gray-800 text-sm font-mono font-bold bg-white/80 px-3 py-1 rounded-lg shadow-lg z-20 border border-gray-300"
              style={{
                left: snippet.x,
                top: snippet.y,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 8, 0],
                opacity: [0.7, 1, 0.7],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: snippet.delay,
                ease: 'easeInOut',
              }}
            >
              {snippet.text}
            </motion.div>
          ))}

          {/* Tech Symbols */}
          {[
            { symbol: '{}', x: '40%', y: '15%', delay: 1.4 },
            { symbol: '[]', x: '60%', y: '25%', delay: 2.8 },
            { symbol: '<>', x: '35%', y: '85%', delay: 0.7 },
            { symbol: '()', x: '55%', y: '90%', delay: 3.5 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-gray-700 text-lg font-mono font-bold z-20"
              style={{
                left: item.x,
                top: item.y,
              }}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: item.delay,
                ease: 'easeInOut',
              }}
            >
              {item.symbol}
            </motion.div>
          ))}

          {/* Subtle Connection Lines - Dark */}
          <svg className="absolute inset-0 w-full h-full z-10 opacity-40">
            {[...Array(3)].map((_, i) => (
              <motion.path
                key={i}
                d={`M ${20 + i * 15} ${25 + i * 10} Q ${40 + i * 8} ${
                  45 + i * 5
                } ${60 + i * 12} ${35 + i * 8}`}
                stroke="#4B5563"
                strokeWidth="1.2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1.5,
                }}
              />
            ))}
          </svg>

          {/* Laptop Screen Glow - Dark Theme */}
          <motion.div
            className="absolute w-18 h-12 bg-gray-800/40 rounded-lg z-20 border border-gray-600/30"
            style={{
              top: '48%',
              left: '52%',
              transform: 'translate(-40%, -50%)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Header
