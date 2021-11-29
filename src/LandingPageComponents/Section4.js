import React from 'react'
import '../LandingPageStyles/Section4.scss'
import social from '../assets/social.png'
import { Link } from 'react-router-dom'

const Section4 = () => {
  return (
    <div className="section4">
      <section className="footer-links">
        <Link to='/profiles' style={{ textDecoration: 'none' }}>
          <p className="links">Profiles</p>
        </Link>
        <Link to='/events' style={{ textDecoration: 'none' }}>
          <p className="links">Events</p>
        </Link>
        <p className="app-title">Cool Parent</p>
        <Link to='/meet-the-creator' style={{ textDecoration: 'none' }}>
          <p className="links">Creator</p>
        </Link>
        <p className="links">About</p>
      </section>
      <hr class="solid"></hr>
      <img src={social} alt="social media icons" className="footer-icons" />
      <p className="rights-reserved">© 2010 — 2020Privacy — Terms</p>
      <p className="privacy">Privacy — Terms</p>
    </div>
  )
}

export default Section4