import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../LandingPageStyles/Nav.scss'
import 'animate.css';

const Nav = () => {
  const [menuOpen, setMenuOpenState] = useState(false)

  const handleMenuClick = () => {
    menuOpen ? setMenuOpenState(false) : setMenuOpenState(true)
  }

  const menuItems = menuOpen ?
    <div className="items">
      <Link to='/'>
        <button className="menu-btn animate__animated animate__fadeInDown">Home</button>
      </Link>  
      <Link to='/profiles'>
        <button className="menu-btn animate__animated animate__fadeInDown">Profiles</button> 
      </Link>
      <Link to='/events'>
        <button className="menu-btn animate__animated animate__fadeInDown">Events</button>
      </Link>
      <Link to='/my-friends'>
        <button className="menu-btn animate__animated animate__fadeInDown">My Friends</button>
      </Link>
  
      <button className="menu-btn animate__animated animate__fadeInDown">How It Works</button>

      <Link to='/meet-the-creator'>
        <button className="menu-btn animate__animated animate__fadeInDown">Meet the Creator</button>
      </Link>
    </div>
    : null

  return (
    <div className="landing-nav">
      <h1 className="nav-title">Cool Parent</h1>
      <div>
        <button className="menu" onClick={handleMenuClick}>MENU</button>
        {menuItems}
      </div>
    </div>
  )
}

export default Nav