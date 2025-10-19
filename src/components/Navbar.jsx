import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const NAVIGATION_LINK = [
  { label: 'Projects', href: '#projects' },
  { label: 'Profile', href: '#bio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work Exp', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 100) {
        setIsNavbarVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false)
        setIsMobileMenuOpen(false)
      } else {
        setIsNavbarVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Update active section on scroll
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = NAVIGATION_LINK.map((link) =>
        document.querySelector(
          link.href.startsWith('#') ? link.href : `#${link.href}`
        )
      ).filter(Boolean)

      const scrollY = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute('id')

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleActiveSection)
    return () => window.removeEventListener('scroll', handleActiveSection)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const targetElement = document.querySelector(
      href.startsWith('#') ? href : `#${href}`
    )
    if (targetElement) {
      const offset = -85
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY + offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div>
      <motion.nav
        className="fixed left-0 right-0 top-0 z-50 transition-transform duration-300"
        initial={{ y: 0 }}
        animate={{
          y: isNavbarVisible ? 0 : -100,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Desktop Navigation */}
        <motion.div
          className="mx-auto hidden max-w-2xl items-center justify-center rounded-2xl glass-effect border border-gray-600/30 py-3 backdrop-blur-xl lg:flex"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="flex items-center gap-3">
            {NAVIGATION_LINK.map((item, index) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <li key={index}>
                  <a
                    className={`relative px-3 py-2 text-sm font-semibold transition-all duration-200 rounded-lg whitespace-nowrap min-w-[60px] text-center ${
                      isActive
                        ? 'text-white bg-white/20 shadow-lg border border-white/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
                    }`}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </motion.div>

        {/* Mobile Navigation - Clean without "Navigation" text */}
        <div className="lg:hidden">
          <motion.div
            className="rounded-2xl glass-effect border border-gray-600/30 backdrop-blur-xl mx-4 mt-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-end p-3">
              {' '}
              {/* Changed to justify-end and reduced padding */}
              <button
                className="p-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-700/50"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.ul
                  className="flex flex-col gap-2 p-4 bg-gray-900/95 backdrop-blur-xl border-t border-gray-600/30 rounded-b-2xl"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {NAVIGATION_LINK.map((item, index) => {
                    const sectionId = item.href.replace('#', '')
                    const isActive = activeSection === sectionId

                    return (
                      <li key={index}>
                        <a
                          className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-150 ${
                            isActive
                              ? 'text-white bg-blue-500/20 border-l-4 border-blue-400'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                          href={item.href}
                          onClick={(e) => handleLinkClick(e, item.href)}
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar
