import {useState} from "react";
import {useRouter} from "next/router";

export default function LoginPage () {
    const [username, setUsername] = useState('');
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        if (username.trim()) {
            localStorage.setItem("username", username);
            router.push("/dashboard");
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" placeholder="What's your username?" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}