import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import './navigation.css'
import Logo from './assets/eeppe-rouge.svg'

function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault()
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    } else {
      navigate('/', { state: { scrollTo: sectionId } })
    }
  }

  // Active section tracker via scroll (home only)
  useEffect(() => {
    if (!isHome) { setActiveSection(''); return }
    const handleScrollEvent = () => {
      const sections = ['projects', 'contact']
      const scrollPos = window.scrollY + 120
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && scrollPos >= el.offsetTop) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScrollEvent)
    return () => window.removeEventListener('scroll', handleScrollEvent)
  }, [isHome])

  // Scroll to section after navigating back to home from another page
  useEffect(() => {
    if (isHome && location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
    }
  }, [isHome, location.state])

  return (
    <nav className="navigation">
      <img
        src={Logo}
        alt="Elodie Eppe"
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />
      <div className="nav_links">
        <a
          href="#projects"
          onClick={(e) => handleSectionClick(e, 'projects')}
          className={isHome && activeSection === 'projects' ? 'active' : ''}
        >
          Projets
        </a>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          À propos
        </NavLink>
        <a
          href="#contact"
          onClick={(e) => handleSectionClick(e, 'contact')}
          className={isHome && activeSection === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navigation
