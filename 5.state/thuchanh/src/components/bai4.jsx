import React from "react";
import WelcomePage from "./welcome_page.jsx";
import LoginPage from "./login_page.jsx";
function Bai4() {
    const [login, setLogin] = React.useState(false);

    return (
        <>
            {login && <WelcomePage setLogin={setLogin} />}
            {!login && <LoginPage setLogin={setLogin} />}
        </>
    )
}
export default Bai4;