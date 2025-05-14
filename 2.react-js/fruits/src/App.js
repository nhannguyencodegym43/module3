import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Example1 from './components/example1';
// import Example2 from "./components/example2";
// import Example3 from './components/example3';
import Example4 from "./components/example4";

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
        {/*<Example1 />*/}
        {/*<Example2 />*/}
        {/*<Example3 />*/}
        <Example4 />
    </div>
  );
}

export default App;
