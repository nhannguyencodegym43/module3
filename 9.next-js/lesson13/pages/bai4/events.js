import {useEffect, useState} from "react";
import Link from "next/link";
import AddEvent from "./add_events";

export default function Events() {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");
        setEvents(Array.isArray(savedEvents) ? savedEvents : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);
    const [showAddEvent, setShowAddEvent] = useState(false);
    return (
        <>
            <h2>Events Manager</h2>
            {showAddEvent && (
                <AddEvent events={events} setEvents={setEvents}/>
            )}
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {events.map((event) => (
                    <tr key={event.id}>
                        <td>{event.id}</td>
                        <td><Link href={`/bai4/events/${event.id}`}>{event.name}</Link></td>
                        <td>{event.date}</td>
                        <td>{event.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddEvent(true)} style={{marginTop: "1rem"}}>Add new event</button>
        </>
    )
}
