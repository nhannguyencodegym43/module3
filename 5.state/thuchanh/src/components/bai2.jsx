import React from "react";
function Bai2() {
    const [bgColor, setBgColor] = React.useState("");
    const [color, setColor] = React.useState("black");
    let style = {
        backgroundColor: bgColor,
        color: color,
    }
    window.onload = function handleColorChange() {
        setBgColor("black");
        setColor("white");
    }
    return (
        <>
            <h1 style={style}>Something to change!</h1>
        </>
    )
}
export default Bai2;