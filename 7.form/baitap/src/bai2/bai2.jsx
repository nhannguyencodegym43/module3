import React from "react";

function Bai2() {
    const [books, setBooks] = React.useState([]);
    const [formData, setFormData] = React.useState({
        title: "",
        quantity: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    const [errors, setErrors] = React.useState({});

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = handleValidation();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            setBooks(prev => [...prev, formData]);
            setFormData({
                title: "",
                quantity: ""
            })
            alert("Book added successfully!");
        }
    }

    function handleValidation() {
        const newErrors = {};
        if (!formData.title) newErrors.title = "Required";
        if (!formData.quantity) newErrors.quantity = "Required";
        return newErrors;
    }

    function handleEdit(id) {
        const book = books[id];
        let newTitle = prompt("Enter new title", book.title);
        let newQuantity = prompt("Enter new quantity", book.quantity);
        if (newTitle && newQuantity) {
            const updateBook = books.map((b, i) => i === id ? {...b, title: newTitle, quantity: newQuantity} : b);
            setBooks(updateBook);
        }

    }

    function handleDelete(id) {
        setBooks(books.filter((_,i) => i !== id));
    }

    return (
        <>
            <h1>Library</h1>
            <form onSubmit={handleSubmit}>
                <label>Tiêu đề:
                    <input type="text" value={formData.title} name="title" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                {errors.title && (
                    <p style={{color: "red"}}>{errors.title}</p>
                )}
                <label>Số lượng:
                    <input type="number" value={formData.quantity} name="quantity" onChange={(e) => handleChange(e)}/>
                </label>
                <br/>
                {errors.quantity && (
                    <p style={{color: "red"}}>{errors.quantity}</p>
                )}
                <button type="submit">Submit</button>
            </form>
            <table border={1}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Number</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) => (
                    <tr key={index}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Bai2;