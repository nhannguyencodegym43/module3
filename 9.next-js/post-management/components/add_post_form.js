import {useState} from "react";

export default function AddPostForm({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        if (!title || !content) return;
        addPost(title, content);
        setTitle('');
        setContent('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} name="title" placeholder="Type title..." onChange={(e) => setTitle(e.target.value)} /> <br/>
            <input type="text" value={content} name="content" placeholder="Type content..." onChange={(e) => setContent(e.target.value)} /> <br/>
            <button type="submit">Create post</button>
        </form>
    )
}