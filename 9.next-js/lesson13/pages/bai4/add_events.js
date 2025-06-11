import {useState} from "react";

export default function AddEvent({setEvents, events}) {
    const [eventId, setEventId] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        description: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newEvent = {
            id: eventId,
            name: formData.name,
            date: formData.date,
            description: formData.description,
        }
        setEvents([newEvent, ...events]);
        localStorage.setItem("events", JSON.stringify([newEvent, ...events]));
        setEventId(prev => prev + 1);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Event name" value={formData.name}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="date" name="date" value={formData.date} onChange={(e) => handleChange(e)}/> <br/>
                <textarea name="description" placeholder="Event description" value={formData.description}
                          onChange={(e) => handleChange(e)}></textarea> <br/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}