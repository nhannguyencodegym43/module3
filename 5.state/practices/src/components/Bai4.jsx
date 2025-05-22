import React from "react";
function Bai4(props) {
    function handleClick() {
        props.onNotify("Clicked!");
    }
    return (
        <>
            <button onClick={handleClick}>Click now!</button>
        </>
    )
}
export default Bai4;