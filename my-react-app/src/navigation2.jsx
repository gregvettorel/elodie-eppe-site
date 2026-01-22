import React from 'react'
import './navigation2.css'
import Logo from './Logo'

function Navigation({ onSectionChange, activeSection }) {
  return (
    <nav className="navigation2">
      <Logo onClick={() => onSectionChange('home')} />
      <div className="nav_links">
        <a onClick={() => onSectionChange('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a onClick={() => onSectionChange('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a onClick={() => onSectionChange('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </div>
    </nav>
  )
}

export default Navigation
