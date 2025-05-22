import React from "react";
function Bai1() {
    function showGreetings () {
        alert("Hello, React!");
    }
    return (
        <>
            <button onClick={showGreetings}>Click me!</button>
        </>
    )
}
export default Bai1;