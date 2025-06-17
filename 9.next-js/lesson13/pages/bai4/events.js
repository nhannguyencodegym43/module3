import {useEffect, useState} from "react";
import Link from "next/link";
import AddEvent from "./add_events";
import {useRouter} from "next/router";

export default function Events() {
    const [events, setEvents] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const router = useRouter();
    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");
        setEvents(Array.isArray(savedEvents) ? savedEvents : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);
    const [showAddEvent, setShowAddEvent] = useState(false);
    function handleEdit(id) {
        router.push(`/bai4/edit/${id}`);
    }
    function handleDelete(id) {
        const confirmDelete = confirm("Are you sure?");
        if (confirmDelete) {
            const events = JSON.parse(localStorage.getItem("events") || "[]");
            const idx = events.findIndex(event => event.id.toString() === id.toString());
            if (idx !== -1) {
                const updatedEvents = [...events];
                updatedEvents.splice(idx, 1);
                setEvents(updatedEvents);
            }
        }
    }
    const filteredEvents = searchItem ? events.filter(event => event.name.toLowerCase().includes(searchItem.toLowerCase())) : events;
    return (
        <>
            <h2>Events Manager</h2>
            {showAddEvent && (
                <AddEvent events={events} setEvents={setEvents}/>
            )}
            <input type="text" name="filtered" value={searchItem} placeholder="Type the event to search..." onChange={(e) => setSearchItem(e.target.value)} />
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredEvents.map((event) => (
                    <tr key={event.id}>
                        <td>{event.id}</td>
                        <td><Link href={`/bai4/events/${event.id}`}>{event.name}</Link></td>
                        <td>{event.date}</td>
                        <td>{event.description}</td>
                        <td><button onClick={() => handleEdit(event.id)}>Edit</button></td>
                        <td><button onClick={() => handleDelete(event.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddEvent(true)} style={{marginTop: "1rem"}}>Add new event</button>
        </>
    )
}
