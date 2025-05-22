import React from "react";
function Child(props) {
    return (
        <>
            <button onClick={props.handleClick}>Don't click me!</button>
        </>
    )
}
export default Child;