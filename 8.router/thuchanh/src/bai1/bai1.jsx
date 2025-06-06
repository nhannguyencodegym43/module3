import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";

function Bai1() {
    return (
        <>
            <h1>Thực hành Router 1</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <hr/>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </>
    )
}

export default Bai1;