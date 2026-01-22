import React from 'react'
import './Logo.css'

function Logo({ onClick }) {
  return (
    <div className="logo" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="logo_eppe">EPPE</div>
      <div className="logo_studio">ELODIE</div>
      <br />
            <div className="logo_comment">A girl first, an architect second. ;)</div>
    </div>
  )
}

export default Logo