import React from "react";
function WelcomePage(props) {
    return (
        <>
            <h1>Welcome</h1>
            <button onClick={() => props.setLogin(false)}>Log out</button>
        </>
    )
}
export default WelcomePage;