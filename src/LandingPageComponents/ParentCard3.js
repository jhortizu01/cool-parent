import React from 'react'
import '../LandingPageStyles/ParentCard3.scss'
import parent3 from   '../assets/parent3.png'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const ParentCard3 = () => {
  return (
  <div className="parentcard3">
    <ScrollAnimation animateIn='animate__backInUp' delay={650}>
      <div className="mom2">
        <img src={parent3} alt="simu liu" className="parent-3-img" />
      </div>
      <div className="mom2-description-container">
        <div className="word-container-3">
          <h3 className="name3">Sandra L, 58</h3>
          <p>“When all the kids flew the coop I was devestated and didn’t know what to do with myself. Cool Parents helped me find other people I could relate to!”</p>
        </div>
      </div>
    </ScrollAnimation>
  </div>
  )
}

export default ParentCard3