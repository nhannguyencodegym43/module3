import React from "react";
function Bai1() {
    const [counter, setCounter] = React.useState(0);
    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(prev => prev + 1)}>Increase</button>
        </>
    )
}
export default Bai1;