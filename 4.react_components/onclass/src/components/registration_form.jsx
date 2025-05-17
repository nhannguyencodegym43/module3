import React from "react";
import Input_fields from "./input_fields.jsx";
import Submit_button from "./submit_button.jsx";
import "./registration_form.css"
function RegistrationForm() {
    return (
        <>
            <form className="registration-form">
                <h1>Registration Form</h1>
                <Input_fields type="text" id="user_name" name="User name" />
                <Input_fields type="email" id="email" name="Email" />
                <Input_fields type="password" id="password" name="Password" />
                <Submit_button title="Send"/>
            </form>
        </>
    )
}
export default RegistrationForm;