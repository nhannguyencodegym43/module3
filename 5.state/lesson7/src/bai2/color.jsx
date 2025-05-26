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
            <body style={style}>
            <h1>Color picker</h1>
            <ColorPicker handleColor={handleColor}/>
            </body>
        </>
    )
}
export default Colors;