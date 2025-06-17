import {useEffect, useState} from "react";
import Link from "next/link";
import AddBook from "./add_books";
import {useRouter} from "next/router";

export default function Books() {
    const [books, setBooks] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const router = useRouter();
    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem("books") || "[]");
        setBooks(Array.isArray(savedBooks) ? savedBooks : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);
    const [showAddBook, setShowAddBook] = useState(false);
    function handleEdit (id) {
        router.push(`/bai6/edit/${id}`);
    }
    function handleDelete(id) {
        const confirmDelete = confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            const books = JSON.parse(localStorage.getItem("books") || "[]");
            const idx = books.findIndex((book) => book.id.toString() === id.toString());
            if (idx !== -1) {
                const updatedBooks = [...books];
                updatedBooks.splice(idx, 1);
                setBooks(updatedBooks);
            }
        }
    }
    const filteredBooks = searchItem ? books.filter(book => book.title.toLowerCase().includes(searchItem.toLowerCase())) : books;
    return (
        <>
            <h2>Books List</h2>
            {showAddBook && (
                <AddBook books={books} setBooks={setBooks}/>
            )}
            <input type="text" name="filtered" placeholder="Type the book to find..." value={searchItem} onChange={(e) => setSearchItem(e.target.value)}/>
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Description</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredBooks.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td><Link href={`/bai6/books/${book.id}`}>{book.title}</Link></td>
                        <td>{book.author}</td>
                        <td>{book.description}</td>
                        <td onClick={() => handleEdit(book.id)}>Edit</td>
                        <td onClick={() => handleDelete(book.id)}>Delete</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddBook(true)} style={{marginTop: "1rem"}}>Add new book</button>
        </>
    )
}
