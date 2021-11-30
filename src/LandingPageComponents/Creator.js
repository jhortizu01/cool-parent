import React from 'react'
import '../LandingPageStyles/Creator.scss'
import me from '../assets/me.jpeg'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import email from '../assets/mail.png'

const Creator = () => {
  return (
    <div className="creator">
      <div className="creator-img-container">
        <img src={me} alt="woman with 3 kids" className="creator-img"/>
      </div>
      <div className="creator-details">
        <h1 className="about-me-title">About Me</h1>
        <p>Hello and welcome to my fake social media website for parents! This web app was designed and built by me using React.js, SASS on the front end, Express.js for the backend and Cypress for end to end testing. I am a mom and this idea came about one day when I was thinking, "Wow I don't have a lot of parent friends". Thus the idea of Cool Parent was created. </p>
        <div className="source-code">
          <p className="src">View the source code for</p>
          <p className="cool-parent">Cool Parent</p>
          <a href="https://github.com/jhortizu01/cool-parent" className="src" id="src" style={{ textDecoration: 'none' }}>here.</a>
        </div>
        <p>When I'm not coding I love hanging out with my kids, crafting and playing roller derby!</p>
        <a href="https://www.linkedin.com/in/janika-hortizuela">
          <img src={linkedin} alt="linked in logo" className="creator-icons"/>
        </a>
        <a href="https://github.com/jhortizu01">
          <img src={github} alt="github logo" className="creator-icons"/>
        </a>
        <a href = "mailto: janika.hortizuela@gmail.com">
          <img src={email} alt="email in logo" className="creator-icons"/>
        </a>
      </div>
    </div>
  )
}

export default Creator