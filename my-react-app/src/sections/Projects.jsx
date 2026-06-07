import React, { useState } from 'react'
import './projects.css'
import ProjectModal from './ProjectModal'

import imgFacade    from '../assets/imgFacade.png'
import imgFacade2   from '../assets/imgFacade2.png'
import imgCuisine   from '../assets/imgCuisine.png'
import imgDoor      from '../assets/imgDoor.JPG'
import imgStair     from '../assets/imgStair.jpg'
import imgCollage   from '../assets/imgCollage.png'
import imgBolles    from '../assets/imgBolles.jpg'
import imgCeramique  from '../assets/imgCeramique.JPG'
import imgCeramique2 from '../assets/imgCeramique2.jpg'
import imgPlan      from '../assets/imgPlan.jpg'

// ─── Project data ──────────────────────────────────────────────────────────
// Update title, year, location, description and tags to match each project.
// Add extra images to the `images` array — they appear in the modal gallery.
const projects = [
  {
    id: 'facade',
    className: 'item-facade',
    images: [imgFacade],
    title: 'Réhabilitation de façade',
    year: '2024',
    location: 'Liège',
    description:
      "Réhabilitation et mise en valeur d'une façade de caractère. Travail sur les matériaux d'origine, restauration des éléments architecturaux et amélioration thermique de l'enveloppe.",
    tags: ['Architecture', 'Réhabilitation'],
  },
  {
    id: 'door',
    className: 'item-door',
    images: [imgDoor],
    title: 'Entrée et seuil',
    year: '2023',
    location: 'Liège',
    description:
      "Conception d'une entrée de caractère. Le seuil pensé comme espace de transition entre l'espace public et le domicile — un lieu charnière qui articule dedans et dehors.",
    tags: ['Architecture', 'Détail'],
  },
  {
    id: 'cuisine',
    className: 'item-cuisine',
    images: [imgCuisine],
    title: 'Cuisine sur mesure',
    year: '2023',
    location: 'Bruxelles',
    description:
      "Conception et suivi de réalisation d'une cuisine intégrée. Travail autour des matériaux naturels, de la fonctionnalité des espaces et de l'articulation entre cuisine et séjour.",
    tags: ['Intérieur', 'Mobilier'],
  },
  {
    id: 'stair',
    className: 'item-stair',
    images: [imgStair, imgPlan],
    title: 'Escalier sculptural',
    year: '2022',
    location: 'Namur',
    description:
      "L'escalier pensé comme un élément structurant au cœur de la maison. Travail sur la légèreté, la transparence du volume et la relation à la lumière naturelle.",
    tags: ['Architecture', 'Intérieur'],
  },
  {
    id: 'collage',
    className: 'item-collage',
    images: [imgCollage],
    title: 'Étude de composition',
    year: '2024',
    location: 'Atelier',
    description:
      "Recherche plastique autour de la composition des espaces, des matières et de la lumière. Un outil de conception au service du projet architectural, entre représentation et exploration.",
    tags: ['Recherche', 'Composition'],
  },
  {
    id: 'facade2',
    className: 'item-facade2',
    images: [imgFacade2],
    title: 'Extension contemporaine',
    year: '2023',
    location: 'Liège',
    description:
      "Extension contemporaine d'un bâtiment existant. Dialogue entre l'ancien et le nouveau, travail sur les matériaux et les proportions pour une architecture cohérente et sensible.",
    tags: ['Architecture', 'Extension'],
  },
  {
    id: 'bolles',
    className: 'item-bolles',
    images: [imgBolles],
    title: 'Espace public',
    year: '2022',
    location: 'Liège',
    description:
      "Réflexion sur l'aménagement des espaces publics et la cohabitation entre les différents modes de déplacement. Travail sur la qualité des espaces partagés et du mobilier urbain.",
    tags: ['Espace public', 'Urbanisme'],
  },
  {
    id: 'ceramique',
    className: 'item-ceramique',
    images: [imgCeramique, imgCeramique2],
    title: 'Pratique céramique',
    year: '2023–2024',
    location: 'Atelier',
    description:
      "La céramique comme espace de recherche matière et formelle, en parallèle de la pratique architecturale. Exploration des formes, des textures et des relations entre volume, creux et lumière.",
    tags: ['Céramique', 'Art'],
  },
]

function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="projects-section">
      <div className="projects-eyebrow">
        <span className="projects-label">Réalisations</span>
        <span className="projects-rule" />
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div
            key={project.id}
            className={`project-item ${project.className}`}
            onClick={() => setSelected(project)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setSelected(project)}
          >
            <img src={project.images[0]} alt={project.title} />
            <div className="project-item-hover">
              <span className="project-item-hover-title">{project.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

export default Projects
