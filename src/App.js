import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import FireStore from "./Firebase/firebase";

function App() {

  useEffect(() => {
    FireStore.collection('collection1').get()
    .then(data => {
      data.forEach(e => {
        console.log(e.data());
      })
    });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
