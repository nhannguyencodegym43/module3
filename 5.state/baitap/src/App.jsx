import './App.css'
import Bai1 from "./components/bai1.jsx";
import Bai2 from "./components/bai2.jsx";
import Bai4 from "./components/bai4.jsx";
import Bai5 from "./components/bai5.jsx";
import Bai3 from "./components/bai3.jsx";
import React from "react";

function App() {
    const [showLogin, setShowLogin] = React.useState(true);
  return (
    <>
        <Bai1 />
        <Bai2 />
        <Bai3 setShowLogin={setShowLogin}/>
        <Bai4 />
        <Bai5 />
    </>
  )
}

export default App
