import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function AddContact() {
    const [contact, setContact] = React.useState({
        name: "",
        image: "",
        email: "",
        phone: ""
    })
    const [contacts, setContacts] = React.useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts");
                setContacts(response.data);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        }
        fetchContacts();
    }, []);
    return (
        <>
            <h2>Add Contact</h2>
            <form onSubmit={async (e) => {
                e.preventDefault();
                if (!contact.name || !contact.image || !contact.email || !contact.phone) {
                    alert("Please fill in all fields.");
                    return;
                }
                try {
                    const newContact = {
                        id: contacts.length + 1,
                        ...contact,
                    };
                    await axios.post("https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts", newContact);
                    navigate("/contacts");
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            }}>
                <label>Name:</label>
                <input type="text" value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})} required/><br/>
                <label>Image URL:</label>
                <input type="text" value={contact.image} onChange={(e) => setContact({...contact, image: e.target.value})} required/><br/>
                <label>Email:</label>
                <input type="email" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})} required/><br/>
                <label>Phone:</label>
                <input type="tel" value={contact.phone} onChange={(e) => setContact({...contact, phone: e.target.value})} required/><br/>
                <button type="submit">Add Contact</button>
            </form>
        </>
    )
}
export default AddContact;