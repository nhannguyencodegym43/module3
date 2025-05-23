import React from "react";
function InputBox(props) {
    return (
        <>
            <input type="text" placeholder="Type something..." value={props.search2} onChange={(e) => props.setSearch2(e.target.value)} />
        </>
    )
}
export default InputBox;