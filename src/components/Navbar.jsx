import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NAVIGATION_LINK = [
  { label: 'Projects', href: '#projects' },
  { label: 'Profile', href: '#bio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work Experience', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const togglerMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const targetElement = document.querySelector(
      href.startsWith('#') ? href : `#${href}`
    )
    if (targetElement) {
      const offset = -85 // Adjust for fixed navbar height
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
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Navigation */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/3 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <ul className="flex items-center gap-5">
            {NAVIGATION_LINK.map((item, index) => (
              <li key={index}>
                <a
                  className="text-small hover:text-yellow-400"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center">
            <button
              className="focus:outline-none p-2 text-white"
              onClick={togglerMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="m-2 h-6 w-5" />
              ) : (
                <FaBars className="m-2 h-6 w-5" />
              )}
            </button>
          </div>
          {isMobileMenuOpen && (
            <ul className="flex flex-col items-start gap-3 p-4 bg-black text-white rounded-md">
              {NAVIGATION_LINK.map((item, index) => (
                <li key={index}>
                  <a
                    className="text-small hover:text-yellow-400"
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
