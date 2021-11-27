import React from 'react'
import '../LandingPageStyles/Feature2.scss'
import list from '../assets/list.png'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const Feature2 = () => {
  return (
    <div className="feature2">
      <div className="feature-icon">
      <ScrollAnimation animateIn='fadeIn' delay={500}>
        <img src={list} alt="list icon" className="list" />
      </ScrollAnimation>  
      </div>
      <h3>View Your Friends List</h3>
      <p>With one click you can remember who all of your friends are! Now if only you can remember all of your kids’ names...</p>
    </div>
  )
}

export default Feature2