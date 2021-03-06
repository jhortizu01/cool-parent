import React, { useState } from 'react'
import '../styles/ProfileCard.scss'
import notFriends from '../assets/not-friends.png'
import yesFriends from '../assets/friends-bump.png'
import close from '../assets/point-left.svg'
import open from  '../assets/point-right.svg'
import closeUp from '../assets/point-up.png'


const ProfileCard = ({ name, age, id, occupation, activityKids, activityNoKids, aboutMe, img, allFriendsState, setAllFriends}) => {
  const friends = allFriendsState.find(friend => {
   return friend === id
  })

  const [areWeFriends, setAreWeFriends] = useState(friends || false)
  const [showInfo, setShowInfoState] = useState(false)

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

  const showDetails = (e) => {
    e.preventDefault()
    setShowInfoState(true)
    console.log('width', window.screen.width)
  }

  const hideDetails = (e) => {
    e.preventDefault()
    setShowInfoState(false)
  }

  const changeCloseArrow = window.screen.width <= 640 ?
    <input type="image" alt="hide details icon" className="close" src={closeUp} onClick={e => hideDetails(e)}/> :
    <input type="image" alt="hide details icon" className="close" src={close} onClick={e => hideDetails(e)}/>

  const toggleImage = areWeFriends ? 
    <input type="image" id={id} onClick={e => toggleFriends(e)} className='fistbump'  src={yesFriends} alt='fist bump' /> : 
    <input type="image" id={id} onClick={e => toggleFriends(e)} className='fistbump'  src={notFriends} alt='two fists before fist bump' />

  const details = showInfo ?       
    <section className="profile-description">
        <h1 className="name">{name}</h1>
        <p className="info">Age: {age}</p>
        <p className="info">Occupation: {occupation}</p>
        <p className="info">Favorite Kid Activities: {activityKids}</p>
        <p className="info">Favorite No Kid Activities: {activityNoKids}</p>
        <p className="info">About Me: {aboutMe}</p>
        <div className="hide-button-style">
          {changeCloseArrow}
        </div>

      
    </section> :
    null

  const hideOpenButton = showInfo ?
    null :
    <input type="image" alt="open details icon" className="open" src={open} onClick={e => showDetails(e)}/>

  return (
    <div className="profile-card">
      <section className='card-imgs'>
        <img className="profile-img" src={img} alt={name} />
        {hideOpenButton}
        <div className='img-container'>
        {toggleImage}
        </div>
      </section>
      {details}
    </div>
  )
}

export default ProfileCard