import { useState, useEffect } from 'react'
import { NAVIGATION_LINKS } from '../constants/index'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_LINKS.map((link) => link.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')

      // Hide navbar completely on scroll down, show on scroll up
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down - hide completely
        setIsVisible(false)
        setIsMenuOpen(false) // Also close menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Function to handle mobile navigation
  const handleMobileNavClick = (href) => {
    setIsMenuOpen(false)

    // Smooth scroll to section
    setTimeout(() => {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    }, 100)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex items-center justify-center"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="portfolio-glass-effect rounded-full border border-white/10 px-8 py-4">
          <div className="flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`portfolio-nav-link text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Completely disappears on scroll down */}
      <motion.nav
        className="fixed top-6 left-0 right-0 z-50 flex md:hidden items-center justify-center mx-4"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="portfolio-glass-effect rounded-full border border-white/10 w-full max-w-sm">
          <div className="flex items-center justify-between py-4 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/PR_logo.jpg"
                alt="PR Logo"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>

            {/* Simple Hamburger Menu - No effects, just click */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-1"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-black/90 border-t border-white/10 overflow-hidden rounded-none"
              >
                <div className="px-4 py-4 space-y-3">
                  {NAVIGATION_LINKS.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleMobileNavClick(link.href)}
                      className={`block w-full text-left py-3 px-4 rounded-none text-sm transition-all duration-200 ${
                        activeSection === link.href.substring(1)
                          ? 'text-white bg-white/10'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
