import React from "react";
function CountrySelector({handleSelect}) {
    return (
        <>
            <select onChange={(event) => handleSelect(event.target.value)}>
                <option value={null}>Mời chọn</option>
                <option value="VN">Việt Nam</option>
                <option value="US">Mỹ</option>
                <option value="JP">Nhật Bản</option>
            </select>
        </>
    )
}
export default CountrySelector;