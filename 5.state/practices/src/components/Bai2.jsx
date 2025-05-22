import React from "react";
function Bai2(props) {
    function showName () {
        alert(props.name);
    }
    return (
        <>
            <button onClick={showName}>Click me to show the name</button>
        </>
    )
}
export default Bai2;