import React from 'react'
import '../LandingPageStyles/Section3.scss'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <div className="section3">
      <section className="bottom-tag">
        <p className="tag-1"><b>Ready to get started?</b></p>
        <p className="tag-2">Sign up and meet friends now!</p>
      </section>
      <Link to='/profiles'>
        <button className="find-friends-btn-footer">FIND FRIENDS</button>
      </Link>
      <a href="https://github.com/jhortizu01/cool-parent">
        <button className="works-btn">Source Code</button>
      </a>
    </div>
  )
}

export default Section3