import React from "react";
import "./spinner.css"
function Spinner() {
    return (
        <>
            <div style={{textAlign: "center", marginTop: "2rem"}}>
                <div className="spinner"></div>
                <div>Đang tải dữ liệu</div>
            </div>
        </>
    )
}
export default Spinner;