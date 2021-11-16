import React, { useState } from 'react'
import friends from '../assets/friends-bump.png'
import PropTypes from 'prop-types'

const FriendCards = ({ name, age, id, occupation, activityKids, activityNoKids, aboutMe, img, allFriendsState, deleteFriend}) => {

  const [friendStatus, setFriendStatus] = useState(true)
  
  const removeFriend = (e) => {
    setFriendStatus(false)
    let i = allFriendsState.indexOf(e.target.id)
    allFriendsState.splice(i, 1)
    deleteFriend(e.target.id)
  }

  return (
    <div className="profile-card">
      <section className='card-imgs'>
        <img className="profile-img" src={img} alt={name} />
        <div className='img-container'>
        <input type="image" id={id} onClick={e => removeFriend(e)} className='fistbump' src={friends} alt='fist bump' /> 
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

export default FriendCards

FriendCards.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  activityKids: PropTypes.string.isRequired,
  activityNoKids: PropTypes.string.isRequired,
  aboutMe: PropTypes.string.isRequired,
  allFriendsState: PropTypes.arrayOf(PropTypes.number),
  deleteFriend: PropTypes.func
};

