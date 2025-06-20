import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function AddUser() {
    const [user, setUser] = React.useState({
        id: '',
        name: '',
        articles: []
    });
    const [userArticle, setUserArticle] = React.useState("")
    const navigate = useNavigate();
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
    }, []);
    const [showAddArticle, setShowAddArticle] = React.useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user.name) {
            alert("Name is required");
            return;
        }
        if (buttonName === "Add User") {
            const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
            try {
                const newUser = {
                    id: (maxId + 1).toString(),
                    name: user.name,
                    articles: userArticle ? [...user.articles, userArticle] : []
                }
                await axios.post("http://localhost:3001/users", newUser);
                setUsers([...users, newUser]);
                alert("User added successfully");
                setShowAddArticle(true);
                setButtonName("Update");
            } catch (error) {
                console.error("Error adding user:", error);
                alert("Failed to add user");
            }
        } else if (buttonName === "Update") {
            const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
            try {
                await axios.patch(`http://localhost:3001/users/${maxId}`, {
                    name: user.name
                })
                alert("User's name updated successfully");
            } catch (error) {
                console.error("Error updating user:", error);
                alert("Failed to update user's name!");
            }
        }
    }
    const handleSubmitForArticle = async (e) => {
        e.preventDefault();
        if (!userArticle) {
            alert("Article is required");
            return;
        }
        const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
        try {
            await axios.patch(`http://localhost:3001/users/${maxId}`, {
                articles: [...user.articles, userArticle]
            });
            alert("Article added successfully");
            setShowAddArticle(false);
            setButtonName("Add User");
        } catch (error) {
            console.error("Error adding article:", error);
            alert("Failed to add article");
            return;
        }
        navigate('/users');
    }
    const [buttonName, setButtonName] = React.useState("Add User");
    return (
        <>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/><br/>
                <button type="submit">{buttonName}</button>
                <button onClick={() => navigate('/users')}>Cancel</button>
            </form>
            {showAddArticle && (
                <>
                    <form onSubmit={handleSubmitForArticle}>
                        <label>Article:</label>
                        <input type="text" value={userArticle}
                               onChange={(e) => setUserArticle(e.target.value)}/><br/>
                        <button type="submit">Add</button>
                    </form>
                </>
            )}
        </>
    )
}

export default AddUser;