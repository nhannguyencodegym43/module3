import Layout from "../layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function ContactDetails () {
    const router = useRouter();
    const { id } = router.query;
    const [contact, setContact] = useState(null);
    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
        const foundContact = savedContacts.find((contact) => contact.id.toString() === id);
        setContact(foundContact);
    }, [id])
    function handleLogout() {
        localStorage.removeItem("username");
        router.push("/bai3/login");
    }
    if (!contact) return <Layout><p>Contact loading or not found...</p></Layout>
    return (
        <>
            <Layout>
                <h2>{contact.name}</h2>
                <p>ID: {contact.id} - Email: {contact.email} - Phone: {contact.phone}</p>
                <button onClick={() => router.back()} style={{marginRight: "1rem"}}>Back</button>
                <button onClick={handleLogout}>Log out</button>
            </Layout>
        </>
    )
}