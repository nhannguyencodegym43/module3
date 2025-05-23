import React from "react";
import RegisterForm from "./register_form.jsx";
function RegisterPage() {
    const [registeredUsers, setRegisteredUsers] = React.useState([]);
    function addUser(user) {
        const newUser = {name: user.name, email: user.email};
        setRegisteredUsers(preUsers => [...preUsers, newUser]);
    }
    return (
        <>
            <h1>Register Page</h1>
            <RegisterForm addUser={addUser} />
            <ul>
                {
                    registeredUsers.map((user) => (
                        <li key={user.email}>
                            {user.name}: {user.email}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default RegisterPage;