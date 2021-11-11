import React from 'react';
import '../styles/App.scss';
import Main from './Main'
import NavBar from './NavBar'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
