import React from "react";
function Bai12({handleFinding}) {
    return (
        <>
            <input type="text" placeholder="Find the product" onChange={(event) => handleFinding(event.target.value)} />
        </>
    )
}
export default Bai12;