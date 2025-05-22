import React from "react";
function Bai11(props) {
    return (
        <>
            <input type="text" placeholder="Type something" onChange={(event) => props.handleInput(event.target.value)}/>
        </>
    )
}
export default Bai11;