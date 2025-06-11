import {useState} from "react";

export default function AddBook({setBooks, books}) {
    const [bookId, setBookId] = useState(1);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newBook = {
            id: bookId,
            title: formData.title,
            author: formData.author,
            description: formData.description,
        }
        setBooks([newBook, ...books]);
        localStorage.setItem("books", JSON.stringify([newBook, ...books]));
        setBookId(prev => prev + 1);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Book title" value={formData.title}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="text" name="author" placeholder="Book author" value={formData.author}
                       onChange={(e) => handleChange(e)}/> <br/>
                <textarea name="description" placeholder="Book description" value={formData.description}
                          onChange={(e) => handleChange(e)}></textarea> <br/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}