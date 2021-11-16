import React, { useState, useEffect} from 'react'
import '../styles/App.scss' 
import Main from './Main'
import NavBar from './NavBar'
import { fetchParentData, fetchEventData } from './apiCalls'
import Error from './Error'

function App() {
  const [allParents, setParentState] = useState([])
  const [allEvents, setEventState] = useState([])
  const [errorState, setErrorState] = useState(false)
  
  const getData = () => {
    Promise.all([fetchParentData(), fetchEventData()])
      .then(data => parseData(data))
      .catch(error => setErrorState(true))
  }

  const parseData = (data) => {
    setParentState(data[0].parentData)
    setEventState(data[1].eventData)
  }

  useEffect(() => {
    getData()
  })

  const errorHandling = errorState ? 
  <Error /> : 
  <Main allParents={allParents} allEvents={allEvents} setParentState={setParentState} setEventState={setEventState} errorState={errorState}/>

  return (
    <div className="App">
      <NavBar />
      {errorHandling}
    </div>
  );
}

export default App;
