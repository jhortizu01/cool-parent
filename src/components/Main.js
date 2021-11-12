import React, { useState, useEffect } from 'react'
import '../styles/Main.scss'
import AllProfilesContainer from './AllProfilesContainer'
import Events from './Events'
import NavBar from './NavBar'
import MyFriendsContainer from './MyFriendsContainer'
import { Route } from 'react-router-dom'

const Main = ({ allParents, allEvents, setParentState, setEventState}) => {
  const [allFriendsState, setAllFriends] = useState([])

  return (
    <div className="main">
      <Route exact path='/' render={ () => <AllProfilesContainer allParents={allParents} setParentState={setParentState} allFriendsState={allFriendsState} setAllFriends={setAllFriends} />} /> 
      <Route exact path='/events' render={() => <Events allEvents={allEvents} setEventState={setEventState}/>} />
      <Route exact path='/my-friends' render={() => <MyFriendsContainer allFriendsState={allFriendsState} />} />
    </div>
  )
}

export default Main