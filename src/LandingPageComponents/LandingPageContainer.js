import React from 'react'
//import '../LandingPageStyles/LandingPageContainer.scss'
import '../LandingPageStyles/LandingPageContainer.scss'
import Nav from './Nav'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'

const PageContainer = () => {
  return (
    <div className="landing-pg-container">
      <Nav />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default PageContainer