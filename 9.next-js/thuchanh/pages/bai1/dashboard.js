import {useState} from "react";

export default function Dashboard () {
    const [content, setContent] = useState("");
    return (
        <>
            <h1>Welcome to the dashboard!</h1>
            <ul>
                <li onClick={() => setContent("Home")} style={{color: "blue", textDecoration: "underline"}}>Home</li>
                <li onClick={() => setContent("About Us")} style={{color: "blue", textDecoration: "underline"}}>About Us</li>
                <li onClick={() => setContent("Blog")} style={{color: "blue", textDecoration: "underline"}}>Blog</li>
                <li onClick={() => setContent("Log Out")} style={{color: "blue", textDecoration: "underline"}}>Logout</li>
            </ul>
            <h2>{content}</h2>
        </>
    )
}