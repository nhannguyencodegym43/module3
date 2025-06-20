import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function EditBook() {
    const {id} = useParams();
    const [book, setBook] = useState({
        title: '',
        author: '',
        publishedYear: 0,
        genre: ''
    });
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchBook();
    }, [id])
    const navigate = useNavigate();
    function handleChange(e) {
        setBook({...book, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!book.title) {
            alert("Please enter a title");
            return;
        }
        await axios.patch(`http://localhost:3001/books/${id}`, {
            ...book,
        })
        navigate("/books-list");
    }
    return (
        <>
            <h2>Edit the book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={book.title} onChange={(e) => handleChange(e)} />
                <input type="text" name="author" placeholder="Author" value={book.author} onChange={(e) => handleChange(e)} />
                <input type="number" name="publishedYear" placeholder="Published Year" value={book.publishedYear} onChange={(e) => handleChange(e)} />
                <input type="text" name="genre" placeholder="Genre" value={book.genre} onChange={(e) => handleChange(e)} />
                <button type="submit">Update</button>
            </form>
        </>
    )
}
export default EditBook;