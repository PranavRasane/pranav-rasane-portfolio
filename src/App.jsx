import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import ProjectDetail from './pages/ProjectDetail'

const App = () => {
  useEffect(() => {
    // Keep your existing scroll and animation logic
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

    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll)
    })

    window.addEventListener('scroll', updateProgressBar)

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll)
      })
      window.removeEventListener('scroll', updateProgressBar)
    }
  }, [])

  const HomePage = () => (
    <div className="relative z-10 flex flex-col items-center px-4 space-y-16 container mx-auto pt-24">
      {' '}
      {/* Adjusted for new navbar height */}
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
  )

  return (
    <Router>
      <div className="relative min-h-screen overflow-y-auto antialiased scroll-smooth">
        {/* Background with Only Binary Rainfall */}
        <div className="fixed inset-0 bg-black overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-400/60 text-sm font-mono z-0"
                style={{
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-100, window.innerHeight + 100],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 12,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'linear',
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
          <div
            id="progress-bar"
            className="h-full bg-gradient-to-r from-gray-600 to-gray-400 transition-all duration-150"
          ></div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
