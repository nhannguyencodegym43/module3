import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
function EditUser() {
    const {id} = useParams();
    const [user, setUser] = React.useState({
        id: '',
        name: '',
        articles: []
    });
    const [userArticle, setUserArticle] = React.useState("");
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/users/${id}`);
                setUser(response.data);
            } catch (error) {
                alert(`Error fetching user details: ${error}`);
            }
        }
        fetchUser();
    }, [id])
    const handleSubmitName = async (e) => {
        e.preventDefault();
        if (!user.name.trim()) {
            alert("Name cannot be empty");
            return;
        }
        try {
            await axios.patch(`http://localhost:3001/users/${id}`, {
                name: user.name,
            })
            alert("Successfully updated user's name");
        } catch (error) {
            console.log(error);
            alert("Error updating user's name");
        }
    }
    const handleSubmitArticle = async (e) => {
        e.preventDefault();
        if (!userArticle.trim()) {
            alert("Article cannot be empty");
            return;
        }
        try {
            const updatedArticles = [...user.articles, userArticle];
            await axios.patch(`http://localhost:3001/users/${id}`, {
                articles: [...updatedArticles],
            })
            setUser({...user, articles: updatedArticles});
            alert("Successfully updated user's articles");
            setUserArticle("");
        } catch (error) {
            console.log(error);
            alert("Error updating user's articles");
        }
    }
    if (user === null) return <p>User not found...</p>
    if (!user.id) return <p>Loading...</p>;
    return (
        <>
            <h2>User detail</h2>
            <p>User ID: {user.id}</p>
            <form onSubmit={handleSubmitName}>
                <input type="text" name="name" value={user.name} onChange={(e) => setUser({...user, [e.target.name]: e.target.value})}/>
                <button type="submit">Update</button>
            </form>
            <form onSubmit={handleSubmitArticle}>
                <input type="text" value={userArticle} onChange={(e) => setUserArticle(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            {user.articles.length === 0 ? (
                <p>No articles found...</p>
            ) : (
                <table border={1}>
                    <thead>
                    <tr>
                        <th>Articles</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.articles.map((article, index) => (
                        <tr key={index}>
                            <td>{article}</td>
                            <td><Link to={`/users/edit/${id}/articles/${index}`}><button>Edit</button></Link></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </>
    )
}
export default EditUser;