import React from "react";
function Bai27_Input1({showInputChanges}) {
    return (
        <>
            <input type="text" onChange={(e) => showInputChanges(e.target.value)}/>
        </>
    )
}
export default Bai27_Input1;