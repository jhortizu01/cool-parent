import React from 'react'
import '../styles/Main.scss'
import AllProfilesContainer from './AllProfilesContainer'
import Events from './Events'
import MyFriendsContainer from './MyFriendsContainer'

const Main = () => {
  return (
    <div>
      <AllProfilesContainer />
      <Events />
      <MyFriendsContainer />
    </div>
  )
}

export default Main