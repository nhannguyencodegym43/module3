import React from "react";
function Increase_Decrease() {
    let counter = 0;
    function handleIncrease() {
        counter++;
        console.log(counter);
    }
    function handleDecrease() {
        counter--;
        console.log(counter);
    }
    return (
        <>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </>
    )
}
export default Increase_Decrease;