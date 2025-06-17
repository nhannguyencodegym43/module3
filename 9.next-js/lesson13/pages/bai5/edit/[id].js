import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Edit () {
    const router = useRouter();
    const { id } = router.query;
    const [note, setNote] = useState({
        title: '',
        content: '',
    });
    useEffect(() => {
        if (id !== undefined) {
            const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
            const foundNote = savedNotes.find((note) => note.id.toString() === id);
            if (foundNote) {
                setNote(foundNote);
            }
        }
    }, [id])
    function handleChange(e) {
        const { name, value } = e.target;
        setNote({...note, [name]: value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        const notes = JSON.parse(localStorage.getItem("notes") || "[]");
        const idx = notes.findIndex((note) => note.id.toString() === id);
        if (idx !== -1) {
            notes[idx] = note;
            localStorage.setItem("notes", JSON.stringify(notes));
        }
        router.push("/bai5/notes");
    }
    if (!note || !note.id) return <p>No note found.</p>;
    return (
        <>
            <h2>Edit the note</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Note title" value={note.title}
                       onChange={(e) => handleChange(e)}/> <br/>
                <textarea name="content" placeholder="Note content" value={note.content}
                          onChange={(e) => handleChange(e)}></textarea> <br/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}