import React from "react";
function Bai1() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (formData.username && formData.email && formData.password && formData.confirmPassword) {
            if (formData.password === formData.confirmPassword) {
                alert("Sign up successfully!");
            } else {
                alert("Passwords don't match!");
            }
        } else {
            alert("Please fill out all fields!");
        }
    }
    return (
        <>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <label>Username
                    <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)}/>
                </label>
                <br />
                <label>Email
                    <input type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)}/>
                </label>
                <br />
                <label>Password
                    <input type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)}/>
                </label>
                <br />
                <label>Confirm Password
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={(e) => handleChange(e)}/>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai1;