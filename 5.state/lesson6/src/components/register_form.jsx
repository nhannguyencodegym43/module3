import React from "react";
function RegisterForm(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const user = {name: name, email: email};
        props.addUser(user);
        setName("");
        setEmail("");
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default RegisterForm;