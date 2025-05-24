import React from "react";
import Content from "./content.jsx";
function Bai1() {
    const [showContent, setShowContent] = React.useState(false);
    return (
        <>
            <h1>Conditional Rendering</h1>
            <button onClick={() => setShowContent(true)}>Show description</button>
            {showContent && <Content />}
        </>
    )
}
export default Bai1;