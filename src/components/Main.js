import React, { useState } from 'react'
import '../styles/Main.scss'
import AllProfilesContainer from './AllProfilesContainer'
import EventContainer from './EventContainer'
import MyFriendsContainer from './MyFriendsContainer'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const Main = ({ allParents, allEvents, setParentState, setEventState}) => {
  const [allFriendsState, setAllFriends] = useState([])

  return (
    <div className="main">
      <Route exact path='/' render={() => <AllProfilesContainer allParents={allParents} setParentState={setParentState} allFriendsState={allFriendsState} setAllFriends={setAllFriends} />} /> 
      <Route exact path='/events' render={() => <EventContainer allEvents={allEvents} setEventState={setEventState}/>} />
      <Route exact path='/my-friends' render={() => <MyFriendsContainer allFriendsState={allFriendsState} allParents={allParents} setParentState={setParentState} setAllFriends={setAllFriends}  />} />
    </div>
  )
}

export default Main

Main.propTypes = {
  allParents: PropTypes.arrayOf(PropTypes.object),
  allEvents: PropTypes.arrayOf(PropTypes.object),
  setParentState: PropTypes.func,
  setEventState: PropTypes.func
}