import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Layout from "../components/layout";
import PostList from "../components/post_list";
import AddPostForm from "../components/add_post_form";

export default function Dashboard() {
    const [username, setUsername] = useState("");
    const router = useRouter();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const user = localStorage.getItem("username");
        if (!user) {
            router.push("/");
        } else {
            setUsername(user);
        }
    }, [])
    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem("posts"));
        setPosts(Array.isArray(savedPosts) ? savedPosts : []);
    }, [])
    function addPost (newTitle, newContent) {
        const newPost = {
            id: Date.now(),
            title: newTitle,
            content: newContent
        }
        setPosts([newPost, ...posts]);
        localStorage.setItem("posts", JSON.stringify([newPost, ...posts]));
    }
    return (
        <Layout>
            <PostList posts={posts} />
            <AddPostForm addPost={addPost} />
        </Layout>
    )
}