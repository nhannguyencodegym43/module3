import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Books() {
    const [books, setBooks] = React.useState([]);
    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:3001/books");
            setBooks(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchBooks();
    }, [])
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            try {
                await axios.delete(`http://localhost:3001/books/${id}`);
                fetchBooks();
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <h1>Books list</h1>
            <Link to="/books-list/add"><button>Add new book</button></Link>
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published Year</th>
                    <th>Genre</th>
                    <th colSpan={3}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publishedYear}</td>
                        <td>{book.genre}</td>
                        <td><Link to={`/books-list/${book.id}`}><button>View</button></Link></td>
                        <td><Link to={`/books-list/edit/${book.id}`}><button>Edit</button></Link></td>
                        <td><button onClick={() => handleDelete(book.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Books;