import React from 'react'
import '../LandingPageStyles/Feature1.scss'
import friends from '../assets/friends-bump.png'
import notfriends from '../assets/not-friends.png'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const Feature1 = () => {
  return (
    <div className="feature1">
      <div className="feature-icon">
        <ScrollAnimation animateIn='fadeIn'>
          <img src={notfriends} alt="not friends fists" className="notfriends" />
        </ScrollAnimation>
      </div>
      <h3 className="feature1-titles">Friend or Unfriend</h3>
      <p className="feature1-description">You have the ability to friend and unfriend other users. It’s ok, we know PTA Becky can be annoying. </p>
    </div>
  )
}

export default Feature1