import {useState} from "react";

export default function AddNote({setNotes, notes}) {
    const [noteId, setNoteId] = useState(1);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newNote = {
            id: noteId,
            title: formData.title,
            content: formData.content,
        }
        setNotes([newNote, ...notes]);
        localStorage.setItem("notes", JSON.stringify([newNote, ...notes]));
        setNoteId(prev => prev + 1);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Note title" value={formData.title}
                       onChange={(e) => handleChange(e)}/> <br/>
                <textarea name="content" placeholder="Note content" value={formData.content}
                          onChange={(e) => handleChange(e)}></textarea> <br/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}