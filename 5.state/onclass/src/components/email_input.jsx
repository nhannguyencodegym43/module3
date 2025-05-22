import React, {useState} from "react";
function Email_Input() {
    const [email, setEmail] = useState("");
    function handleEmailChange(newEmail) {
        setEmail(newEmail);
    }
    function handleSubmit() {
        alert(`Email đã đăng ký là ${email}`);
    }
    return (
        <>
            <h3>Đăng ký nhận tin</h3>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => handleEmailChange(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Email_Input;