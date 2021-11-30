import React, { useState } from 'react'
import '../LandingPageStyles/Sec1Top.scss'
import momdaughter from '../assets/momdaughter.png'
import { Link } from 'react-router-dom'

const Sec1Top = () => {
  return (
    <div className="landingsec1top">
      <section className="description-container">
        <div className="description">
          <h1 className="tagline">Being a parent is hard, finding friends shouldn’t be.</h1>
          <p className="tagline2">Struggling to find people who understand you? No problem, we’re here to set up the play date!</p>
          <Link to='/profiles'><button className="friends-btn">FIND FRIENDS NOW</button></Link>
        </div>
      </section>
      <img src={momdaughter} alt="daughter kissing mom at carnival" className="momdaughter"/>
    </div>
  )
}

export default Sec1Top