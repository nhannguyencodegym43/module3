import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
    const fruits = ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>List of fruits</h1>
          <ul>
              {
                  fruits.map((fruit, index) => (
                      <li key={index}>{fruit}</li>
                  ))
              }
          </ul>
      </header>
    </div>
  );
}

export default App;
