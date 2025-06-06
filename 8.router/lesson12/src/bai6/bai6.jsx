import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Me from "./me.jsx";
import Nguyen from "./nguyen.jsx";
import Trung from "./trung.jsx";
import Nhan from "./nhan.jsx";
function Bai6() {
    return (
        <>
            <h2>Đây là header</h2>
            <NavLink to="/me">Đây là tôi</NavLink>
            <Routes>
                <Route path="/me" element={<Me />}>
                    <Route path="/me/nguyen" element={<Nguyen />}/>
                    <Route path="/me/trung" element={<Trung />}/>
                    <Route path="/me/nhan" element={<Nhan />}/>
                </Route>
            </Routes>
            <h2>Đây là footer</h2>
        </>
    )
}
export default Bai6;
