import React from 'react'
import '../styles/Main.scss'
import AllProfilesContainer from './AllProfilesContainer'
import Events from './Events'
import NavBar from './NavBar'
import MyFriendsContainer from './MyFriendsContainer'
import { Route } from 'react-router-dom'

const Main = () => {
  return (
    <div className="main">
      <Route exact path='/' render={ () => <AllProfilesContainer /> }/> 
      <Route exact path='/events' render={() => <Events />} />
      <Route exact path='/my-friends' render={() => <MyFriendsContainer />} />
    </div>
  )
}

export default Main