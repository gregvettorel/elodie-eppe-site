import React from 'react'
import './APropos.css'

function APropos() {
  return (
    <main className="apropos-page">
      <div className="apropos-eyebrow">
        <span className="apropos-rule" />
        <span className="apropos-label">À propos</span>
      </div>

      <div className="apropos-content">
        <p>Architecte indépendante, j'interviens sur des projets privés et publics en assurant leur développement de la conception à la réalisation.</p>
        <p>Diplômée avec distinction de la Faculté d'Architecture de l'UCLouvain, j'ai acquis une expérience diversifiée au sein de bureaux d'architecture en Belgique et en Suisse. Cette expérience m'a permis de développer une expertise en gestion de projets, coordination des différents intervenants, suivi des budgets et accompagnement des maîtres d'ouvrage.</p>
        <p>J'accorde une attention particulière à la qualité architecturale, à la faisabilité technique et à la recherche de solutions adaptées aux besoins.</p>
      </div>

      <a className="cv-link" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <span className="cv-link-rule" />
        Ouvrez mon CV
      </a>

      <div className="services-section">
        <div className="apropos-eyebrow">
          <span className="apropos-rule" />
          <span className="apropos-label">Services</span>
        </div>

        <div className="apropos-content">
          <p>Chaque projet est unique et mérite une réponse adaptée. J'accompagne mes clients à différentes étapes de leur projet, qu'il s'agisse d'un conseil avant achat, d'une rénovation, d'une extension, d'une régularisation urbanistique ou d'un réaménagement intérieur. Mon travail consiste à transformer les contraintes en opportunités afin de créer des espaces fonctionnels, cohérents et agréables à vivre.</p>
          <p>J'interviens aussi dans la conception de mobilier sur mesure et dans le suivi des démarches administratives liées aux permis, pour des projets résidentiels, commerciaux ou de bureaux.</p>
          <p>Chaque projet débute par un premier échange au cours duquel vous me présentez votre projet, vos besoins et vos attentes. Cette prise de contact permet d'identifier les enjeux principaux et de répondre à vos premières questions.</p>
          <p>Nous convenons ensuite d'une visite sur place afin de découvrir les lieux, comprendre leur contexte ainsi que vos habitudes de vie ou de travail. Cette rencontre est essentielle pour établir une compréhension commune des objectifs, des contraintes et du potentiel du projet.</p>
          <p>Sur base des informations recueillies et d'une première estimation générale des travaux envisagés, je vous transmets une offre de mission détaillant mes prestations ainsi que les différentes étapes du projet. Une fois cette offre validée, le travail de conception peut débuter et le projet se développer selon un cadre clair et défini ensemble.</p>
        </div>
      </div>
    </main>
  )
}

export default APropos
