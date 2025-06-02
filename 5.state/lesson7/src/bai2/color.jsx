import React from "react";
import ColorPicker from "./color_picker.jsx";
function Colors() {
    const [backgroundColor, setColor] = React.useState("white");
    let style = {
        backgroundColor: backgroundColor,
    }
    function handleColor(color) {
        setColor(color);
    }
    return (
        <>
            <h1 style={style}>Color picker</h1>
            <ColorPicker handleColor={handleColor}/>
        </>
    )
}
export default Colors;