import React from "react";
function InputField(props) {
    return (
        <>
            <div className="input-fields">
                <label htmlFor={props.id}>{props.name}: </label>
                <input type={props.type} id={props.id} name={props.name} />
            </div>
        </>
    )
}
export default InputField;