import React from 'react'
import '../LandingPageStyles/Section4.scss'
import social from '../assets/social.png'

const Section4 = () => {
  return (
    <div className="section4">
      <section className="footer-links">
        <p className="links">Profiles</p>
        <p className="links">Events</p>
        <p className="app-title">Cool Parent</p>
        <p className="links">Creator</p>
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