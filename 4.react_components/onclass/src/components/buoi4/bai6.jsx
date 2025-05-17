import React from "react";
function Bai6(props) {
    let res = "";
    if (props.isLoggedIn === "true") {
        res = "Đã đăng nhập!"
    } else {
        res = "Chưa đăng nhập!"
    }
    return (
        <>
            <p>The result is: {res}</p>
        </>
    )
}
export default Bai6;