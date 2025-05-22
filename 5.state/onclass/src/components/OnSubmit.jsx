import React from "react";
function OnSubmit() {
    function OnSubmit(event) {
        event.preventDefault();
        alert("OnSubmit");
    }
    return (
        <>
            <form onSubmit={OnSubmit}>
                <input type="text" placeholder="Type anything" />
                <button>Submit</button>
            </form>
        </>
    )
}
export default OnSubmit;