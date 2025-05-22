import React from "react";
function Bai9({handleButtonOrder}) {
    return (
        <>
            <button onClick={(event) => handleButtonOrder(event.currentTarget.value)} value="Nút 1">Button A</button>
            <button onClick={(event) => handleButtonOrder(event.currentTarget.value)} value="Nút 2">Button B</button>
            <button onClick={(event) => handleButtonOrder(event.currentTarget.value)} value="Nút 3">Button C</button>
        </>
    )
}
export default Bai9;