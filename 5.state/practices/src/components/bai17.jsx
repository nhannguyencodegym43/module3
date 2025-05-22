import React from "react";
function Bai17({handleCheckboxes}) {
    return (
        <>
            <h1>Hobbies</h1>
            <input type="checkbox" value="code" onChange={(event) => handleCheckboxes(event.target.value)}/>Code
            <input type="checkbox" value="write" onChange={(event) => handleCheckboxes(event.target.value)}/>Write
            <input type="checkbox" value="read" onChange={(event) => handleCheckboxes(event.target.value)}/>Read
        </>
    )
}
export default Bai17;