import React from "react";
function Bai8({handlePictures}) {
    return (
        <>
            <button onClick={(event) => handlePictures(event.currentTarget.value)} value="Picture A">Picture A</button>
            <button onClick={(event) => handlePictures(event.currentTarget.value)} value="Picture B">Picture B</button>
            <button onClick={(event) => handlePictures(event.currentTarget.value)} value="Picture C">Picture C</button>
        </>
    )
}
export default Bai8;