import React from "react";
function Bai29(props) {
    return (
        <>
            <input type="radio" name="background" value="red" onClick={(e) => props.onChangeColor(e.target.value)}/>Red
            <input type="radio" name="background" value="green" onClick={(e) => props.onChangeColor(e.target.value)}/>Green
            <input type="radio" name="background" value="yellow" onClick={(e) => props.onChangeColor(e.target.value)}/>Yellow
        </>
    )
}
export default Bai29;