import React from 'react'
import '../styles/MyFriendsContainer.scss'
import FriendCards from '../components/FriendCards'
import PropTypes from 'prop-types';

const MyFriendsContainer = ({ allFriendsState, allParents, setParentState, setAllFriends}) => {
  let findParent = allParents.filter(parent => {
    return allFriendsState.includes(parent.id)
  })

  const deleteFriend = (id) => {
    findParent.filter(parent => parent.id !== id);
    setParentState([...allParents])
  }

    const parent = findParent.map(parent => {
      return (
        <FriendCards
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
  
    let noFriends = <div className="no-friends">You dont have any friends yet. Go make some friends!</div>

  return (
    <div className="friend-container">{findParent.length > 0 ? parent : noFriends}</div>
  )
}
 
export default MyFriendsContainer

MyFriendsContainer.propTypes = {
  allParents: PropTypes.arrayOf(PropTypes.object),
  allFriendsState: PropTypes.arrayOf(PropTypes.object),
  setParentState: PropTypes.func,
  setAllFriends: PropTypes.func
}