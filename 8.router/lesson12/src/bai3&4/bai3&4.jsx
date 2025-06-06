import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Main from "./main.jsx";
import Product from "./product.jsx";
import Detail from "./detail.jsx";
import Contact from "./contact.jsx";
import ErrorPage from "./error.jsx";
function Bai3_4() {
    return (
        <>
            <h1>Nested Routes with Outlet</h1>
            <NavLink to="/main">Main Layout</NavLink>
            <Routes>
                <Route path="/main" element={<Main/>}>
                    <Route path="/main/product" element={<Product/>}/>
                    <Route path="/main/detail" element={<Detail/>}/>
                    <Route path="/main/contact" element={<Contact/>}/>
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}
export default Bai3_4;