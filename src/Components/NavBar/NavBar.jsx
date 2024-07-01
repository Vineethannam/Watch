import React from 'react'
import { useState } from 'react';
import './NavBar.css'
import MoblieNav from './MoblieNav/MoblieNav';



const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
  const ToggelMenu=()=>{
      setOpenMenu(!openMenu)
  }


  return (
    <>
    <MoblieNav isOpen={openMenu} ToggelMenu={ToggelMenu}/>
      <header className='nav-header'>
        <nav className='nav-content'>
            <div className="logo">LOGO</div>
            <div className="search1">
                <input type="text" name="" placeholder='Search' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <ul>
              <li className='menu-item'>Home</li>
              <li className="menu-item">Brand</li>
              <li className="menu-item">Men</li>
              <li className="menu-item">Women</li>
              <button onClick={()=>{}} className='contact-btn'>Contact</button>
            </ul>
            <button className="menu-btn" onClick={ToggelMenu}>
              <span className="material-symbols-outlined" style={{fontSize:"1.5rem"}}>
                {openMenu?"close":"menu"}
              </span>
            </button>
        </nav>
      </header>
    </>
  )
}

export default NavBar
