import React from "react";
function LoginForm() {
    const [inputEmail, setInputEmail] = React.useState("");
    const [inputPassword, setInputPassword] = React.useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (inputEmail.trim() === "" || inputPassword.trim() === "") {
            alert("Please enter a valid account");
            setInputEmail("");
            setInputPassword("");
            return;
        }
        if (inputEmail === "admin@gmail.com") {
            alert("Login successfully");
        } else {
            alert("Login failed");
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Type your email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                <input type="password" placeholder="Type your password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} />
                <button>Submit</button>
            </form>
        </>
    )
}
export default LoginForm;
