import React from 'react'
import '../styles/AllProfilesContainer.scss'
import ProfileCard from './ProfileCard'

const AllFriendsContainer = ({ allParents, allFriendsState, setAllFriends, deleteFriend}) => {

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
        deleteFriend={deleteFriend}
        />
      )
  })


  return (
    <div className="parent-container">{parent}</div>
 )
}

export default AllFriendsContainer