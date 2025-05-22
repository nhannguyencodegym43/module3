import React from "react";
function OnMouseEnter_onMouseLeave() {
    function onMouseEnter() {
        console.log("onMouseEnter");
    }
    function onMouseLeave() {
        console.log("onMouseLeave");
    }
    return (
        <>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Hover me</div>
        </>
    )
}
export default OnMouseEnter_onMouseLeave;
