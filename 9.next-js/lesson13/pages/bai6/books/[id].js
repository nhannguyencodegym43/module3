import Layout from "../layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function BookDetails () {
    const router = useRouter();
    const { id } = router.query;
    const [book, setBook] = useState(null);
    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem("books") || "[]");
        const foundBook = savedBooks.find((book) => book.id.toString() === id);
        setBook(foundBook);
    }, [id])
    function handleLogout() {
        localStorage.removeItem("username");
        router.push("/bai6/login");
    }
    if (!book) return <Layout><p>Book loading or not found...</p></Layout>
    return (
        <>
            <Layout>
                <h2>{book.title}</h2>
                <p>ID: {book.id} - Author: {book.author} - Description: {book.description}</p>
                <button onClick={() => router.back()} style={{marginRight: "1rem"}}>Back</button>
                <button onClick={handleLogout}>Log out</button>
            </Layout>
        </>
    )
}