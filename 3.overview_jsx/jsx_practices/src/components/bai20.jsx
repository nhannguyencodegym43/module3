import React from "react";
function Bai20() {
    const element = (
        <label htmlFor="nameInput">Name: </label>
        )
    const input = (<input type="text" id="nameInput" placeholder="Name"/>)
    return (
        <>
            {element}
            {input}
        </>
    )
}
export default Bai20;
