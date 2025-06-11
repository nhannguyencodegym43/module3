import Layout from "../layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function EventDetails () {
    const router = useRouter();
    const { id } = router.query;
    const [event, setEvent] = useState(null);
    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");
        const foundEvent = savedEvents.find((event) => event.id.toString() === id);
        setEvent(foundEvent);
    }, [id])
    function handleLogout() {
        localStorage.removeItem("username");
        router.push("/bai4/login");
    }
    if (!event) return <Layout><p>Event loading or not found...</p></Layout>
    return (
        <>
            <Layout>
                <h2>{event.name}</h2>
                <p>ID: {event.id} - Date: {event.date} - Description: {event.description}</p>
                <button onClick={() => router.back()} style={{marginRight: "1rem"}}>Back</button>
                <button onClick={handleLogout}>Log out</button>
            </Layout>
        </>
    )
}