import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const fetchBlog = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/blogs/${id}`);
            setBlog(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchBlog();
    }, [id])
    if (!blog) return <p>Loading...</p>;
    return (
        <>
            <h2>Blog Details</h2>
            <p>ID: {blog.id}</p>
            <p>Title: {blog.title}</p>
            <p>Content: {blog.content}</p>
            <p>Author: {blog.author}</p>
            <p>Date: {blog.date}</p>
        </>
    )
}
export default BlogDetails;