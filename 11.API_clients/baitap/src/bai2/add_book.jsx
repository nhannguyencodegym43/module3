import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function AddBook() {
    const [book, setBook] = React.useState({
        title: '',
        author: '',
        publishedYear: 0,
        genre: ''
    });
    const [books, setBooks] = React.useState([]);
    const navigate = useNavigate();
    function handleChange(e) {
        setBook({...book, [e.target.name]: e.target.value});
    }
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("http://localhost:3001/books");
                setBooks(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchBooks();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!book.title) {
            alert("Please enter a title");
            return;
        }
        const maxId = books.length > 0 ? Math.max(...books.map(b => b.id)) : 0;
        await axios.post("http://localhost:3001/books", {
            id: (maxId + 1).toString(),
            ...book,
        })
        navigate("/books-list");
    }
    return (
        <>
            <h2>Add new book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={book.title} onChange={(e) => handleChange(e)} />
                <input type="text" name="author" placeholder="Author" value={book.author} onChange={(e) => handleChange(e)} />
                <input type="number" name="publishedYear" placeholder="Published Year" value={book.publishedYear} onChange={(e) => handleChange(e)} />
                <input type="text" name="genre" placeholder="Genre" value={book.genre} onChange={(e) => handleChange(e)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default AddBook;