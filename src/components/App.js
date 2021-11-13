import React, { useState, useEffect} from 'react'
import '../styles/App.scss' 
import Main from './Main'
import NavBar from './NavBar'
import { Route } from 'react-router-dom'
import { fetchParentData, fetchEventData } from './apiCalls'

function App() {
  const [allParents, setParentState] = useState([])
  const [allEvents, setEventState] = useState([])
  
  const getData = () => {
    Promise.all([fetchParentData(), fetchEventData()])
      .then(data => parseData(data))
  }

  const parseData = (data) => {
    console.log(data)

    setParentState(data[0].parentData)
    setEventState(data[1].eventData)
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div className="App">
      <NavBar />
      <Main allParents={allParents} allEvents={allEvents} setParentState={setParentState} setEventState={setEventState} />
    </div>
  );
}

export default App;
