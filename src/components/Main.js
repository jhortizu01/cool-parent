import React, { useState } from 'react'
import '../styles/Main.scss'
import AllProfilesContainer from './AllProfilesContainer'
import EventContainer from './EventContainer'
import MyFriendsContainer from './MyFriendsContainer'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Nav from '../LandingPageComponents/Nav'
import LandingPage from '../LandingPageComponents/LandingPageContainer'
import Creator from '../LandingPageComponents/Creator'
import Error from './Error'

const Main = ({ allParents, allEvents, setParentState, setEventState, errorState, setErrorState}) => {
  const [allFriendsState, setAllFriends] = useState([])

  let errors= errorState ? <Error /> :
  <>
    <Route exact path='/profiles' render={() => 
        <> 
          <Nav />
          <AllProfilesContainer allParents={allParents} setParentState={setParentState} allFriendsState={allFriendsState} setAllFriends={setAllFriends} /> 
        </>}
      /> 
    <Route exact path='/events' render={() => 
      <>
        <Nav />
        <EventContainer allEvents={allEvents} setEventState={setEventState}/>
      </>}
     />
    <Route exact path='/my-friends' render={() => 
      <>
        <Nav />
        <MyFriendsContainer allFriendsState={allFriendsState} allParents={allParents} setParentState={setParentState} setAllFriends={setAllFriends}  />
      </>
    } />
  </>


  return (
    <div className="main">
      <Route exact path='/' render={() => <LandingPage />} />
      {errors}
      <Route exact path='/meet-the-creator' render={() => 
        <> 
          <Nav />
          <Creator /> 
        </>}
      /> 
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