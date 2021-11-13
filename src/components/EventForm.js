import React, { useEffect, useState } from 'react'
import '../styles/EventForm.scss'

const EventForm = ({ allEvents, setEventState}) => {
  const [newEvent, setNewEvent] = useState({})
  const [newWhen, setNewWhen] = useState("")
  const [newWhere, setNewWhere] = useState("")
  const [newWhat, setNewWhat] = useState("")
  const [newTime, setNewTime] = useState("")
  const [newHost, setNewHost] = useState("")
  const [newDescription, setNewDescription] = ("")

  const handleChange = (e) => {
    setNewEvent({[e.target.name]: e.target.value})
  }
  
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('http://localhost:8080/api/v1/parents/eventData', requestOptions)
        .then(response => response.json())
        .then(data => setEventState([...allEvents, data]));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div>
      <form>
      <input
          type='text'
          placeholder='Host Name'
          name='hostName'
          value={newHost}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='What is the occasion?'
          name='what'
          value={newWhat}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='Where?'
          name='where'
          value={newWhere}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='When?'
          name='when'
          value={newWhen}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='Time?'
          name='time'
          value={newTime}
          onChange={e => handleChange(e)}
        />
        <input
          type='text'
          placeholder='Description of Event'
          name='description'
          value={newDescription}
          onChange={e => handleChange(e)}
        />
        <button>Submit Event</button>
      </form>
    </div>
  )
}

export default EventForm