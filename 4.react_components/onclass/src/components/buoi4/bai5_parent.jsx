import React from "react";
import Bai5_child from "./Bai5_child";
function Bai5_parent() {
    return (
        <>
            <Bai5_child data="This is the data from the parent component" />
        </>
    )
}
export default Bai5_parent;