import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Nguyen from "./nguyen.jsx";
import Trung from "./trung.jsx";
import Nhan from "./nhan.jsx";
import "./style.css"
function Bai5() {
    return (
        <>
            <h1>Active Link Highlight</h1>
            <nav>
                <NavLink to="/nguyen" className={({isActive}) => (isActive ? "active-link" : "")}>Nguyen</NavLink> |
                <NavLink to="/trung" className={({isActive}) => (isActive ? "active-link" : "")}>Trung</NavLink> |
                <NavLink to="/nhan" className={({isActive}) => (isActive ? "active-link" : "")}>Nhan</NavLink>
            </nav>
            <Routes>
                <Route path="/nguyen" element={<Nguyen />} />
                <Route path="/trung" element={<Trung />} />
                <Route path="/nhan" element={<Nhan />} />
            </Routes>
        </>
    )
}
export default Bai5;
