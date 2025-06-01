import React from "react";
function Bai3() {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    function handleCount1() {
        setCount1(count1 + 1);
    }
    function handleCount2() {
        setCount2(count2 + 2);
    }
    return (
        <>
            <h2>Count 1: {count1}</h2>
            <button onClick={handleCount1}>Add 1</button>
            <h2>Count 2: {count2}</h2>
            <button onClick={handleCount2}>Add 2</button>
        </>
    )
}
export default Bai3;