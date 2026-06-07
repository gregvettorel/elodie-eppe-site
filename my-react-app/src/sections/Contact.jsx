import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-eyebrow">
        <span className="contact-rule" />
        <span className="contact-label">Contact</span>
      </div>
      <p className="contact-headline">
        Construisons quelque chose ensemble.
      </p>
      <div className="contact-details">
        <a href="mailto:eppe.elodie@outlook.com" className="contact-link">
          eppe.elodie@outlook.com
        </a>
        <a href="tel:+32484569668" className="contact-link">
          0484 56 96 68
        </a>
      </div>
    </section>
  )
}

export default Contact
