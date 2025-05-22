import React from "react";
function OnClick() {
    function DemoOnClick(event) {
        event.preventDefault();
        document.write("Button clicked");
    }
    return (
        <>
            <button onClick={DemoOnClick}>Click me</button>
        </>
    )
}
export default OnClick;
