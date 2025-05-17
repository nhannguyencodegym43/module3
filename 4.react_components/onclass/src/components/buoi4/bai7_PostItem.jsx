import React from "react";
function Bai7_PostItem(props) {
    return (
        <>
            <h1>Tiêu đề: {props.title}</h1>
            <h2>Ngày tháng: {props.date}</h2>
            <p>Đoạn trích: {props.excerpt}</p>
        </>
    )
}
export default Bai7_PostItem;