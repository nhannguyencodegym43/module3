import React from "react";
function Bai2() {
    let user = {
        name: "Nhân"
    }
    const jsxElement = (
        <h2>Xin chào, {user.name}</h2>
    )
    return (
        <>
            {jsxElement}
        </>
    )
}
export default Bai2;