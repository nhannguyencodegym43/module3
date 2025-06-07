import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import Profile from "./profile.jsx";
import Info from "./info.jsx";
import Posts from "./posts.jsx";
import Settings from "./settings.jsx";
function Bai8() {
    return (
        <>
            <h1>Tab navigation</h1>
            <NavLink to="/profile">Profile</NavLink> <br/>
            <Routes>
                <Route path="/profile" element={<Profile />}>
                    <Route path="/profile/info" element={<Info />}/>
                    <Route path="/profile/posts" element={<Posts />}/>
                    <Route path="/profile/settings" element={<Settings />}/>
                </Route>
            </Routes>
        </>
    )
}
export default Bai8;