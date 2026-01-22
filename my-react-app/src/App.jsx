import { useState } from 'react'
import Navigation from './navigation2.jsx'
import Home from './sections/Home'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './footer.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <>
      <Navigation onSectionChange={setActiveSection} activeSection={activeSection} />
      <main className="sections-container">
        {activeSection === 'home' && <Home />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'about' && <About />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </>
  )
}

export default App
