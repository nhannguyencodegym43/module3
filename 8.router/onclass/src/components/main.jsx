import React from "react";
import {NavLink, Outlet} from "react-router-dom";
function Main() {
    return (
        <>
            <h2>Đây là màn Main</h2>
            <nav>
                <NavLink to="product">Product</NavLink> | {" "}
                <NavLink to="contact">Contact</NavLink> | {" "}
                <hr/>
                <Outlet />
            </nav>
        </>
    )
}
export default Main;