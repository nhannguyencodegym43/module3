import React, {useState} from "react";
function Header_Content() {
    const [header, setHeader] = useState("This is the header");
    const [content, setContent] = useState("This is the content");
    return (
        <>
            <h1>{header}</h1>
            <button onClick={() => setHeader("Header changed!")}>Change header</button>
            <p>{content}</p>
            <button onClick={() => setContent("Content changed!")}>Change content</button>
        </>
    )
}
export default Header_Content;