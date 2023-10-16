import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greetings, setGreetings]  = useState('world')

  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    function getGreetings() {
      return fetch(`${API_URL}/greetings`)
        .then(data => data.json())
        .then(data => setGreetings(data.greetings))
        .catch(err => console.log('An error occured', err))
    }

    getGreetings()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {greetings}
        </a>
      </header>
    </div>
  );
}

export default App;
