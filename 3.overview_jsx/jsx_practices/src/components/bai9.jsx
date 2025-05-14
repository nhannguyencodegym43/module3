import React from "react";
function Bai9() {
    function showString(element) {
        return (
            <h2>The string is {element}</h2>
        )
    }
    return (
        <>
            <div>{showString("Nguyễn")}</div>
            <div>{showString("Trung")}</div>
            <div>{showString("Nhân")}</div>
        </>
    )
}
export default Bai9;
