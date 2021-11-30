import React from 'react'
import '../LandingPageStyles/Sec1Bottom.scss'
import dadsbaby from '../assets/dadsbaby.png'
import { Link } from 'react-router-dom'

const Sec1Bottom = () => {
  return (
    <div className="landingsec1bottom">
      <img src={dadsbaby} alt="2 dads laying down taking a selfie with a baby" className="dadsbaby" />
      <section className="description-bottom">
        <div className="styling">
          <h2 className="title">How It Works</h2>
          <p className="explanation">Remember the days of Plenty of Fish or Tinder? Well it’s kind of like that. Find potential friends by browsing through profiles. Think you might connect with someone? Give them a like and you’ll be able to connect with them. Browse our user events and get involved!</p>
          <button className="learn-more">LEARN MORE</button>
        </div>
      </section>
    </div>
  )
}

export default Sec1Bottom