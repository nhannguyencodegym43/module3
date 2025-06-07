import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./login.jsx";
import Home from "./home.jsx";
function Bai1() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    )
}
export default Bai1;