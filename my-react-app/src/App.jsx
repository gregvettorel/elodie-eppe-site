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
              <p>L’atelier développe une approche sensible et réfléchie de l’architecture, attentive aux usages, aux matières et aux relations qui se tissent entre les espaces et ceux qui les habitent.</p>
              <p>Nourri par des expériences et des savoir-faire variés, de l’architecture à la céramique, en passant par l’observation du quotidien, le travail de l’atelier cherche à révéler le potentiel des lieux et à imaginer de nouvelles façons de les habiter.</p>
              <p>Une attention particulière est portée aux matériaux, à leur histoire et à leur mise en œuvre, avec la volonté de privilégier le réemploi lorsque cela est possible. L’atelier accorde également une place importante à la valorisation de l’existant, à l’optimisation des espaces et à la création d’aménagements fonctionnels, adaptés aux besoins de chacun.</p>
              <p>La gestion de l’eau, le confort thermique et acoustique, ainsi que les aspects techniques du projet sont intégrés dès la conception. Pour y répondre de manière cohérente, l’atelier collabore avec différents experts, notamment des ingénieurs en stabilité, des conseillers PEB et des acousticiens.</p>
              <p>Chaque projet est ainsi envisagé dans sa globalité, avec le souci de trouver un équilibre entre sensibilité architecturale, fonctionnalité et durabilité.</p>
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
