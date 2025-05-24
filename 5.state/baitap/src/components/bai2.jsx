import React from "react";
function Bai2() {
    const [firstNum, setFirstNum] = React.useState(0);
    const [secondNum, setSecondNum] = React.useState(0);
    function addNumber() {
        alert(`Sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`);
    }
    function subtractNumber() {
        alert(`Subtraction of ${firstNum} and ${secondNum} is ${firstNum - secondNum}`);
    }
    function multiplyNumber() {
        alert(`Multiplication of ${firstNum} and ${secondNum} is ${firstNum * secondNum}`);
    }
    function divideNumber() {
        alert(`Division of ${firstNum} for ${secondNum} is ${firstNum / secondNum}`);
    }
    return (
        <>
            <div>
                <input type="number" value={firstNum} onChange={(e) => setFirstNum(Number(e.target.value))} />
                <input type="number" value={secondNum} onChange={(e) => setSecondNum(Number(e.target.value))}/>
                <button onClick={addNumber}>+</button>
                <button onClick={subtractNumber}>-</button>
                <button onClick={multiplyNumber}>*</button>
                <button onClick={divideNumber}>/</button>
            </div>
        </>
    )
}
export default Bai2;