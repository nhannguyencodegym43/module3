import React from "react";

function Bai10_Navbar({links}) {
    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
    return (
        <>
            <div style={style}>
            {
                links.map((link, index) => (
                    <div key={index}>
                        <a href={link.address} target="_blank">{link.title}</a>
                    </div>
                ))
            }
            </div>
        </>
    )
}

export default Bai10_Navbar;
