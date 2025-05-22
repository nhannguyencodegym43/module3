import React from "react";
function Bai18({handleRadios}) {
    return (
        <>
            <input type="radio" value="Cash" name="pay" onClick={(event) => handleRadios(event.currentTarget.value)}/>Cash
            <input type="radio" value="Momo" name="pay" onClick={(event) => handleRadios(event.currentTarget.value)}/>Momo
            <input type="radio" value="Mastercard" name="pay" onClick={(event) => handleRadios(event.currentTarget.value)}/>Mastercard
        </>
    )
}
export default Bai18;