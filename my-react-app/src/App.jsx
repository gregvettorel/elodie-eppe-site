import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './navigation.jsx'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import APropos from './pages/APropos'
import Footer from './footer.jsx'
import Seo from './Seo.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
          <Seo
            title="Eppe Elodie Architecture — Atelier d'architecture à Bruxelles"
            path="/"
          />
          <main className="sections-container">
            <div className='intro-section'>
              <p>L'atelier d'architecture défend une lecture simple et sensible des espaces, attentive aux usages et aux relations qui s'y développent.</p>
              <p>Nourri par des savoirs variés ( architecture, céramique et expérience du quotidien ) l'atelier cherche à révéler les qualités propres aux lieux et les différentes manières de les habiter. Les questions de réemploi des matériaux, de gestion de l'eau et de confort font partie intégrante de cette démarche.</p>
            </div>
            <div className="intro-cover">
              <Projects />
              <Contact />
            </div>
          </main>
          </>
        } />
        <Route path="/a-propos" element={
          <>
          <Seo
            title="À propos — Eppe Elodie Architecture"
            description="Elodie Eppe, architecte indépendante, diplômée de l'UCLouvain, elle accompagne rénovations, extensions, régularisations et mobilier sur mesure, de la conception à la réalisation."
            path="/a-propos"
          />
          <APropos />
          </>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
