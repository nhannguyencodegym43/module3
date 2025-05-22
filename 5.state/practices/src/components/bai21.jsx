import React, {useState} from "react";
function Bai21({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSigninForm (event) {
        event.preventDefault();
        onLogin({email, password});
    }
    return (
        <>
            <form onSubmit={handleSigninForm}>
                <input type="email" value={email} placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                <input type="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default Bai21;