import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Edit () {
    const router = useRouter();
    const {id} = router.query;
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: ''
    })
    useEffect(() => {
        if (id !== undefined) {
            const savedContacts = JSON.parse(localStorage.getItem("contacts") || "[]");
            const foundContact = savedContacts.find(contact => contact.id.toString() === id);
            if (foundContact) setContact(foundContact);
        }
    }, [id])
    function handleSubmit(e) {
        e.preventDefault();
        const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
        const idx = contacts.findIndex(contact => contact.id.toString() === id);
        if (idx !== -1) {
            contacts[idx] = contact;
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }
        router.push('/bai3/contacts');
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setContact({...contact, [name]: value});
    }
    if (!contact || !contact.id) return <p>No contacts found...</p>;
    return (
        <>
            <h2>Edit the contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Contact name" value={contact.name}
                       onChange={(e) => handleChange(e)}/>
                <input type="email" name="email" placeholder="Contact email" value={contact.email}
                       onChange={(e) => handleChange(e)}/>
                <input type="text" name="phone" placeholder="Contact phone" value={contact.phone}
                       onChange={(e) => handleChange(e)}/>
                <button type="submit">Update</button>
            </form>
        </>
    )
}