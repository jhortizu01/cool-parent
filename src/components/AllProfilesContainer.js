import React, { Redirect } from 'react'
import '../styles/AllProfilesContainer.scss'
import ProfileCard from './ProfileCard'

const AllFriendsContainer = ({ allParents, allFriendsState, setAllFriends, error}) => {

  const parent = allParents.map(parent => {
      return (
        <ProfileCard 
        key={parent.id}
        id={parent.id}
        name={parent.name}
        age={parent.age}
        numberOfKids={parent.numberOfKids}
        occupation={parent.occupation}
        activityKids={parent.activityKids}
        activityNoKids={parent.activityNoKids}
        aboutMe={parent.aboutMe}
        img={parent.img}
        allFriendsState={allFriendsState}
        setAllFriends={setAllFriends}
        />
      )
  })

  const errorHandling = error ? <Redirect to='/error' /> : parent

  return (
    <div className="parent-container">{errorHandling}</div>
 )
}

export default AllFriendsContainer