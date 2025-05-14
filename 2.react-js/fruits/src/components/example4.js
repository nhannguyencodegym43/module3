import React from "react";
function Example4() {
    let myStyle = {
        color: "green",
        padding: "10px",
        margin: "10px",
        backgroundColor: "red",
        fontSize: "2rem",
    }
    const linkElement = (
        <a href="https://www.google.com" target="_blank">This is the link</a>
    )
    const nestedElement = (
        <div className="container">
            <p style={myStyle}>Đây là nội dung trong thẻ p</p>
            <span>Đây là nội dung trong thẻ span</span>
        </div>
    )
    return (
        <div>
        {nestedElement}
            {linkElement}
        </div>
    )
}
export default Example4;