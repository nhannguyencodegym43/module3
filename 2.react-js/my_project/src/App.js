import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
    const element1 = React.createElement("h1", null, "Chào mừng đến với React!");
    const element2 = React.createElement("p", null, "Đây là bài tập đầu tiên của chúng ta.");
    const element3 = React.createElement("a", {
        href: "https://reactjs.org",
        target: "_blank",
    }, "Đi đến React")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>{element1}</div>
          <div>{element2}</div>
          <div>{element3}</div>
      </header>
    </div>
  );
}

export default App;
