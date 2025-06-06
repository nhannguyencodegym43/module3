import React from "react";
import {NavLink, Outlet} from "react-router-dom";
function Me() {
    return (
        <>
            <h2>Họ và tên: </h2>
            <NavLink to="nguyen">Nguyen</NavLink> {" "} |
            <NavLink to="trung">Trung</NavLink> {" "} |
            <NavLink to="nhan">Nhan</NavLink>
            <hr/>
            <Outlet />
        </>
    )
}
export default Me;
