import React from 'react'
import './footer.css'

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__content_contact">
        <div>Architecture</div>
        <div>Mobilier d'interieur</div>
        <div>Conseil</div>
        </div>
      <div className="footer__content_contact2">
        <div>eppe.elodie@outlook.com</div>
        <div>0484 56 96 68</div>
        <br />
        <div>TVA: BE077.442.7214</div>
        <div>matricule : 3004683</div> 
        </div>
          <img src="/LOGO_EE_blanc.svg" alt="EPPE Studio Logo"  className='footer__img_instance'/>
      <div className="footer__content_copyright">
        <p>© 2026 Elodie Eppe</p>
      </div>
    </footer>
  )
}

export default Footer
