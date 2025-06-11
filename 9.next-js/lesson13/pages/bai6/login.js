import {useState} from "react";
import {useRouter} from 'next/router'

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('username', username);
        if (!(username.trim())) {
            alert("Please enter username!");
        } else {
            router.push('/bai6/books');
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username..." value={username}
                       onChange={e => setUsername(e.target.value)}/>
                <button type="submit" style={{marginLeft: "1rem"}}>Submit</button>
            </form>
        </>
    )
}