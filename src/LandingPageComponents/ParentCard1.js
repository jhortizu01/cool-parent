import React from 'react'
import '../LandingPageStyles/ParentCard1.scss'
import parent1 from '../assets/parent1.jpeg'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const ParentCard1 = () => {
  return (
    <div className="parent1card">
      <ScrollAnimation animateIn='animate__backInUp'>
      <div className="mom1">
        <img className="parent1" src={parent1} alt="mindy kaling wearing sweatpants" />
      </div>
      <div className="mom1-description-container">
        <div className="word-container-1">
          <h3 className="name1">Shelly Q, 38</h3>
          <p className="quote1">“I’m new to the area and a single mom. It was great being able to make friend for myself and for my kids!”</p>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  )
}

export default ParentCard1