import React from "react";
function Bai2() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = React.useState({});
    function handleValidation() {
        const newErrors = {};
        const regexUserName = /^[a-zA-Z]{2,}$/;
        if (!regexUserName.test(formData.username)) newErrors.username = "Username is invalid!";
        const regexEmail = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        if (!regexEmail.test(formData.email)) newErrors.email = "Email is invalid!";
        const regexPassword = /^[a-zA-Z0-9!@#$%^&(+=._/)]{6,}$/;
        if (!regexPassword.test(formData.password)) newErrors.password = "Password is invalid!";
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match!";
        } else if (!regexPassword.test(formData.confirmPassword)) {
            newErrors.confirmPassword = "Confirm password is invalid!";
        }
        return newErrors;
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = handleValidation();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            alert("Sign in successfully!");
        }
    }
    return (
        <>
            <h1>Sign up with validation</h1>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)}/>
                </label>
                {errors.username && (
                    <p style={{color: "red"}}>{errors.username}</p>
                )}
                <br />
                <label>Email
                    <input type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)}/>
                </label>
                {errors.email && (
                    <p style={{color: "red"}}>{errors.email}</p>
                )}
                <br />
                <label>Password
                    <input type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)}/>
                </label>
                {errors.password && (
                    <p style={{color: "red"}}>{errors.password}</p>
                )}
                <br />
                <label>Confirm Password
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={(e) => handleChange(e)}/>
                </label>
                {errors.confirmPassword && (
                    <p style={{color: "red"}}>{errors.confirmPassword}</p>
                )}
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai2;