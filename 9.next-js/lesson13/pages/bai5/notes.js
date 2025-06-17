import {useEffect, useState} from "react";
import Link from "next/link";
import AddNote from "./add_notes";
import {useRouter} from "next/router";

export default function Notes() {
    const router = useRouter();
    const [notes, setNotes] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
        setNotes(Array.isArray(savedNotes) ? savedNotes : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
    const [showAddNote, setShowAddNote] = useState(false);
    function handleEdit(id) {
        router.push(`/bai5/edit/${id}`);
    }
    function handleDelete(id) {
        const confirmDelete = confirm("Are you sure?");
        if (confirmDelete) {
            const notes = JSON.parse(localStorage.getItem("notes") || "[]");
            const idx = notes.findIndex((note) => note.id.toString() === id.toString());
            if (idx !== -1) {
                const updatedNote = [...notes];
                updatedNote.splice(idx, 1);
                setNotes(updatedNote);
            }
        }
    }
    const filteredNotes = searchItem ? notes.filter((note) => note.title.toLowerCase().includes(searchItem.toLowerCase())) : notes;
    return (
        <>
            <h2>Notes List</h2>
            {showAddNote && (
                <AddNote notes={notes} setNotes={setNotes}/>
            )}
            <input type="text" name="filtered" placeholder="Type the note to find..." value={searchItem} onChange={e => setSearchItem(e.target.value)}/>
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredNotes.map((note) => (
                    <tr key={note.id}>
                        <td>{note.id}</td>
                        <td><Link href={`/bai5/notes/${note.id}`}>{note.title}</Link></td>
                        <td>{note.content}</td>
                        <td onClick={() => handleEdit(note.id)}><button>Edit</button></td>
                        <td onClick={() => handleDelete(note.id)}><button>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddNote(true)} style={{marginTop: "1rem"}}>Add new note</button>
        </>
    )
}
