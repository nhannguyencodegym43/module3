import React from "react";
function Bai26_Reset(props) {
    function handleIDReset(event) {
        event.preventDefault();
        {props.showID(props.id)}
    }
    return (
        <>
            <button id={props.id} type={props.type} onClick={handleIDReset}>Reset</button>
        </>
    )
}
export default Bai26_Reset;