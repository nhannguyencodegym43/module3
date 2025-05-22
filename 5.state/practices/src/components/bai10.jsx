import React from "react";
function Bai10(props) {
    function showMessage() {
        alert(props.messageToChild);
    }
    return (
        <>
            <button onClick={showMessage}>{props.messageToChild}</button>
        </>
    )
}
export default Bai10;