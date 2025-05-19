import './App.css'
import Bai1 from "./components/bai1.jsx";
import Bai2 from "./components/bai2.jsx";
import Bai3 from "./components/bai3.jsx";
import Baitap1 from "./components/bt1.jsx";

function App() {

  return (
    <>
        <Bai1 name="Nhan" />
        <Bai2 firstNumber={2} secondNumber = {1} />
        <Bai3 firstNumber={3} secondNumber={3} />
        <Baitap1 type="danger" />
    </>
  )
}

export default App
