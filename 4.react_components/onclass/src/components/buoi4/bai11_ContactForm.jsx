import React from "react";
function Bai11_ContactForm() {
    return (
        <>
            <h1>Contact Form</h1>
            <form action="#">
                <label htmlFor="name">Tên:</label><br />
                <input type="text" id="name"></input><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email"></input><br />
                <label htmlFor="message">Tin nhắn:</label><br />
                <input type="text" id="message"></input><br />
                <button type="submit">Submit</button><br />
            </form>
        </>
    )
}
export default Bai11_ContactForm;
