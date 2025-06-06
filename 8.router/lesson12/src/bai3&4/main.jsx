import React from "react";
import {NavLink, Outlet} from "react-router-dom";
function Main() {
    return (
        <>
            <h2>Đây là màn Main</h2>
            <nav>
                <NavLink to="product">Product</NavLink> {" "} |
                <NavLink to="detail">Detail</NavLink> {" "} |
                <NavLink to="contact">Contact</NavLink>
            </nav>
            <hr/>
            <Outlet />
        </>
    )
}
export default Main;