import React from 'react'
import '../LandingPageStyles/ParentCard4.scss'
import parent4 from   '../assets/parent4.png'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const ParentCard4 = () => {
  return (
    <div className="parentCard4">
      <ScrollAnimation animateIn='animate__backInUp' delay={950}>
        <div className="dad2">
          <img src={parent4} alt="mark hoppus" className="parent-4-img" />
        </div>
        <div className="dad2-description-container">
          <div className="word-container-4">
            <h3 className="name4">Marukus H, 48</h3>
            <p>“Just plain cool!”</p>
          </div>
        </div>
    </ScrollAnimation>
  </div>
  )
}

export default ParentCard4