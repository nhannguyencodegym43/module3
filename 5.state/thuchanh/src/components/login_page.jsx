import React from "react";
function LoginPage(props) {
    return (
        <>
            <h1>Please log in</h1>
            <button onClick={() => props.setLogin(true)}>Log in</button>
        </>
    )
}
export default LoginPage;