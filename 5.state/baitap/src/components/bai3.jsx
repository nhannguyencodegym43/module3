import React from "react";
import LoginPage from "./login_page.jsx";
function Bai3() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLogin, setIsLogin] = React.useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        if (
            email === "admin@gmail.com" && password === "Nhanisbetter6533@"
        ) {
            alert("Login successfully!");
            setIsLogin(true);
            setEmail("");
            setPassword("");
        } else {
            alert("Login failed!");
        }
    }
    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {isLogin && <LoginPage setIsLogin={setIsLogin} />}
        </>
    )
}
export default Bai3;