import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Edit () {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState({
        title: '',
        author: '',
        description: '',
    });
    useEffect(() => {
        if (id !== undefined) {
            const savedBooks = JSON.parse(localStorage.getItem("books") || "[]");
            const foundBook = savedBooks.find(book => book.id.toString() === id);
            if (foundBook) {
                setBook(foundBook);
            }
        }
    }, [id])
    function handleChange(e) {
        const { name, value } = e.target;
        setBook({...book, [name]: value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        const books = JSON.parse(localStorage.getItem("books") || "[]");
        const idx = books.findIndex((book) => book.id.toString() === id);
        if (idx !== -1) {
            books[idx] = book;
            localStorage.setItem("books", JSON.stringify(books));
        }
        router.push("/bai6/books");
    }
    if (!book || !book.id) return <p>Book not found...</p>
    return (
        <>
            <h2>Edit the book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Book title" value={book.title}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="text" name="author" placeholder="Book author" value={book.author}
                       onChange={(e) => handleChange(e)}/> <br/>
                <textarea name="description" placeholder="Book description" value={book.description}
                          onChange={(e) => handleChange(e)}></textarea> <br/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}