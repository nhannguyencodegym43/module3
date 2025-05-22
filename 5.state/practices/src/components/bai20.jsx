import React from "react";
function Bai20({handleFormInputs}) {
    return (
        <>
            <form>
                <input type="text" id="name" placeholder="Name" onChange={(event) => handleFormInputs(event.target.value)}/>
                <input type="number" id="age" placeholder="Age" onChange={(event) => handleFormInputs(event.target.value)}/>
            </form>
        </>
    )
}
export default Bai20;