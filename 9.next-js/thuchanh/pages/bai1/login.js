import {useState} from "react";
import {useRouter} from "next/router";
import "./style.css"

export default function LoginPage() {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    })
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        if (!loginData.username.trim() || !loginData.password) {
            alert("Please enter all required fields.");
        } else {
            localStorage.setItem('username', loginData.username);
            router.push('/bai1/dashboard');
        }
    }

    function handleChange(e) {
        const {name, value} = e.target
        setLoginData({...loginData, [name]: value})
    }

    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={loginData.username} name="username" placeholder="Username"
                               onChange={(e) => handleChange(e)}/> <br/>
                        <input type="password" value={loginData.password} name="password" placeholder="Password"
                               onChange={(e) => handleChange(e)}/> <br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}