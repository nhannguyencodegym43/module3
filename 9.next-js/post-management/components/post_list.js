import Link from "next/link";

export default function PostList({ posts }) {
    if (!posts || posts.length === 0) return <p>No posts yet.</p>
    return (
        <div>
            <h3>Post List</h3>
            {posts.map((post) => (
                <div key={post.id} style={{border: "1px solid black", margin: 10, padding: 10}}>
                    <h4>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </h4>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}