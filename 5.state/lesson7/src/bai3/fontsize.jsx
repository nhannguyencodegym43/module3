import React from "react";
import Content from "./content.jsx";
import FontControl from "./font_control.jsx";
function FontSize() {
    const [fontSize, setFontSize] = React.useState(20);
    let style = {
        fontSize: fontSize + "px",
    }
    function handleSizeChange(delta) {
        setFontSize(fontSize + delta);
    }
    return (
        <>
            <h1>Font Sizes</h1>
            <FontControl fontSize={fontSize} handleSizeChange={handleSizeChange}/>
            <Content style={style} />
        </>
    )
}
export default FontSize;
