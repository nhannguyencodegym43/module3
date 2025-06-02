import React from "react";
function Bai1() {
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = handleValidation();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            alert("Add contact succesfully!");
        }
    }
    const [errors, setErrors] = React.useState({});
    function handleValidation() {
        const newErrors = {};
        const regexEmail = /^[a-zA-Z0-9+]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        const regexPhone = /^(03|05|07|08|09)\d{8}$/;
        if (!regexEmail.test(formData.email)) newErrors.email = "Invalid email";
        if (!regexPhone.test(formData.phone)) newErrors.phone = "Invalid phone number";
        if (!formData.username) newErrors.username = "Required";
        if (!formData.email) newErrors.email = "Required";
        if (!formData.phone) newErrors.phone = "Required";
        return newErrors;
    }
    return (
        <>
            <h1>Contact form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" value={formData.username} name="username" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                {errors.username && (
                    <p style={{ color: "red" }}>{errors.username}</p>
                )}
                <label>Email:
                    <input type="email" value={formData.email} name="email" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                )}
                <label>Phone:
                    <input type="text" value={formData.phone} name="phone" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                {errors.phone && (
                    <p style={{ color: "red" }}>{errors.phone}</p>
                )}
                <label>Message:
                    <textarea value={formData.message} name="message" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai1;