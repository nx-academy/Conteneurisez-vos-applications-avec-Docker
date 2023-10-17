import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greetings, setGreetings]  = useState('world')

  // Vous devez faire ici un call http auprès de l'API.

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
