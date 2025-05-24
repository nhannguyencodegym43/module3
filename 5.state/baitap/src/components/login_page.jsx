import React from "react";
function LoginPage(props) {
    function logOut() {
        props.setIsLogin(false);
    }
    return (
        <>
            <h1>Welcome!</h1>
            <button onClick={logOut}>Log out</button>
        </>
    )
}
export default LoginPage;
