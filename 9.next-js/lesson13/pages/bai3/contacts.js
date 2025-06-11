import {useEffect, useState} from "react";
import Link from "next/link";
import AddContact from "./add_contact";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
        setContacts(Array.isArray(savedContacts) ? savedContacts : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);
    const [showAddContact, setShowAddContact] = useState(false);
    return (
        <>
            <h2>Contacts Manager</h2>
            {showAddContact && (
                <AddContact contacts={contacts} setContacts={setContacts}/>
            )}
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td><Link href={`/bai3/contacts/${contact.id}`}>{contact.name}</Link></td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddContact(true)} style={{marginTop: "1rem"}}>Add new contact</button>
        </>
    )
}
