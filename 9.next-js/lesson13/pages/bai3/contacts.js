import {useEffect, useState} from "react";
import Link from "next/link";
import AddContact from "./add_contact";
import {useRouter} from "next/router";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const router = useRouter();
    useEffect(() => {
        const savedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
        setContacts(Array.isArray(savedContacts) ? savedContacts : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);
    const [showAddContact, setShowAddContact] = useState(false);
    function handleEdit (id) {
        router.push(`/bai3/edit/${id}`);
    }
    function handleDelete(id) {
        const confirmDelete = confirm("Are you sure you want to delete this contact?");
        if (confirmDelete) {
            const idx = contacts.findIndex(contact => contact.id.toString() === id.toString());
            if (idx !== -1) {
                const updatedContacts = [...contacts];
                updatedContacts.splice(idx, 1);
                setContacts(updatedContacts);
            }
        }
    }
    const filteredContacts = searchItem ? contacts.filter(contact => contact.name.toLowerCase().includes(searchItem.toLowerCase())) : contacts;
    return (
        <>
            <h2>Contacts Manager</h2>
            {showAddContact && (
                <AddContact contacts={contacts} setContacts={setContacts}/>
            )}
            <input type="text" name="filtered" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
            <table border="1" style={{marginTop: "1rem"}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredContacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td><Link href={`/bai3/contacts/${contact.id}`}>{contact.name}</Link></td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td><button onClick={() => handleEdit(contact.id)}>Edit</button></td>
                        <td><button onClick={() => handleDelete(contact.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowAddContact(true)} style={{marginTop: "1rem"}}>Add new contact</button>
        </>
    )
}
