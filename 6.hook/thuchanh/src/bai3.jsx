import React from "react";
import useClock from "./ampm.jsx";
function Bai3() {
    const [time, ampm] = useClock();
    let style = {
        borderRadius: "10px",
        backgroundColor: "blue",
        color: "white",
    }
    return (
        <>
            <div style={style}>{time}
            <span>{ampm}</span>
            </div>
        </>
    )
}
export default Bai3;