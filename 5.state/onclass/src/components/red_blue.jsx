import React, {useState} from "react";
function Red_Blue() {
    const [color, setColor] = useState("red");
    return (
        <>
            <p style={{color: `${color}`}}>The color is {color}</p>
            <button onClick={() => setColor("blue")} style={{color: "blue"}}>To blue</button>
            <button onClick={() => setColor("red")} style={{color: "red"}}>To red</button>
        </>
    )
}
export default Red_Blue;