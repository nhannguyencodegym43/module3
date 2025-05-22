import React from "react";
import Bai27_Input1 from "./bai27_input1.jsx";
import Bai27_Input2 from "./bai27_input2.jsx";
function Bai27() {
    function showInputChanges (change) {
        console.log(change);
    }
    return (
        <>
            <table border="1">
                <thead>
                <th>Input fields</th>
                </thead>
                <tbody>
                <tr>
                    <Bai27_Input1 showInputChanges={showInputChanges} />
                </tr>
                <tr>
                    <Bai27_Input2 showInputChanges={showInputChanges} />
                </tr>
                </tbody>
            </table>
        </>
    )
}
export default Bai27;