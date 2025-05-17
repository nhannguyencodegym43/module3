import './App.css'
import Bai1 from "./components/buoi4/bai1.jsx";
import Bai2 from "./components/buoi4/bai2.jsx";
import Bai3 from "./components/buoi4/bai3.jsx";
import Bai4 from "./components/buoi4/bai4.jsx";
import Bai5_parent from "./components/buoi4/bai5_parent.jsx";
import Bai6 from "./components/buoi4/bai6.jsx";
import Bai7 from "./components/buoi4/bai7.jsx";

function App() {
  return (
    <>
        <Bai1 />
        <Bai2 name="Nhân" />
        <Bai3 age="90"/>
        <Bai4 />
        <Bai5_parent />
        <Bai6 isLoggedIn = "true" />
        <Bai7 />
    </>
  )
}

export default App
