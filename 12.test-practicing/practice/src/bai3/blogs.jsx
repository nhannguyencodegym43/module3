import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
function Blogs() {
    const [blogs, setBlogs] = React.useState([]);
    const [searchItem, setSearchItem] = React.useState("");
    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:3001/blogs");
            setBlogs(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchBlogs();
    }, [])
    if (!blogs) return <p>Loading...</p>;
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            try {
                await axios.delete(`http://localhost:3001/blogs/${id}`);
                fetchBlogs();
            } catch (error) {
                console.error(error);
            }
        }
    }
    const filteredBlogs = blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(searchItem.toLowerCase());
    })
    return (
        <>
            <h1>Blogs Management</h1>
            <Link to="/bai3/add"><button>Add new blog</button></Link>
            <input type="text" placeholder="Search..." value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th colSpan={3}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredBlogs.map((blog) => (
                    <tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.title}</td>
                        <td>{blog.content}</td>
                        <td>{blog.author}</td>
                        <td>{blog.date}</td>
                        <td><Link to={`/bai3/${blog.id}`}><button>View</button></Link></td>
                        <td><Link to={`/bai3/edit/${blog.id}`}><button>Edit</button></Link></td>
                        <td><button onClick={() => handleDelete(blog.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default Blogs;