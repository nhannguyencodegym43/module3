import React from "react";
function OnMouseOver_OnMouseOut() {
    function onMouseOver() {
        console.log("onMouseOver");
    }
    function onMouseOut() {
        console.log("onMouseOut");
    }
    return (
        <>
            <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Hover me!</div>
        </>
    )
}
export default OnMouseOver_OnMouseOut;