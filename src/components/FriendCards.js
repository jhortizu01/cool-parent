import React, {useEffect, useState} from 'react'
import friends from '../assets/friends-bump.png'
import notFriends from '../assets/not-friends.png'


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
        <img className="profile-img" src={img} alt={`picture of ${name}`} />
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