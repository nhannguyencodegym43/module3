import React from "react";
function Bai3() {
    function showElement() {
        return (
            <div>
                <div>This is a div tag</div>
                <p>This is a p tag</p>
            </div>
        )
    }
    return (
        <>
            {showElement()}
        </>
    )
}
export default Bai3;