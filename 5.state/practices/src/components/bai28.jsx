import React from "react";
function Bai28({showDateChange}) {
    return (
        <>
            <input type="date" onChange={(e) => showDateChange(e.target.value)} />
        </>
    )
}
export default Bai28;