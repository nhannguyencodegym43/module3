import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
function BookDetail() {
    const {id} = useParams();
    const [book, setBook] = React.useState({
        title: '',
        author: '',
        publishedYear: 0,
        genre: '',
    });
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/books/${id}`);
                setBook(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBook();
    }, [id]);
    if (!book || !book.id) {
        return <p>No book found...</p>
    }
    return (
        <>
            <h2>Book detail</h2>
            <p>ID: {book.id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <p>Published Year: {book.publishedYear}</p>
            <p>Genre: {book.genre}</p>
        </>
    )
}
export default BookDetail;