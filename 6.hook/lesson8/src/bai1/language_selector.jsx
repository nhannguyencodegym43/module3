import React from "react";
function LanguageSelector(props) {
    return (
        <>
            <select name="language" id="language" onChange={(e) => props.setNewLanguageCode(e.target.value)}>
                <option value={null}>Mời chọn</option>
                <option value={props.language[1]}>English</option>
                <option value={props.language[0]}>Tiếng Việt</option>
            </select>
        </>
    )
}
export default LanguageSelector;