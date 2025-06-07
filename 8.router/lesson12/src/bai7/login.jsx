import React from "react";
import {useNavigate} from "react-router-dom";
function LoginPage({ setIsLoggedIn }) {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (formData.username && formData.password) {
            setIsLoggedIn(true);
            navigate("/dashboard");
        }
    }
    return (
        <>
            <h1>Đăng nhập</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" name="username" value={formData.username} onChange={(e) => handleChange(e)}/>
                <input type="password" placeholder="Password" name="password" value={formData.password} onChange={(e) => handleChange(e)}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default LoginPage;