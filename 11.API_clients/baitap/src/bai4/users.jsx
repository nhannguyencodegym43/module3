import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Users() {
    const [users, setUsers] = React.useState([]);
    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await axios.delete(`http://localhost:3001/users/${id}`);
                fetchUsers();
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    }
    return (
        <>
            <h1>Users List</h1>
            <Link to="/users/add"><button>Add User</button></Link>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td><Link to={`/users/edit/${user.id}`}><button>Edit</button></Link></td>
                            <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Users;