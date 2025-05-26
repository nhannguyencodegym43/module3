import React, {useEffect} from "react";
function Bai1() {
    const users = [
        {id: 1, name: "Nguyen Trung Nhan"},
        {id: 2, name: "Nhan Trung Nguyen"},
        {id: 3, name: "Trung Nhan Nguyen"},
    ]
    const [selectedUsers, setSelectedUsers] = React.useState(null);
    const [isOnline, setIsOnline] = React.useState(false);
    useEffect(() => {
        const time = setInterval(() => {
            setIsOnline(Math.random > 0.5);
        })
    }, []);
    return (
        <>
            <h1>List users</h1>
            <ul>
                {users.map((user) => (
                    <li onClick={() => setSelectedUsers(user)} key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
            <h1>Selected Users</h1>
            {selectedUsers && {

            }}
        </>
    )
}
export default Bai1;