import Navigation from './navigation.jsx'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './footer.jsx'

function App() {

  return (
    <>
      <Navigation/>
      <main className="sections-container">
        <div className='intro-section'>
        <p>L’atelier d’architecture défend une lecture simple et sensible des espaces, attentive aux usages et à l’intégration de nœuds d’interaction.
          </p>
          <p> 
Nourri par des savoirs variés (architecture, céramique, expérience vécue) l’atelier cherche à révèler les qualités propres aux lieux et les manières d’habiter.
Les réflexions autour du réemploi des matériaux, de la gestion des eaux et des conforts techniques font partie intégrante de ses valeurs.</p>
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
