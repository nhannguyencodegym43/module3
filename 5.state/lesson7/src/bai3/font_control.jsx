import React from "react";
function FontControl(props) {
    return (
        <>
            <button disabled={props.fontSize === 100} onClick={() => props.handleSizeChange(1)}>+</button>
            <button onClick={() => props.handleSizeChange(-1)} disabled={props.fontSize === 10}>-</button>
        </>
    )
}
export default FontControl;
