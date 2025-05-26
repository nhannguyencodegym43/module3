import React from "react";
function ColorPicker(props) {
    let style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
    return (
        <>
            <div style={style}>
                <button value="red" onClick={(e) => props.handleColor(e.currentTarget.value)}>Red</button>
                <button value="green" onClick={(e) => props.handleColor(e.currentTarget.value)}>Green</button>
                <button value="blue" onClick={(e) => props.handleColor(e.currentTarget.value)}>Blue</button>
                <button value="yellow" onClick={(e) => props.handleColor(e.currentTarget.value)}>Yellow</button>
            </div>
        </>
    )
}
export default ColorPicker;
