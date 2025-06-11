import Layout from "../layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function NoteDetails () {
    const router = useRouter();
    const { id } = router.query;
    const [note, setNote] = useState(null);
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
        const foundNote = savedNotes.find((note) => note.id.toString() === id);
        setNote(foundNote);
    }, [id])
    function handleLogout() {
        localStorage.removeItem("username");
        router.push("/bai5/login");
    }
    if (!note) return <Layout><p>Note loading or not found...</p></Layout>
    return (
        <>
            <Layout>
                <h2>{note.name}</h2>
                <p>ID: {note.id} - Content: {note.content}</p>
                <button onClick={() => router.back()} style={{marginRight: "1rem"}}>Back</button>
                <button onClick={handleLogout}>Log out</button>
            </Layout>
        </>
    )
}