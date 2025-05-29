import React, {useEffect} from "react";
import ColorPicker from "./picker.jsx";
function Colors() {
    const [backgroundColor, setBackGroundColor] = React.useState("white");
    let style = {
        backgroundColor: backgroundColor,
    }
    function handleColor(color) {
        setBackGroundColor(color);
    }
    useEffect(() => {
        console.log(`Màu nền đã được đổi thành ${backgroundColor}`)
    }, [backgroundColor])
    return (
        <>
            <h1 style={style}>Color picker</h1>
            <ColorPicker handleColor={handleColor} />
        </>
    )
}
export default Colors;