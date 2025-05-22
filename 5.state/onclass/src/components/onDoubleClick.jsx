import React from "react";
function OnDoubleClick() {
    function DemoOnDoubleClick(event) {
        event.preventDefault();
        document.write("Button double-clicked");
    }
    return (
        <>
            <button onDoubleClick={DemoOnDoubleClick}>Double-Click me</button>
        </>
    )
}
export default OnDoubleClick;
