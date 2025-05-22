import React from "react";
function Bai7({handleOptions}) {
    return (
        <>
            <select onChange={(event) => handleOptions(event.target.value)}>
                <option value={null}>
                    Mời chọn giới tính
                </option>
                <option value="Nam">
                    Nam
                </option>
                <option value="Nữ">
                    Nữ
                </option>
                <option value="Khác">
                    Khác
                </option>
            </select>
        </>
    )
}
export default Bai7;