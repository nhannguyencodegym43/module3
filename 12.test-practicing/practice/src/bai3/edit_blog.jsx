import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function EditBlog() {
    const { id } = useParams();
    const [blog, setBlog] = React.useState({
        title: '',
        content: '',
        author: '',
        date: '',
    });
    const fetchBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/blogs/${id}`);
            setBlog(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchBlog();
    }, [id])
    const navigate = useNavigate();
    const [errors, setErrors] = React.useState({});
    function handleChange(e) {
        const {name, value} = e.target;
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
            try {
                await axios.patch(`http://localhost:3001/blogs/${id}`, blog);
                navigate("/bai3");
            } catch (error) {
                setErrors(errors);
            }
        }
    }
    if (!blog) return <p>Loading...</p>;
    return (
        <>
            <h2>Edit the blog</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={blog.title} onChange={(e) => handleChange(e)} /> <br/>
                {errors.title && (
                    <p style={{color: "red"}}>{errors.title}</p>
                )}
                <textarea name="content" value={blog.content} onChange={(e) => handleChange(e)}></textarea> <br/>
                {errors.content && (
                    <p style={{color: "red"}}>{errors.content}</p>
                )}
                <input type="text" name="author" value={blog.author} onChange={(e) => handleChange(e)} /> <br/>
                {errors.author && (
                    <p style={{color: "red"}}>{errors.author}</p>
                )}
                <input type="date" name="date" value={blog.date} onChange={(e) => handleChange(e)} /> <br/>
                {errors.date && (
                    <p style={{color: "red"}}>{errors.date}</p>
                )}
                <button type="submit">Update blog</button>
            </form>
        </>
    )
}
export default EditBlog;