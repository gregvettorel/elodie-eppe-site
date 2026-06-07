import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './projectModal.css'

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => { setImgIndex(0) }, [project])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setImgIndex(i => (i + 1) % project.images.length)
      if (e.key === 'ArrowLeft')  setImgIndex(i => (i - 1 + project.images.length) % project.images.length)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [project, onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const prev = () => setImgIndex(i => (i - 1 + project.images.length) % project.images.length)
  const next = () => setImgIndex(i => (i + 1) % project.images.length)
  const hasMultiple = project.images.length > 1

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>

        <div className="modal-gallery">
          <img
            key={imgIndex}
            src={project.images[imgIndex]}
            alt={project.title}
            className="modal-main-image"
          />
          {hasMultiple && (
            <div className="modal-gallery-controls">
              <button className="modal-nav-btn" onClick={prev}>←</button>
              <span className="modal-gallery-count">{imgIndex + 1} / {project.images.length}</span>
              <button className="modal-nav-btn" onClick={next}>→</button>
            </div>
          )}
        </div>

        <div className="modal-info">
          <div className="modal-meta">
            {project.year}{project.location ? ` — ${project.location}` : ''}
          </div>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          {project.tags?.length > 0 && (
            <div className="modal-tags">
              {project.tags.map(tag => (
                <span key={tag} className="modal-tag">{tag}</span>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>,
    document.body
  )
}

export default ProjectModal
