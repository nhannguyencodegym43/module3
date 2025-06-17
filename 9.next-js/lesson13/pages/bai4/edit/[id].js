import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Edit () {
    const router = useRouter();
    const { id } = router.query;
    const [event, setEvent] = useState({
        name: "",
        date: "",
        description: "",
    });
    useEffect(() => {
        if (id !== undefined) {
            const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");
            const foundEvent = savedEvents.find((event) => event.id.toString() === id);
            if (foundEvent) {
                setEvent(foundEvent);
            }
        }
    }, [id]);
    function handleChange(e) {
        const { name, value } = e.target;
        setEvent({...event, [name]: value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        const events = JSON.parse(localStorage.getItem("events") || "[]");
        const idx = events.findIndex((event) => event.id.toString() === id);
        if (idx !== -1) {
            events[idx] = event;
            localStorage.setItem("events", JSON.stringify(events));
        }
        router.push(`/bai4/events`);
    }
    if (!event || !event.id) return <p>No events found...</p>;
    return (
        <>
            <h2>Edit the event</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Event name" value={event.name}
                       onChange={(e) => handleChange(e)}/> <br/>
                <input type="date" name="date" value={event.date} onChange={(e) => handleChange(e)}/> <br/>
                <textarea name="description" placeholder="Event description" value={event.description}
                          onChange={(e) => handleChange(e)}></textarea> <br/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}