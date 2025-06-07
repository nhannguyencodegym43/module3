import React from "react";
import {useNavigate} from "react-router-dom";
function Login({}) {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    })
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if (formData.username && formData.password) {
            if (formData.username === "admin@gmail.com" && formData.password === "letmein") {
                navigate("/home");
            } else {
                alert("Username or password is incorrect.");
            }
        } else {
            alert("Please fill in all fields.");
        }
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    return (
        <>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" value={formData.username} name="username" placeholder="Username" onChange={(e) => handleChange(e)}/>
                <input type="password" value={formData.password} name="password" placeholder="Password" onChange={(e) => handleChange(e)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Login;