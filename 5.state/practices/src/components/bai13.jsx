import React from "react";
function Bai13({handleChanges}) {
    return (
        <>
            <input type="text" placeholder="name" onChange={(event) => handleChanges(event.target.value)}/>
            <input type="number" placeholder="age" onChange={(event) => handleChanges(event.target.value)}/>
            <input type="email" placeholder="email" onChange={(event) => handleChanges(event.target.value)}/>
        </>
    )
}
export default Bai13;