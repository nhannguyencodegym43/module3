import React from "react";
function Focus_Blur() {
    function OnFocus() {
        console.log("Focused");
    }
    function OnBlur() {
        console.log("Blurred");
    }
    return (
        <>
            <input type="text" onFocus={OnFocus} onBlur={OnBlur} placeholder="Input"/>
        </>
    )
}
export default Focus_Blur;