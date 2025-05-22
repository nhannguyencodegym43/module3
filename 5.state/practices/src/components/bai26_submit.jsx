import React from "react";
function Bai26_Submit(props) {
    function handleIDSubmit(event) {
        event.preventDefault();
        {props.showID(props.id)}
    }
    return (
        <>
            <button id={props.id} type={props.type} onClick={handleIDSubmit}>Submit</button>
        </>
    )
}
export default Bai26_Submit;