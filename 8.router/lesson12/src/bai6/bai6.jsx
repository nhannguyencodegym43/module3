import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Me from "./me.jsx";
import Nguyen from "./nguyen.jsx";
import Trung from "./trung.jsx";
import Nhan from "./nhan.jsx";
import Header from "./header.jsx";
function Bai6() {
    return (
        <>
            <Header />
            <NavLink to="/me">Đây là tôi</NavLink>
            <Routes>
                <Route path="/me" element={<Me />}>
                    <Route path="/me/nguyen" element={<Nguyen />}/>
                    <Route path="/me/trung" element={<Trung />}/>
                    <Route path="/me/nhan" element={<Nhan />}/>
                </Route>
            </Routes>
            <footer className="py-3 my-4 border-top">
                <p className="text-center text-muted">© 2025 Nhân Company, Inc</p>
            </footer>

        </>
    )
}

export default Bai6;
