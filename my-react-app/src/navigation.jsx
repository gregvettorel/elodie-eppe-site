import React, { useState, useEffect } from 'react'
import './navigation.css'
import Logo from './assets/eeppe-rouge.svg'

function Navigation() {
  const [activeSection, setActiveSection] = useState('projects')

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [])

  return (
    <nav className="navigation">
      <img src={Logo} alt="Logo" className='logo' onClick={handleLogoClick} style={{ cursor: 'pointer' }}/>
      <div className="nav_links">
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, 'projects')}
          className={activeSection === 'projects' ? 'active' : ''}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, 'contact')}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
      </div>
    </nav>
  )
} 

export default Navigation
