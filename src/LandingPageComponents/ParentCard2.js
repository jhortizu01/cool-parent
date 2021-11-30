import React from 'react'
import '../LandingPageStyles/ParentCard2.scss'
import parent2 from '../assets/parent2.png'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const ParentCard2 = () => {
  return (
    <div className="parentcard2">
      <ScrollAnimation animateIn='animate__backInUp' delay={350}>
        <div className="dad1">
          <img src={parent2} alt="simu liu" className="parent-2-img" />
        </div>
        <div className="dad1-description-container">
          <div className="word-container-2">
            <h3 className="name2">Parker L, 32</h3>
            <p>“It’s hard being a really handsome and being a dad. I lost a lot of friends when I became one. It’s nice going out with the boys again””</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default ParentCard2