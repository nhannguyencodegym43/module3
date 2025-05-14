import React from "react";
function Bai18() {
    function showNumbers(num) {
        return (
            <p>The number is {num}</p>
        )
    }
    return (
        <>
            <div>{showNumbers(2)}</div>
            <div>{showNumbers(0)}</div>
            <div>{showNumbers(2)}</div>
            <div>{showNumbers(5)}</div>
        </>
    )
}
export default Bai18;
