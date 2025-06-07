import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./login.jsx";
import Dashboard from "./dashboard.jsx";
function Bai7() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
            </Routes>
        </>
    )
}
export default Bai7;
