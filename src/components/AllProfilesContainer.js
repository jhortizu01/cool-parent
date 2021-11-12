import React from 'react'
import '../styles/AllProfilesContainer.scss'
import ProfileCard from './ProfileCard'

const AllFriendsContainer = ({ allParents, allFriendsState, setAllFriends }) => {
  // const kid = allParents.map(parent => {
  //   parent.numberOfKids.map(kid => {
  //     <div>{kid}</div>
  //   })
  // })
  
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


  return (
    <div className="parent-container">{parent}</div>
 )
}

export default AllFriendsContainer