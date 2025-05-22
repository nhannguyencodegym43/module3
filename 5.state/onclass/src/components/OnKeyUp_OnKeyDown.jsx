import React from "react";
function OnKeyUp_OnKeyDown() {
    function OnKeyUp(event) {
        event.preventDefault();
        console.log(event.key);
    }
    function OnKeyDown(event) {
        event.preventDefault();
        console.log(event.key);
    }
    return (
        <>
            <input type="text" onKeyUp={OnKeyUp} onKeyDown={OnKeyDown} placeholder="Type anything"/>
        </>
    )
}
export default OnKeyUp_OnKeyDown;
