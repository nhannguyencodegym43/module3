import React from "react";
function Bai4() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const [errors, setErrors] = React.useState({});
    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = handleValidation();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            alert("Login successfully!");
        }
    }
    function handleValidation () {
        const newErrors = {};
        const regexEmail = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        const regexPassword = /^[a-zA-Z0-9!@#$%^&(+=._/)]{6,}$/;
        if (!regexEmail.test(formData.email)) newErrors.email = "Invalid email address!";
        if (!regexPassword.test(formData.password)) newErrors.password = "Invalid password!";
        return newErrors;
    }
    return (
        <>
            <h1>Login with formilk</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type="text" value={formData.email} name="email" onChange={(e) => handleChange(e)} />
                </label>
                {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                )}
                <br />
                <label>Password:
                    <input type="password" value={formData.password} name="password" onChange={(e) => handleChange(e)} />
                </label>
                {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                )}
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai4;