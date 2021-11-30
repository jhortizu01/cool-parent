import React from 'react'
import '../LandingPageStyles/Sec2Top.scss'
import Feature1 from './Feature1'
import Feature2 from './Feature2'
import Feature3 from './Feature3'


const Sec2Top = () => {
  return (
    <div className="sec2top">
      <h2 className="features">Discover Key Features</h2>
      <section className="feature-container">
          <Feature1 />
          <Feature2 />
          <Feature3 />
      </section>

    </div>
  )
}

export default Sec2Top