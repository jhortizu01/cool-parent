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
        <button className="menu-btn animate__animated animate__fadeInDown animate__faster">Home</button>
      </Link>  
      <Link to='/profiles'>
        <button className="menu-btn animate__animated animate__fadeInDown animate__faster">Profiles</button> 
      </Link>
      <Link to='/events'>
        <button className="menu-btn animate__animated animate__fadeInDown animate__faster">Events</button>
      </Link>
      <Link to='/my-friends'>
        <button className="menu-btn animate__animated animate__fadeInDown animate__faster">Friends</button>
      </Link>
    {/* how it works needs to be fixed */}
      <button className="menu-btn animate__animated animate__fadeInDown animate__faster">How It Works</button>
    {/* need to make meet the cretor  */}
      <button className="menu-btn animate__animated animate__fadeInDown animate__faster">Meet the Creator</button>
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