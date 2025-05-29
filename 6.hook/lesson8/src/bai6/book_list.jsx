import React, {useEffect} from "react";
function BookList() {
    const books = [
        {
            id: 1,
            name: "Web Development",
            detail: "This is a book about web development",
            rating: 4
        },
        {
            id: 2,
            name: "We should be lazy",
            detail: "This is a book telling you that you should be lazy because life is hard",
            rating: 1
        },
        {
            id: 3,
            name: "Agile methodology",
            detail: "This is a book about the method agile in software development",
            rating: 5
        }
    ]
    function findDetail (detail) {
        setShowDetail(true);
        setDetail(detail.detail);
        setRate(detail.rating);
    }
    const [showDetail, setShowDetail] = React.useState(false);
    const [detail, setDetail] = React.useState("");
    const [rate, setRate] = React.useState(0);
    const [showWarning, setShowWarning] = React.useState(false);
    const [warning] = React.useState("This book has low rating!");
    useEffect(() => {
        if (rate < 3) {
            setShowWarning(true);
        } else {
            setShowWarning(false);
        }
    }, [rate]);
    return (
        <>
            <h1>Book list</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id} onClick={() => findDetail(book)}>
                        {book.name}
                    </li>
                ))}
            </ul>
            <h2>Book detail</h2>
            {showDetail && (
                <p>{detail}</p>
            )}
            {showWarning && (
                <p>{warning}</p>
            )}
        </>
    )
}
export default BookList;