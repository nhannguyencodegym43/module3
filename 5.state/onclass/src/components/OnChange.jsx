import React from "react";
function OnChange() {
    function onChange(event) {
        event.preventDefault();
        console.log(event.target.value);
    }
    return (
        <>
            <input type="text" placeholder="Test onChange" onChange={onChange} />
        </>
    )
}
export default OnChange;