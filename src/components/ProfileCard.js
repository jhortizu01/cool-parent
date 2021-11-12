import React, { useState } from 'react'
import '../styles/ProfileCard.scss'
import notFriends from '../assets/not-friends.png'
import friends from '../assets/friends-bump.png'

const ProfileCard = ({ name, age, id, numberOfKids, occupation, activityKids, activityNoKids, aboutMe, img, allFriendsState, setAllFriends}) => {
  const [areWeFriends, setAreWeFriends] = useState(false)
  

  const toggleFriends = (e) => {
    if(areWeFriends === false) {
      setAreWeFriends(true)
      setAllFriends([...allFriendsState, e.target.id])
    } else {
      setAreWeFriends(false)
      let i = allFriendsState.indexOf(e.target.id)
      allFriendsState.splice(i, 1)
    }
  }

  return (
    <div className="profile-card">
      <section className='card-imgs'>
        <img className="profile-img" src={img} alt={`picture of ${name}`} />
        <div className='img-container'>
          {
            areWeFriends ?
            <input type="image" id={id} onClick={e => toggleFriends(e)} className='fistbump' src={friends} alt='fist bump' /> : 
            <input type="image" id={id} onClick={e => toggleFriends(e)} className='fistbump' src={notFriends} alt='two fists before fist bump' />
          }
        </div>
      </section>
      <section className="description">
        <h1 className="name">{name}</h1>
        <p>Age: {age}</p>
        <p>Occupation: {occupation}</p>
        <p>Favorite Kid Activities: {activityKids}</p>
        <p>Favorite No Kid Activities: {activityNoKids}</p>
        <p>About Me: {aboutMe}</p>
      </section>
    </div>
  )
}

export default ProfileCard