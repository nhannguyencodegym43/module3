import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function EditArticle() {
    const [article, setArticle] = React.useState( "");
    const navigate = useNavigate();
    const {index, id} = useParams();
    const [user, setUser] = React.useState({
        id: '',
        name: '',
        articles: []
    });
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/users/${id}`);
                setUser(response.data);
            } catch (error) {
                setUser(null);
            }
        }
        fetchUser();
    }, [id])
    useEffect(() => {
        if (user && user.articles && user.articles[index]) {
            setArticle(user.articles[index]);
        }
    },[user, index])
    const updateArticle = async (e) => {
        e.preventDefault();
        if (!article.trim()) {
            alert("Please enter something");
            return;
        }
        try {
            const updatedArticles = [...user.articles];
            updatedArticles[Number(index)] = article;
            await axios.patch(`http://localhost:3001/users/${id}`, {
                articles: updatedArticles
            })
            setArticle("");
            navigate(`/users/edit/${id}`);
        } catch (error) {
            alert("Error updating article");
        }
    }
    if (user === null) return <p>User not found...</p>
    return (
        <>
            <h3>Update article to new title</h3>
            <form onSubmit={updateArticle}>
                <input type="text" value={article} onChange={e => setArticle(e.target.value)} />
                <button type="submit">Update</button>
                <button type="button" onClick={() => navigate(`/users/edit/${id}`)}>Cancel</button>
            </form>
        </>
    )
}
export default EditArticle;