import React from 'react'
import '../styles/EventContainer.scss'
import EventCard from './EventCard'
import EventForm from './EventForm'

const EventContainer = ({ allEvents, setEventState}) => {
  const events = allEvents.map(event => {
  return  <EventCard
      what={event.what}
      where={event.where}
      when={event.when}
      time={event.time}
      description={event.description}
      host={event.host}
    />
  })
  
  return (
    <div className="event-container">
      <div className="event-form-container">
        <EventForm allEvents={allEvents} setEventState={setEventState}/>
      </div>
      <div className="event-card-container">
        {events}
      </div>
    </div>
  )
}

export default EventContainer