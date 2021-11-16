import React, { useState } from 'react'
import '../styles/EventContainer.scss'
import EventCard from './EventCard'
import EventForm from './EventForm'
import PropTypes from 'prop-types'

const EventContainer = ({ allEvents, setEventState}) => {
  const [missingField, setMissingFields] = useState(false)

  const events = allEvents.map(event => {
  return  <EventCard
      what={event.what}
      where={event.where}
      when={event.when}
      time={event.time}
      description={event.description}
      host={event.host}
    />
  }).reverse()

  const missing = missingField ? <div className="missing-fields">Please fill out all fields!!!</div> : null
  
  return (
    <div className="event-container">
      <div className="event-form-container">
        {missing}
        <EventForm allEvents={allEvents} setEventState={setEventState} setMissingFields={setMissingFields}/>
      </div>
      <div className="event-card-container">
        {events}
      </div>
    </div>
  )
}

export default EventContainer

EventContainer.propTypes = {
  allEvents: PropTypes.arrayOf(PropTypes.object),
  setEventState: PropTypes.func
};