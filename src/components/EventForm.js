import React, { useState } from 'react'
import '../styles/EventForm.scss'
import PropTypes from 'prop-types'

const EventForm = ({ allEvents, setEventState, setMissingFields }) => {
  const [newWhen, setNewWhen] = useState("")
  const [newWhere, setNewWhere] = useState("")
  const [newWhat, setNewWhat] = useState("")
  const [newTime, setNewTime] = useState("")
  const [newHost, setNewHost] = useState("")
  const [newDescription, setNewDescription] = useState("")

  const submitEvent = {
    "id" : Date.now(),
    "what" : newWhat,
    "when" : newWhen,
    "time" : newTime,
    "where" : newWhere,
    "description" : newDescription,
    "host" : newHost
  }

  const handleWhenChange = (e) => {
    setNewWhen(e.target.value)
    console.log(typeof newWhen)
  }

  const handleWhereChange = (e) => {
    setNewWhere(e.target.value)
    console.log(newWhere)
  }

  const handleWhatChange = (e) => {
    setNewWhat(e.target.value)
    console.log(newWhat)
  }

  const handleTimeChange = (e) => {
    setNewTime(e.target.value) 
    console.log(newTime)
  }

  const handleHostChange = (e) => {
    setNewHost(e.target.value)
    console.log(newHost)
  }

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value)
    console.log(newDescription)
  }

  const clearState = () => {
    setNewWhen('')
    setNewWhere('')
    setNewWhat('')
    setNewTime('')
    setNewDescription('')
    setNewHost('')
  }

  const submitNewEvent = (e) => {
    e.preventDefault()

    if(newWhen === "" || newWhere === "" || newWhat === "" || newTime === "" || newDescription === "" || newHost === "") {
      setMissingFields(true)
    } 
    
    else {
    setMissingFields(false)  
    setEventState([...allEvents, submitEvent])
    clearState()

    fetch('http://localhost:8080/api/v1/parents/eventData', {
      method: 'POST',
      body: JSON.stringify(submitEvent), 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .catch(err => console.log('UNICORN ERR', err));
    }
  }

  return (
    <form>
      <label>Add your event!</label>
        <input
          className="input-events"
          type='text'
          placeholder='Host Name'
          name='hostName'
          value={newHost}
          onChange={e => handleHostChange(e)}
        />
        <input
          className="input-events"
          type='text'
          placeholder='What is the occasion?'
          name='what'
          value={newWhat}
          onChange={e => handleWhatChange(e)}
        />
        <input
          className="input-events"
          type='text'
          placeholder='Where?'
          name='where'
          value={newWhere}
          onChange={e => handleWhereChange(e)}
        />
        <input
          className="input-events"
          type='text'
          placeholder='When?'
          name='when'
          value={newWhen}
          onChange={e => handleWhenChange(e)}

        />
        <input
          className="input-events"
          type='text'
          placeholder='Time?'
          name='time'
          value={newTime}
          onChange={e => handleTimeChange(e)}
        />
        <input
          className="input-events"
          type='text'
          placeholder='Description of Event'
          name='description'
          value={newDescription}
          onChange={e => handleDescriptionChange(e)}
        />
      <button className="submit" onClick={e => submitNewEvent(e)}>Submit Event</button>
    </form>
  )
}

export default EventForm

EventForm.propTypes = {
  allEvents: PropTypes.arrayOf(PropTypes.object),
  setEventState: PropTypes.func,
  setMissingFields: PropTypes.func
};