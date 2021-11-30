import React from 'react'
import '../LandingPageStyles/Sec2Bottom.scss'
import ParentCard1 from './ParentCard1'
import ParentCard2 from './ParentCard2'
import ParentCard3 from './ParentCard3'
import ParentCard4 from './ParentCard4'

const Sec2Bottom = () => {
  return (
    <div className="sec2bottom">
      <div className="sec-2-details">
        <h2 className="sec-2-title">See what parents are saying!</h2>
        <p className="sec-2-description">“I’ve finally found people I can connect with!”</p>
      </div>
      <section className="sec-2-bottom-container">
        <ParentCard1 />
        <ParentCard2 />
        <ParentCard3 />
        <ParentCard4 />
      </section>
    </div>
  )
}

export default Sec2Bottom