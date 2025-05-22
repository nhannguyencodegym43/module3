import React from "react";
function Bai6({handleButtons}) {
    return (
        <>
            <button value="Like" onClick={(event) => handleButtons(event.currentTarget.value)}>Like</button>
            <button value="Dislike" onClick={(event) => handleButtons(event.currentTarget.value)}>Dislike</button>
        </>
    )
}
export default Bai6;