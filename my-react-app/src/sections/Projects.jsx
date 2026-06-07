import React, { useState, useEffect } from 'react'
import './projects.css'

import imgFacade    from '../assets/imgFacade.png'
import imgFacade2   from '../assets/imgFacade2.png'
import imgCuisine   from '../assets/imgCuisine.png'
import imgDoor      from '../assets/imgDoor.JPG'
import imgStair     from '../assets/imgStair.jpg'
import imgCollage   from '../assets/imgCollage.png'
import imgBolles    from '../assets/imgBolles.jpg'
import imgCeramique from '../assets/imgCeramique.JPG'

// ─── Project data ──────────────────────────────────────────────────────────
// Update title, year, location and description to match each project.
const projects = [
  {
    id: 'facade',
    image: imgFacade,
    title: 'Réhabilitation de façade',
    year: '2024',
    location: 'Liège',
    description:
      "Réhabilitation et mise en valeur d'une façade de caractère. Travail sur les matériaux d'origine, restauration des éléments architecturaux et amélioration thermique de l'enveloppe.",
  },
  {
    id: 'door',
    image: imgDoor,
    title: 'Entrée et seuil',
    year: '2023',
    location: 'Liège',
    description:
      "Conception d'une entrée de caractère. Le seuil pensé comme espace de transition entre l'espace public et le domicile — un lieu charnière qui articule dedans et dehors.",
  },
  {
    id: 'cuisine',
    image: imgCuisine,
    title: 'Cuisine sur mesure',
    year: '2023',
    location: 'Bruxelles',
    description:
      "Conception et suivi de réalisation d'une cuisine intégrée. Travail autour des matériaux naturels, de la fonctionnalité des espaces et de l'articulation entre cuisine et séjour.",
  },
  {
    id: 'stair',
    image: imgStair,
    title: 'Escalier sculptural',
    year: '2022',
    location: 'Namur',
    description:
      "L'escalier pensé comme un élément structurant au cœur de la maison. Travail sur la légèreté, la transparence du volume et la relation à la lumière naturelle.",
  },
  {
    id: 'collage',
    image: imgCollage,
    title: 'Étude de composition',
    year: '2024',
    location: 'Atelier',
    description:
      "Recherche plastique autour de la composition des espaces, des matières et de la lumière. Un outil de conception au service du projet architectural.",
  },
  {
    id: 'facade2',
    image: imgFacade2,
    title: 'Extension contemporaine',
    year: '2023',
    location: 'Liège',
    description:
      "Extension contemporaine d'un bâtiment existant. Dialogue entre l'ancien et le nouveau, travail sur les matériaux et les proportions pour une architecture cohérente et sensible.",
  },
  {
    id: 'bolles',
    image: imgBolles,
    title: 'Espace public',
    year: '2022',
    location: 'Liège',
    description:
      "Réflexion sur l'aménagement des espaces publics et la cohabitation entre les différents modes de déplacement. Travail sur la qualité des espaces partagés.",
  },
  {
    id: 'ceramique',
    image: imgCeramique,
    title: 'Pratique céramique',
    year: '2023–2024',
    location: 'Atelier',
    description:
      "La céramique comme espace de recherche matière et formelle, en parallèle de la pratique architecturale. Exploration des formes, des textures et des relations entre volume et lumière.",
  },
]

// Distribute items into N columns round-robin (0→col0, 1→col1, 2→col2, 3→col0 …)
function splitColumns(items, n) {
  const cols = Array.from({ length: n }, () => [])
  items.forEach((item, i) => cols[i % n].push(item))
  return cols
}

function Projects() {
  const [openId, setOpenId] = useState(null)
  const [colCount, setColCount] = useState(() => window.innerWidth <= 640 ? 2 : 3)

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
              const isOpen = openId === project.id
              return (
                <div
                  key={project.id}
                  className={`project-item${isOpen ? ' is-open' : ''}`}
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={e => e.key === 'Enter' && setOpenId(isOpen ? null : project.id)}
                >
                  <img src={project.image} alt={project.title} />

                  <div className="project-overlay" aria-hidden={!isOpen}>
                    <div className="project-overlay-meta">
                      {project.year}{project.location ? ` — ${project.location}` : ''}
                    </div>
                    <h3 className="project-overlay-title">{project.title}</h3>
                    <p className="project-overlay-desc">{project.description}</p>
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
