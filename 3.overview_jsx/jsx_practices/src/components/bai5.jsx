import React from "react";
function Bai5() {
    let names = ["Alice", "Bob", "Charlie"];
    return (
        <>
            <ul>
                {
                    names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))
                }
            </ul>
        </>
    )
}
export default Bai5;
