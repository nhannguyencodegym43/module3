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
        const time = setTimeout(() => {
            setIsOnline(Math.random() > 0.5);
        }, 1000)
        return () => {
            clearTimeout(time);
        }
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
            {selectedUsers && (
                <div>
                    <h2>Trạng thái của {selectedUsers.name}</h2>
                    <p>
                        {isOnline ? "Đang online" : "Đang offline"}
                    </p>
                </div>
                )
            }
        </>
    )
}
export default Bai1;