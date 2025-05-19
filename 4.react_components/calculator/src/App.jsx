import './App.css'
import {useState} from "react";

function App() {
    const [inputValue1, setInputValue1] = useState(Number);
    const [inputValue2, setInputValue2] = useState(Number);
    const [result, setResult] = useState(Number | String)
    const handleChange1 = (event) => {
        setInputValue1(event.target.value);
    }
    const handleChange2 = (event) => {
        setInputValue2(event.target.value);
    }
    function addNums() {
        setResult(inputValue1 + inputValue2);
    }
    function subNums() {
        setResult(inputValue1 - inputValue2);
    }
    function mulNums() {
        setResult(inputValue1 * inputValue2);
    }
    function devideNums() {
        if (Number(inputValue2) === 0) {
            setResult("Không thể chia cho 0!")
        } else {
            setResult(inputValue1 / inputValue2);
        }
    }
    return (
        <>
            <div className="container">
                <input type="number" id="firstNum" value={inputValue1} onChange={handleChange1}/> <br/>
                <input type="number" id="secondNum" value={inputValue2} onChange={handleChange2}/>
                <h3>Result: {result}</h3>
                <button onClick={addNums}>+</button>
                <button onClick={subNums}>-</button>
                <button onClick={mulNums}>*</button>
                <button onClick={devideNums}>/</button>
            </div>
        </>
    )
}

export default App
