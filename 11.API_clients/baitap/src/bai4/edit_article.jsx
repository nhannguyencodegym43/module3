import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function EditArticle() {
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
    const [article, setArticle] = React.useState( "");
    const navigate = useNavigate();
    const updateArticle = async () => {
        user.articles[Number(index)] = article;
        await axios.patch(`http://localhost:3001/users/${id}`, {
            articles: user.articles
        })
        setArticle("");
        navigate(`/users/edit/${id}`);
    }
    return (
        <>
            <h3>Update article to new title</h3>
            <form>
                <input type="text" value={article} onChange={e => setArticle(e.target.value)} />
                <button onClick={updateArticle}>Update</button>
                <button onClick={() => navigate(`/users/edit/${id}`)}>Cancel</button>
            </form>
        </>
    )
}
export default EditArticle;