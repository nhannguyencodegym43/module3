import React from "react";
function BookDetail(props) {
    return (
        <>
            <h2>Book detail</h2>
            {props.showDetail && (
                <p>{props.detail}</p>
            )}
            {props.showWarning && (
                <p>{props.warning}</p>
            )}
        </>
    )
}
export default BookDetail;