import React from 'react'
import '../styles/EventCard.scss'

const EventCard = ({ what, where, when, time, description, host }) => {
  return (
    <section className="event-card">
        <h1 className="what">{what}</h1>
        <h2 className="host">{host}</h2>
      <div className="details-container">
        <p className="details">Where: {where}</p>
        <p className="details">When: {when}</p>
        <p className="details">Time: {time}</p>
        <p className="details">{description}</p>
      </div>
    </section>
  )
}

export default EventCard