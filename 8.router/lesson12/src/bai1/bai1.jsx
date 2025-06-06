import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
function Bai1() {
    return (
        <>
            <h1>Trang chủ và điều hướng đơn giản</h1>
            <nav>
                <NavLink to="/home">Home</NavLink> | {" "}
                <NavLink to="/about">About</NavLink> | {" "}
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </>
    )
}
export default Bai1;