import {useEffect, useState} from "react";
import Link from "next/link";
import AddNote from "./add_notes";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
        setNotes(Array.isArray(savedNotes) ? savedNotes : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    const [showAddNote, setShowAddNote] = useState(false);
    return (
        <>
            <h2>Notes List</h2>
            {showAddNote && (
                <AddNote notes={notes} setNotes={setNotes}/>
            )}
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>
                {notes.map((note) => (
                    <tr key={note.id}>
                        <td>{note.id}</td>
                        <td><Link href={`/bai5/notes/${note.id}`}>{note.title}</Link></td>
                        <td>{note.content}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddNote(true)} style={{marginTop: "1rem"}}>Add new note</button>
        </>
    )
}
