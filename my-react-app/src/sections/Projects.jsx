import React from 'react'
import './projects.css'

import imgCollage from '../assets/imgCollage.png'
import imgDoor from '../assets/imgDoor.JPG'
import imgCuisine from '../assets/imgCuisine.png'
import imgFacade from '../assets/imgFacade.png'
import imgFacade2 from '../assets/imgFacade2.png'
import imgStair from '../assets/imgStair.jpg'
import imgBallons from '../assets/imgBallons.jpg'

function Projects() {

  const items = [
    { image: imgCuisine, className: 'pos-top-left-wide' },
    { image: imgFacade, className: 'pos-top-right-wide' },
    { image: imgDoor, className: 'pos-left-vertical' },
    { image: imgCollage, className: 'pos-mid-right' },
    { image: imgFacade2, className: 'pos-bottom-left' },
    { image: imgStair, className: 'pos-bottom-center' },
    { image: imgBallons, className: 'pos-bottom-right' }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-canvas">

        {items.map((item, index) => (
          <article
            key={index}
            className={`project-piece ${item.className}`}
          >
            <img
              src={item.image}
              alt=""
              className="project-piece-image"
            />
          </article>
        ))}

      </div>
    </section>
  )
}

export default Projects