import {useEffect, useState} from "react";
import Link from "next/link";
import AddBook from "./add_books";

export default function Books() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem("books") || "[]");
        setBooks(Array.isArray(savedBooks) ? savedBooks : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);
    const [showAddBook, setShowAddBook] = useState(false);
    return (
        <>
            <h2>Books List</h2>
            {showAddBook && (
                <AddBook books={books} setBooks={setBooks}/>
            )}
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td><Link href={`/bai6/books/${book.id}`}>{book.title}</Link></td>
                        <td>{book.author}</td>
                        <td>{book.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddBook(true)} style={{marginTop: "1rem"}}>Add new book</button>
        </>
    )
}
