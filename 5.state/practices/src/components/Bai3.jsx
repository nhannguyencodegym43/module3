import React from "react";
function Bai3() {
    let counter = 0;
    function increaseNum () {
        counter++;
        console.log(counter);
    }
    function decreaseNum () {
        counter--;
        console.log(counter);
    }
    return (
        <>
            <button onClick={increaseNum}>+</button>
            <button onClick={decreaseNum}>-</button>
        </>
    )
}
export default Bai3;