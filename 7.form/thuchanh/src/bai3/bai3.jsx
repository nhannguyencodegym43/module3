import React from "react";
function Bai3() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const regexEmail = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        const regexPassword = /^[a-zA-Z0-9!@#$%^&(+=._/)]{6,}$/;
        if ((!regexEmail.test(formData.email)) || (!regexPassword.test(formData.password))) {
            alert("Please fill in all fields!");
        } else {
            alert("Login successfully!");
        }
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type="text" value={formData.email} name="email" onChange={(e) => handleChange(e)} />
                </label>
                <br />
                <label>Password:
                    <input type="password" value={formData.password} name="password" onChange={(e) => handleChange(e)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai3;