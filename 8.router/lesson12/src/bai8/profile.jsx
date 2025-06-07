import React from "react";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
function Profile() {
    return (
        <>
            <NavLink to="info">Info</NavLink> | {" "}
            <NavLink to="posts">Posts</NavLink> | {" "}
            <NavLink to="settings">Settings</NavLink>
            <hr/>
            <Outlet />
        </>
    )
}
export default Profile;