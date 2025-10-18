import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Bio from './components/Bio'
import Tech from './components/Tech'
import Work from './components/Work'
import Edu from './components/Edu'
import Contact from './components/Contact'
import Social from './components/Social'

const App = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }

    // Scroll progress indicator
    const updateProgressBar = () => {
      const progressBar = document.getElementById('progress-bar')
      if (progressBar) {
        const windowHeight = window.innerHeight
        const documentHeight =
          document.documentElement.scrollHeight - windowHeight
        const scrollPosition = window.scrollY
        const progress = (scrollPosition / documentHeight) * 100
        progressBar.style.width = `${progress}%`
      }
    }

    // Add event listeners
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll)
    })

    window.addEventListener('scroll', updateProgressBar)

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Observe all sections for fade-in effect
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      section.classList.add('fade-in-section')
      observer.observe(section)
    })

    // Cleanup function
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll)
      })
      window.removeEventListener('scroll', updateProgressBar)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-y-auto antialiased scroll-smooth">
      {/* Floating AI Icons Background */}
      <div className="fixed inset-0 bg-black overflow-hidden">
        {/* Floating AI Icons */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gray-500 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {['🤖', '🧠', '🔍', '📊', '⚡', '🔬', '💡', '🌐'][i % 8]}
            </motion.div>
          ))}
        </div>

        {/* Binary Rain Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 text-xs font-mono opacity-20 z-0"
              style={{
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-100, window.innerHeight + 100],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 space-y-16 container mx-auto">
        <Header />
        <Navbar />

        <section id="projects" className="w-full scroll-mt-20">
          <Project />
        </section>

        <section id="bio" className="w-full scroll-mt-20">
          <Bio />
        </section>

        <section id="skills" className="w-full scroll-mt-20">
          <Tech />
        </section>

        <section id="work" className="w-full scroll-mt-20">
          <Work />
        </section>

        <section id="education" className="w-full scroll-mt-20">
          <Edu />
        </section>

        <section id="contact" className="w-full scroll-mt-20">
          <Contact />
        </section>

        <Social />
      </div>

      {/* Scroll Progress Indicator - GREY */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div
          id="progress-bar"
          className="h-full bg-gradient-to-r from-gray-600 to-gray-400 transition-all duration-150"
        ></div>
      </div>
    </div>
  )
}

export default App
