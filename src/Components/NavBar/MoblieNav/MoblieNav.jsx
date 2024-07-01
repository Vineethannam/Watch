import React from 'react';
import './MoblieNav.css'

const MoblieNav = ({isOpen,ToggelMenu}) => {
  return (
    <div>
      <>
        <div className={`mobile-menu ${isOpen ? "active":""}`} onClick={ToggelMenu}>
            <div className="mobile-menu-container">
                <div className="Mobile-logo">LOGO</div>
                <div className="search">
                <input type="text" name="" placeholder='Search' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
                <ul>
                    <li className="menu-item1">Home</li>
                    <li className="menu-item1">Brand</li>
                    <li className="menu-item1">Men</li>
                    <li className="menu-item1">Women</li>
                <button className="contact-btn-mob" onClick={()=>{}}>Contact</button>
                </ul>
            </div>
        </div>
        </>
    </div>
  )
}

export default MoblieNav
