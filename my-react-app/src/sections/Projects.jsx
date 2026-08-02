import React, { useState, useEffect } from 'react'
import './projects.css'

import imgFacade    from '../assets/imgFacade.webp'
import imgFacade2   from '../assets/imgFacade2.webp'
import imgCuisine   from '../assets/imgCuisine.webp'
import imgDoor      from '../assets/imgDoor.webp'
import imgStair     from '../assets/imgStair.webp'
import imgCollage   from '../assets/imgCollage.webp'
import imgBolles    from '../assets/imgBolles.webp'
import imgCeramique from '../assets/imgCeramique.webp'
import imgEider     from '../assets/imgEiderVertical.webp'
import imgTable     from '../assets/imgTable.webp'
import imgTable2    from '../assets/imgTable2.webp'
import imgTable3    from '../assets/imgTable3.webp'
import imgEider2    from '../assets/imgEider2.webp'
import imgBoulle    from '../assets/imgCeramique2.webp'
import imgBoulle2   from '../assets/imgVaseClose.webp'

// ─── Project data ──────────────────────────────────────────────────────────
// Update title, year, location and description to match each project.
// Optional: gallery: [imgA, imgB, …] — extra images revealed one per click
// after the overlay (last click closes the card again).
// A gallery entry can also be { image, sound: '/file.mp3' } — the sound
// (served from the public/ folder) plays when that image appears.
const projects = [
  {
    id: 'facade',
    image: imgFacade,
    title: "SWE5 - Extension d'une maison unifamiliale",
    year: '2021/2022',
    location: 'Auderghem',
    description:
      "Le projet propose un dédoublement de la façade arrière pour but d’y déplacer la circulation verticale, à présent ouverte sur les différents étages. Cette extension peu profonde, permet d’étendre les volumes, auparavant découpés autour de l’escalier existant. La façade en brique d’origine se devine derrière cette nouvelle façade vitrée. Celle-ci devient l’élément structurant, avec ces lignes prononcées et sa couleur vive. <br> Collaboration chez LOMO Studio _ Suivi de chantier et modifications de plans d’exécution.",
  },
  {
    id: 'door',
    image: imgDoor,
    title: "Saint-Martin - Construction d'un bâtiment multi-fonctionnel",
    year: '2020/2021',
    location: 'Lausanne',
    description:
"Photographie du chantier Saint-Martin <br> Collaboration chez Wolff Obrist architectes"
  },
    {
    id: 'facade2',
    image: imgFacade2,
    title: "JVH - Rénovation et surélévation d’une maison unifamiliale",
    year: '2021',
    location: 'Auderghem',
    description: "Ce projet de rénovation énergétique vise à améliorer significativement les performances de l’habitation tout en préservant son caractère architectural. La rehausse de la toiture permet d’optimiser l’installation de panneaux photovoltaïques, bénéficiant d’un meilleur ensoleillement, tout en offrant l’occasion d’isoler entièrement la toiture et d’améliorer le confort des espaces sous combles. <br> La façade avant est également isolée et les châssis remplacés par de nouvelles menuiseries en aluminium, dans le respect de l’esthétique existante. L’ensemble des interventions réduit les besoins énergétiques du bâtiment, améliore durablement le confort intérieur et prépare l’habitation à de futures évolutions techniques, comme l’installation d’une pompe à chaleur. <br> Esquisse et dossier de permis d'urbanisme."
  },
        {
    id: 'ceramique',
    image: imgTable,
    gallery: [imgTable3, imgTable2],
    title: "Conception d'une table basse",
    year: '2026',
    location: 'Bruxelles',
    description:
    "L’objet représenté mélange deux aspects de l’évolution de la table basse. Sa faible hauteur fait référence aux usages asiatiques traditionnels, tandis que son esthétique rappelle les tables des années 1970 avec plateau en carreaux de céramique."
  },
    {
    id: 'eider',
    image: imgEider,
    gallery: [imgEider2],
    title: 'Eider  - Rénovation et extension d’une maison unifamiliale',
    year: "2026",
    location: "Watermael-Boitsfort",
    description: "Ce projet consiste en la rénovation et l’extension du rez-de-chaussée d’une habitation. L’extension réorganise les espaces de vie afin d’ouvrir la cuisine et la salle à manger sur le jardin, tout en intégrant un espace de bureau adapté au télétravail. La conception met l’accent sur la qualité des espaces, l’apport généreux de lumière naturelle et une relation renforcée avec l’extérieur. <br> L'intervention dialogue avec le bâtiment existant grâce à une palette de matériaux et de teintes proches de l’origine, tout en affirmant une identité propre par le dessin des ouvertures, les détails de mise en œuvre et les proportions. Des solutions passives, comme un auvent protégeant la façade sud du soleil estival, complètent une approche à la fois sobre, durable et fonctionnelle. <br> Mission complète d'architecte."
  },
  {
    id: 'collage',
    image: imgCollage,
    title: 'Au rieu de Warchin',
    description:
    "Création d’espaces communs le long du rieu par l’intermédiaire d’une carte interactive. <br> Travail d'étude"
  },

  {
    id: 'bolles',
    image: imgBolles,
    title: 'Pratique céramique',
    year: '2025',
    location: 'Bruxelles',
  },
    {
    id: 'stair',
    image: imgStair,
    title: "SWE5 - Extension d'une maison unifamiliale",
    year: '2021/2022',
    location: 'Auderghem',
    description:
"Le projet propose un dédoublement de la façade arrière pour but d’y déplacer la circulation verticale, à présent ouverte sur les différents étages. Cette extension peu profonde, permet d’étendre les volumes, auparavant découpés autour de l’escalier existant. La façade en brique d’origine se devine derrière cette nouvelle façade vitrée. Celle-ci devient l’élément structurant, avec ces lignes prononcées et sa couleur vive. <br> Collaboration chez LOMO Studio _ Suivi de chantier et modifications de plans d’exécution."
  },
      {
    id: 'boulle',
    image: imgBoulle,
    gallery: [imgBoulle2],
    title: 'Pratique céramique',
    year: "2024",
    location: "Bruxelles  ",
    description: "Recherche de texture sur un module commun. <br> Pratique du colombin"
  },
    {
    id: 'cuisine',
    image: imgCuisine,
    title: "Point du Jour - Rénovation et extension d’une maison unifamiliale",
    year: '2020/2021',
    location: 'Vevey',
    description:
"Cette maison d’héritage familial, vient être totalement rénovées et réaménagée, afin d’y accueillir les nouvelles générations. Les espaces au rez-de-chaussée s’ouvrent, et viennent s’étendre par une extension en structure bois. Le grenier devient une suite parentale avec un salle de bain privative, tandis que les chambres au premier étage se réorganisent autour d’une nouvelle salle de bain. Etude de conception pour la cuisine sur mesure. <br> Collaboration chez Wolff Obrist architectes <br> Dossier d'exécution et suivi de chantier."
  }
]

// Render '<br>' markers in the data as blank lines (double line break)
function withLineBreaks(text) {
  if (!text) return null
  const parts = text.split(/<br\s*\/?>/)
  return parts.map((part, i) => (
    <React.Fragment key={i}>
      {part.trim()}
      {i < parts.length - 1 && <><br /><br /></>}
    </React.Fragment>
  ))
}

// Distribute items into N columns round-robin (0→col0, 1→col1, 2→col2, 3→col0 …)
function splitColumns(items, n) {
  const cols = Array.from({ length: n }, () => [])
  items.forEach((item, i) => cols[i % n].push(item))
  return cols
}

function Projects() {
  // openState: { id, step } — step 1 shows the overlay, steps 2+ walk the
  // card's optional gallery images; one more click closes the card again.
  const [openState, setOpenState] = useState(null)
  const [colCount, setColCount] = useState(() => window.innerWidth <= 640 ? 2 : 3)

  const handleItemClick = (project) => {
    const gallery = project.gallery || []
    let next = null
    if (!openState || openState.id !== project.id) {
      next = { id: project.id, step: 1 }
    } else if (openState.step + 1 <= 1 + gallery.length) {
      next = { id: project.id, step: openState.step + 1 }
    }
    setOpenState(next)

    // Play the entry's sound (if any) — must happen inside the click
    // handler so browser autoplay policies allow it
    const entry = next && next.step >= 2 ? gallery[next.step - 2] : null
    if (entry && entry.sound) new Audio(entry.sound).play().catch(() => {})
  }

  useEffect(() => {
    const update = () => setColCount(window.innerWidth <= 640 ? 2 : 3)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const columns = splitColumns(projects, colCount)

  return (
    <section id="projects" className="projects-section">
      <div className="projects-eyebrow">
        <span className="projects-label">Projets</span>
        <span className="projects-rule" />
      </div>

      <div className="projects-grid">
        {columns.map((col, ci) => (
          <div key={ci} className="projects-col">
            {col.map(project => {
              const isOpen = openState?.id === project.id
              const step = isOpen ? openState.step : 0
              const galleryEntry = step >= 2 ? project.gallery[step - 2] : null
              const galleryImg = galleryEntry ? (galleryEntry.image || galleryEntry) : null
              return (
                <div
                  key={project.id}
                  className={`project-item${step === 1 ? ' is-open' : ''}`}
                  onClick={() => handleItemClick(project)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={e => e.key === 'Enter' && handleItemClick(project)}
                >
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  {galleryImg && (
                    <img className="project-gallery-img" src={galleryImg} alt={project.title} loading="lazy" decoding="async" />
                  )}

                  <div className="project-overlay" aria-hidden={step !== 1}>
                    <h3 className="project-overlay-title">{withLineBreaks(project.title)}</h3>
                    <div className="project-overlay-meta">
                      {project.year}{project.location ? ` — ${project.location}` : ''}
                    </div>
                    <p className="project-overlay-desc">{withLineBreaks(project.description)}</p>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
