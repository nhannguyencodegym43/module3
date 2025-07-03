import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function AddBlog() {
    const [blog, setBlog] = React.useState({
        title: "",
        content: "",
        author: "",
        date: ""
    });
    const [blogs, setBlogs] = React.useState([]);
    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:3001/blogs");
            setBlogs(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchBlogs();
    }, []);
    const [errors, setErrors] = React.useState({});
    const navigate = useNavigate();
    function handleChange(e) {
        const { name, value } = e.target;
        setBlog({...blog, [name]: value});
    }
    function handleValidate () {
        const newErrors = {};
        if (
            (!blog.title.trim()) || (!blog.author.trim()) || (!blog.content.trim()) || (!blog.date)
        ) {
            let fillMessage = "Please fill in all needed fields!";
            newErrors.title = fillMessage;
            newErrors.author = fillMessage;
            newErrors.content = fillMessage;
            newErrors.date = fillMessage;
        }
        return newErrors;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = handleValidate();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            setErrors({});
            const maxId = blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) : 0;
            try {
                const newBlog = {
                    id: (maxId + 1).toString(),
                    ...blog,
                }
                await axios.post("http://localhost:3001/blogs", newBlog);
                navigate("/bai3");
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={blog.title} onChange={(e) => handleChange(e)} /> <br/>
                {errors.title && (
                    <p style={{color: "red"}}>{errors.title}</p>
                )}
                <textarea name="content" placeholder="Content" value={blog.content} onChange={(e) => handleChange(e)}></textarea> <br/>
                {errors.content && (
                    <p style={{color: "red"}}>{errors.content}</p>
                )}
                <input type="text" name="author" placeholder="Author" value={blog.author} onChange={(e) => handleChange(e)} /> <br/>
                {errors.author && (
                    <p style={{color: "red"}}>{errors.author}</p>
                )}
                <input type="date" name="date" value={blog.date} onChange={(e) => handleChange(e)} /> <br/>
                {errors.date && (
                    <p style={{color: "red"}}>{errors.date}</p>
                )}
                <button type="submit">Add blog</button>
            </form>
        </>
    )
}
export default AddBlog;