import React from 'react'
import '../LandingPageStyles/Feature3.scss'
import events from '../assets/events.png'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"

const Feature3 = () => {
  return (
    <div className="feature3">
      <div className="feature-icon">
        <ScrollAnimation animateIn='fadeIn' delay={1000}>
          <img src={events} alt="events calendar with star" className="events"/>
        </ScrollAnimation>
      </div>
      <h3>View Upcoming Events</h3> 
      <p>Sometimes you just need to get out of the house, with or without kids. Check out the events to see what’s going on and join the party!</p>
    </div>
  )
}

export default Feature3